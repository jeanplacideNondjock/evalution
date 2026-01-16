"use client";

import { useState, useEffect } from "react";
import ProductsList from "../../components/ProductsList"; // Note: "ProductsList" pas "ProductList"

// Interfaces pour les données API
interface FakeStoreProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

interface DummyProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    thumbnail: string;
    rating: number;
}

interface DummyApiResponse {
    products: DummyProduct[];
}

// Notre interface principale
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    source?: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    
     const UNSPLASH_ACCESS_KEY = "lm1I1cCb1k-Y1rBWZv_vr0Rwxxx-h9iCWO0b2QXp-go";
    
    useEffect(() => {
        async function fetchAllProducts() {
            try {
                setLoading(true);
                
                const sources = [
                    {
                        name: "fakestore" as const,
                        url: "https://fakestoreapi.com/products",
                        transform: (data: FakeStoreProduct[]) => data.map((p: FakeStoreProduct) => ({
                            ...p,
                            source: "FakeStore" as const
                        }))
                    },
                    {
                        name: "dummyjson" as const,
                        url: "https://dummyjson.com/products/category/furniture",
                        transform: (data: DummyApiResponse) => 
                            data.products.map((p: DummyProduct, index: number) => ({
                                id: 2000 + index,
                                title: p.title,
                                price: p.price,
                                description: p.description,
                                category: p.category || "meuble",
                                image: p.thumbnail,
                                rating: {
                                    rate: p.rating,
                                    count: Math.floor(Math.random() * 150)
                                },
                                source: "DummyJSON" as const
                            }))
                    }
                ];
                
                const promises = sources.map(async (source) => {
                    try {
                        const response = await fetch(source.url);
                        if (!response.ok) {
                            throw new Error(`${source.name}: ${response.status}`);
                        }
                        const data = await response.json();
                        return source.transform(data);
                    } catch (err) {
                        console.warn(`Échec ${source.name}:`, err);
                        return [] as Product[];
                    }
                });
                
                const results = await Promise.all(promises);
                const allProducts = results.flat();
                const shuffledProducts = [...allProducts].sort(() => Math.random() - 0.5);
                
                setProducts(shuffledProducts);
                
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "Erreur inconnue";
                setError(errorMessage);
                console.error("Erreur:", err);
            } finally {
                setLoading(false);
            }
        }
        
        fetchAllProducts();
    }, []);
    
    if (loading) {
        return (
            <div className="p-8 text-center">
                <div className="text-xl">Chargement des produits...</div>
                <div className="mt-4 text-gray-500 text-sm">
                    Récupération depuis nos fournisseurs
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="p-8 text-center">
                <div className="text-red-500 text-xl mb-2">Erreur</div>
                <div className="text-gray-600">{error}</div>
                <button 
                    onClick={() => window.location.reload()}
                    className="mt-4 px-6 py-2 bg-[#3D5A49] text-white rounded hover:bg-[#2d4739]"
                >
                    Réessayer
                </button>
            </div>
        );
    }
    
    if (products.length === 0) {
        return (
            <div className="p-8 text-center">
                <div className="text-xl mb-2">Aucun produit disponible</div>
                <div className="text-gray-500">
                    Essayez de rafraîchir ou revenez plus tard
                </div>
            </div>
        );
    }
    
    return <ProductsList products={products} title="Tous nos produits" />;
}