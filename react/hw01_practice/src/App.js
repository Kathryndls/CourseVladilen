import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const onBookMark = (userId) => {
        setUsers(
            users.map((user) => {
                if (user._id === userId) {
                    user.bookmark = !user.bookmark;
                }
                return user;
            })
        );
    };

    return (
        <div>
            <Users
                users={users}
                onDelete={handDelete}
                onToggleBookMark={onBookMark}
            />
        </div>
    );
}

export default App;
