import MainNav from "../components/MainNav";

const Dashboard = () => {
  return (
    <div className="bg-black ">
      <MainNav />
      <div className="flex justify-center">
        <div className="container p-5 pb-10">
          <div className="bg-white border-2 rounded-lg dark:bg-gray-900 dark:text-gray-100 border-slate-700">
            <div className="container px-4 py-16 mx-auto space-y-16 lg:px-8 lg:py-32 xl:max-w-7xl">
              <div className="text-center">
              
                <h2 className="mb-4 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r to-pink-700 from-red-400">
                  Getting Started with InfoNest
                </h2>
                <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 lg:w-2/3">
                  Get to know how it can help you build the User Interface of
                  your website and web application with the minimal effort.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
