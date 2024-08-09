import Image from 'next/image';
import data from '../data';

export default function Home() {
  return (
    <div>
      <section className="flex items-center gap-10 mb-10">
        <Image
          src={'/' + data.photoUrl}
          alt={data.name}
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold mb-2">{data.title}</h2>
          <p>{data.smallBio}</p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p>{data.bigBio}</p>
      </section>
    </div>
  );
}