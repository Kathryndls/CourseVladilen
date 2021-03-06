/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import GroupList from "./groupLIst";
import Pagination from "./pagination";
import User from "./user";
import api from '../api'
import { paginate } from "./utils/paginate";
import SearchStatus from './searchStatus'

const Users = ({ users: allUsers, ...rest }) => {
    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.professions.fetchAll()
            .then((data) =>
                setProfession(data))
    }, [])
    useEffect(() => {
        setCurrentPage(1)
    },[selectedProf])

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handlePropffessionSelect = (item) => {
        setSelectedProf(item);
    }
    const filteredUsers = selectedProf 
        ? allUsers.filter((user) => 
        JSON.stringify(user.profession)===
        JSON.stringify(selectedProf)
        )
        : allUsers;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    const clearFilter = () => {setSelectedProf()}
    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList 
                        selectedItem = {selectedProf}
                        items={professions} 
                        onItemSelect={handlePropffessionSelect}
                        valueProperty="_id"
                        contentProperty="name"
                    />
                    <button 
                        className="btn btn-secondary mt-2" 
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column">
            <SearchStatus length={count} />
                {count > 0 && (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user) => (
                                <User key={user._id} {...rest} {...user} />
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Users;
