import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL:http://127.0.0.1:5001/e-website-bd388/us-central1/api

  //local instance on render.com
   baseURL: "https://amazone-backend-deploy.onrender.com",

   

  //deployed version of amazon server on render.com
  //baseURL: "https://amazon-api-deploy-pm1z.onrender.com",
});

export { axiosInstance };