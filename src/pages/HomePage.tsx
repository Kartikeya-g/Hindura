import Hero from '../components/Hero';
import HomeIntro from '../components/HomeIntro';
import WhatWeBuild from '../components/WhatWeBuild';
import Services from '../components/Services';
import PrefabSpecialisms from '../components/PrefabSpecialisms';
import FeaturedProjects from '../components/FeaturedProjects';
import HinduraLiving from '../components/HinduraLiving';
import CTA from '../components/CTA';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <WhatWeBuild />
      <Services />
      <PrefabSpecialisms />
      <FeaturedProjects />
      <HinduraLiving />
      <CTA />
      <Contact />
    </>
  );
}