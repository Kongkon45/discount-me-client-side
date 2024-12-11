import React from "react";
import SignInBanner from "./SignInBanner/SignInBanner";
import SignInForm from "./SignInForm/SignInForm";

const SignIn = () => {
  return (
    <div>
      <section>
        <SignInBanner />
      </section>
      <section>
        <SignInForm />
      </section>
    </div>
  );
};

export default SignIn;
