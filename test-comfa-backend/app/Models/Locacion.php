<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Locacion extends Model
{
    use HasFactory;

    protected $table = 'locaciones';

    protected $fillable = [
        'nombre',
        'tipo',
        'dimension',
        'url',
    ];

    /**
     * Obtiene el personaje que tiene esta localización como su origen
     */
    public function residentesOrigen(): HasMany
    {
        return $this->hasMany(Personaje::class, 'origen_id');
    }

    /**
     * Obtiene el personaje que esta actualmente en esta localización
     */
    public function residentesUbicacion(): HasMany
    {
        return $this->hasMany(Personaje::class, 'ubicacion_id');
    }
}
