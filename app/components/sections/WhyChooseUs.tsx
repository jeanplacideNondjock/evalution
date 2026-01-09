

"use client";
import Image from "next/image";
import { MdOutlineLocalShipping, MdSupportAgent, MdAutorenew } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F7F8F3] py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        {/* Text + Features */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600 max-w-md">
            Donec mattis porta eros, aliquet finibus risus interdum at. 
            Nulla vivethe as it was for us to know what was to be done.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-4">

            <div className="flex gap-3">
              <MdOutlineLocalShipping className="text-3xl" />
              <div>
                <h4 className="font-semibold">Fast & Free Shipping</h4>
                <p className="text-sm text-gray-600">
                  Donec mattis porta eros, aliquet finibus risus.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <TbShoppingBag className="text-3xl" />
              <div>
                <h4 className="font-semibold">Easy to Shop</h4>
                <p className="text-sm text-gray-600">
                  Donec mattis porta eros, aliquet finibus risus.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <MdSupportAgent className="text-3xl" />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-sm text-gray-600">
                  Donec mattis porta eros, aliquet finibus risus.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <MdAutorenew className="text-3xl" />
              <div>
                <h4 className="font-semibold">Hassle Free Returns</h4>
                <p className="text-sm text-gray-600">
                  Donec mattis porta eros, aliquet finibus risus.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Image décor */}
        <div className="relative">
          <div className="absolute -left-10 top-10 grid grid-cols-6 gap-2 opacity-40">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="w-2 h-2 rounded-full bg-yellow-400"></span>
            ))}
          </div>

          <Image
            src="/images/room.png"
            alt="Room Interior"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
