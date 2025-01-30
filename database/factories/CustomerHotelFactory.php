<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\CustomerHotel;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CustomerHotel>
 */
class CustomerHotelFactory extends Factory
{
    protected $model = CustomerHotel::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'CustomerName' => $this->faker->name,
            'CustomerEmail' => $this->faker->unique()->safeEmail(),
            'CustomerPhone' => $this->faker->numerify(str_repeat('#', 10)),
            'address' => $this->faker->lexify(),
        ];
    }
}
