"use client";
import React from "react";

interface ServiceGalleryCarouselProps {
  images: string[];
}

const ServiceGalleryCarousel: React.FC<ServiceGalleryCarouselProps> = ({ images }) => {
  const [selected, setSelected] = React.useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-start gap-4">
      <div className="w-full max-w-[712px] aspect-video bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl border border-neutral-700">
        <img
          src={images[selected]}
          alt={`Imagen ${selected + 1}`}
          className="object-contain w-full h-full transition-all duration-500 scale-100 hover:scale-105"
          style={{ filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))' }}
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 mt-2 justify-center">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`w-16 h-12 rounded-xl border-2 transition-all duration-200 overflow-hidden focus:outline-none shadow-md ${
                selected === idx
                  ? "border-primary ring-2 ring-primary scale-105 bg-neutral-800"
                  : "border-neutral-700 hover:border-primary/60 hover:scale-105 bg-neutral-900/60"
              }`}
              onClick={() => setSelected(idx)}
              aria-label={`Ver imagen ${idx + 1}`}
              style={{ boxShadow: selected === idx ? '0 2px 16px 0 #00e6d8aa' : '0 1px 6px 0 #0006' }}
            >
              <img
                src={img}
                alt={`Miniatura ${idx + 1}`}
                className="object-cover w-full h-full transition-all duration-300 opacity-80 hover:opacity-100"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceGalleryCarousel;
