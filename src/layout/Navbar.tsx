import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { DarkModeSwitchMinimal } from './DarkModeSwitchMinimal'
import { navigation } from '../utils/data'

type Props = {
  siteTitle: string
  location: string
}

const logo = '../images/logo.png'
const icon = '../images/icon.png'

export const Navbar: React.FC<Props> = ({ siteTitle, location }) => {
  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => {
        return (
          <>
            <div className="relative flex items-center justify-between">
              <Hamburger open={open} />
              <Header title={siteTitle} location={location} />
            </div>
            <Mobile location={location} />
          </>
        )
      }}
    </Disclosure>
  )
}

const Hamburger = ({ open }) => (
  <div
    className={`z-50 md:hidden ${
      open
        ? 'absolute top-2 right-2 my-auto flex h-6 items-center justify-end space-x-2'
        : 'flex w-full items-center justify-between'
    }`}
  >
    <Link to="/">
      {open ? (
        <StaticImage className="avatar gradient top-0.5 h-5 w-5 dark:bg-black" src={icon} alt="Robin" />
      ) : (
        <StaticImage className="avatar gradient h-6 w-6 dark:bg-black" src={icon} alt="Robin" />
      )}
    </Link>

    <div className="flex items-center space-x-1">
      <DarkModeSwitchMinimal />
      <Disclosure.Button className="hamburger group">
        <span className="sr-only">Open nav menu</span>
        {open ? (
          <XIcon
            className="ease block h-6 w-6 transition duration-200 group-hover:text-primary/75 dark:group-hover:text-primary/75"
            aria-hidden="true"
          />
        ) : (
          <MenuIcon
            className="ease dark:group-hover:text-/75 block h-6 w-6 transition duration-200 group-hover:text-dark/75"
            aria-hidden="true"
          />
        )}
      </Disclosure.Button>
    </div>
  </div>
)

const Header = ({ title, location }) => (
  <div className="header">
    <div className="relative hidden h-auto space-x-12 self-center duration-200 hover:opacity-75 md:inline-flex">
      <Link to="/" className="flex items-center space-x-2">
        <StaticImage
          alt="Robin"
          src={icon}
          className="gradient z-20 inline-flex h-6 w-6 rounded-full transition dark:bg-darkest"
        />
        <h2 className="text-xs font-bold tracking-tighter duration-150 lg:text-base">{title}</h2>
      </Link>
    </div>

    <div className="hidden space-x-6 self-center md:inline-flex md:space-x-10">
      {navigation.map((link, index) => (
        <Link to={link.location} key={`nav-${index}`} className="relative py-1">
          <button
            type="button"
            className={`flex h-12 items-center justify-center font-medium lowercase tracking-wider transition ${
              location === link.title
                ? 'text-dark dark:text-white'
                : 'text-dark/50 hover:text-dark dark:text-white/50 dark:hover:text-white'
            }`}
          >
            <span className="flex items-center justify-center">
              {link.icon}
              {link.title}
            </span>
          </button>
        </Link>
      ))}
    </div>

    <div className="hidden self-center md:inline-flex">
      <DarkModeSwitchMinimal />
    </div>
  </div>
)

const Mobile = ({ location }) => (
  <Disclosure.Panel className="flex flex-col space-y-3 py-2 md:hidden">
    {navigation.map((link, index) => (
      <Link to={link.location} className="relative h-auto" key={`mobile-nav-${index}`}>
        <button
          type="button"
          className={`flex h-auto items-center justify-center font-medium lowercase tracking-wider transition ${
            location === link.title
              ? 'text-dark dark:text-white'
              : 'text-dark/50 hover:text-dark dark:text-white/50 dark:hover:text-white'
          }`}
        >
          <span className="flex items-center justify-center">
            {link.icon}
            {link.title}
          </span>
        </button>
      </Link>
    ))}
  </Disclosure.Panel>
)
