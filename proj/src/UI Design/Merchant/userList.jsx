import React, { useState, useEffect } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import UserDetails from "./userDetails";
import PaginationButtons from "../pagination/paginationButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const UserList = ({merchantLogged}) => {

  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [userToShow, setUserToShow] = useState(null);

  const [pageCount, setPageCount] = useState(0);
  const [userPage, setUserPage] = useState([]);
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(5);

  useEffect(() => {

    setPageCount(Math.ceil(users.length / 5));
    setUserPage(users.slice(pageStart, pageEnd));
  }, [users]);

  useEffect(() => {
    setUserPage(users.slice(pageStart, pageEnd));
  }, [pageStart, pageEnd]);

  useEffect(() => {

    if (!merchantLogged) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/get-all-users');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleShowDetails = (user) => {
    setUserToShow(user)
    setShowDetails(true);
  }

  const handlePageClick = (event) => {
    setPageEnd((event.selected + 1) * 5);
    setPageStart(((event.selected + 1) * 5) - 5);
  }

  return (
    <div className="flex w-[80%] flex-col px-28 pt-16 justify-center items-center">

        <div className="flex items-center border-b border-[#2D4944] mb-16 w-[90%] relative">

              <Link to="/" className="flex"> 
                <div className="flex text-white bg-[#2D4944] font-semibold gap-2 cursor-pointer mb-3 absolute bottom-0 left-0 p-2 text-xs rounded-xl hover:bg-[#dadada] justify-center items-center">
                    <FaArrowLeftLong size={15} />
                    Dashboard
                </div>
              </Link>

              <h1 className="text-[#2D4944] ml-28 p-4 font-bold text-4xl">Users</h1>
          </div>

        <div className="w-[90%] flex flex-col justify-center content-center items-center gap-y-5">
                {users.map((user) => (
                    <div key={user.username} className="w-full">
                        <div className="bg-white border border-[#2D4944] rounded-2xl flex items-center text-center justify-center p-5 font-bold text-sm">

                            <div className="flex flex-col text-[#2D4944] items-center justify-center w-[5%]">
                                <FaRegCircleUser size={40}/>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[18.75%]">
                              <p className="text-[#c1c1c1]">Username: </p>
                              <p className="truncate">{user.username}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[18.75%]">
                              <p className="text-[#c1c1c1]">Password: </p>
                              <p className="truncate">{user.password}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[18.75%]">
                              <p className="text-[#c1c1c1]">Name: </p>
                              <p className="truncate">{user.fname} {user.lname}</p>
                            </div>

                            <div className="flex flex-col p-4 truncate text-[#2D4944] w-[18.75%]">
                              <p className="text-[#c1c1c1]">Email Address: </p>
                              <p className="truncate">{user.email}</p>
                            </div>

                            <div className="w-[10%]">
                              <div className="flex text-white bg-[#2D4944] cursor-pointer p-2 text-xs rounded-xl hover:bg-[#50726b] justify-center items-center w-[90%]">
                                  Remove User
                              </div>
                            </div>

                            <div className="w-[10%]">
                              <div className="flex text-[#2D4944] bg-white border border-[#2D4944] cursor-pointer p-2 text-xs rounded-xl hover:bg-[#dadada] justify-center items-center w-[90%]"
                              onClick={(e) => handleShowDetails(user)} >
                                  User Details
                              </div>
                            </div>

                        </div>
                    </div>
                ))}
              <PaginationButtons pageCount={pageCount} handlePageClick={handlePageClick} />
        </div>

      <UserDetails showDetails={showDetails} setShowDetails={setShowDetails} userToShow={userToShow} />

    </div>
  );
}

export default UserList;
