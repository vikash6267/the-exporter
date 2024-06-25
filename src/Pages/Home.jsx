import React from 'react'
import HeroSlider from '../component/Home/HeroSlider'
import SecondSection from '../component/Home/SecondSection'
import AboutSection from '../component/Home/AboutSection'
import ProductSection from '../component/Home/ProductSection'
import SupplyChain from '../component/Home/SupplyChain'
import WhyChoose from '../component/Home/WhyChoose'

function Home() {
  
  return (
    <div>

<div>
<HeroSlider />
<SecondSection />
<AboutSection />
<ProductSection />
<SupplyChain />
<WhyChoose />
</div>

    </div>
  )
}

export default Home