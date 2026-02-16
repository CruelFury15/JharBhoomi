import image from '../image.jpg';
import star from '../images/star.svg';
import award from '../images/award.svg';
import Dcard from '../components/Dcard.jsx';
import visitors from '../images/visitors.svg';
import home from '../images/home.svg';    
import Dropdown from '../components/Dropdown.jsx';
import Leftbar from '../components/Leftbar.jsx';
import Cart from '../components/Cart.jsx';

function Marketplace() {
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
              <span className="ml-1 text-sm font-medium text-yellow-500 md:ml-2 dark:text-yellow-400">Marketplace</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="rounded-3xl border border-yellow-200 bg-white p-8 shadow-sm dark:border-yellow-800 dark:bg-yellow-900">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-yellow-900 sm:text-4xl dark:text-yellow-50">
            Cultural Marketplace
          </h1>
          <p className="mt-3 text-base text-yellow-600 dark:text-yellow-300">
            Support local artisans, experience authentic Jharkhand culture, and bring home a piece of heritage
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-yellow-50 p-4 text-center dark:bg-yellow-800">
            <div className="flex justify-center mb-2">
              <img src={home} alt="Vendors" className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-yellow-900 dark:text-yellow-50">250+</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">Local Vendors</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-center dark:bg-yellow-800">
            <div className="flex justify-center mb-2">
              <img src={award} alt="Products" className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-yellow-900 dark:text-yellow-50">1000+</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">Certified Products</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-center dark:bg-yellow-800">
            <div className="flex justify-center mb-2">
              <img src={visitors} alt="Customers" className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-yellow-900 dark:text-yellow-50">15K+</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">Happy Customers</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-center dark:bg-yellow-800">
            <div className="flex justify-center mb-2">
              <img src={star} alt="Rating" className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-yellow-900 dark:text-yellow-50">4.8</p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300">Avg Rating</p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="rounded-3xl border border-yellow-200 bg-white p-8 shadow-sm dark:border-yellow-800 dark:bg-yellow-900">
        <h2 className="text-xl font-bold text-yellow-900 dark:text-yellow-50 mb-6">Find Products</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-2">
                Category
              </label>
              <select
                id="category"
                className="w-full rounded-xl border border-yellow-200 bg-white px-4 py-3 text-sm text-yellow-900 shadow-sm outline-none focus:ring-2 focus:ring-red-500 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-50"
              >
                <option>All Categories</option>
                <option>Handicrafts</option>
                <option>Textiles</option>
                <option>Organic Food</option>
                <option>Jewelry</option>
              </select>
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-2">
                Price Range
              </label>
              <select
                id="price"
                className="w-full rounded-xl border border-yellow-200 bg-white px-4 py-3 text-sm text-yellow-900 shadow-sm outline-none focus:ring-2 focus:ring-red-500 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-50"
              >
                <option>All Prices</option>
                <option>Under ₹2,000</option>
                <option>₹2,000 - ₹5,000</option>
                <option>Above ₹5,000</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Apply Filters
          </button>
        </form>
      </section>

      {/* Products Section with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Sidebar - 30% width */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24">
            <Leftbar />
          </div>
        </aside>

    
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-50">Featured Products</h2>
            <Dropdown />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            <Dcard img={image} alt="Art" describe="Handicraft" cardtitle="Sohrai Painting" cardtext="Authentic tribal art on canvas." duration="In Stock" visitors="4.9 ★" month="Seller: Ravi" l1="Handmade" l2="Authentic" l3="Framed" btntxt="Add to Cart" btnhref="/marketplace" price="₹5,000"/>
            <Dcard img={image} alt="Art" describe="Decor" cardtitle="Bamboo Vase" cardtext="Eco-friendly home decor." duration="In Stock" visitors="4.5 ★" month="Seller: Meena" l1="Sustainable" l2="Durable" l3="Artistic" btntxt="Add to Cart" btnhref="/marketplace" price="₹4,000"/>
            <Dcard img={image} alt="Food" describe="Organic" cardtitle="Madua Flour" cardtext="Organic millet flour from local farms." duration="In Stock" visitors="4.8 ★" month="Seller: OrganicJH" l1="Healthy" l2="Organic" l3="Fresh" btntxt="Add to Cart" btnhref="/marketplace" price="₹4,500"/>
            <Dcard img={image} alt="Clothing" describe="Fashion" cardtitle="Tussar Silk Saree" cardtext="Pure silk saree with tribal motifs." duration="In Stock" visitors="5.0 ★" month="Seller: SilkCo" l1="Pure Silk" l2="Handloom" l3="Elegant" btntxt="Add to Cart" btnhref="/marketplace" price="₹5,500"/>
            <Dcard img={image} alt="Art" describe="Decor" cardtitle="Dokra Figurine" cardtext="Ancient metal casting art piece." duration="Low Stock" visitors="4.7 ★" month="Seller: ArtHub" l1="Metal" l2="Antique" l3="Rare" btntxt="Add to Cart" btnhref="/marketplace" price="₹4,200"/>
            <Dcard img={image} alt="Food" describe="Spices" cardtitle="Forest Honey" cardtext="Pure honey collected from Saranda forests." duration="In Stock" visitors="4.9 ★" month="Seller: NaturePure" l1="Pure" l2="Sweet" l3="Medicinal" btntxt="Add to Cart" btnhref="/marketplace" price="₹6,000"/>
          </div>

          <div className="flex justify-center pt-4">
            <button className="rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500">
              Load More Products
            </button>
          </div>
        </div>
      </div>

      <Cart />
    </main>
  );
}

export default Marketplace;
