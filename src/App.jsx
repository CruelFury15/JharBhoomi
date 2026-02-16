import { Routes, Route } from 'react-router-dom';
import image from './image.jpg';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Card from './components/Card';
import Darkmode from './components/DarkMode';
import Dcard from './components/Dcard';
import Explore from './pages/Explore';
import ArVr from './pages/ArVr';
import Marketplace from './pages/Marketplace';
import Festivals from './pages/Festivals';
import Profile from './pages/Profile';

function HomePage() {
  return (
    <>
      <main className="mx-auto max-w-6xl space-y-12 px-4 py-10">
        <section className="rounded-3xl border border-yellow-200 bg-white p-8 shadow-sm dark:border-yellow-800 dark:bg-yellow-900">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-yellow-900 sm:text-4xl dark:text-yellow-50">
              Experience the Magic of Jharkhand
            </h1>
            <p className="mt-3 text-base text-yellow-600 dark:text-yellow-300">
              Where culture meets nature — discover eco-trails, cultural treasures, and authentic local life in the heart of India.
            </p>

            <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row" role="search">
              <input
                className="h-11 w-full rounded-xl border border-yellow-200 bg-white px-4 text-sm text-yellow-900 shadow-sm outline-none placeholder:text-yellow-400 focus:ring-2 focus:ring-red-500 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-50"
                type="search"
                placeholder="What would you like to explore?"
                aria-label="Search"
              />
              <Button href="/" text="Explore" className="h-11 w-full sm:w-auto" />
            </form>

            <div className="mt-4 flex justify-center">
              <Button href="/watch_shorts" text="Watch Shorts 👀" className="bg-yellow-900 hover:bg-yellow-800 focus:ring-yellow-900" />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-50">Discover Destinations</h2>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">
              Immerse yourself in Jharkhand's natural wonders and cultural treasures through our interactive showcase.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card img={image} alt="Destination" describe="Nature • Culture" cardtitle="Waterfalls & Trails" cardtext="Plan a refreshing day trip to scenic falls and forest trails." l1="Eco-friendly routes" l2="Local guides" l3="Best seasons" btntxt="Explore" btnhref="/explore" />
            <Card img={image} alt="Destination" describe="Heritage" cardtitle="Temples & History" cardtext="Discover historic sites and spiritual landmarks across Jharkhand." l1="Iconic temples" l2="Architecture" l3="Local stories" btntxt="Explore" btnhref="/explore" />
            <Card img={image} alt="Destination" describe="Adventure" cardtitle="Hills & Views" cardtext="Explore hill stations and viewpoints for unforgettable sunsets." l1="Viewpoints" l2="Photo spots" l3="Weekend plans" btntxt="Explore" btnhref="/explore" />
          </div>

          <div className="pt-2">
            <Button href="/explore" text="🌟 Discover All Destinations" />
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-50">Cultural Marketplace</h2>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">
              Support local artisans and immerse yourself in authentic Jharkhand culture.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card img={image} alt="Marketplace" describe="Handmade" cardtitle="Tribal Art" cardtext="Authentic handcrafted art pieces made by local artisans." l1="Original" l2="Handmade" l3="Limited" btntxt="Shop" btnhref="/marketplace" />
            <Card img={image} alt="Marketplace" describe="Eco-friendly" cardtitle="Bamboo Decor" cardtext="Sustainable home décor that blends tradition and style." l1="Sustainable" l2="Durable" l3="Natural" btntxt="Shop" btnhref="/marketplace" />
            <Card img={image} alt="Marketplace" describe="Organic" cardtitle="Local Foods" cardtext="Fresh and organic products sourced directly from farms." l1="Healthy" l2="Organic" l3="Fresh" btntxt="Shop" btnhref="/marketplace" />
          </div>

          <div className="pt-2">
            <Button href="/marketplace" text="🛍 Explore Full Marketplace" />
          </div>
        </section>

        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-yellow-900 dark:text-yellow-50">🎉 Upcoming Festivals & Events</h2>
            <p className="text-sm text-yellow-600 dark:text-yellow-300">
              Immerse yourself in the vibrant cultural celebrations of Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Dcard img={image} alt="Art" describe="Handicraft" cardtitle="Sohrai Painting" cardtext="Authentic tribal art on canvas." duration="In Stock" visitors="4.9 ★" month="Seller: Ravi" l1="Handmade" l2="Authentic" l3="Framed" btntxt="Add to Cart" btnhref="/marketplace" price="₹5,000"/>
            <Dcard img={image} alt="Art" describe="Decor" cardtitle="Bamboo Vase" cardtext="Eco-friendly home decor." duration="In Stock" visitors="4.5 ★" month="Seller: Meena" l1="Sustainable" l2="Durable" l3="Artistic" btntxt="Add to Cart" btnhref="/marketplace" price="₹4,000"/>
            <Dcard img={image} alt="Food" describe="Organic" cardtitle="Madua Flour" cardtext="Organic millet flour from local farms." duration="In Stock" visitors="4.8 ★" month="Seller: OrganicJH" l1="Healthy" l2="Organic" l3="Fresh" btntxt="Add to Cart" btnhref="/marketplace" price="₹4,500"/>
            <Dcard img={image} alt="Clothing" describe="Fashion" cardtitle="Tussar Silk Saree" cardtext="Pure silk saree with tribal motifs." duration="In Stock" visitors="5.0 ★" month="Seller: SilkCo" l1="Pure Silk" l2="Handloom" l3="Elegant" btntxt="Add to Cart" btnhref="/marketplace" price="₹5,500"/>
            <Dcard img={image} alt="Art" describe="Decor" cardtitle="Dokra Figurine" cardtext="Ancient metal casting art piece." duration="Low Stock" visitors="4.7 ★" month="Seller: ArtHub" l1="Metal" l2="Antique" l3="Rare" btntxt="Add to Cart" btnhref="/marketplace" price="₹4,200"/>
            <Dcard img={image} alt="Food" describe="Spices" cardtitle="Forest Honey" cardtext="Pure honey collected from Saranda forests." duration="In Stock" visitors="4.9 ★" month="Seller: NaturePure" l1="Pure" l2="Sweet" l3="Medicinal" btntxt="Add to Cart" btnhref="/marketplace" price="₹6,000"/>
          </div>

          <div className="pt-2">
            <Button href="/festivals" text="🎪 View All Events and Festivals" />
          </div>
        </section>
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar
          img={image}
          title="JharBhoomi"
          head1="Explore"
          head2="AR/VR"
          head3="Marketplace"
          head4="Festivals"
          head5="Profile"
        />
        <Darkmode />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/ar-vr" element={<ArVr />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <footer className="border-t border-yellow-200 bg-white dark:border-yellow-800 dark:bg-yellow-950">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-sm font-black text-white">
                    JH
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-50">JharBhoomi</h3>
                    <p className="text-sm text-yellow-600 dark:text-yellow-300">Jharkhand Tourism Portal</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-yellow-600 dark:text-yellow-300">
                  Discover the rich cultural heritage and natural beauty of Jharkhand. Experience authentic tribal traditions, pristine waterfalls, and vibrant festivals that celebrate the spirit of this beautiful state.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-50">Quick Links</h4>
                <ul className="mt-3 space-y-2 text-sm text-yellow-600 dark:text-yellow-300">
                  <li><a className="hover:text-yellow-900 dark:hover:text-white transition-colors cursor-pointer" href="/explore">Destinations</a></li>
                  <li><a className="hover:text-yellow-900 dark:hover:text-white transition-colors cursor-pointer" href="/ar-vr">AR/VR</a></li>
                  <li><a className="hover:text-yellow-900 dark:hover:text-white transition-colors cursor-pointer" href="/marketplace">Marketplace</a></li>
                  <li><a className="hover:text-yellow-900 dark:hover:text-white transition-colors cursor-pointer" href="/festivals">Festivals</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-yellow-900 dark:text-yellow-50">Support</h4>
                <ul className="mt-3 space-y-2 text-sm text-yellow-600 dark:text-yellow-300">
                  <li><a className="hover:text-yellow-900 dark:hover:text-white transition-colors cursor-pointer" href="/profile">Help Center</a></li>
                  <li><a className="hover:text-yellow-900 dark:hover:text-white transition-colors cursor-pointer" href="/profile">Contact Support</a></li>
                  <li><a className="hover:text-yellow-900 dark:hover:text-white transition-colors cursor-pointer" href="/profile">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-yellow-200 pt-6 text-sm text-yellow-600 dark:border-yellow-800 dark:text-yellow-300 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2027 Government of Jharkhand. All rights reserved.</p>
              <p className="text-yellow-500 dark:text-yellow-400">Made for Jharkhand</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
