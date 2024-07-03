import React from 'react';
import AllBlogList from '../components/AllBlogList';
import MainNav from '../components/MainNav';

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  publishedDate: string;
}

interface UserProfileProps {
  profilePicture: string;
  username: string;
  email: string;
  savedPosts: Post[];
}

const UserProfile: React.FC<UserProfileProps> = ({ profilePicture, username, email, savedPosts }) => {
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
    {
      title: 'Cloud Computing: The Backbone of Modern Applications',
      author: 'Mike',
      date: 'Aug 12, 2023',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      backgroundImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxjbG91ZHxlbnwwfDB8fHwxNzEyNzUzMTY4fDA&ixlib=rb-4.0.3&q=80&w=1080',
      link: '/tech-blog/post3',
    },
  ];

  return (
    <div className="min-h-screen text-white bg-black">
      <MainNav/>
      <div className="mx-auto mt-8 overflow-hidden bg-black rounded-lg shadow-md max-w-7xl">
        <div className="flex items-center p-8 ml-2 md:ml-10 ">
          <img className="w-24 h-24 rounded-full" src={profilePicture} alt="Profile" />
          <div className="ml-6">
            <h2 className="text-3xl font-semibold">{username}</h2>
            <p className="text-white">{email}</p>
          </div>
        </div>
        <div className="p-0 md:p-8">
          <h3 className="mb-6 ml-10 text-2xl font-semibold">Saved Posts</h3>
          {savedPosts.length > 0 ? (
            <div className="flex items-center justify-center mt-0">
              <div className="container mb-20">
                <div className="w-full">
                  <div className="px-6 pt-8 mx-auto max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
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
          ) : (
            <p className="text-gray-600">No saved posts.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Example usage of the UserProfile component
const UserProfiles: React.FC = () => {
  const user = {
    profilePicture: 'https://via.placeholder.com/150',
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    savedPosts: [
      {
        id: 1,
        title: 'First Post',
        content: 'This is the content of the first post.',
        imageUrl: 'https://via.placeholder.com/600x400',
        publishedDate: '2023-06-01',
      },
      {
        id: 2,
        title: 'Second Post',
        content: 'This is the content of the second post.',
        imageUrl: 'https://via.placeholder.com/600x400',
        publishedDate: '2023-06-02',
      },
    ],
  };

  return (
    <UserProfile
      profilePicture={user.profilePicture}
      username={user.username}
      email={user.email}
      savedPosts={user.savedPosts}
    />
  );
};

export default UserProfiles;
