const axios = require("axios");

async function getUsersList() {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
}

async function getPostsList() {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
}

let userData;
let postData;
exports.getUser = async (req, res) => {
  try {
    const { data } = await getUsersList();
    userData = data;
    res.status(200).json({ message: "users fetched", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPost = async (req, res) => {
  try {
    const { data } = await getPostsList();

    res.status(200).json({ message: "posts fetched", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
