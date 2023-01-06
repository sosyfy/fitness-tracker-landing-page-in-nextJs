import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>perfect time to Code.</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Header />
      <main className='h-screen'>
       <Hero />
       <LogoCloud />
      </main>
      {/* <Footer /> */}
    </>
  )
}
