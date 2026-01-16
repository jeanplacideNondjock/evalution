
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Interface pour les produits (identique à celle de tes pages)
export interface Product {
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

// Interface pour les articles du panier (produit + quantité)
interface CartItem extends Product {
    quantity: number;
}

// Type du contexte (ce qu'on pourra utiliser partout)
interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    itemCount: number;
}

// Crée le contexte avec une valeur par défaut undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// Le Provider qui va ENVELOPPER ton application
export function CartProvider({ children }: { children: ReactNode }) {
    // État du panier
    const [cart, setCart] = useState<CartItem[]>([]);

    // Ajouter un produit au panier
    const addToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            
            if (existingItem) {
                // Si déjà dans le panier, augmente la quantité
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Sinon, ajoute avec quantité 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Retirer un produit du panier
    const removeFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    // Modifier la quantité d'un produit
    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    // Vider tout le panier
    const clearCart = () => setCart([]);

    // Calcul du total du panier
    const cartTotal = cart.reduce(
        (total, item) => total + (item.price * item.quantity), 
        0
    );

    // Nombre total d'articles (somme des quantités)
    const itemCount = cart.reduce(
        (count, item) => count + item.quantity, 
        0
    );

    // Valeur fournie à tous les composants enfants
    const value: CartContextType = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        itemCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

// Hook personnalisé pour utiliser le contexte
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}