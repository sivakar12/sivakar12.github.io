import Image from 'next/image'
import { loadHomeContent } from '@/utils/data-loaders'
import HomeCard from '@/components/HomeCard'

export default function Home() {
  const homeContent = loadHomeContent();

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-center mb-16 md:space-x-8">
          <div className="rounded-2xl overflow-hidden mb-6 md:mb-0 flex-shrink-0">
            <Image
              className="h-48 w-48 object-cover hover:scale-105 transition-transform duration-300"
              src="/profile.jpeg"
              alt="Sivakar Sithamparanathan"
              width={192}
              height={192}
            />
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-gradient text-center">
            Sivakar Sithamparanathan
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homeContent.map((item, index) => (
            <HomeCard key={index} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}