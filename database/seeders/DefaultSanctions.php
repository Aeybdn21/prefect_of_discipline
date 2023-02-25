<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sanctions;

class DefaultSanctions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sanctions = ["COMMUNITY SERVICE", "EXPEL", "DROP-OUT", "OTHERS"];
        foreach($sanctions as $key => $value) {
            Sanctions::create([
                "description" => $value
            ]);
        }
    }
}
