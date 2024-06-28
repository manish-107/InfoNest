import React from 'react';

interface BlogPostProps {
  title: string;
  description: string;
  author: string;
  date: string;
  avatar: string;
  backgroundImage: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, description, author, date, avatar, backgroundImage }) => (
  <div className="w-11/12 max-w-sm mt-10 lg:max-w-full lg:flex">
    <div
      className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      title="Woman holding a mug"
    ></div>
    <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
      <div className="mb-8">
        <p className="flex items-center text-sm text-gray-600">
          <svg
            className="w-3 h-3 mr-2 text-gray-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </p>
        <div className="mb-2 text-xl font-bold text-gray-900">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex items-center">
        <img className="w-10 h-10 mr-4 rounded-full" src={avatar} alt={`Avatar of ${author}`} />
        <div className="text-sm">
          <p className="leading-none text-gray-900">{author}</p>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

const AllBlogList: React.FC = () => {
  const blogs = [
    {
      title: 'Can coffee make you a better developer?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'Jonathan Reinink',
      date: 'Aug 18',
      avatar: 'https://picsum.photos/seed/59/300/200',
      backgroundImage: 'https://picsum.photos/seed/59/300/200',
    },
    {
      title: 'Can coffee make you a better developer?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
      author: 'Jonathan Reinink',
      date: 'Aug 18',
      avatar: 'https://picsum.photos/seed/59/300/200',
      backgroundImage: 'https://picsum.photos/seed/59/300/200',
    },
    // Add more blog objects here
  ];

  return (
    <div className='flex flex-col items-center'>
      {blogs.map((blog, index) => (
        <BlogPost
          key={index}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          date={blog.date}
          avatar={blog.avatar}
          backgroundImage={blog.backgroundImage}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-20 ">
      <div className="container mb-20">
        <AllBlogList />
      </div>
    </div>
  );
};

export default App;
