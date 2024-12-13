import React from 'react';
import AccountSettings from '../AccountSettings/AccountSettings';
import BillingAddress from '../BillingAddress/BillingAddress';
import ChangePassword from '../ChangePassword/ChangePassword';

const Setting = () => {
    return (
        <div>
            <AccountSettings/>
            <BillingAddress/>
            <ChangePassword/>
        </div>
    );
};

export default Setting;