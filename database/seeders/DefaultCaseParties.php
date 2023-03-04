<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CaseParties;

class DefaultCaseParties extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $parties_list = [
            'COMPLAINANT',
            'RESPONDENT',
            'WITNESS'
        ];
        foreach($parties_list as $key => $values) {
            $case_parties = new CaseParties();
            $case_parties->description = $values;
            $case_parties->save();
        }
    }
}
