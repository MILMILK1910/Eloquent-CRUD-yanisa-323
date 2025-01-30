<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\OrderDetail;
use App\Models\Order;
use App\Models\ProductStore;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderDetail>
 */
class OrderDetailFactory extends Factory
{
    protected $model = OrderDetail::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'order_id' => Order::factory(),
            'product_id' => ProductStore::factory(),
            'quantity' => $this->faker->numberBetween(1, 100)
        ];
    }
}
