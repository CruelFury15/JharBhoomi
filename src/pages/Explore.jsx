import image from '../image.jpg'; 
import Section from '../components/Section.jsx';
import Inbar from '../components/Inbar.jsx';
import Dcard from '../components/Dcard.jsx';
import star from '../images/star.svg';
import stars from '../images/stars.svg';
import loved from '../images/loved.svg';
import award from '../images/award.svg';
import heart from '../images/heart.svg';
import more from '../images/more.svg';

function Explore() {
  return (
    <main className="mx-auto max-w-6xl space-y-12 px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex" aria-label="breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="/" className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-white">
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg className="w-3 h-3 text-slate-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="ml-1 text-sm font-medium text-slate-500 md:ml-2 dark:text-slate-400">Explore</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
            Explore Jharkhand
          </h1>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Discover the hidden gems of Jharkhand - from majestic waterfalls to ancient temples, wildlife sanctuaries to tribal villages
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">150+</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Destinations</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">12</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Categories</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800">
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">1M+</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Annual Visitors</p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">Plan Your Trip</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
              placeholder="Where do you want to go?"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              Travel Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Search Destinations
          </button>
        </form>
      </section>

      {/* Featured Highlights */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Featured Highlights</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Experience the very best of Jharkhand's natural and cultural wonders
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-2 mb-3">
              <img src={loved} alt="Most Popular" className="w-5 h-5" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Most Popular</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Hundru Falls</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Majestic 98m waterfall</p>
            <div className="flex items-center gap-1 mt-3">
              <img src={star} alt="Rating" className="w-4 h-4" />
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">4.5</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-2 mb-3">
              <img src={award} alt="Top Rated" className="w-5 h-5" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Top Rated</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Baidyanath Temple</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Sacred Jyotirlinga shrine</p>
            <div className="flex items-center gap-1 mt-3">
              <img src={star} alt="Rating" className="w-4 h-4" />
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">4.9</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-2 mb-3">
              <img src={heart} alt="Guest Favorite" className="w-5 h-5" />
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Guest Favorite</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">Netarhat Hills</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Queen of Chotanagpur</p>
            <div className="flex items-center gap-1 mt-3">
              <img src={star} alt="Rating" className="w-4 h-4" />
              <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">4.7</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-indigo-50 p-4 text-center dark:bg-indigo-900/20">
          <p className="text-sm text-indigo-900 dark:text-indigo-300">
            <img src={stars} alt="stars" className="inline w-5 h-5 mr-2" />
            And 147 more incredible destinations waiting to be explored!
          </p>
        </div>
      </section>

      {/* Destinations Section with Sidebar Filter */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Sidebar Filter - 30% width */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24">
            <Inbar />
          </div>
        </aside>

        {/* Main Content - 70% width */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">All Destinations</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Browse through our complete collection of destinations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <Dcard img={image} alt="Destination" describe="Popular Destination" cardtitle="Ranchi" cardtext="The capital city of Jharkhand, known for its waterfalls and natural beauty." duration="3 Days" visitors="1M Visitors" month="Best: Oct-Mar" l1="Waterfalls" l2="Hiking Trails" l3="Cultural Sites" btntxt="Explore" btnhref="/ranchi" price="₹5,000"/>
            <Dcard img={image} alt="Destination" describe="Popular Destination" cardtitle="Deoghar" cardtext="A major pilgrimage site, home to the famous Baidyanath Temple." duration="2 Days" visitors="800K Visitors" month="Best: Nov-Feb" l1="Temples" l2="Spiritual Tours" l3="Local Markets" btntxt="Explore" btnhref="/deoghar" price="₹4,000"/>
            <Dcard img={image} alt="Destination" describe="Popular Destination" cardtitle="Jamshedpur" cardtext="An industrial city with beautiful parks and gardens." duration="2 Days" visitors="600K Visitors" month="Best: Oct-Mar" l1="Parks & Gardens" l2="Museums" l3="Shopping" btntxt="Explore" btnhref="/jamshedpur" price="₹4,500"/>
            <Dcard img={image} alt="Destination" describe="Popular Destination" cardtitle="Hazaribagh" cardtext="Known for its national park and serene environment." duration="3 Days" visitors="400K Visitors" month="Best: Oct-Feb" l1="National Park" l2="Lakes" l3="Trekking" btntxt="Explore" btnhref="/hazaribagh" price="₹5,500"/>
            <Dcard img={image} alt="Destination" describe="Popular Destination" cardtitle="Netarhat" cardtext="A hill station known for its scenic beauty and sunrise views." duration="3 Days" visitors="500K Visitors" month="Best: Oct-Mar" l1="Hill Station" l2="Sunrise Points" l3="Nature Walks" btntxt="Explore" btnhref="/netarhat" price="₹6,000"/>
            <Dcard img={image} alt="Destination" describe="Popular Destination" cardtitle="Giridih" cardtext="Famous for its temples and natural landscapes." duration="2 Days" visitors="350K Visitors" month="Best: Oct-Feb" l1="Temples" l2="Waterfalls" l3="Hiking" btntxt="Explore" btnhref="/giridih" price="₹4,300"/>
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
              <img src={more} alt="more" className="w-4 h-4" />
              Load More Destinations
            </button>
            <button className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800">
              Show Less
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Explore;
