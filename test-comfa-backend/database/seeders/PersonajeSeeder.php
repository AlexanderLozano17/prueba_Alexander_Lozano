<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Personaje;
use App\Models\Episodio;

class PersonajeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Personaje::factory()->count(10)->create()->each(function ($personaje) {
            // Para cada personaje, asócialo con entre 1 y 5 episodios aleatorios
            $episodios = Episodio::inRandomOrder()->limit(rand(1, 5))->get();
            $personaje->episodios()->attach($episodios);
        });
    }
}
