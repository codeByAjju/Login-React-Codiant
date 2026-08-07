import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SignupForm } from "../../../components/AuthElement";
import { AuthServices } from "../../../services/User/Auth/index.service";
import userRouteMap from "../../../routes/User/userRouteMap";

function UserSignup() {
  const navigate = useNavigate();

  const handleImageUpload = async (file, setFieldValue) => {
    if (!file) return;

    try {
      const uploadRes = await AuthServices.UploadProfilePhoto(file);
      if (uploadRes.status === 200) {
        toast.success("Profile photo uploaded successfully");
        setFieldValue("profileImageURL", uploadRes.data.profileImageURL);
      } else {
        toast.error(uploadRes.message || "Profile upload failed");
      }
    } catch (err) {
      console.error("Image upload error:", err);
      toast.error("Failed to upload profile photo");
    }
  };

  const handleSignup = async (values) => {
    try {
      const signupPayload = {
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        email: values.email,
        password: values.password,
        profileImageURL: values.profileImageURL,
      };

      const res = await AuthServices.SignUp(signupPayload);

      if (res.status === 200) {
        toast.success("Signup successfully");
        navigate(userRouteMap.LOGIN.path);
      } else {
        toast.error(res.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Something went wrong during signup");
    }
  };

  return (
    <SignupForm
      onSubmit={handleSignup}
      onProfilePhotoChange={handleImageUpload}
    />
  );
}

export default UserSignup;
