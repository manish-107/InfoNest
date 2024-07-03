
import AllBlogList from "../components/AllBlogList";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import Section from "../components/Section";

const Dashboard = () => {
    const blogs = [
      {
        title: 'The Future of Artificial Intelligence: Trends and Challenges',
        author: 'John',
        date: 'Oct 11, 2023',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        backgroundImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080',
        link: '/tech-blog/post1',
      },
      {
        title: 'The Future of Artificial Intelligence: Trends and Challenges',
        author: 'John',
        date: 'Oct 11, 2023',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        backgroundImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080',
        link: '/tech-blog/post1',
      },
      {
        title: 'The Future of Artificial Intelligence: Trends and Challenges',
        author: 'John',
        date: 'Oct 11, 2023',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        backgroundImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080',
        link: '/tech-blog/post1',
      },
      {
        title: 'The Future of Artificial Intelligence: Trends and Challenges',
        author: 'John',
        date: 'Oct 11, 2023',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        backgroundImage: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080',
        link: '/tech-blog/post1',
      },
      {
        title: 'Blockchain Technology: Beyond Cryptocurrencies',
        author: 'Alex',
        date: 'Sept 25, 2023',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        backgroundImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxibG9jayUyMGNoYWlufGVufDB8MHx8fDE3MTI3NTMxNjd8MA&ixlib=rb-4.0.3&q=80&w=1080',
        link: '/tech-blog/post2',
      },
      {
        title: 'Cloud Computing: The Backbone of Modern Applications',
        author: 'Mike',
        date: 'Aug 12, 2023',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        backgroundImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjbG91ZHxlbnwwfDB8fHwxNzEyNzUzMTY4fDA&ixlib=rb-4.0.3&q=80&w=1080',
        link: '/tech-blog/post3',
      },
      // Add more blog objects here if needed
    ];
  return (
    <div className="bg-black ">
      <MainNav />
      <div className="flex justify-center">
        <div className="container p-5 pb-10">
          <div className="border-2 rounded-lg bg-gradient-to-r to-gray-900 from-slate-900 dark:text-gray-100 border-slate-700">
            <div className="container px-4 py-8 mx-auto space-y-8 lg:px-6 lg:py-10 xl:max-w-7xl">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-black text-transparent md:text-4xl bg-clip-text bg-gradient-to-r to-pink-700 from-red-400">
                  Getting Started with InfoNest
                </h2>
                <h3 className="mx-auto text-lg font-medium leading-relaxed text-gray-700 md:text-xl dark:text-gray-300 lg:w-2/3">
                  Get to know how it can help you build the User Interface of
                  your website and web application with the minimal effort.
                </h3>
              </div>
              <div>

              </div>
              <div className="flex flex-col items-center p-0 md:flex-row md:justify-center">
                <div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Tech
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    Social
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    
                    Science
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    Nature
                  </span>
                </div>
                <div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                    Art
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                    Coding
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
                    Life
                  </span>
                  <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                    people
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white"> 

      <Section/>
      </div>
       <div className="flex items-center justify-center mt-20">
      <div className="container mb-20">
        <div className="w-full ">
          <div className="px-6 pt-8 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">From The Blog</h2>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {blogs.map((blog, index) => (
        <AllBlogList
          key={index}
          title={blog.title}
          author={blog.author}
          date={blog.date}
          avatar={blog.avatar}
          backgroundImage={blog.backgroundImage}
          link={blog.link}
        />
      ))}
    </div>
          </div>
        </div>
      </div>
    </div>

      <Footer/>

    </div>
  );
};

export default Dashboard;
