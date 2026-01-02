//

import { useQuery } from "@tanstack/react-query";
import { Pencil, Trash } from "lucide-react";
// import { useEffect, useState } from "react";
import { Link } from "react-router";

const Users2 = () => {
  // tanstack Query bebohar kore api thek datA LOAD
  const {
    isPending,
    isError,
    error,
    data: user,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("coffee-store-server-rho-eight.vercel.app/users");
      return res.json();
    },
  });

  if (isPending) {
    return <span className="loading loading-spinner text-success"></span>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  // user effect use kore data load
  //   const [user, serUser] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:5000/users")
  //       .then((res) => res.json())
  //       .then((data) => serUser(data));
  //   }, []);

  const handleUserDelete = (id) => {
    console.log(id);

    fetch(`coffee-store-server-rho-eight.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("deletedCount:", data.deletedCount);
        if (data.deletedCount) {
          console.log("Your file has been deleted");
        }
        //   const remaining = user.filter((item) => item._id !== id);
        //   setUser(remaining);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>no.</th>
            <th>Name</th>
            <th>Email</th>
            <th>CreatedAt</th>
            <th>Last logIn</th>
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
              <td>{user.lastSignInTime}</td>
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
  );
};

export default Users2;
