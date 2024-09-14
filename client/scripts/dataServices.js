// import { log } from "console";

const baseURL = "http://localhost:3002/member"; // Write down the base URL of the created API.

const getAllUser = async () => {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// getAllUser();

const createUser = async (userData) => {
  try {
    const data = await axios.post(baseURL, userData);
    return { res: data};
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return { res: data};
  } catch (error) {
    console.error(error);
  }
};



export { getAllUser, deleteUser, createUser };
