import Image from "next/image";
import Link from "next/link";

const features = [
  "Donec mattis porta eros, let aliquet finibus risus",
  "Donec mattis porta eros, let aliquet finibus risus",
  "Donec mattis porta eros, let aliquet finibus risus",
  "Donec mattis porta eros, let aliquet finibus risus",
];

export default function HeroInterior() {
  return (
    <section className="w-full bg-[#f6faf9] py-16 md:py-20 px-4 md:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGES */}
        <div className="relative w-full flex justify-center">
          
          {/* Dotted BG */}
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 grid grid-cols-6 gap-1 md:gap-2">
            {Array(36)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#bcd6d6] opacity-50" />
              ))}
          </div>

          {/* Big Image */}
          <div className="rounded-xl overflow-hidden w-48 h-64 md:w-60 md:h-75 right-10 md:right-20 relative z-10 -top-12 md:-top-20">
            <Image
              src="/images/main.png"
              alt="Interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 240px"
            />
          </div>

          {/* Small image top right */}
          <div className="rounded-xl overflow-hidden w-32 h-24 md:w-40 md:h-30 absolute -top-10 right-4 md:-top-20 md:right-10 shadow-lg">
            <Image
              src="/images/desk.png"
              alt="Desk interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 128px, 160px"
            />
          </div>

          {/* Small centered card */}
          <div className="rounded-xl bg-white w-40 h-52 md:w-50 md:h-65 absolute bottom-0 right-16 md:right-28 shadow-xl flex items-center justify-center z-20">
            <Image
              src="/images/stool.png"
              alt="Stool"
              width={144}
              height={184}
              className="object-contain"
              sizes="(max-width: 768px) 144px, 180px"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="px-2 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            We help you make <br />
            <span className="text-gray-900">Modern Interior Design</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-md">
            Donec mattis porta eros, aliquet finibus risus interdum at.
            Nulla vivethe as it was for us to know what was to be done…
            This small text has to be place here, since this is a placeholder.
            You can also change it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mt-6">
            {features.map((text, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">{text}</p>
              </div>
            ))}
          </div>
          
          <Link href="/products">
            <button className="mt-8 px-6 py-3 md:px-8 md:py-3 bg-black text-white rounded-full hover:bg-gray-900 transition font-medium">
              Explore
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}