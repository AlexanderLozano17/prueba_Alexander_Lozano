<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Episodio extends Model
{
    use HasFactory;

    protected $table = 'episodios';

    protected $fillable = [
        'nombre',
        'fecha_emision',
        'codigo_episodio',
        'url',
    ];

    /**
     * Los personajes que pertenecen al episodio
     */
    public function personajes(): BelongsToMany
    {
        return $this->belongsToMany(Personaje::class, 'personaje_episodio');
    }
}
