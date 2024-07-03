import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import  Section  from "../components/Section";
import Nav from "../components/Nav";
import { useState } from "react";
import Login from "./Login";

export default function LandingPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  let letter = "{InfoNest}";
  console.log(showModal);

  return (
    <div className={`flex flex-col min-h-screen bg-black ${showModal ? ' backdrop-blur-3xl  ': ''}`}>
      <Nav setShowModal={setShowModal} />

      <main className="flex-1 pt-10 bg-black">
        <section className="py-12 bg-transparent sm:py-16 md:py-20 lg:py-24">
          <div className="container px-4 pb-20 mx-auto sm:px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="pl-5 pr-5 mb-4 text-3xl font-extrabold text-gray-500 md:pl-3 md:pr-3 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                  Welcome to
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-300 from-sky-300"> {letter} Blogs</span>{" "}
              </h1>

              {showModal && (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div
                    className="fixed inset-0 w-full h-full backdrop-blur-sm "
                    onClick={() => setShowModal(false)}
                  >
                  </div>
                    <Login/>
                 
                </div>
              )}

              <p className="pt-3 text-lg font-semibold text-gray-500 lg:text-xl">
                Explore our latest articles and insights on a variety of topics.
              </p>
              <Link
                to="/signin"
                className="inline-flex items-center m-5 text-3xl font-bold text-blue-600 hover:underline"
              >
                Get Started
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Uncomment if needed
          <div className="flex justify-center mt-20">
            <div className="container w-full p-4 text-center bg-gray-700 border border-gray-200 rounded-lg shadow sm:p-8">
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Work fast from anywhere
              </h5>
              <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Stay up to date and move work forward with Flowbite on iOS &
                Android. Download the app today.
              </p>
              <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Stay up to date and move work forward with Flowbite on iOS &
                Android. Download the app today.
              </p>
              <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Stay up to date and move work forward with Flowbite on iOS &
                Android. Download the app today.
              </p>
              <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Stay up to date and move work forward with Flowbite on iOS &
                Android. Download the app today.
              </p>
            </div>
          </div>
          */}
          <div className="text-white">

      <Section/>
          </div>
          
        </section>
      </main>
      <Footer />
    </div>
  );
}
