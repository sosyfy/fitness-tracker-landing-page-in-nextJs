
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Twitter from './icons/Twitter';
import Youtube from './icons/Youtube';
import modelImg from "../images/Model.jpg"
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="top-0 h-screen py-5 overflow-x-hidden md:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="relative lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="px-4 mt-24 text-center sm:px-6 md:text-start md:max-w-2xl lg:col-span-6 lg:flex lg:items-center">
                        <div>
                            <h1 className="mt-4 text-2xl font-bold tracking-tight uppercase text-yellow sm:text-3xl">let's take </h1>
                            <h1 className="text-3xl font-bold leading-7 text-black uppercase">challenge</h1>
                            <p className="max-w-xs mx-auto mt-5 text-sm font-semibold leading-5 tracking-tight text-black md:mx-0 sm:mt-10">Upgrade your style staples with this week's most hyped designs Give in to those new-season need-new-clothes cravings with our range of T-shirts, jeans and jackets.</p>
                            <button className="px-10 py-2 mt-5 font-medium tracking-tight uppercase rounded bg-yellow">Get started</button>
                            <div className="w-full mx-auto mt-10 text-center sm:max-w-lg lg:ml-0">
                                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                                    <div className="flex justify-center px-1">
                                       <Facebook />
                                    </div>
                                    <div className="flex justify-center px-1">
                                        <Twitter/>
                                    </div>
                                    <div className="flex justify-center px-1">
                                        <Instagram />
                                    </div>
                                    <div className="flex justify-center px-1">
                                        <Youtube />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <Image src={modelImg} alt="model" className='w-[52rem] mx-auto absolute mt-6 md:top-0 md:left-0 md:right-0 -z-10' />
                    </div>
                    <div className="absolute bottom-0 hidden my-auto -rotate-90 md:block top-16 -right-20">
                      <h3 className='text-2xl font-bold uppercase'>Are you</h3> 
                      <h1 className='font-extrabold text-8xl leading-[3rem] text-yellow'>summar</h1>
                      <h3 className='mt-3 text-xl font-bold uppercase text-end'>ready</h3>
                    </div>
                </div>
            </div>
        </section>

    )
}
