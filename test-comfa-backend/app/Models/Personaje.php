<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Personaje extends Model
{
    use HasFactory;

    protected $table = 'personajes';

    protected $fillable = [
        'nombre',
        'estado',
        'especie',
        'tipo',
        'genero',
        'origen_id',
        'ubicacion_id',
        'imagen_url',
        'url',
    ];

    /**
     * Obtiene el origen de la localizacion de los personajes.
     */
    public function origen(): BelongsTo
    {
        return $this->belongsTo(Locacion::class, 'origen_id');
    }

    /**
     * Obtiene la localizacion de los personajes.
     */
    public function ubicacion(): BelongsTo
    {
        return $this->belongsTo(Locacion::class, 'ubicacion_id');
    }

    /**
     * Episodio que pertenece al personaje
     */
    public function episodios(): BelongsToMany
    {
        return $this->belongsToMany(Episodio::class, 'personaje_episodio');
    }
}
