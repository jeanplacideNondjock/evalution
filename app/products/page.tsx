"use client";

import { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";

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
    
    const UNSPLASH_ACCESS_KEY = "lm1I1cCb1k-Y1rBWZv_vr0Rwxxx-h9iCWO0b2QXp-go"; // À remplacer
    
    useEffect(() => {
        async function fetchAllProducts() {
            try {
                setLoading(true);
                
                const sources = [
                    {
                        name: "fakestore",
                        url: "https://fakestoreapi.com/products",
                        transform: (data: any) => data.map((p: any) => ({
                            ...p,
                            source: "FakeStore"
                        }))
                    },
                    {
                        name: "dummyjson",
                        url: "https://dummyjson.com/products/category/furniture",
                        transform: (data: any) => data.products.map((p: any, index: number) => ({
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
                            source: "DummyJSON"
                        }))
                    }
                ];
                
                const promises = sources.map(async (source) => {
                    try {
                        const response = await fetch(source.url);
                        if (!response.ok) throw new Error(`${source.name}: ${response.status}`);
                        const data = await response.json();
                        return source.transform(data);
                    } catch (err) {
                        console.warn(`Échec ${source.name}:`, err);
                        return [];
                    }
                });
                
                const results = await Promise.all(promises);
                const allProducts = results.flat();
                const shuffledProducts = [...allProducts].sort(() => Math.random() - 0.5);
                
                setProducts(shuffledProducts);
                
            } catch (err) {
                setError(err instanceof Error ? err.message : "Erreur inconnue");
                console.error("Erreur:", err);
            } finally {
                setLoading(false);
            }
        }
        
        fetchAllProducts();
    }, []);
    
    if (loading) {
        return <div className="p-8 text-center">Chargement des produits...</div>;
    }
    
    if (error) {
        return <div className="p-8 text-center text-red-500">Erreur: {error}</div>;
    }
    
    return <ProductsList products={products} title="Tous nos produits" />;
}