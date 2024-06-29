import BlogPreview from "../components/BlogPreview";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import Section from "../components/Section";

const BlogDetails: React.FC = () => {
  return (
    <div className="text-black bg-gray-100" >

        <MainNav/>
    <div className="flex items-center justify-center mt-10 ">
      <div className="container mb-20">
         <div className="min-h-screen pt-10 pb-10 ">

        <BlogPreview title="A clear answer from a Medium employee who actually knows"
        image="https://miro.medium.com/v2/resize:fill:1200:600/1*rWHZD1BD9cvcPmClcFTvKw.jpeg"
        content="A brief content preview of the blog post goes here...A brief content preview of the blog post goes here...A brief content preview of the blog post goes here...A brief content preview of the blog post goes here...A brief content preview of the blog post goes here...A brief content preview of the blog post goes here..."
        username="Ariel Meadow Stallings"
        postedTime="Jan 12, 2024"  />
         </div>
      </div>
    </div>
    <div className="mb-40">
        <h3 className="pb-5 ml-5 text-xl font-bold md:ml-40">Recommended from InfoNest</h3>
      <Section/>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogDetails;