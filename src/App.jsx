import React from "react";
import { useState, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";
import './App.css'

function App() {

  // 📌 Buat ref untuk form
  const formRef = useRef(null);

  // 🔽 Fungsi untuk scroll ke form
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Features', href: 'about' },
    { name: 'Teams', href: 'teams' },
    { name: 'Verify News', href: 'news' },
  ]

  const features = [
    {
      name: 'Push to verify',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Check Hoax / Fact',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple Feature',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FingerPrintIcon,
    },
  ]

  const teamMembers = [
    {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      linkedin: "https://www.linkedin.com/in/example",
      instagram: "https://www.instagram.com/example",
    },
    {
      name: "Courtney Henry",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      linkedin: "https://www.linkedin.com/in/example",
      instagram: "https://www.instagram.com/example",
    },
    {
      name: "Tom Cook",
      role: "Director of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      linkedin: "https://www.linkedin.com/in/example",
      instagram: "https://www.instagram.com/example",
    },
    {
      name: "Leonard Krasner",
      role: "Senior Designer",
      image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
      linkedin: "https://www.linkedin.com/in/example",
      instagram: "https://www.instagram.com/example",
    },
  ]

  const verifyNews = async (news) => {
    try {
      setIsLoading(true);
      const response = await backend.verifyNews(news);
      const parsedResponse = JSON.parse(response);

      setResult({
        status: parsedResponse.status,
        trust: parsedResponse.rating_kepercayaan,
        summary: parsedResponse.kesimpulan,
        trueNews: parsedResponse.berita_benar || "Tidak ada data",
      });
    } catch (e) {
      console.error(e);
      setResult({ error: "⚠️ Terjadi kesalahan saat memverifikasi berita." });
    } finally {
      setIsLoading(false);
    }
  };

  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-20">
          <div className="text-2xl text-gray-900 font-bold mr-5">
            <span className="text-4xl text-blue-600">T</span>ruthly
          </div>
          <div className="hidden lg:flex lg:gap-x-15 px-60">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-900 hover:text-blue-600 font-semibold text-lg"
              >
                {item.name}
              </Link>
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
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center text-gray-900 text-xl font-semibold hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
            <a href="#" className="block py-2 text-lg text-gray-900 hover:bg-gray-100">
              Log in
            </a>
          </div>
        </DialogPanel>
      </Dialog>

      {/* Hero Section */}

      <div className="relative isolate px-6 pt-15 lg:px-8">
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
        <div id="home" className="mx-auto max-w-2xl py-6 sm:py-22 lg:py-30">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              Smart News Smarter Insights
            </h1>
            <p className="mt-6 text-md text-gray-500">
              Use AI to verify news with high precision. An innovative tool powered by an AI-powered LLM Canister.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button href="#" className="cursor-pointer shadow-xl bg-blue-600 text-white px-5 py-3 rounded-4xl hover:bg-blue-500 transition-all duration-300 ease-in-out" onClick={scrollToForm}>
                📰 Explore News
              </button>
              <button href="#" className="cursor-pointer shadow-xl px-5 py-3 rounded-4xl bg-gray-100 hover:bg-gray-400 transition-all duration-300 ease-in-out">
                🚀 Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}

        <div id="about" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-blue-600">Verify Faster</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Everything you need to verify news
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Teams Section */}
        <section id="teams" className="py-30 bg-white">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Our Amazing Team</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Meet our talented team members who work passionately to deliver the best results for our clients.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="text-lg font-semibold text-gray-900 mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>

                <div className="flex justify-center gap-4 mt-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600 transition duration-300 text-xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500 transition duration-300 text-xl"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🚀 Live Demo */}
        <section id="news" ref={formRef} className="py-8 px-6 bg-white">
          <h2 className="text-4xl font-bold text-gray-900">Try It Now</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Enter a news title to be verified by AI.
          </p>
          <div className="max-w-2xl mx-auto mt-6">
            <textarea
              className="w-full h-32 p-4 border border-neon-white bg-transparent rounded-lg text-gray-600 focus:ring-2 focus:ring-neon-blue placeholder-gray-600"
              placeholder="Masukkan berita di sini..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
            ></textarea>
            <button
              className={`bg-blue-600 cursor-pointer w-full mt-4 py-2 text-lg text-gray-100 rounded-4xl transition hover:bg-blue-400 shadow-xl ${isLoading ? 'bg-blue-400' : 'bg-neon-blue hover:shadow-neon'
                }`}
              onClick={() => verifyNews(inputValue)}
              disabled={isLoading}
            >
              {isLoading ? 'Memverifikasi...' : '🔍 Verifikasi Berita'}
            </button>

            {/* Hasil */}
            {result && (
              <div className="mt-6 bg-gray-100 p-4 rounded-lg border border-gray-700">
                {result.error ? (
                  <p className="text-red-500">{result.error}</p>
                ) : (
                  <>
                    <p className="text-lg"><strong>📰 Status:</strong> {result.status}</p>
                    <p className="text-lg"><strong>🔍 Kepercayaan:</strong> {result.trust}</p>
                    <p className="text-lg"><strong>📌 Kesimpulan:</strong> {result.summary}</p>
                    <p className="text-lg"><strong>✅ Berita Benar:</strong> {result.trueNews}</p>
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 🚀 Footer */}
      </div>

      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

          <div className="items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800"><span className="text-3xl font-bold text-blue-600">T</span>ruthly</h1>
              <p className="text-sm text-gray-500">Check your news now.</p>
            </div>
          </div>
          <nav className="mt-6 md:mt-0 flex space-x-6 text-sm font-normal text-gray-600">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-6 md:mt-0 text-center">
            <h3 className="text-md font-semibold text-gray-900">Download the app</h3>
            <p className="text-sm text-gray-500">Coming Soon</p>
          </div>
        </div>

        <div className="mx-auto px-6 lg:px-8 mt-6 flex flex-col justify-between items-center border-t border-slate-400 pt-6">
          <p className="text-sm text-gray-500">© Copyright 2025. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
