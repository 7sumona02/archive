import { InstagramIcon } from 'lucide-react'
import { Cormorant_Garamond } from 'next/font/google'
import Link from 'next/link'
import { FaInstagram, FaPinterest } from 'react-icons/fa'

const cor = Cormorant_Garamond({
  weight: '400',
  subsets: ['latin'],
})

const BookCard = ({ image, link, author, title }) => {
  return (
    <div className='book-card relative group cursor-pointer'>
      <div className="w-full h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:opacity-70 transition-all duration-200"
        />
      </div>

      <Link
        href={link}
        target="_blank"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full px-6 py-2 opacity-0 group-hover:opacity-100 transition-all duration-200 flex justify-center items-center"
      >
        Get It
      </Link>

      <div className="pt-4 flex flex-col items-center">
        <div className="text-xs">{author}</div>
        <div className="font-medium">{title}</div>
      </div>
    </div>
  )
}

const Page = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto bg-[#141414] text-[#e3e3e3] flex flex-col items-center gap-20 pt-12 pb-3 overflow-hidden">
      <div className='flex flex-col items-center gap-3'>
        <div className='text-xl'>𓏵</div>
        <div className={`text-4xl ${cor.className}`}>the archive</div>
      </div>

      <div className="mx-auto md:px-15 px-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-15">
          <BookCard
            image="https://i.pinimg.com/736x/d7/2b/21/d72b2135849f6a65a60a3afbe994551b.jpg"
            link="https://amzn.to/4ni6GHK"
            author="OSAMU DAZAI"
            title="No Longer Human"
          />
          <BookCard
            image="https://i.pinimg.com/736x/c2/46/e0/c246e03008db3445f6acc0fa297ae835.jpg"
            link="https://amzn.to/3HJibJq"
            author="OSAMU DAZAI"
            title="The Setting Sun"
          />
          <BookCard
            image="https://m.media-amazon.com/images/I/61bFcGA+v7L._SL1280_.jpg"
            link="https://amzn.to/3K7Ls0U"
            author="OSAMU DAZAI"
            title="School Girl"
          />
          <BookCard
            image="https://m.media-amazon.com/images/I/81bAXZAp-GL._SL1500_.jpg"
            link="https://amzn.to/4m1gFQM"
            author="FYODOR DOSTOYEVSKY"
            title="Crime & Punishment"
          />
          <BookCard
            image="https://m.media-amazon.com/images/I/81aAJMrr3ZL._SL1500_.jpg"
            link="https://amzn.to/3VHDLRz"
            author="FYODOR DOSTOYEVSKY"
            title="Notes from Underground"
          />
          <BookCard
            image="https://m.media-amazon.com/images/I/617WkdpG8xL._SL1200_.jpg"
            link="https://amzn.to/3I7IAR1"
            author="ALBERT CAMUS"
            title="The Stranger"
          />
        </div>
      </div>

      <div className='md:px-15 px-5 max-w-2xl flex flex-col pt-12'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-3'>
            <Link href='https://www.instagram.com/adorexis_/' target='_blank'><FaInstagram className='size-5' /></Link>
            <Link href='https://www.instagram.com/adorexis_/' target='_blank'><FaPinterest className='size-5' /></Link>
          </div>
          <div className='text-sm text-right leading-tight'>© 2025 adorexis. <br /> All rights reserved.</div>
        </div>
        <div className='text-xs pt-6 text-center leading-tight opacity-80'>
          This page contains affiliate links. As an Amazon Associate, I earn from qualifying purchases.
        </div>
        <div className='text-xl text-center pt-3 font-medium'>⋅ ⋅ ⋅</div>
      </div>
    </div>
  )
}

export default Page
