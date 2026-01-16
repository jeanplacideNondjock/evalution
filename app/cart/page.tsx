

"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, itemCount } = useCart();
    
    if (itemCount === 0) {
        return (
            <div className="container mx-auto p-8 text-center min-h-screen flex flex-col items-center justify-center">
                <div className="mb-8">
                    <div className="text-6xl mb-4">🛒</div>
                    <h1 className="text-3xl font-bold mb-4">Votre panier est vide</h1>
                    <p className="text-gray-600 mb-8 max-w-md">
                        Ajoutez des produits pour commencer vos achats. 
                        Découvrez notre sélection de matériel de maison et bureau.
                    </p>
                    <Link 
                        href="/products"
                        className="inline-block bg-[#3D5A49] text-white px-8 py-3 rounded-lg hover:bg-[#2d4739] transition-colors font-medium"
                    >
                        Découvrir nos produits
                    </Link>
                </div>
                
                {/* Suggestions de catégories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl">
                    <Link 
                        href="/products?category=furniture"
                        className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                    >
                        <div className="text-3xl mb-3">🪑</div>
                        <h3 className="font-bold mb-2">Meubles</h3>
                        <p className="text-gray-600 text-sm">Chaises, tables, bureaux</p>
                    </Link>
                    
                    <Link 
                        href="/products?category=decoration"
                        className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                    >
                        <div className="text-3xl mb-3">🖼️</div>
                        <h3 className="font-bold mb-2">Décoration</h3>
                        <p className="text-gray-600 text-sm">Accessoires d`intérieur</p>
                    </Link>
                    
                    <Link 
                        href="/products?category=electronics"
                        className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                    >
                        <div className="text-3xl mb-3">💡</div>
                        <h3 className="font-bold mb-2">Électronique</h3>
                        <p className="text-gray-600 text-sm">Matériel de bureau</p>
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className="container mx-auto p-4 md:p-8 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">Votre panier</h1>
                <p className="text-gray-600">
                    {itemCount} article{itemCount > 1 ? 's' : ''} • {cart.length} produit{cart.length > 1 ? 's' : ''} différent{cart.length > 1 ? 's' : ''}
                </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Liste des produits */}
                <div className="lg:col-span-2">
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="border rounded-lg p-4 flex flex-col sm:flex-row gap-4">
                                {/* Image */}
                                <div className="w-full sm:w-24 h-48 sm:h-24 relative shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover rounded"
                                        sizes="(max-width: 640px) 100vw, 96px"
                                    />
                                </div>
                                
                                {/* Détails produit */}
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg">{item.title}</h3>
                                            <p className="text-gray-600 text-sm">{item.category}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 text-sm"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                    
                                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        {/* Sélecteur de quantité */}
                                        <div className="flex items-center">
                                            <span className="text-gray-700 mr-4">Quantité :</span>
                                            <div className="flex items-center border rounded">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-3 py-1 hover:bg-gray-100"
                                                    aria-label="Diminuer la quantité"
                                                >
                                                    −
                                                </button>
                                                <span className="px-4 py-1 min-w-10 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-1 hover:bg-gray-100"
                                                    aria-label="Augmenter la quantité"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        
                                        {/* Prix */}
                                        <div className="text-right">
                                            <p className="text-gray-600 text-sm">
                                                {item.price.toFixed(2)} € × {item.quantity}
                                            </p>
                                            <p className="font-bold text-lg">
                                                {(item.price * item.quantity).toFixed(2)} €
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Actions panier */}
                    <div className="mt-6 flex justify-between items-center">
                        <Link
                            href="/products"
                            className="text-[#3D5A49] hover:underline font-medium"
                        >
                            ← Continuer mes achats
                        </Link>
                        
                        <button
                            onClick={clearCart}
                            className="text-red-500 hover:text-red-700 font-medium"
                        >
                            Vider le panier
                        </button>
                    </div>
                </div>
                
                {/* Récapitulatif de commande */}
                <div className="lg:col-span-1">
                    <div className="border rounded-lg p-6 sticky top-6">
                        <h2 className="text-xl font-bold mb-6 pb-4 border-b">Récapitulatif</h2>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Sous-total</span>
                                <span>{cartTotal.toFixed(2)} €</span>
                            </div>
                            
                            <div className="flex justify-between">
                                <span className="text-gray-600">Livraison</span>
                                <span className="text-green-600">Gratuite</span>
                            </div>
                            
                            <div className="flex justify-between">
                                <span className="text-gray-600">Taxes</span>
                                <span>Incluses</span>
                            </div>
                            
                            <div className="border-t pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>{cartTotal.toFixed(2)} €</span>
                            </div>
                        </div>
                        
                        <button 
                            className="w-full bg-[#3D5A49] hover:bg-[#2d4739] text-white py-3 rounded-lg font-medium mb-4 transition-colors"
                            onClick={() => alert(`Paiement de ${cartTotal.toFixed(2)}€ simulé!`)}
                        >
                            Procéder au paiement
                        </button>
                        
                        <div className="text-center text-sm text-gray-500">
                            <p>Livraison estimée : 3-5 jours ouvrés</p>
                            <p className="mt-2">Paiement sécurisé</p>
                        </div>
                        
                        {/* Méthodes de paiement */}
                        <div className="mt-6 pt-6 border-t">
                            <p className="text-gray-600 text-sm mb-3">Nous acceptons :</p>
                            <div className="flex gap-3">
                                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                <div className="w-10 h-6 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Code promo (optionnel) */}
                    <div className="mt-4 border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Code promo</h3>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Entrez un code"
                                className="flex-1 border rounded px-3 py-2"
                            />
                            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded">
                                Appliquer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Section recommandations */}
            {cart.length > 0 && (
                <div className="mt-16 pt-8 border-t">
                    <h2 className="text-2xl font-bold mb-6">Vous aimerez aussi</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Ces produits pourraient être récupérés dynamiquement */}
                        <div className="border rounded p-4 text-center">
                            <div className="h-32 bg-gray-100 rounded mb-3"></div>
                            <p className="text-sm font-medium">Protège-cahier</p>
                            <p className="text-green-600 text-sm">14.99 €</p>
                        </div>
                        <div className="border rounded p-4 text-center">
                            <div className="h-32 bg-gray-100 rounded mb-3"></div>
                            <p className="text-sm font-medium">Coussin d`assise</p>
                            <p className="text-green-600 text-sm">24.99 €</p>
                        </div>
                        <div className="border rounded p-4 text-center">
                            <div className="h-32 bg-gray-100 rounded mb-3"></div>
                            <p className="text-sm font-medium">Lampe de bureau</p>
                            <p className="text-green-600 text-sm">39.99 €</p>
                        </div>
                        <div className="border rounded p-4 text-center">
                            <div className="h-32 bg-gray-100 rounded mb-3"></div>
                            <p className="text-sm font-medium">Support PC portable</p>
                            <p className="text-green-600 text-sm">29.99 €</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}