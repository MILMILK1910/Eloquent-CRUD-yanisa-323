<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
             // เพิ่มข้อมูลการแจ้งเตือน
        'flash' => [
            // ดึงข้อความแจ้งเตือนความสำเร็จจากเซสชัน ถ้าไม่มีให้ใช้ค่า null
            'success' => $request->session()->get('success') ?? null,
            // ดึงข้อความแจ้งเตือนข้อผิดพลาดจากเซสชัน ถ้าไม่มีให้ใช้ค่า null
            'error' => $request->session()->get('error') ?? null,
        ],
        ];
    }
}
