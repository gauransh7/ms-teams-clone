import axios from "axios";

const googleLogin = async (accesstoken, googleId) => {
    let res = await axios.post(
      "http://localhost:8000/rest-auth/google/",
      {
        access_token: accesstoken,
        code: googleId
      }
    );
    console.log(res);
    return await res.status;
  };

export default googleLogin;