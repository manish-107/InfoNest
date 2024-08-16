interface TosterMsgProps {
  title: String;
  color: String;
}

const TosterMsg: React.FC<TosterMsgProps> = ({ title, color }) => {
  return (
    <>
      <div
        id="toast-default"
        className={`fixed z-50 flex items-center w-full max-w-xs p-4 text-gray-100 transition-transform duration-300 ease-in-out transform bg-${color}-800 rounded-lg shadow-lg top-10 right-4`}
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-200 bg-blue-800 rounded-lg">
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
            />
          </svg>
          <span className="sr-only">Fire icon</span>
        </div>
        <div className="text-sm font-normal ms-3">{title}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 text-gray-500 hover:text-white rounded-lg focus:ring-2 focus:ring-gray-700 p-1.5 hover:bg-gray-700 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#toast-default"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default TosterMsg;
