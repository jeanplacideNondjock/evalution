"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from 'next/image'
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

interface ProductsListProps {
    products: Product[];
    title?: string;
    showFilters?: boolean;
}

type SortOrder = 'az' | 'za' | 'price-asc' | 'price-desc' | 'none';

export default function ProductsList({ 
    products, 
    title = "Nos Produits",
    showFilters = true 
}: ProductsListProps) {
    const { addToCart } = useCart();
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortOrder, setSortOrder] = useState<SortOrder>('none');
    const [searchTerm, setSearchTerm] = useState('');
    
    // Filtre par catégorie
    const filteredByCategory = selectedCategory === 'all' 
        ? products 
        : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    
    // Filtre par recherche
    const filteredBySearch = searchTerm === ''
        ? filteredByCategory
        : filteredByCategory.filter(p =>
            p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
    // Tri
    const sortedProducts = [...filteredBySearch];
    if (sortOrder === 'az') {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'za') {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    
    // Catégories uniques
    const categories = ['all', ...new Set(products.map(p => p.category))];
    
    // Gestionnaires d'événements typés
    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };
    
    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === 'az' || value === 'za' || value === 'price-asc' || value === 'price-desc' || value === 'none') {
            setSortOrder(value);
        }
    };
    
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">{title} ({sortedProducts.length})</h1>
            
            {showFilters && (
                <div className="mb-8 space-y-6">
                    {/* Barre de recherche */}
                    <div className="max-w-xl">
                        <input
                            type="text"
                            placeholder="Rechercher un produit..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3D5A49] focus:border-transparent"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    
                    {/* Filtres */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">Catégorie :</span>
                            <select
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                                className="border rounded p-2"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>
                                        {cat === 'all' ? 'Toutes' : cat}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <span className="text-gray-600">Trier par :</span>
                            <select
                                value={sortOrder}
                                onChange={handleSortChange}
                                className="border rounded p-2"
                            >
                                <option value="none">Par défaut</option>
                                <option value="az">Nom A → Z</option>
                                <option value="za">Nom Z → A</option>
                                <option value="price-asc">Prix croissant</option>
                                <option value="price-desc">Prix décroissant</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Liste des produits */}
            {sortedProducts.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500">Aucun produit trouvé</p>
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            className="mt-2 text-sm text-[#3D5A49] hover:underline"
                        >
                            Effacer la recherche
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sortedProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
                            <Link href={`/products/${product.id}`}>
                                <div className="relative h-48 w-full mb-3">
                                    <Image
                                 src={product.image}
                                 alt={product.title}
                                   width={300}
                                     height={192}
                                   className="w-full h-48 object-cover rounded"
                                   unoptimized={true}
                               />
                                </div>
                            </Link>
                            
                            <Link href={`/products/${product.id}`} className="block">
                                <h3 className="font-semibold text-lg mb-1 line-clamp-2 hover:text-[#3D5A49]">
                                    {product.title}
                                </h3>
                            </Link>
                            
                            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                                {product.description}
                            </p>
                            
                            <div className="mb-3">
                                <span className="font-bold text-green-600 text-lg">
                                    {product.price.toFixed(2)} €
                                </span>
                            </div>
                            
                            <div className="flex justify-between items-center mb-4">
                                <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                                    {product.category}
                                </span>
                                <div className="flex items-center">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-sm ml-1">
                                        {product.rating.rate} ({product.rating.count})
                                    </span>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => addToCart(product)}
                                className="w-full bg-[#3D5A49] hover:bg-[#2d4739] text-white py-2 rounded transition-colors"
                            >
                                Ajouter au panier
                            </button>
                            
                            <Link
                                href={`/products/${product.id}`}
                                className="block text-center text-[#3D5A49] hover:underline mt-2 text-sm"
                            >
                                Voir détails
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}