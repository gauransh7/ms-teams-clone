import axios from "axios";

const fbLogin = async (accesstoken, userId) => {
  let res = await axios.post(
    "http://localhost:8000/rest-auth/facebook/",
    {
      access_token : accesstoken,
      code : userId,
    }
  );
  console.log(res);
  return await res.status;
};

export default fbLogin;