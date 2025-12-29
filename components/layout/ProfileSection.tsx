import Image from 'next/image';

interface ProfileSectionProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ProfileSection({ name, imageSrc, imageAlt }: ProfileSectionProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center mb-16 md:space-x-8">
      <div className="rounded-5xl overflow-hidden mb-6 md:mb-0 flex-shrink-0">
        <Image
          className="animate-card-entrance"
          style={{ animationDelay: '0ms', width: 'auto', height: '12rem' }}
          src={imageSrc}
          alt={imageAlt}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center break-words px-4 text-black">
        {name}
      </h1>
    </div>
  );
} 