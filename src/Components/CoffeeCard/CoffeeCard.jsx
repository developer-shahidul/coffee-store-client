//
import { Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Error from "../Error/Error";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  //   console.log(coffee);

  //delete
  const handleDeleteUser = (id) => {
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

        fetch(`coffee-store-server-rho-eight.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== id);
              // console.log(remaining);
              setCoffees(remaining);
              window.location.href = "/error.html";
            }
            console.log(data);
          });
      }
    });
  };

  const { _id, name, chef, supplier, taste, photo, details, category } = coffee;

  return (
    <div>
      <div className="bg-[#F5F4F1] flex justify-between items-center p-7 rounded-[10px] backdrop-opacity-60">
        <div>
          <img className="h-60 w-40 object-cover" src={photo} alt="img" />
        </div>
        <div className="text-left text-xl">
          <p>
            <span className="raleway font-semibold">Name:</span>
            <span className="text-gray-700 ml-2 raleway">{name}</span>
          </p>
          <p>
            <span className="font-semibold raleway">Chef:</span>
            <span className="text-gray-700 ml-2 raleway">{chef}</span>
          </p>
          <p>
            <span className="font-semibold raleway">Supplier:</span>
            <span className="text-gray-700 ml-2 raleway">{supplier}</span>
          </p>
          <p>
            <span className="font-semibold raleway">Taste:</span>
            <span className="text-gray-700 ml-2 raleway">{taste}</span>
          </p>
          <p>
            <span className="font-semibold raleway">Details:</span>
            <span className="text-gray-700 ml-2 raleway">{details}</span>
          </p>
          <p>
            <span className="font-semibold raleway">category:</span>
            <span className="text-gray-700 ml-2 raleway">{category}</span>
          </p>
          <p>
            <span className="font-semibold raleway">Price:</span>
            <span className="text-gray-700 ml-2 raleway">890 Taka</span>
          </p>
        </div>
        <div className="">
          <div className="w-10 h-10 mb-4 bg-[#D2B48C] flex items-center justify-center rounded-[5px] cursor-pointer">
            <Eye color="white" height="20px" width="20px" />
          </div>

          <Link to={`/updateCoffee/${_id}`}>
            <div className="w-10 h-10  bg-[#3C393B] flex items-center justify-center rounded-[5px] cursor-pointer">
              <Pencil color="#FFFFFF" height="20px" width="20px" />
            </div>
          </Link>

          <div
            onClick={() => handleDeleteUser(_id)}
            className="w-10 h-10 mt-4  bg-[#EA4744] flex items-center justify-center rounded-[5px] cursor-pointer"
          >
            <Trash color="#FFFFFF" height="20px" width="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

//  https://i.ibb.co.com/YFRpsCPn/5.png
//   https://i.ibb.co.com/v45ZFhdY/4.png
//  https://i.ibb.co.com/6RGmNKLr/3.png
//   https://i.ibb.co.com/j1Kg0X2/2.png
//  https://i.ibb.co.com/cPR7LLk/1.png
// https://i.ibb.co.com/wZpq53CV/6.png
