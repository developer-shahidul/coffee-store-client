//

import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Pencil, Trash } from "lucide-react";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [user, setUser] = useState(loadedUsers);
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
              <tr>
                <th>{`${index + 1}`}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <div className="flex gap-4">
                  <Link to={""}>
                    <div className="w-10 h-10  bg-[#3C393B] flex items-center justify-center rounded-[5px] cursor-pointer">
                      <Pencil color="#FFFFFF" height="20px" width="20px" />
                    </div>
                  </Link>

                  <div className="w-10 h-10   bg-[#EA4744] flex items-center justify-center rounded-[5px] cursor-pointer">
                    <Trash color="#FFFFFF" height="20px" width="20px" />
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
