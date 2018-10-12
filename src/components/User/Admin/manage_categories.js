import React from 'react';
import UserLayout from '../../../HighOrder/user';
import ManageBrands from './manage_brands';
import ManageStyles from './manage_styles';

const ManageCategories = () => {
    return (
        <UserLayout>
            <ManageBrands/>
            <ManageStyles/>
        </UserLayout>
    );
};

export default ManageCategories;