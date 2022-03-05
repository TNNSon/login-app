import axios from "axios";

// A mock function to mimic making an async request for data
export async  function fetchLogin({username, password}) {
  try {
    const url = `${process.env.REACT_APP_BE_URL}/login`
    const response = await axios.post(url, {username, password});
    return response.data;
  } catch (error) {
    // throw error to show to UI
    throw error;
  }
}
