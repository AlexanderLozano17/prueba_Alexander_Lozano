<?php

namespace Database\Seeders;

use App\Models\Locacion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Locacion::factory()->count(15)->create();
    }
}
