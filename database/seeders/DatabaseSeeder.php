<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        User::factory()->create([
            'name' => 'Administration',
            'email' => 'admin@gmail.com',
        ]);

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'itsmeaeron.21@gmail.com',
        ]);
   


        $this->call([
            DefaultSanctions::class,
            DefaultStatuses::class,
            DefaultValues::class,
            DefaultValueInvestigationStatuses::class,
            DefaultCaseParties::class
        ]);
    }
}
