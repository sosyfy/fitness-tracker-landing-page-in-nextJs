import Image from 'next/image'
import left from '../images/Left.png'


export default function About() {
    return (
        <div className="py-2">
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
                    <div className="flex items-center justify-center md:justify-start">
                        <Image className="w-[67%]" src={left} alt={"woman"} />
                    </div>
                    <div className='py-4'>
                        <h1 className="text-2xl font-bold tracking-tight text-center text-gray-900 uppercase md:text-start sm:text-3xl">
                            jamila salim
                        </h1>
                        <h2 className="-my-2 text-xl font-bold tracking-tighter text-center text-gray-900 uppercase md:text-start sm:text-2xl">
                            senior trainer
                        </h2>
                        <h2 className="text-xl font-semibold tracking-tighter text-center text-gray-500 uppercase md:text-start sm:text-2xl">
                            mibs
                        </h2>

                        <p className="max-w-3xl mt-3 text-base font-medium leading-5 text-center text-gray-900 md:text-start">
                            Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age.
                        </p>
                        <p className="max-w-3xl mt-3 text-base font-medium leading-5 text-center text-gray-900 md:text-start">
                            Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age.
                        </p>
                        <p className="max-w-3xl mt-3 text-base font-medium leading-5 text-center text-gray-900 md:text-start">
                            Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age.
                        </p>
                        <button className="px-6 py-2 mt-4 font-medium uppercase rounded text-secondary bg-yellow">book an appointment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
