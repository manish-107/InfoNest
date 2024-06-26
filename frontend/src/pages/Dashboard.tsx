import Blogs from "../components/Blogs";
import MainNav from "../components/MainNav";

const Dashboard = () => {
  return (
    <div className="bg-black ">
      <MainNav />
      <div className="flex justify-center">
        <div className="container p-5 pb-10">
          <div className="bg-white border-2 rounded-lg dark:bg-gray-900 dark:text-gray-100 border-slate-700">
            <div className="container px-4 py-16 mx-auto space-y-8 lg:px-8 lg:py-12 xl:max-w-7xl">
              <div className="text-center">
                <h2 className="mb-4 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r to-pink-700 from-red-400">
                  Getting Started with InfoNest
                </h2>
                <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 lg:w-2/3">
                  Get to know how it can help you build the User Interface of
                  your website and web application with the minimal effort.
                </h3>
              </div>
    <div className="flex justify-center p-0">

  
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Default
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                Dark
              </span>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Red
              </span>
              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Green
              </span>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                Yellow
              </span>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                Indigo
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                Purple
              </span>
              <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                Pink
              </span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs />
    </div>
  );
};

export default Dashboard;
