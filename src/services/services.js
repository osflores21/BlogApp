import axios from "axios";

const URL = "https://blogapi-production-9469.up.railway.app/api/";

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(URL + postId);
    return response.status;
  } catch (err) {
    throw err;
  }
};

export const fetchData = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const fetchData2 = async (search) => {
  try {
    if (search) {
      URL += `${encodeURIComponent(search)}`;
    }
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const newPost = async (data) => {
  try {
    const response = await axios.post(URL, data)
    return response.status
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const editPost = async (id, data) => {
  try {
    const response = await axios.put(URL + id, data)
    return response.status;
  } catch (err) {
    console.log(err);
    throw err;
  }
}