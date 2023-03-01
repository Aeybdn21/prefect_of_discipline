<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PrefectStatusInvestigations;

class DefaultValueInvestigationStatuses extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $statuses_investigation = ["Pending", "Decline", "Approved"];
        foreach($statuses_investigation as $key => $value) {
            PrefectStatusInvestigations::create([
                "description" => $value
            ]);
        }        
    }
}
