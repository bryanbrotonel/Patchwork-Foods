import React, { useEffect } from 'react';
import SignUpForm from '../components/SignUpForm';

import Logo from '../assets/images/Logo.svg';
import Ellipse from '../assets/images/Ellipse.svg';
import Rect from '../assets/images/Rect.svg';

function SignUp() {

    useEffect(() => {
      document.title = 'Sign Up | Patchwork Foods';
    }, []);
    
  return (
    <div className="w-screen h-screen">
      <div className="h-full flex">
        <div className="w-1/2 relative grid place-items-center pb-24 overflow-hidden">
          <img src={Logo} className="w-2/3 max-w-lg" />
          <img src={Ellipse} className="absolute -top-32 -right-24" />
          <img
            src={Rect}
            className="absolute bottom-36 -right-32 rotate-12"
          />
          <img src={Ellipse} className="absolute -bottom-8 -left-32" />
          <img
            src={Rect}
            className="absolute -top-32 left-0 rotate-45"
          />
        </div>
        <div className="w-1/2 grid place-items-center pb-24 bg-white container">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
