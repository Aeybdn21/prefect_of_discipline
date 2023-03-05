<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CategorizeCase;

class DefaultValues extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categorize = ["BULLYING", "INJURY", "DRUGS", "VANDALISM", "COUNSELING", "CONFISCATED ITEM", "OTHERS"];
        foreach ($categorize as $key => $value) {
            CategorizeCase::create([
                "description" => $value
            ]);
        }
    }
}
