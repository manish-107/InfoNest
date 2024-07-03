import React from 'react';

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  avatar: string;
  backgroundImage: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, author, date, avatar, backgroundImage, link }) => (
  <article className="relative flex flex-col justify-end px-4 py-4 pt-48 pb-4 overflow-hidden bg-gray-900 isolate rounded-2xl dark:bg-gray-700 sm:pt-32 lg:pt-48">
    <img src={backgroundImage} alt="" className="absolute inset-0 object-cover w-full h-full -z-10" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
    <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
      <time className="mr-8">{date}</time>
      <div className="flex items-center -ml-4 gap-x-4">
        <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
          <circle cx="1" cy="1" r="1"></circle>
        </svg>
        <div className="flex gap-x-2.5">
          <img src={avatar} alt="" className="flex-none w-6 h-6 rounded-full bg-white/10" />
          {author}
        </div>
      </div>
    </div>
    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
      <a href={link}><span className="absolute inset-0"></span>{title}</a>
    </h3>
  </article>
);

export default BlogPost;
