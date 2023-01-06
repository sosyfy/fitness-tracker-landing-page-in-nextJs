import Image from 'next/image'
import logo1 from "../images/mentions1.png"
import logo2 from "../images/mentions2.png"
import logo3 from "../images/mentions3.png"
import logo4 from "../images/mentions4.png"
import logo5 from "../images/mentions5.png"

export default function LogoCloud() {
  return (
    <div className="bg-gray-50">
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <p className="text-base font-semibold text-center text-gray-500">
        Featured and mentioned on
      </p>
      <div className="grid items-center grid-cols-2 gap-8 mt-6 md:grid-cols-6 lg:grid-cols-5">
        <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <Image className="h-10" src={logo1} alt="Tuple" />
        </div>
        <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <Image className="h-9" src={logo2} alt="Tuple" />
        </div>
        <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <Image className="h-9" src={logo3} alt="Tuple" />
        </div>
        <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
          <Image className="h-11" src={logo4} alt="Tuple" />
        </div>
        <div className="flex justify-center col-span-2 md:col-span-2 lg:col-span-1">
          <Image className="h-10" src={logo5} alt="Tuple" />
        </div>
      </div>
    </div>
  </div>
  )
}
