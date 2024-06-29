import React from 'react';

interface BlogPreviewProps {
  title: string;
  image: string;
  content: string;
  username: string;
  postedTime: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, image, content, username, postedTime }) => {
  return (
    <div className="max-w-4xl p-4 mx-auto my-8 bg-white rounded-lg shadow-md sm:p-8">
      <h1 className="mb-4 font-serif text-2xl font-extrabold text-center sm:text-4xl">“{title}”</h1>
      <img src={image} alt={title} className="object-cover w-full pt-5 rounded-lg sm:h-96 h-60" />
      <div className="p-4">
        <p className="mb-6 text-base text-gray-700 sm:text-lg">{content}</p>
        <div className="flex flex-col justify-between md:items-center md:flex-row">
          <div className="flex items-center">
            <img
              src={`https://i.pravatar.cc/150?u=${username}`}
              alt={username}
              className="w-10 h-10 mr-2 rounded-full sm:w-14 sm:h-14"
            />
            <div>
              <p className="text-sm font-medium text-gray-900 sm:text-lg">{username}</p>
              <p className="text-xs text-gray-600 sm:text-sm">{postedTime}</p>
            </div>
          </div>
          <div className="flex mt-10 space-x-2 md:mt-0 ">
            <button className="px-4 py-2 text-sm text-white transition bg-blue-500 rounded-lg shadow-md sm:px-6 sm:py-3 sm:text-lg hover:bg-blue-600">
              Appreciate
            </button>
            <button className="px-4 py-2 text-sm text-white transition bg-green-500 rounded-lg shadow-md sm:px-6 sm:py-3 sm:text-lg hover:bg-green-600">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;
