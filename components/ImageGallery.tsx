'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ImageGalleryProps {
  images: string[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mb-4">
      <h2 className="text-xl mb-2 text-gray-900">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((url, index) => (
          <div 
            key={index} 
            className="relative aspect-video cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(url)}
          >
            <Image
              src={'/' + url}
              alt={`Screenshot ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && mounted && createPortal(
        <div 
          className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999]"
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full">
            <Image
              src={'/' + selectedImage}
              alt="Full size screenshot"
              fill
              className="object-contain"
              priority
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
} 