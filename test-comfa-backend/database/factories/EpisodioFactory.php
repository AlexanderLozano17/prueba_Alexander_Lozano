<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Episodio;


class EpisodioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Episodio::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Genera un número de temporada y episodio (ej. S01E01)
        $season = str_pad($this->faker->numberBetween(1, 20), 2, '0', STR_PAD_LEFT);
        $episode = str_pad($this->faker->numberBetween(1, 20), 2, '0', STR_PAD_LEFT);

        // Para un control más robusto de unicidad con el formato SXXEXX dentro del factory:
        // Generar un código y asegurar que no exista antes de devolverlo
        do {
            $s = str_pad($this->faker->numberBetween(1, 10), 2, '0', STR_PAD_LEFT);
            $e = str_pad($this->faker->numberBetween(1, 20), 2, '0', STR_PAD_LEFT);
            $codigo = "S{$s}E{$e}";
        } while (\App\Models\Episodio::where('codigo_episodio', $codigo)->exists()); // Verifica si ya existe

        
        return [
            'nombre' => $this->faker->sentence(3),
            'fecha_emision' => $this->faker->date(),
            'codigo_episodio' => "S{$season}E{$episode}",
            'url' => $this->faker->url(),
        ];
    }
}