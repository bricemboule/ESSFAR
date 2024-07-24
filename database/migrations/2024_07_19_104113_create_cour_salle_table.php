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
        Schema::create('cour_salle', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cour_id')->constrained();
            $table->foreignId('salle_id')->constrained();
            $table->time('debut');
            $table->time('fin');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cour_salle');
    }
};
