import Image from 'next/image';

interface ProfileSectionProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProfileSection({ name, imageSrc, imageAlt }: ProfileSectionProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center mb-16 md:space-x-8">
      <div className="rounded-2xl overflow-hidden mb-6 md:mb-0 flex-shrink-0">
        <Image
          className="h-48 w-48 object-cover hover:scale-105 transition-transform duration-300 animate-card-entrance"
          style={{ animationDelay: '0ms' }}
          src={imageSrc}
          alt={imageAlt}
          width={192}
          height={192}
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight text-gradient text-center break-words px-4">
        {name}
      </h1>
    </div>
  );
} 