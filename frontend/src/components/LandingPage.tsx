import Nav from "./Nav";
import Blogs from "./Blogs";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav/>
      
      <main className="flex-1">
        <section className="py-12 bg-gray-200 sm:py-16 md:py-20 lg:py-24">
          <div className="container px-4 mx-auto sm:px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to Our Blog</h1>
              <p className="mt-4 text-lg text-gray-600 sm:mt-6 md:text-xl">
                Explore our latest articles and insights on a variety of topics.
              </p>
            </div>
          </div>
        </section>
        <Blogs/>
      </main>
      <footer className="py-6 text-sm text-center text-gray-600 bg-gray-200">
        <div className="container px-4 mx-auto sm:px-6 md:px-8">
          <p>&copy; 2024 Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
