// app/page.tsx
import ProductShowcase from './components/ProductShowcase';
import BlogAndNewsletter from './components/BlogAndNewsletter';
import Navbar from './navbar/Navbar';
import HeroInterior from './components/HeroInterior';
import ProductHighlight from './components/sections/ProductHighlight';
export default function HomePage() {
  // ========== DONNÉES POUR PRODUCTSHOWCASE ==========
  const products = [
    {
      id: 1,
      title: "Nordic Chair",
      description: "Donec mattis porta eros, aliquet finibus risus in. Donecd",
      imageSrc: "/images/nordic.png",
      imageAlt: "Nordic Chair design moderne"
    },
    {
      id: 2,
      title: "Kruzi Aero",
      description: "Donec mattis porta eros, aliquet finibus risus in. Donecd",
      imageSrc: "/images/kruzi.png",
      imageAlt: "Kruzi Aero chaise de bureau"
    },
    {
      id: 3,
      title: "Ergonomic Chair",
      description: "Donec mattis porta eros, aliquet finibus risus in. Donecd",
      imageSrc: "/images/matic.png",
      imageAlt: "Chaise ergonomique"
    }
  ];

  const testimonial = {
    id: 1,
    quote: "Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma",
    author: "Michelle Anna",
    position: "CEO, Co-Founder, XYZ Inc.",
    authorImage: "/images/testimo.png"
  };

  // ========== DONNÉES POUR BLOGANDNEWSLETTER ==========
  const blogPosts = [
    {
      id: 1,
      title: "First Time Home Owner Ideas",
      author: "Nana Ama",
      date: "Nov 18th, 2022"
    },
    {
      id: 2,
      title: "First Time Home Owner Ideas",
      author: "Nana Ama",
      date: "Nov 18th, 2022"
    },
    {
      id: 3,
      title: "First Time Home Owner Ideas",
      author: "Nana Ama",
      date: "Nov 18th, 2022"
    }
  ];

  const footerLinks = [
    {
      title: "Furni.",
      links: ["About us", "Services", "Blog", "Contact us"]
    },
    {
      title: "Support",
      links: ["Support", "Knowledge base", "Live chat", "Privacy Policy"]
    },
    {
      title: "Jobs",
      links: ["Jobs", "Our team", "Leadership"]
    },
    {
      title: "Nordic Chair",
      links: ["Nordic Chair", "Kruzo Aero", "Ergonomic"]
    }
  ];

  const furniSection = {
    title: "Furni.",
    description: "Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the this is a long post for the text. This small text has to be place here, since this is"
  };

  // ========== PAGE COMPLÈTE ==========
  return (
    <div>
      {/* Section 1 : Chaises et témoignages */}
       <HeroInterior/>
       < ProductHighlight/>
      <ProductShowcase 
        products={products} 
        testimonial={testimonial} 
      />
      
      {/* Section 2 : Blog, newsletter et footer */}
     
      <BlogAndNewsletter 
        blogPosts={blogPosts} 
        footerLinks={footerLinks} 
        furniSection={furniSection} 
      />
    </div>
  );
}