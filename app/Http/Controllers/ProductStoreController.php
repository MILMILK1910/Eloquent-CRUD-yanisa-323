<?php

namespace App\Http\Controllers;

use App\Models\ProductStore;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\DB;

class ProductStoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = ProductStore::paginate(20);

        return Inertia::render('Product/Index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Log::info($request->all());

        // Validate the request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'amount' => 'required|numeric|min:100',
            'stock' => 'required|integer|min:0',
        ]);

        try {
            ProductStore::create($validated);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'Failed while creating product. Please try again.');
        }

        return redirect()->route('productstores.index')->with('success', 'Product created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductStore $productStore)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {

        Log::info($id);
        $product = ProductStore::findOrFail($id);

        return Inertia::render('Product/Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        Log::info($request->all());
        try {
        // Validate the request

        $productStore = ProductStore::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'amount' => 'required|numeric',
            'stock' => 'required|integer|min:0',
        ]);

            $productStore->update($validated);
            return redirect()->route('productstores.index')->with('success', 'อัปเดตสินค้าสำเร็จ!');
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return back()->with('error', 'Failed while updating product. Please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $productStore = ProductStore::findOrFail($id);
            $productStore->delete();

            return redirect()->route('productstores.index')->with('success', 'Product deleted successfully');
        } catch (\Exception $e) {
            return redirect()->route('productstores.index')->with('error', 'Failed to delete product: ' . $e->getMessage());
        }
    }
}
