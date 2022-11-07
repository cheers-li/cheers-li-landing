import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheers.li - Connect with your friends</title>
        <meta
          name="description"
          content="By using Cheers.li you can easily invite your friend to a drink or see what your friends are up to at the moment."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
