<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('personajes', function (Blueprint $table) {
            $table->id(); 
            $table->string('nombre'); 
            $table->string('estado'); 
            $table->string('especie');
            $table->string('tipo')->nullable();
            $table->string('genero');
            
            // Relación con 'localizaciones' para 'origin'
            $table->foreignId('origen_id')->nullable()->constrained('locaciones')->onDelete('set null');
            
            // Relación con 'localizaciones' para 'location'
            $table->foreignId('ubicacion_id')->nullable()->constrained('locaciones')->onDelete('set null');

            $table->string('imagen_url')->nullable(); 
            // 'episode' y 'characters' se manejarán con tabla pivote
            $table->string('url')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personajes');
    }
};
