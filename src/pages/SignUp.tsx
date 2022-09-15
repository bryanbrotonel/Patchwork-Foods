import React from 'react';
import SignUpForm from '../components/SignUpForm';

function SignUp() {
  return (
    <div className="w-screen h-screen">
      <div className="h-full flex">
        <div className="w-1/2 grid place-items-center pb-48">Patchwork Foods</div>
        <div className="w-1/2 grid place-items-center pb-48 bg-white">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
