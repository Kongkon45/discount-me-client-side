import React from 'react';
import SignInBanner from './SignInBanner/SignInBanner';
import SignInForm from './SignInForm/SignInForm';

const SignIn = () => {
    return (
        <div className='custom-container'>
            <SignInBanner/>
            <SignInForm/>
        </div>
    );
};

export default SignIn;