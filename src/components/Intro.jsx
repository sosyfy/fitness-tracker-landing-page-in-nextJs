import Image from 'next/image'
import cert from '../images/Certifications.png'


export default function Intro() {
    return (
        <div className="py-12">
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tighter text-center text-gray-900 uppercase md:text-start sm:text-3xl">
                            Introducing Angela Lopez
                        </h1>
                        <h2 className="text-lg font-bold tracking-tight text-center text-gray-700 uppercase md:text-start sm:text-base">
                            Wooded ladies she basket season age her uneasy saw
                        </h2>
                        <p className="max-w-3xl mt-3 text-base font-medium leading-5 text-center text-gray-900 md:text-start">
                            Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an.
                        </p>
                        <p className="max-w-3xl mt-3 text-base font-medium leading-5 text-center text-gray-900 md:text-start">
                            Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.
                        </p>

                    </div>
                    <div className="flex justify-center mt-12">
                        <Image className="max" src={cert} alt={"certifications"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
