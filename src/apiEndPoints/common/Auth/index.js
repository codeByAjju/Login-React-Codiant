const AuthEndpoints = {
  Login: (bodyData) => {
    return {
      url: "/signin",
      method: "POST",
      bodyData,
    };
  },
  SignUp: (bodyData) => {
    return {
      url: "/signup",
      method: "POST",
      bodyData,
    };
  },
  UploadProfilePhoto: (bodyData) => {
    return {
      url: "/media/upload/image/user",
      method: "POST",
      bodyData,
    };
  },
  ProfileUpdate: (bodyData) => {
    return {
      url: "/profile",
      method: "PUT",
      bodyData,
    };
  },
  ResetPassword: (bodyData) => {
    return {
      url: "/reset-password",
      method: "POST",
      bodyData,
    };
  },
  UpdateProfile: (bodyData) => {
    return {
      url: "/profile",
      method: "PUT",
      bodyData,
    };
  },
};

export default AuthEndpoints;
