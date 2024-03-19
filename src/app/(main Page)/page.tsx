import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import Stats from '@/components/Stats'
import React from 'react'

const Page = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Stats/>
    </div>
  )
}

export default Page