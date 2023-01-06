
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './icons/logo'
import Search from './icons/Search'
import Cart from './icons/Cart';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Package', href: '#' },
  { name: 'About Trainer', href: '#' }
]


function Header() {
  return (
    <div className="fixed top-0 z-50 w-full py-3 bg-transparent">
      <Popover>
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <nav className="relative flex items-center justify-between md:items-baseline sm:h-10" aria-label="Global">
            <div className="flex items-center flex-1 md:hidden md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#" className='md:hidden'>
                  <span className="sr-only">Your Company Logo</span>
                  <Logo />
                </a>
                <div className="flex items-center -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-black rounded-md bg-gray-50 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>

            <div className="hidden md:flex md:space-x-10">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold text-black uppercase hover:text-gray-500">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden md:inline-block">
              <Logo />
            </div>
            <div className="hidden md:space-x-4 md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
              <span className="inline-flex">
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium hover:bg-gray-50"
                >
                  sign in
                </a>
              </span>
              <Search />
               <Cart />
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
          >
            <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="block w-full px-5 py-3 font-medium text-center bg-gray-50 text-yellow hover:bg-gray-100"
              >
                sign in
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default Header