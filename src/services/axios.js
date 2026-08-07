import axios from "axios";
import { API_BASE_URL } from "../config";
import { getLocalStorageToken } from "../utils/common.utils";

const APIrequest = async ({
  method = "GET",
  url,
  baseURL = API_BASE_URL,
  queryParams,
  bodyData,
}) => {
  try {
    const token = getLocalStorageToken();

    const config = {
      method,
      url,
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      params: queryParams,
    };

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (bodyData) {
      if (bodyData instanceof FormData) {
        config.data = bodyData;
        delete config.headers["Content-Type"];
      } else {
        config.data = bodyData;
      }
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};

export default APIrequest;