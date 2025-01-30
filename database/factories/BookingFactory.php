<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Booking;
use App\Models\Room;
use App\Models\CustomerHotel;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'amount' => $this->faker->numberBetween(300, 10000),
            'room_id' => Room::factory(),
            'customer_id' => CustomerHotel::factory(),
            
        ];
    }
}
