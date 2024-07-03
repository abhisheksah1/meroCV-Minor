import axios from "axios";
import React, { useEffect, useState } from "react";
import Toast from "react-hot-toast";

function Contacts() {
  const [users, setUsers] = useState([]); // State to store user data
  const [searchTerm, setSearchTerm] = useState(""); // State to store search term


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/adminUser/getAllContact`)
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          setUsers(response.data);
          console.log("All users data fetched:", response.data);
        } else {
          console.log("No contacts found.");
        }
      })
      .catch((error) => {
        console.log("Error fetching all users contact data:", error.message);
      });
  }, []);

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:8000/api/adminUser/deleteContact/${userId}`)
      .then((response) => {
        setUsers(users.filter((user) => user._id !== userId)); // Update the state to remove the deleted user
        Toast.success("User contact deleted successfully.");
      })
      .catch((error) => {
        console.log("Error deleting user:", error.message);
        Toast.error("Failed to delete user contact.");
      });
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-6">Contact Management</h1>

         {/* Search Input */}
         <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search user contact"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.N
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>

                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone Number
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Summary
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, i) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {i + 1}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {user.fullName}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {user.company}
                  </td>

                  <td className="px-6 py-4 border-b border-gray-200">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {user.phoneNumber}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {user.message}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-right">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && (
            <div className="text-center py-4">No contacts available.</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Contacts;
