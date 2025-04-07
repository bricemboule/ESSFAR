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
        Schema::create('sanctions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('classe_id')->constrained()->onDelete('cascade');
            $table->foreignId('etudiant_id')->constrained()->onDelete('cascade');
            $table->foreignId('cour_id')->constrained()->onDelete('cascade');
            $table->foreignId('annee_academique_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['retard', 'absence']);
            $table->date('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sanctions');
    }
};
