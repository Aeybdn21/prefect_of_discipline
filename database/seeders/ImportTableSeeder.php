<?php
  
namespace Database\Seeders;
  
use Illuminate\Database\Seeder;
use DB;

class ImportTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $registrar_studentlist = public_path('sql/registrar_studentlist.sql');
        $registrar_studentlist_2 = public_path('sql/registrar_studentsection.sql');
        DB::connection('mysql_1')->unprepared(file_get_contents($registrar_studentlist));
        DB::connection('mysql_1')->unprepared(file_get_contents($registrar_studentlist_2));
    }
}