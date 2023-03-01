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
        Schema::create('prefect_investigations', function (Blueprint $table) {
            $table->id();
            $table->string('student_id');
            $table->text('details');
            $table->unsignedBigInteger('violation_id')->index();
            $table->foreign('violation_id')->references('id')->on('prefect_categorize_cases')->onDelete('cascade');
            $table->unsignedBigInteger('investigate_status_id')->index();
            $table->foreign('investigate_status_id')->references('id')->on('prefect_status_investigations')->onDelete('cascade');
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
        Schema::dropIfExists('prefect_investigations');
    }
};
