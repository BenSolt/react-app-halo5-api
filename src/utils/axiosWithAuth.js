import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.haloapi.com',
    headers: {
      //Authorization: 
      "Ocp-Apim-Subscription-Key" : `${process.env.NEXT_PUBLIC_REACT_APP_KEY}`
    }
  });
};
export default axiosWithAuth;