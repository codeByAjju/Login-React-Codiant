import { createSlice } from "@reduxjs/toolkit";
import logger from "../../utils/logger";

const clearUserAuthData = (state) => {
  return {
    ...state,
    userAuthdata: {},
  };
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userAuthdata: {},
  },
  reducers: {
    userLoginAuthdata: (state, action) => ({
      ...state,
      userAuthdata: { ...action.payload },
    }),
    logoutUserAuthAction: clearUserAuthData,
    logoutSuperAdminAction: clearUserAuthData,
    updateUserAuthDataAction: (state, action) => ({
      ...state,
      userAuthdata: { ...state.userAuthdata, ...action.payload },
    }),
  },
});

export const {
  userLoginAuthdata,
  logoutUserAuthAction,
  logoutSuperAdminAction,
  updateUserAuthDataAction,
} = authSlice.actions;

export const updateUserAuthdataLogin = (data) => async (dispatch) => {
  try {
    dispatch(userLoginAuthdata(data));
  } catch (error) {
    logger(error);
  }
};

export const logout = (navigate) => async (dispatch) => {
  try {
    dispatch(logoutUserAuthAction());
    navigate("/");
  } catch (error) {
    logger(error);
  }
};

export const getUserAuthData = (state) => state.auth.userAuthdata;

export default authSlice.reducer;
