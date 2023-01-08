
import Image  from 'next/image';
import mask from "../images/mask.png"

export default function Stats() {
  return (
    <section className="text-white py-10 overflow-hidden mt-6 bg-[#202020] relative">
    <div className="container px-8 py-5 mx-auto">
      <div className="flex flex-wrap -m-4 text-center">
        <div className="w-1/2 p-4 sm:w-1/4">
          <h2 className="text-3xl font-bold text-yellow sm:text-4xl">+22,000</h2>
          <p className="leading-relaxed uppercase">Total client weight loss</p>
        </div>
        <div className="w-1/2 p-4 sm:w-1/4">
          <h2 className="text-3xl font-bold text-yellow sm:text-4xl">800+</h2>
          <p className="leading-relaxed uppercase">positive reviews</p>
        </div>
        <div className="w-1/2 p-4 sm:w-1/4">
          <h2 className="text-3xl font-bold text-yellow title-font sm:text-4xl">88%</h2>
          <p className="leading-relaxed uppercase">success rate </p>
        </div>
        <div className="w-1/2 p-4 sm:w-1/4">
          <h2 className="text-3xl font-bold text-yellow title-font sm:text-4xl">+1,000</h2>
          <p className="leading-relaxed uppercase">transformation in under 2 years</p>
        </div>
      </div>
    </div>
    <div className='absolute top-0 bottom-0 left-0 right-0'>
       <Image src={mask} alt="mask image" />
    </div>
  </section>
  )
}
