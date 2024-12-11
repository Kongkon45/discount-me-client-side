import React from 'react';
import SignInBanner from './SignInBanner/SignInBanner';
import SignInForm from './SignInForm/SignInForm';

const SignIn = () => {
    return (
        <div className='custom-px-5 md:px-16 lg:px-20 xl:px-28 2xl:px-32 3xl:px-40 4xl:px-44 5xl:px-[200px]'>
            <SignInBanner/>
            <SignInForm/>
        </div>
    );
};

export default SignIn;