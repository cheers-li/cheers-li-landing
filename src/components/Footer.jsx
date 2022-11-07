import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { PlayStoreLink } from './PlayStoreLink'
import { AppStoreLink } from './AppStoreLink'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo className="h-10 w-10 flex-none" />
              <div className="ml-4">
                <p className="text-base font-semibold">Cheers.li</p>
                <p className="text-sm">Connect with your friends.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-start self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex flex-col gap-2 h-24 w-32 flex-none items-stretch justify-start">
              <AppStoreLink />
              <PlayStoreLink />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="#">
                  <>
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                  </>
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Visit the app store of your choice to download the app.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
