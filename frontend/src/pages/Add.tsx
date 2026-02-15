import { useState } from "react";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { NavBar } from "../components/NavBar";
import { DropDown } from "../components/DropDown";
import { Button } from "../components/Button";
import { useFormStatus } from "react-dom";
import axios from "axios";
import { toast } from "react-toastify";
interface AddProps {
  amount: Number | null;
  category: string;
  type: string;
  description: string;
  date: Date | null;
}
export const Add = () => {
  const [formData, setFormData] = useState<AddProps>({
    amount: null,
    category: "",
    type: "",
    description: "",
    date: new window.Date(),
  });
  const [error, setEroor] = useState<Record<string, string>>({});
  const { pending } = useFormStatus();

  const categories = [
    "Food",
    "Entertament",
    "Software",
    "Internet",
    "Cleaning",
    "House Rent",
    "Fuel/Petrol",
    "Traveling",
    "Job",
  ];

  const expense = ["expense", "income"];
  const handle = async (e: any) => {
    e.preventDefault();

    try {
      setEroor({});
      const response = await axios.post(
        "http://localhost:3000/api/v1/transcation",
        formData,
        {
          headers: { Authorization: localStorage.getItem("token") },
        },
      );

      if (response) {
        toast.success("Added Succesfully");
      }
    } catch (err) {
      //@ts-ignore
      if (err.response && err.response.data.errors) {
        //@ts-ignore
        setEroor(err.response.data.errors);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <NavBar></NavBar>
      {/* Card */}
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg p-6 mt-4 sm:p-8">
        {/*Heading*/}
        <Heading text="Add Product"></Heading>
        {/*Form */}
        <form onSubmit={handle} method="post" className="space-y-4">
          {/*Form */}
          <InputBox
            placeholder="Description"
            text="Description"
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></InputBox>
          {error.description && (
            <p className="text-red-500 text-sm">{error.description}</p>
          )}
          <InputBox
            type="number"
            text="Amount"
            placeholder="2000"
            onChange={(e) =>
              setFormData({ ...formData, amount: Number(e.target.value) })
            }
            value={formData.amount?.toString()}
          ></InputBox>
          {error.amount && (
            <p className="text-red-500 text-sm">{error.amount}</p>
          )}
          <InputBox
            type="date"
            onChange={(e) =>
              setFormData({
                ...formData,
                date: e.target.value ? new Date(e.target.value) : null,
              })
            }
            text="Date"
            min="1926-01-01"
            value={
              formData.date ? formData.date.toISOString().split("T")[0] : ""
            }
          ></InputBox>
          {error.date && <p className="text-red-500 text-sm">{error.date}</p>}
          <DropDown
            formData={formData.category}
            option="Select a Categories"
            props={categories}
            text="Select a Categories :"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          ></DropDown>
          {error.category && (
            <p className="text-red-500 text-sm">{error.category}</p>
          )}
          <DropDown
            formData={formData.type}
            option="Select a Soucrce :"
            props={expense}
            text="Select a Source"
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          ></DropDown>
          {error.type && <p className="text-red-500 text-sm">{error.type}</p>}
          <Button
            text={pending ? "Adding.." : "Add"}
            disabled={pending}
          ></Button>
        </form>
      </div>
    </div>
  );
};
