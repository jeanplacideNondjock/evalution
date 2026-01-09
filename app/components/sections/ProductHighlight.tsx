

"use client";
import Image from "next/image";

const ProductHighlight = () => {
  return (
    <section className="bg-[#F7F8F3] ">
      <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between ">

        {/* Text area */}
        <div className="flex flex-col max-w-md gap-4">
          <h2 className="text-3xl font-bold leading-snug">
            Crafted with <br /> excellent material.
          </h2>
          <p className="text-gray-600">
            Donec mattis porta eros, aliquet finibus risus interdum at. 
            Nulla vivethe as it was for us to know what was to be done.
          </p>
          <button className="mt-4 px-6 py-2 rounded-full border border-gray-900">
            Explore
          </button>
        </div>

        {/* Product Cards */}
        <div className="flex items-end gap-8">

          {/* Card 1 */}
          <div className="relative bg-[#E7EFEC] rounded-xl  flex flex-col items-center shadow-sm">
            <Image src="/images/chair1.png" alt="Nordic Chair" width={150} height={150} />
            <p className=" mt-2 text-sm">Nordic CHAIR</p>
            <p className="font-semibold">$50.00</p>
            <button className="absolute `bottom-[-12px] w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
              +
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/images/chair2.png" alt="Kruzo Aero Chair" width={150} height={150} />
            <p className="mt-2 text-sm">Kruzo Aero Chair</p>
            <p className="font-semibold">$78.00</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <Image src="/images/chair3.png" alt="Ergonomic Chair" width={150} height={150} />
            <p className="mt-2 text-sm">Ergonomic Chair</p>
            <p className="font-semibold">$43.00</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
