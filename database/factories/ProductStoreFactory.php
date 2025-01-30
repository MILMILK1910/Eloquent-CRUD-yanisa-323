<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ProductStore;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductStore>
 */
class ProductStoreFactory extends Factory
{
    protected $model = ProductStore::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->word(),
            'amount' => $this->faker->randomFloat(2, 10, 1000),
            'stock' => $this->faker->numberBetween(0, 1000),

        ];
    }
}
