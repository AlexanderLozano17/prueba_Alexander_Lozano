<?php

namespace Database\Seeders;

use App\Models\Episodio; 
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EpisodioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Episodio::factory()->count(20)->create(); 
    }
}
