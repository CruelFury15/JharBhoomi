import { useState } from 'react';
import image from '../image.jpg';
import star from '../images/star.svg';
import award from '../images/award.svg';
import Dcard from '../components/Dcard.jsx';
import visitors from '../images/visitors.svg';
import home from '../images/home.svg';    
import Dropdown from '../components/Dropdown.jsx';
import Leftbar from '../components/Leftbar.jsx';
import Cart from '../components/Cart.jsx';
import month from '../images/month.svg';

function Festivals() {
  const [showAll, setShowAll] = useState(false);
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex" aria-label="breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="/" className="inline-flex items-center text-sm font-medium text-yellow-700 hover:text-red-600 dark:text-yellow-400 dark:hover:text-white">
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-yellow-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ml-1 text-sm font-medium text-yellow-500 md:ml-2 dark:text-yellow-400">Festivals</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="rounded-3xl border border-yellow-200 bg-white p-8 shadow-sm dark:border-yellow-800 dark:bg-yellow-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-yellow-900 sm:text-4xl dark:text-yellow-50">
            🎉 Festivals & Events
          </h1>
          <p className="mt-3 text-base text-yellow-600 dark:text-yellow-300">
            Immerse yourself in the vibrant cultural celebrations and traditional festivals of Jharkhand
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-yellow-50 p-4 text-center dark:bg-yellow-800">
            <div className="flex justify-center mb-2">
              <img src={home} alt="Events" className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-yellow-900 dark:text-yellow-50">50+</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">Annual Events</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-center dark:bg-yellow-800">
            <div className="flex justify-center mb-2">
              <img src={award} alt="Programs" className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-yellow-900 dark:text-yellow-50">200+</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">Cultural Programs</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-center dark:bg-yellow-800">
            <div className="flex justify-center mb-2">
              <img src={visitors} alt="Visitors" className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-yellow-900 dark:text-yellow-50">500K+</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">Total Visitors</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-center dark:bg-yellow-800">
            <div className="flex justify-center mb-2">
              <img src={star} alt="Heritage" className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-yellow-900 dark:text-yellow-50">3</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">UNESCO Heritage</p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="rounded-3xl border border-yellow-200 bg-white p-8 shadow-sm dark:border-yellow-800 dark:bg-yellow-900">
        <h2 className="text-xl font-bold text-yellow-900 dark:text-yellow-50 mb-6">Find Events</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="event-type" className="block text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-2">
                Event Type
              </label>
              <select
                id="event-type"
                className="w-full rounded-xl border border-yellow-200 bg-white px-4 py-3 text-sm text-yellow-900 shadow-sm outline-none focus:ring-2 focus:ring-red-500 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-50"
              >
                <option>All Events</option>
                <option>Festivals</option>
                <option>Cultural Programs</option>
                <option>Fairs</option>
                <option>Religious Events</option>
              </select>
            </div>
            <div>
              <label htmlFor="month-select" className="block text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-2">
                Month
              </label>
              <select
                id="month-select"
                className="w-full rounded-xl border border-yellow-200 bg-white px-4 py-3 text-sm text-yellow-900 shadow-sm outline-none focus:ring-2 focus:ring-red-500 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-50"
              >
                <option>All Months</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div>
              <label htmlFor="location-select" className="block text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-2">
                Location
              </label>
              <select
                id="location-select"
                className="w-full rounded-xl border border-yellow-200 bg-white px-4 py-3 text-sm text-yellow-900 shadow-sm outline-none focus:ring-2 focus:ring-red-500 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-50"
              >
                <option>All Locations</option>
                <option>Ranchi</option>
                <option>Deoghar</option>
                <option>Jamshedpur</option>
                <option>Hazaribagh</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Search Events
          </button>
        </form>
      </section>

      {/* Featured Festivals */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-50">Upcoming Festivals</h2>
          <p className="text-sm text-yellow-600 dark:text-yellow-300">
            Don't miss these amazing cultural celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-yellow-200 bg-white overflow-hidden shadow-sm dark:border-yellow-800 dark:bg-yellow-900">
            <img src={image} alt="Festival" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <img src={month} alt="Date" className="w-4 h-4" />
                <span className="text-xs font-medium text-red-600 dark:text-red-400">March 15-17, 2026</span>
              </div>
              <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-50">Sarhul Festival</h3>
              <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-2">
                Celebrate the spring season with traditional tribal dances and rituals
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs text-yellow-600 dark:text-yellow-300">📍 Ranchi</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-300">•</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-300">🎭 Cultural</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-200 bg-white overflow-hidden shadow-sm dark:border-yellow-800 dark:bg-yellow-900">
            <img src={image} alt="Festival" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <img src={month} alt="Date" className="w-4 h-4" />
                <span className="text-xs font-medium text-red-600 dark:text-red-400">April 10-12, 2026</span>
              </div>
              <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-50">Karma Festival</h3>
              <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-2">
                Traditional harvest festival with folk music and dance performances
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs text-yellow-600 dark:text-yellow-300">📍 Jamshedpur</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-300">•</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-300">🎭 Traditional</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-yellow-200 bg-white overflow-hidden shadow-sm dark:border-yellow-800 dark:bg-yellow-900">
            <img src={image} alt="Festival" className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <img src={month} alt="Date" className="w-4 h-4" />
                <span className="text-xs font-medium text-red-600 dark:text-red-400">July 20-22, 2026</span>
              </div>
              <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-50">Tusu Parab</h3>
              <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-2">
                Vibrant festival celebrating the harvest season with colorful processions
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-xs text-yellow-600 dark:text-yellow-300">📍 Deoghar</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-300">•</span>
                <span className="text-xs text-yellow-600 dark:text-yellow-300">🎭 Harvest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Sidebar - 30% width */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24">
            <Leftbar />
          </div>
        </aside>

        {/* Main Content - 70% width */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-50">All Events</h2>
            <Dropdown />
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <Dcard img={image} alt="Event" describe="Cultural" cardtitle="Tribal Dance Festival" cardtext="Experience authentic tribal dance forms" duration="3 Days" visitors="5K+ Expected" month="March 2026" l1="Dance" l2="Music" l3="Culture" btntxt="Book Tickets" btnhref="/festivals" price="₹500"/>
            <Dcard img={image} alt="Event" describe="Religious" cardtitle="Baidyanath Mela" cardtext="Annual fair at Baidyanath Temple" duration="7 Days" visitors="100K+ Expected" month="July 2026" l1="Religious" l2="Fair" l3="Shopping" btntxt="Book Tickets" btnhref="/festivals" price="Free"/>
            <Dcard img={image} alt="Event" describe="Cultural" cardtitle="Jharkhand Utsav" cardtext="State-level cultural celebration" duration="5 Days" visitors="50K+ Expected" month="November 2026" l1="Cultural" l2="Food" l3="Crafts" btntxt="Book Tickets" btnhref="/festivals" price="₹300"/>
            <Dcard img={image} alt="Event" describe="Traditional" cardtitle="Sohrai Art Festival" cardtext="Celebrate traditional wall art" duration="2 Days" visitors="3K+ Expected" month="October 2026" l1="Art" l2="Workshop" l3="Exhibition" btntxt="Book Tickets" btnhref="/festivals" price="₹400"/>
            <Dcard img={image} alt="Event" describe="Music" cardtitle="Tribal Music Concert" cardtext="Live performances by tribal artists" duration="1 Day" visitors="2K+ Expected" month="December 2026" l1="Music" l2="Concert" l3="Live" btntxt="Book Tickets" btnhref="/festivals" price="₹600"/>
            <Dcard img={image} alt="Event" describe="Food" cardtitle="Jharkhand Food Festival" cardtext="Taste authentic local cuisine" duration="3 Days" visitors="10K+ Expected" month="January 2027" l1="Food" l2="Cuisine" l3="Tasting" btntxt="Book Tickets" btnhref="/festivals" price="₹250"/>
          </div>

          <div className="flex justify-center pt-4">
            {!showAll ? (
              <button 
                onClick={() => setShowAll(true)}
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
              >
                Load More Events
              </button>
            ) : (
              <button 
                onClick={() => setShowAll(false)}
                className="rounded-xl border border-yellow-200 bg-white px-6 py-3 text-sm font-semibold text-yellow-900 shadow-sm hover:bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900 dark:text-yellow-50 dark:hover:bg-yellow-800"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>

      <Cart />
    </main>
  );
}

export default Festivals;
