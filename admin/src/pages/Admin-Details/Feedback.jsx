
import axios from "axios";
import React, { useEffect, useState } from "react";
import Toast from "react-hot-toast";

function Feedback() {
  const [users, setUsers] = useState([]); // State to store user data

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

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:8000/api/adminUser/deleteFeedback/${userId}`)
      .then((response) => {
        setUsers(users.filter((user) => user._id !== userId)); // Update the state to remove the deleted user
        Toast.success("User feedback deleted successfully.");
      })
      .catch((error) => {
        console.log("Error deleting feedback:", error.message);
        Toast.error("Failed to delete user feedback.");
      });
  };
  return (
    <div>
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-6">Feedbacks Management</h1>

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
                  Message
                </th>
              </tr>
            </thead>  
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {i + 1}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {user.name}
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
            <div className="text-center py-4">No feedback available.</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Feedback;
