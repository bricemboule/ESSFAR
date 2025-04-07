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
        Schema::create('ressources', function (Blueprint $table) {
            $table->id();
            $table->string('intitule');
            $table->string('fichier');
            $table->string('chemin');
            $table->foreignId('type_ressource_id')->constrained()->onDelete('cascade');
            $table->foreignId('cour_id')->constrained()->onDelete('cascade');
            $table->foreignId('annee_academique_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ressources');
    }
};
