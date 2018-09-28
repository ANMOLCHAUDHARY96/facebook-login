<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFbloginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fblogins', function (Blueprint $table) {
            $table->increments('id');
            $table->string('firstname',50);
            $table->string('lastname',50);
            $table->string('username',50);
            $table->string('email',50);
            $table->string('password',50);
            $table->string('gender',50);
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
        Schema::dropIfExists('fblogins');
    }
}
