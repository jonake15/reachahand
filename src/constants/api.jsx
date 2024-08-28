const EVENTS_API_URL = "http://127.0.0.1:8000/api/events";
const BLOG_API_URL = "http://127.0.0.1:8000/api/posts";

// Function to fetch events data from the API
export const fetchEventData = async () => {
  try {
    const response = await fetch(EVENTS_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch events data");
    }
    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    throw new Error(`Error fetching events data: ${error.message}`);
  }
};

// Function to fetch blog data from the API
export const fetchBlogData = async () => {
  try {
    const response = await fetch(BLOG_API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }
    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    throw new Error(`Error fetching blog data: ${error.message}`);
  }
};
