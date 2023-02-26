<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sanction_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('studrec_id')->index();
            $table->foreign('studrec_id')->references('id')->on('student_records')->onDelete('cascade');
            $table->unsignedBigInteger('sancat_id')->index();
            $table->foreign('sancat_id')->references('id')->on('sanctions')->onDelete('cascade');
            $table->string('others')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sanction_records');
    }
};