import axios from "axios";

class BlogPostAPI {
  constructor() {
    this.baseURL = "http://127.0.0.1:8000/blog/api/blogposts/";
  }

  getAllBlogPosts = async (lang) => {
    try {
      const response = await axios.get(this.baseURL, {
        headers: {
          "Accept-Language": lang,
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      throw error;
    }
  };
}

export default BlogPostAPI;
