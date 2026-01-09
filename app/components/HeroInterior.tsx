


import Image from "next/image";

const features = [
  "Donec mattis porta eros,let aliquet finibus ri",
  "Donec mattis porta eros,let aliquet finibus ri",
  "Donec mattis porta eros,let aliquet finibus ri",
  "Donec mattis porta eros,let aliquet finibus ri",
];

export default function HeroInterior() {
  return (
    <section className="w-full bg-[#f6faf9] py-20 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGES */}
        <div className="relative w-full flex justify-center">
          
          {/* Dotted BG */}
          <div className="absolute -top-8 -left-8 grid grid-cols-6 gap-2">
            {Array(36)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#bcd6d6] opacity-50" />
              ))}
          </div>

          {/* Big Image */}
          <div className="rounded-xl overflow-hidden w-60 h-75 right-20 relative z-10 -top-20">
            <Image
              src="/images/main.png"
              alt="Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Small image top right */}
          <div className="rounded-xl overflow-hidden w-40 h-30 absolute -top-20 right-10 shadow-lg">
            <Image
              src="/images/desk.png"
              alt="Desk interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Small centered card */}
          <div className="rounded-xl bg-white w-50 h-65 absolute bottom-0 right-28 shadow-xl flex items-center justify-center z-20">
            <Image
              src="/images/stool.png"
              alt="Stool"
              width={180}
              height={230}
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            We help you make <br />
            <span className="text-gray-900">Modern Interior Design</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-md">
            Donec mattis porta eros, aliquet finibus risus interdum at.
            Nulla vivethe as it was for us to know what was to be done…
            This small text has to be place here, since this is a placeholder.
            You can also change it.
          </p>

          <div className="grid grid-cols-2 gap-y-3 gap-x-6 mt-6">
            {features.map((text, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2"></div>
                <p className="text-gray-700 text-sm">{text}</p>
              </div>
            ))}
          </div>

          <button className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition">
            Explore
          </button>
        </div>

      </div>
    </section>
  );
}
