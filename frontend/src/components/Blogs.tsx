const Nav: React.FC = () => {
    return (
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
    );
  }
  
  export default Nav;