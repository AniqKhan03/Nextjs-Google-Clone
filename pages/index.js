import Head from 'next/head'
import Avatar from '../components/Avatar'
import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value
    console.log(term);

    if (!term) return;

    router.push(`/search?term=${term}`)
  }



  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Head>
        <title>Google Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-md text-gray-700">
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          <Avatar />
        </div>
      </header>

      {/* Form */}
      <form className='flex flex-col items-center mt-33 flex-grow w-4/5 '>
        <Image src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" width={500} height={270} />


      <div className='flex w-full border border-gray-200 mt-5 hover:shadow-md focus-within:shadow-md max-w-md rounded-full px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
        <SearchIcon className='h-5 mr-3 text-gray-500' />
        <input ref={searchInputRef} type="text" className='focus:outline-none flex-grow' />
        <MicrophoneIcon className='h-5 ml-3 text-gray-500'/>
      </div>

      <div className='pt-6 flex flex-col w-1/2 space-y-2 justify-center sm:space-y-0 sm:flex-row sm:space-x-4'>
        <button onClick={search} className='button'>Google Search</button>
        <button onClick={search} className='button'>I'm Feeling Lucky</button>
      </div>
      </form>

      {/* Footer */}
      <Footer />

    </div>
  )
}
