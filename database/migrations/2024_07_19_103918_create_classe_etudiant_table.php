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
        Schema::create('classe_etudiant', function (Blueprint $table) {
            $table->id();
            $table->foreignId('classe_id')->constrained();
            $table->unsignedInteger('etudiant_id')->constrained();
            $table->string('annee_academique');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('classe_etudiant');
    }
};
