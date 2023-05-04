import React, { useState } from "react";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import { firestore } from "../utils/initFirebase";

const AddCourseForm = () => {
  const [id, setId] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id || !heading || !description || !price) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      const coursesCollection = collection(firestore, "Courses");
      const querySnapshot = await getDocs(
        query(coursesCollection, where("id", "==", id))
      );
      if (!querySnapshot.empty) {
        setErrorMessage("ID already exists");
        setLoading(false);
        return;
      }
      await addDoc(coursesCollection, {
        id,
        heading,
        description,
        price,
      });
      setId("");
      setHeading("");
      setDescription("");
      setPrice("");
      setErrorMessage("");
      setLoading(false);
      alert("Course added successfully");
    } catch (error) {
      console.error(error);
      setErrorMessage("Error adding course");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Add Course</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
            ID
          </label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="heading"
            className="block text-gray-700 font-bold mb-2"
          >
            Heading
          </label>
          <input
            type="text"
            name="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Adding Course..." : "Add Course"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
