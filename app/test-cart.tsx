// app/test-cart/page.tsx
"use client";

import { useCart } from "./context/CartContext";

export default function TestCart() {
    const { itemCount, addToCart } = useCart();
    
    const testProduct = {
        id: 1,
        title: "Test",
        price: 100,
        description: "Test",
        category: "test",
        image: "https://via.placeholder.com/150",
        rating: { rate: 5, count: 100 }
    };
    
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Test Panier</h1>
            <p>itemCount: {itemCount}</p>
            <button 
                onClick={() => addToCart(testProduct)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Ajouter produit test
            </button>
            <p className="mt-4 text-sm text-gray-500">
                Si itemCount augmente, le panier fonctionne
            </p>
        </div>
    );
}