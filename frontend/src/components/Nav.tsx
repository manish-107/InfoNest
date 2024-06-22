const Nav: React.FC = () => {
    return (
        <header className="px-4 py-3 bg-gray-100 shadow-sm sm:px-6 md:px-8">
        <div className="container flex items-center justify-between mx-auto">
          <a href="#" className="text-2xl font-bold">
          InfoNest-Blog
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-semibold hover:underline">
              Explore
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
    );
  }
  
  export default Nav;