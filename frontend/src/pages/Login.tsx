import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center min-h-screen px-4 py-8">
      <div className="relative w-full max-w-md p-6 mx-auto text-white bg-[#09090b] rounded-md shadow-lg">
        
        <form className="p-4">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-left ">
              Email Address
            </label>
            <input
              className="block w-full px-4 py-2 bg-black border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-left ">
              Password
            </label>
            <input
              className="block w-full px-4 py-2 bg-black border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              type="password"
              required
            />
          </div>
          <div className="mb-4">
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Login
            </button>
          </div>
          <div className="mb-4 text-center">
            
          </div>
          <div className="flex items-center justify-center mb-4">
            <span className="text-sm text-gray-600">or</span>
          </div>
          <div className="mb-4">
            <button className="flex items-center justify-center w-full px-4 py-2 font-bold text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Don't have an account yet?
            </span>
            <Link
              to="/signup"
              className="ml-2 text-sm text-blue-500 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
