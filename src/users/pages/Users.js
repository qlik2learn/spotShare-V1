import React from 'react';
import UserList from '../components/UsersList';
const Users = () => {
    const users = [
        {
            id: "u1",
            name: "David",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
            places: 3
        }
    ];
    return <UserList items={users} />

}

export default Users;