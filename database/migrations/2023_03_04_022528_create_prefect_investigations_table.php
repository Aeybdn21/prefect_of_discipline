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
            $table->integer('student_num');
            $table->integer('case_parties_id')->nullable();
            $table->text('details_html');
            $table->unsignedBigInteger('categorize_id');
            $table->foreign('categorize_id')->references('id')->on('prefect_categorize_cases')->onDelete('cascade');
            $table->integer('claimable')->nullable()->comment('0 or 1 (optional)');
            $table->string('specify_desc')->nullable()->comment('(optional)');
            $table->unsignedBigInteger('investigate_status_id')->index();
            $table->foreign('investigate_status_id')->references('id')->on('prefect_status_investigations')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     * 
     */
    public function down()
    {
        Schema::dropIfExists('prefect_investigations');
    }
};
