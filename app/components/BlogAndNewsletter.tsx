

// components/BlogAndNewsletter.tsx
import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
}

interface NewsletterFormData {
  name: string;
  email: string;
}

interface FooterLinkGroup {
  title: string;
  links: string[];
}

interface FurniSection {
  title: string;
  description: string;
}

interface BlogAndNewsletterProps {
  blogPosts: BlogPost[];
  footerLinks: FooterLinkGroup[];
  furniSection: FurniSection;
}

const BlogAndNewsletter: React.FC<BlogAndNewsletterProps> = ({ 
  blogPosts, 
  footerLinks, 
  furniSection 
}) => {
  return (
    <div className="bg-white">
      {/* Recent Blog Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Blog</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {blogPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {post.title}
              </h3>
              <div className="flex items-center text-gray-600 text-sm">
                <span>by {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Newsletter Section */}
        <div className="max-w-md mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Subscribe to Newsletter
          </h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Enter your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Enter your e-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="your@email.com"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Furni. Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{furniSection.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {furniSection.description}
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-800 mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright / Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Furni. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default BlogAndNewsletter;