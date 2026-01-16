'use client'


import React from 'react';
import Image from 'next/image';

export interface Product {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  authorImage?: string;
}

interface ProductShowcaseProps {
  products: Product[];
  testimonial: Testimonial;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products, testimonial }) => {
  return (
    <div className="container mx-auto bg-white ">
      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative h-64 w-full bg-gray-200">
              {product.imageSrc ? (
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => {  //  Pas de paramètre 'e' inutilisé
                    console.error(`Image non trouvée: ${product.imageSrc}`);
                  }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  Image de {product.title}
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Testimonials
          </h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Auteur avec photo optionnelle */}
            <div className="`flex-shrink-0 text-center md:text-left">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0 mb-4">
                {testimonial.authorImage ? (
                  <Image
                    src={testimonial.authorImage}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    onError={() => {  //  Pas de paramètre 'e' inutilisé
                      console.error(`Image testimonial non trouvée: ${testimonial.authorImage}`);
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-blue-100 text-blue-600 text-2xl font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>

            {/* Citation */}
            <div className="flex-1">
              <div className="relative">
                <svg 
                  className="absolute -top-3 -left-3 w-8 h-8 text-blue-100" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <blockquote className="text-lg text-gray-700 italic pl-6">
                  {testimonial.quote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;