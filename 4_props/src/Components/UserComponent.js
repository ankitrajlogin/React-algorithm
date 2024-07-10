
import React from 'react';

const UserComponent = ({
    name = 'Default Name',
    userid = 'Default UserID',
    address = 'Default Address',
    place = 'Default Place',
    pincode = '000000',
    dob = '1970-01-01'
}) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>User ID: {userid}</p>
            <p>Address: {address}</p>
            <p>Place: {place}</p>
            <p>Pincode: {pincode}</p>
            <p>Date of Birth: {dob}</p>
        </div>
    );
};

export default UserComponent;
