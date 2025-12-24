import React, { use } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
  const { signInWithGoogle } = use(AuthContext);

  const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then(result => {
            console.log(result)
          })
          .catch(error => {
            console.log(error)
          })
  }
  return (
    <div>
      <div className="divider">OR</div>
      {/* Google */}
      <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] w-full">
        <FcGoogle />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
