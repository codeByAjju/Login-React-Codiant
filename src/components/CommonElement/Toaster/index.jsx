import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toaster({
  autoClose = 3000,
  closeOnClick = true,
  position = "top-right",
  theme = "light",
  ...props
}) {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={closeOnClick}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Bounce}
      {...props}
    />
  );
}
