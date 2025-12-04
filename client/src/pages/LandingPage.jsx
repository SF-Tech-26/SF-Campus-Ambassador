import React from 'react'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import Testimonials from '../components/testimonials'
import FAQ from './FAQ'
import Responsibility from './Responsibility'
import Perks from './Perks'
import Team from './OurTeam'

export const LandingPage = () => {
  return (
    <>
    <HomePage />
    <AboutUs />
    <Responsibility />
    <Perks />
    <Testimonials/>
    <FAQ />
    <Team />
    </>
  )
}
