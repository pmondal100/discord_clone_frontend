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

interface responseStructure {
  status?: number;
  message?: string;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5005",
  timeout: 3000,
});

axios.interceptors.request.use(
  (config: any) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

export const sendFriendInvitationAPI = async (data: any) => {
  try {
    return await axiosInstance.post("/friends/sendInvitation", data);
  } catch (e) {
    handleTokenExceptions(e);
    return {
      error: true,
      errorObj: e,
    };
  }
};

const handleTokenExceptions = (exception: any) => {
  const statusCode = exception?.response?.status;
  if (statusCode === 403 || statusCode === 401) {
    localStorage.clear();
    window.location.pathname = "/login";
  }
};
