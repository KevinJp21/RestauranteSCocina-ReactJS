import axios from "axios";

const fetchData = async () => {
    const response = await axios.get('https://your-food-api-url');
    const data = response.data;
    return data;
  };

  export default fetchData;