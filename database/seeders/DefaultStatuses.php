<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\StudentStatus;

class DefaultStatuses extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $student_statuses = ["DONE"];
        foreach($student_statuses as $key => $value) {
            StudentStatus::create([
                'description' => $value
            ]);
        }
    }
}
