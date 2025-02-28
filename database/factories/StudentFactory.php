<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Student;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $model = Student::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'student_name' => $this->faker->name,
            'major' => $this->faker->word,
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->numerify(str_repeat('#', 10)),
        ];
    }
}
