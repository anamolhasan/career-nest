import React, { use } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";


const SocialLogin = ({from}) => {
  const { signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then(result => {
            console.log(result)
            navigate(from || '/')
          })
          .catch(error => {
            console.log(error)
          })
  }
  return (
    <div className="">
      <div className="divider mb-8">OR</div>
      {/* Google */}
      <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full">
        <FcGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
