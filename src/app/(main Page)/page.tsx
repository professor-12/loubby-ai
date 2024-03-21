import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import Pagination from '@/components/SlideShow1'
import Stats from '@/components/Stats'
import React from 'react'

const Page = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Stats />
      <Pagination/>
    </div>
  )
}

export default Page