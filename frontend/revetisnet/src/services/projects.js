import axios from "axios";

class GetProjectsAPI {
  constructor() {
    this.baseURL = "http://localhost:8000/portfolio/api/projects/";
  }

  getAllProjects = async () => {
    try {
      const response = await axios.get(this.baseURL);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };
}

export default GetProjectsAPI;
