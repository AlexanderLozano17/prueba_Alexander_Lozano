<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Personaje; 
use App\Models\Locacion; 

class PersonajeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Personaje::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $origenId = Locacion::inRandomOrder()->first()?->id ?? Locacion::factory()->create()->id;
        $ubicacionId = Locacion::inRandomOrder()->first()?->id ?? Locacion::factory()->create()->id;

        return [
            'nombre' => $this->faker->firstName() . ' ' . $this->faker->lastName(),
            'estado' => $this->faker->randomElement(['Vivo', 'Muerto', 'Desconocido']),
            'especie' => $this->faker->randomElement(['Humano', 'Alien', 'Robot', 'Animal']),
            'tipo' => $this->faker->optional(0.5)->word(), 
            'genero' => $this->faker->randomElement(['Masculino', 'Femenino', 'Desconocido', 'Sin género']),
            'origen_id' => $origenId,
            'ubicacion_id' => $ubicacionId,
            'imagen_url' => $this->faker->imageUrl(640, 480, 'people', true),
            'url' => $this->faker->url(),
        ];
    }
}