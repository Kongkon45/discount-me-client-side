import React from 'react';
import SignUpBanner from './SignUpBanner/SignUpBanner';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp = () => {
    return (
        <div>
            <section>
                <SignUpBanner/>
            </section>

            <section>
                <SignUpForm/>
            </section>
        </div>
    );
};

export default SignUp;