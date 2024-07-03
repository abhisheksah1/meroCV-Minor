import axios from "axios";
import React, { useEffect, useState } from "react";

function RenderFeedback() {
  const [users, setUsers] = useState([]); // State to store user data
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Adjust this to display more items per row

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/adminUser/getFeedback`)
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setUsers(response.data);
          console.log("All Feedbacks data fetched:", response.data);
        } else {
          console.log("No feedback found.");
        }
      })
      .catch((error) => {
        console.log("Error fetching all feedbacks data:", error.message);
      });
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = users.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < users.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mt-28 mb-28 mx-auto p-8 rounded-lg border border-gray-200 relative">
      <p className="text-center text-2xl font-semibold text-black mb-10">Feedback </p>
      
      <div className="flex flex-col lg:flex-row justify-center items-center mb-4">
        <button
          onClick={handlePreviousPage}
          className="bg-white text-gray-700 px-4 py-2 mr-2 rounded-l-lg shadow-md disabled:opacity-50 mb-2 lg:mb-0"
          disabled={currentPage === 0}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
        <div className="w-full lg:w-auto flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {currentItems.map((user, index) => (
              <div key={index} className="p-4 bg-gray-300 rounded-md shadow-md">
                <p className="text-lg text-gray-700 font-semibold">{user.name}</p>
                <p className="text-md text-gray-600 mt-2">{user.message}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNextPage}
          className="bg-white text-gray-700 ml-2 md:mt-2 sm:mt-2 px-4 py-2 rounded-r-lg shadow-md disabled:opacity-50 mb-2 lg:mb-0"
          disabled={endIndex >= users.length}
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
      <div className="absolute right-8 top-8">
        <p className="text-black">Total Feedback: {users.length}</p>
      </div>
    </div>
  );
}

export default RenderFeedback;
 