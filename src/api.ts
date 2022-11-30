import axios from "axios";

interface loginReqBody {
  email: string;
  password: string;
}

interface registerReqBody {
  email: string;
  password: string;
  username: string;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 3000,
});

export const loginAPI = async (reqBody: loginReqBody) => {
  try {
    return await axiosInstance.post("/auth/loginUser", reqBody);
  } catch (e) {
    return {
      error: true,
      errorObj: e,
    };
  }
};

export const registerAPI = async (reqBody: registerReqBody) => {
  try {
    return await axiosInstance.post("/auth/registerUser", reqBody);
  } catch (e) {
    return {
      error: true,
      errorObj: e,
    };
  }
};
