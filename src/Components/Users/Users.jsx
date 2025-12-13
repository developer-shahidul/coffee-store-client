//

import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Pencil, Trash } from "lucide-react";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [user, setUser] = useState(loadedUsers);

  const handleUserDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirm");

        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = user.filter((item) => item._id !== id);
            setUser(remaining);
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Action</th>
            </tr>
          </thead>

          {/* row 1 */}

          <tbody>
            {user.map((user, index) => (
              <tr key={user._id}>
                <th>{`${index + 1}`}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td className="flex gap-4">
                  <Link to={""}>
                    <div className="w-10 h-10  bg-[#3C393B] flex items-center justify-center rounded-[5px] cursor-pointer">
                      <Pencil color="#FFFFFF" height="20px" width="20px" />
                    </div>
                  </Link>

                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="w-10 h-10   bg-[#EA4744] flex items-center justify-center rounded-[5px] cursor-pointer"
                  >
                    <Trash color="#FFFFFF" height="20px" width="20px" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
