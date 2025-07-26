import React, { useState } from "react";

interface ServiceGalleryProps {
  images: string[];
}

const ServiceGallery: React.FC<ServiceGalleryProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const handleOpen = (img: string) => {
    setActiveImg(img);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setActiveImg(null);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Service image ${idx + 1}`}
            className="rounded-lg w-full object-cover shadow-lg border border-neutral-800 cursor-zoom-in"
            onClick={() => handleOpen(img)}
          />
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 bg-neutral-900/80 text-white rounded-full p-2 shadow-lg hover:bg-primary hover:text-black transition-all"
            aria-label="Cerrar imagen"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={activeImg || images[0]}
            alt="Vista ampliada"
            className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl border border-neutral-700"
          />
        </div>
      )}
    </>
  );
};

export default ServiceGallery;
