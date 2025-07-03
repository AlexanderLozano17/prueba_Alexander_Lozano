<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Locacion;

class LocacionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Locacion::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->city() . ' ' . $this->faker->word(), 
            'tipo' => $this->faker->randomElement(['Planeta', 'Estación Espacial', 'Dimensión', 'Microverso']),
            'dimension' => $this->faker->word() . ' ' . $this->faker->numberBetween(1, 100),
            'url' => $this->faker->url(),
        ];
    }
}