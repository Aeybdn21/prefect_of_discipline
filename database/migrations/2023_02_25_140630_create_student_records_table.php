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

     protected $connection = 'mysql_1';

    public function up()
    {
        Schema::create('pd_student_records', function (Blueprint $table) {
            $table->id();
            $table->integer('investigation_id');
            $table->string('student_id');
            $table->integer('offense_id')->nullable();
            $table->integer('categorize_id');
            $table->integer('status_id')->nullable();
            $table->text('others')->nullable();
            $table->text('message')->nullable();
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
        Schema::dropIfExists('pd_student_records');
    }
};
