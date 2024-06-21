export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 py-3 bg-gray-100 shadow-sm sm:px-6 md:px-8">
        <div className="container flex items-center justify-between mx-auto">
          <a href="#" className="text-2xl font-bold">
            Blog
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:underline">
              Blog
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md shadow h-9 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 disabled:pointer-events-none disabled:opacity-50"
            >
              Sign In
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-white border border-gray-300 rounded-md shadow-sm h-9 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:pointer-events-none disabled:opacity-50"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
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
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container px-4 mx-auto sm:px-6 md:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <article className="transition-all bg-white rounded-lg shadow-sm hover:shadow-md">
                <a href="#">
                  <div className="overflow-hidden rounded-t-lg aspect-w-4 aspect-h-3">
                    <img
                      src="/placeholder.svg"
                      alt="Blog Post 1"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold">Blog Post 1</h2>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
                          <img src="/placeholder-user.jpg" alt="Avatar" className="w-full h-full rounded-full" />
                        </div>
                        <span className="text-sm font-medium">John Doe</span>
                      </div>
                      <span className="text-sm text-gray-600">May 1, 2023</span>
                    </div>
                  </div>
                </a>
              </article>
              <article className="transition-all bg-white rounded-lg shadow-sm hover:shadow-md">
                <a href="#">
                  <div className="overflow-hidden rounded-t-lg aspect-w-4 aspect-h-3">
                    <img
                      src="/placeholder.svg"
                      alt="Blog Post 2"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold">Blog Post 2</h2>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
                          <img src="/placeholder-user.jpg" alt="Avatar" className="w-full h-full rounded-full" />
                        </div>
                        <span className="text-sm font-medium">Jane Doe</span>
                      </div>
                      <span className="text-sm text-gray-600">May 5, 2023</span>
                    </div>
                  </div>
                </a>
              </article>
              <article className="transition-all bg-white rounded-lg shadow-sm hover:shadow-md">
                <a href="#">
                  <div className="overflow-hidden rounded-t-lg aspect-w-4 aspect-h-3">
                    <img
                      src="/placeholder.svg"
                      alt="Blog Post 3"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold">Blog Post 3</h2>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia,
                      nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
                          <img src="/placeholder-user.jpg" alt="Avatar" className="w-full h-full rounded-full" />
                        </div>
                        <span className="text-sm font-medium">John Smith</span>
                      </div>
                      <span className="text-sm text-gray-600">May 10, 2023</span>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 text-sm text-center text-gray-600 bg-gray-200">
        <div className="container px-4 mx-auto sm:px-6 md:px-8">
          <p>&copy; 2024 Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
