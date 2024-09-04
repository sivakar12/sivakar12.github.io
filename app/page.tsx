import Image from 'next/image'
import data from '@/data'
import MarkdownText from './utils/MarkdownText'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-shrink-0">
            <Image
              className="h-64 w-64 rounded-full object-cover lg:h-96 lg:w-96 m-4"
              src="/profile.jpeg"
              alt={data.name}
              width={384}
              height={384}
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-800">
                {data.name}
              </span>
            </h1>
            <p className="mt-3 text-xl text-gray-700 sm:mt-5 sm:text-2xl lg:text-xl xl:text-2xl">
              {data.title}
            </p>
          </div>
        </div>

        <article className="mt-16 text-black mx-auto">
          <MarkdownText markdownContent={data.bigBio} />
        </article>
      </div>
    </main>
  )
}