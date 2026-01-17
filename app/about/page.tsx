


// app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const teamMembers = [
    { name: 'Sarah Chen', role: 'Lead Designer', img: '/images/team1.jpg' },
    { name: 'Marcus Lee', role: 'Product Architect', img: '/images/team2.jpg' },
    { name: 'Elena Rossi', role: 'Sustainability Expert', img: '/images/team3.jpg' },
    { name: 'David Park', role: 'Client Relations', img: '/images/team4.jpg' },
  ];

  const values = [
    {
      title: 'Sustainable Design',
      description: 'We prioritize eco-friendly materials and ethical production in every piece.',
    },
    {
      title: 'Craftsmanship',
      description: 'Handcrafted details and durable construction define our furniture.',
    },
    {
      title: 'Innovation',
      description: 'Merging traditional techniques with contemporary aesthetics.',
    },
    {
      title: 'Customer‑Centric',
      description: 'Your vision and comfort guide our design process.',
    },
  ];

  return (
    <>
      {/* Hero Section pour About */}
      <section className="bg-[#3D5A49] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Furni.
          </h1>
          <p className="text-center text-lg opacity-90 max-w-2xl mx-auto">
            We create furniture that blends beauty, function, and sustainability—transforming houses into homes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="mb-4 text-gray-700">
                Founded in 2015, Furni began as a small studio of two designers passionate about reimagining living spaces. 
                We believed furniture should tell a story—yours.
              </p>
              <p className="text-gray-700">
                Today, we collaborate with artisans and sustainable workshops worldwide, 
                crafting pieces that are as kind to the planet as they are to your eyes.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/about-story.jpg"
                alt="Our studio"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Redesign Your Space?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let’s create something beautiful together. Browse our collections or schedule a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="bg-[#3D5A49] text-white rounded-3xl px-8 py-3 font-medium hover:bg-[#2d4436] transition">
                View Products
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-amber-400 rounded-3xl px-8 py-3 font-medium text-black hover:bg-amber-500 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;