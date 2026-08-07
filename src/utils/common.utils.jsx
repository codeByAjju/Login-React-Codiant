import { NAME_KEY } from "../config";
import CryptoJS from "crypto-js";

export const setLocalStorageToken = (token) => {
  localStorage.setItem(
    `${NAME_KEY}:token`,
    CryptoJS.AES.encrypt(token, `${NAME_KEY}-token`).toString()
  );
};
/**
 * Retrieves and decrypts the token from local storage.
 * @returns {string|boolean} - Decrypted token or false if not found.
 */
export const getLocalStorageToken = () => {
  const token = localStorage.getItem(`${NAME_KEY}:token`);
  if (token) {
    const bytes = CryptoJS.AES.decrypt(token, `${NAME_KEY}-token`);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  return false;
};
/**
 * Removes the token from the local storage and navigates to a specific path if provided.
 * @param {Function} navigate - The navigate function from React Router.
 */
export const removeLocalStorageToken = (navigate) => {
  if (localStorage.getItem(`${NAME_KEY}:token`)) {
    localStorage.setItem(`${NAME_KEY}:token`, null);
  }
  if (navigate) {
    navigate("/login");
  }
};
// Set item in session storage
