import React from "react";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css'

function App() {

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
          <div className="text-2xl text-gray-900 font-bold mr-5">
            <span className="text-4xl text-blue-600">T</span>ruthly
          </div>
          <div className="hidden lg:flex lg:gap-x-15 px-60">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-gray-900 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-md font-semibold text-gray-900 hover:text-blue-600">
              Log in →
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden -m-2.5 p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-0 bg-white z-50 w-full p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">Truthly</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="block py-2 text-lg text-gray-900 hover:bg-gray-100">
                {item.name}
              </a>
            ))}
            <a href="#" className="block py-2 text-lg text-gray-900 hover:bg-gray-100">
              Log in
            </a>
          </div>
        </DialogPanel>
      </Dialog>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(80%-30rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#544873] to-[#71a6f1] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[50.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-6 sm:py-22 lg:py-30">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Smart News Smarter Insights
            </h1>
            <p className="mt-6 text-md text-gray-500">
              Use AI to verify news with high precision. An innovative tool powered by an AI-powered LLM Canister.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="bg-blue-600 text-white px-5 py-3 rounded-4xl hover:bg-blue-500">
              <i class="fa-solid fa-newspaper"></i> Explore News
              </a>
              <a href="#" className="border px-5 py-3 rounded-4xl hover:bg-gray-100">
              <i class="fa-solid fa-rocket"></i> Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default App
