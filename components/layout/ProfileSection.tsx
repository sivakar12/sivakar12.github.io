import Image from 'next/image';

interface ProfileSectionProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProfileSection({ name, imageSrc, imageAlt }: ProfileSectionProps) {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto min-h-[50vh] px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
      {/* Image Side - Height Driven (50vh) */}
      <div className="w-auto flex justify-center shadow-xl rounded-[2.5rem] flex-shrink-0">
        <Image
          className="h-[50vh] w-auto rounded-[2.5rem] object-cover animate-card-entrance"
          style={{ animationDelay: '0ms' }}
          src={imageSrc}
          alt={imageAlt}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Text Side - Standard CSS Typography */}
      <div className="w-full md:flex-1 text-center md:text-left min-w-0 flex flex-col justify-center">
        <h1 className="font-bold leading-tight text-black dark:text-white animate-card-entrance break-words text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
          {name}
        </h1>
      </div>
    </section>
  );
} 