import { AuthEndpoints } from "../../../apiEndPoints";
import APIrequest from "../../axios";
import logger from "../../../utils/logger";

export const AuthServices = {
  SignUp: async (bodyData) => {
    try {
      const payload = {
        ...AuthEndpoints.SignUp(bodyData),
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },

  Login: async (bodyData) => {
    try {
      const payload = {
        ...AuthEndpoints.Login(bodyData),
        bodyData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },

  UploadProfilePhoto: async (file) => {
    try {
      const fileUpload = new FormData();
      fileUpload.append("file", file);

      const res = await APIrequest(AuthEndpoints.UploadProfilePhoto(fileUpload));
      const data = res.data;

      if (!res.ok || !data?.status) {
        throw {
          message: data?.message || data?.errorMsg || "Profile upload failed",
          status: res.status,
        };
      }

      return {
        message: "Upload successfully",
        status: 200,
        data: {
          profileImageURL: data.baseUrl,
          mediaId: data.id,
        },
      };
    } catch (error) {
      return {
        message: error.message || "Something went wrong during upload",
        status: error.status || 500,
      };
    }
  },

  UpdateProfile: async (profileData) => {
    try {
      const payload = {
        ...AuthEndpoints.UpdateProfile(profileData),
        bodyData: profileData,
      };
      const res = await APIrequest(payload);
      return res;
    } catch (error) {
      logger(error);
      throw error;
    }
  },
};
