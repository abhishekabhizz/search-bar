import React, { useState } from 'react';
import { data } from './data/data'; 
function App() {

  const [users, setUsers] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [doneTasks, setDoneTasks] = useState([]);
  const [updateTask, setUpdateTask] = useState(null);
  const [updateFirstName, setUpdateFirstName] = useState('');
  const [updateLastName, setUpdateLastName] = useState('');
  const [updatePhone, setUpdatePhone] = useState('');


  const filteredUsers = users.filter((item) => {
    const fullName = `${item.first_name} ${item.last_name}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Delete user task
  const deleteTask = (id) => {
    const updatedUsers = users.filter((item) => item.id !== id);
    setUsers(updatedUsers);
  };

  const markAsDone = (id) => {
    const task = users.find((item) => item.id === id);
    setDoneTasks([...doneTasks, task]);
    deleteTask(id);
  };


  const updateTaskHandler = (id) => {
    const task = users.find((item) => item.id === id);
    setUpdateTask(task);
    setUpdateFirstName(task.first_name);
    setUpdateLastName(task.last_name);
    setUpdatePhone(task.phone);
  };

  // Save updated task
  const saveUpdateHandler = () => {
    const updatedUsers = users.map((item) => {
      if (item.id === updateTask.id) {
        return {
          ...item,
          first_name: updateFirstName,
          last_name: updateLastName,
          phone: updatePhone,
        };
      }
      return item;
    });
    setUsers(updatedUsers);
    setUpdateTask(null);
  };

  // Cancel update task
  const cancelUpdateHandler = () => {
    setUpdateTask(null);
  };

  return (
    <div className=" container mx-auto p-4">
      <h1 className=" flex items-center justify-center text-2xl font-bold mb-4">Task Manager</h1>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        className="p-2 pl-10 text-xl text-gray-700 w-full"
        placeholder="Search names"
      />
      <table className=" w-full text-purple-400 mt-4">
        <thead className=" text-xs text-lime-500 uppercase">
          <tr >
            <th className="  px-3 py-2">ID</th>
            <th className="px-3 py-2">First Name</th>
            <th className="px-3 py-2">Last Name</th>
            <th className="px-3 py-2">Phone</th>
            <th className="px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 px-3">{item.id}</td>
              <td className="py-2 px-3">{item.first_name}</td>
              <td className="py-2 px-3">{item.last_name}</td>
              <td className="py-2 px-3">{item.phone}</td>
              <td className="py-2 px-3">
                <button
                  onClick={() => markAsDone(item.id)}
                  className="text-green-500 mr-2"
                >
                  Done
                </button>
                <button
                  onClick={() => updateTaskHandler(item.id)}
                  className="text-blue-500 mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteTask(item.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update task form */}
      {updateTask && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <h2 className=" flex items-center justify-center .text-lg font-bold ">Update Task</h2>
            <form>
              <div className="mb-4">
                <label className="block text-blue-700 text-sm font-bold mb-2">
                  First Name:
                </label>
                <input
                  type="text"
                  value={updateFirstName}
                  onChange={(e) => setUpdateFirstName(e.target.value)}
                  className="p-2 border rounded font-serif"
                />
              </div>
              <div className="mb-4">
                <label className="block text-blue-700 text-sm font-bold mb-2">
                  Last Name:
                </label>
                <input
                  type="text"
                  value={updateLastName}
                  onChange={(e) => setUpdateLastName(e.target.value)}
                  className="p-2 border rounded font-serif"
                />
              </div>
              <div className="mb-4">
                <label className="block text-blue-700 text-sm font-bold mb-2">
                  Phone:
                </label>
                <input
                  type="text"
                  value={updatePhone}
                  onChange={(e) => setUpdatePhone(e.target.value)}
                  className="p-2 border rounded font-serif"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={saveUpdateHandler}
                  className="bg-blue-500 text-white p-2 rounded font-extrabold"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={cancelUpdateHandler}
                  className="bg-red-500 text-white p-2 rounded font-extrabold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;