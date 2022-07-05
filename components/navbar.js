import 'animate.css';
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import navbarCss from '../styles/components/navbar.module.css'
import { useRouter } from 'next/router'



const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'My Work', href: '/works', current: false },
  { name: 'About Me', href: '/about', current: false },
]

const variantsMenu = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function isActiveRoutes (routerPath, href) {
  return routerPath === href
}

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter()

  return (
    <Disclosure as="nav" className={navbarCss.navbar}>
      {({ open }) => (
        <>
          <div className="max-w-full  mx-auto px-2 sm:px-6 lg:px-8 lg:w-[1440px]">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                      <XIcon className="block w-10 text-right z-50 fixed top-2 right-2 text-white font-bold" aria-hidden="true" onClick={() => setShowSidebar(!showSidebar)} />
                  ) : (
                    <MenuAlt1Icon className=" block h-6 w-10" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 w-full flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className={navbarCss.navbar_logo_text}>
                  <h1 className='invisible lg:visible sm:z-index:40 top-0 text-base'>Alders Antonius Samosir</h1>
                </div>
                <div className="hidden sm:block flex lg:w-full text-right">
                  <div className={navbarCss.navbar_menu}>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={'#'}
                        onClick={() => router.push(item.href)}
                        className={isActiveRoutes(router.pathname, item.href) ? navbarCss.navbar_menu_item_active : navbarCss.navbar_menu_item }
                        aria-current={isActiveRoutes(router.pathname, item.href) ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className={navbarCss.navbar_menu_mobile}>
              <div className={navbarCss.navbar_menu_blur}>
                <div className={navbarCss.mobile_menu_container}>
                <Disclosure.Button
                   key={'logo'}
                   as="a"
                   onClick={() => router.push('/')}
                   className={navbarCss.nav_bar_menu_logo_mobile}
                   aria-current={true ? 'page' : undefined}
                >
                 Alders Antonius Samosir
                </Disclosure.Button>
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={'#'}
                      onClick={() => router.push(item.href)}
                      className={isActiveRoutes(router.pathname, item.href) ? navbarCss.nav_bar_menu_item_mobile_active : navbarCss.nav_bar_menu_item_mobile }
                      aria-current={isActiveRoutes(router.pathname, item.href) ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
          </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}