import Image from 'next/image'
import data from '@/data'
import { loadHomeContent } from '@/utils/data-loaders'
import HomeCard from '@/components/HomeCard'

export default function Home() {
  const homeContent = loadHomeContent();

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Image
            className="h-48 w-48 rounded-full object-cover mb-6"
            src="/profile.jpeg"
            alt={data.name}
            width={192}
            height={192}
          />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            {data.name}
          </h1>
        </div>

        <div className="space-y-6">
          {homeContent.map((item, index) => (
            <HomeCard key={index} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}