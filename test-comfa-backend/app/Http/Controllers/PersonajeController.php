<?php

namespace App\Http\Controllers;

use App\Models\Personaje; 
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException; 

class PersonajeController extends Controller
{
    /**
     * Muestra una lista de todos los personajes.
     */
    public function index()
    {
        // Obtiene todos los personajes con sus relaciones de origen y ubicación
        $personajes = Personaje::with(['origen', 'ubicacion'])->get();
        return response()->json($personajes);
    }

    /**
     * Almacena un nuevo personaje en la base de datos.
     */
    public function store(Request $request)
    {// Para manejar errores de validación
        try {
            $validatedData = $request->validate([
                'nombre' => 'required|string|max:255',
                'estado' => 'required|string|max:255',
                'especie' => 'required|string|max:255',
                'tipo' => 'nullable|string|max:255',
                'genero' => 'required|string|max:255',
                'origen_id' => 'nullable|exists:localizaciones,id', 
                'ubicacion_id' => 'nullable|exists:localizaciones,id',
                'imagen_url' => 'nullable|url|max:255',
                'url' => 'nullable|url|max:255',
            ]);

            $personaje = Personaje::create($validatedData);
            return response()->json($personaje, 201); 

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al crear el personaje',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Muestra un personaje específico por su ID.
     */
    public function show(string $id)
    {
        $personaje = Personaje::with(['origen', 'ubicacion', 'episodios'])->find($id);

        if (!$personaje) {
            return response()->json(['message' => 'Personaje no encontrado'], 404);
        }

        return response()->json($personaje);
    }

    /**
     * Actualiza un personaje existente en la base de datos.
     */
    public function update(Request $request, string $id)
    {
        $personaje = Personaje::find($id);

        if (!$personaje) {
            return response()->json(['message' => 'Personaje no encontrado'], 404);
        }

        try {
            $validatedData = $request->validate([
                'nombre' => 'sometimes|required|string|max:255',
                'estado' => 'sometimes|required|string|max:255',
                'especie' => 'sometimes|required|string|max:255',
                'tipo' => 'nullable|string|max:255',
                'genero' => 'sometimes|required|string|max:255',
                'origen_id' => 'nullable|exists:localizaciones,id',
                'ubicacion_id' => 'nullable|exists:localizaciones,id',
                'imagen_url' => 'nullable|url|max:255',
                'url' => 'nullable|url|max:255',
            ]);

            $personaje->update($validatedData);
            return response()->json($personaje);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Error de validación',
                'errors' => $e->errors()
            ], 422);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al actualizar el personaje',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Elimina un personaje de la base de datos.
     */
    public function destroy(string $id)
    {
        $personaje = Personaje::find($id);

        if (!$personaje) {
            return response()->json(['message' => 'Personaje no encontrado'], 404);
        }

        $personaje->delete();
        return response()->json(['message' => 'Personaje eliminado exitosamente'], 200); // 200 OK (o 204 No Content)
    }

    /**
     * Método adicional para buscar personajes por cualquier tipo de dato.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function buscar(Request $request)
    {
        $query = Personaje::query();
        $search = $request->input('q'); // Obtiene el término de búsqueda de la URL (ej. ?q=rick)

        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('nombre', 'LIKE', '%' . $search . '%')
                  ->orWhere('estado', 'LIKE', '%' . $search . '%')
                  ->orWhere('especie', 'LIKE', '%' . $search . '%')
                  ->orWhere('tipo', 'LIKE', '%' . $search . '%')
                  ->orWhere('genero', 'LIKE', '%' . $search . '%')
                  ->orWhere('imagen_url', 'LIKE', '%' . $search . '%')
                  ->orWhere('url', 'LIKE', '%' . $search . '%');
            });
        }

        // Carga las relaciones de origen y ubicación para la respuesta
        $personajes = $query->with(['origen', 'ubicacion'])->get();

        if ($personajes->isEmpty()) {
            return response()->json(['message' => 'No se encontraron personajes que coincidan con la búsqueda'], 404);
        }

        return response()->json($personajes);
    }
}