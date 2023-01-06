
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Twitter from './icons/Twitter';
import Youtube from './icons/Youtube';
import modelImg from "../images/Model.jpg"
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative top-0 h-screen py-5 overflow-x-hidden md:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="h-full lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="px-2 md:mt-[30%] mt-24 text-center sm:px-6 md:text-start md:max-w-2xl lg:col-span-6 lg:flex lg:items-center">
                        <div>
                            <h1 className="mt-4 text-2xl font-bold tracking-tight uppercase text-yellow sm:text-3xl">let's take </h1>
                            <h1 className="text-3xl font-bold leading-7 text-black uppercase">challenge</h1>
                            <p className="max-w-xs px-4 mx-auto my-3 text-base font-semibold leading-5 tracking-tight text-black md:px-0 md:mx-0">Upgrade your style staples with this week's most hyped designs Give in to those new-season need-new-clothes cravings with our range of T-shirts, jeans and jackets.</p>
                            <button className="px-10 py-2 mt-2 font-semibold tracking-tight uppercase rounded bg-yellow">Get started</button>
                            <div className="w-full mx-auto mt-10 text-center md:mt-24 sm:max-w-lg lg:ml-0">
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
                        <Image src={modelImg} alt="model" className='h-1/2 md:h-full md:w-[64rem] lg:mx-auto bottom-0 md:right-[-20%] lg:right-0 lg:left-0 absolute mt-6  -z-10' />
                    </div>
                    <div className="absolute top-0 bottom-0 hidden my-auto -rotate-90 lg:block -right-[30%] xl:-right-[15%]">
                      <h2 className='text-3xl font-extrabold uppercase'>Are you</h2> 
                      <h1 className='font-extrabold text-8xl leading-[3rem] text-yellow'>summar</h1>
                      <h2 className='mt-3 text-3xl font-extrabold uppercase text-end'>ready</h2>
                    </div>
                </div>
            </div>
        </section>

    )
}
