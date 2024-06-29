import React, { useState } from 'react';
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

const WriteBlogPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
    const blogPost = {
      title,
      content,
      imageUrl,
    };
    console.log(blogPost);
  };

  return (
    <div  >
      <MainNav/>
    <div className="min-h-screen p-6 pb-40 text-white bg-black">
      <div className="max-w-4xl p-6 mx-auto bg-black rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Write a New Blog Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 font-bold text-gray-100">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="w-full px-3 py-2 text-black bg-gray-100 border rounded-lg"
              placeholder="Enter your blog title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block mb-2 font-bold text-gray-100">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
              className="w-full h-40 px-3 py-2 text-black border rounded-lg"
              placeholder="Write your blog content"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="imageFile" className="block mb-2 font-bold text-gray-100">
              Choose an Image
            </label>
            <input
              id="imageFile"
              type="file"
              accept="image/*"
              onChange={handleImageFileChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          {imageUrl && (
            <div className="mb-4">
              <img src={imageUrl} alt="Selected" className="h-auto max-w-full rounded-lg" />
            </div>
          )}
          <button
            type="submit"
            className="px-10 py-2 mt-5 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
          <Footer/>
    </div>
  );
};

export default WriteBlogPage;
