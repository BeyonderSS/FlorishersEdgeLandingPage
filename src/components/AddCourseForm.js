import React, { useState } from "react";
import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import { firestore } from "../utils/initFirebase";

const AddCourseForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const coursesCollection = collection(firestore, "Courses");
      const fileReader = new FileReader();
      fileReader.readAsText(selectedFile);
      fileReader.onload = async () => {
        const data = JSON.parse(fileReader.result);
        for (const course of data.courses) {
          const querySnapshot = await getDocs(
            query(coursesCollection, where("id", "==", course.id))
          );
          if (!querySnapshot.empty) {
            setErrorMessage(`ID ${course.id} already exists`);
            setLoading(false);
            return;
          }
          await addDoc(coursesCollection, {
            id: course.id,
            mainHeading: course.mainHeading,
            subHeading: course.subHeading,
            price: course.price,
          });
        }
        setErrorMessage("");
        setLoading(false);
        alert("Courses added successfully");
      };
    } catch (error) {
      console.error(error);
      setErrorMessage("Error adding courses");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-2xl font-bold mb-4">Add Courses</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="file">
            Upload JSON file:
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? "opacity-50 cursor-wait" : ""
            }`}
            type="submit"
            disabled={loading || !selectedFile}
          >
            {loading ? "Adding..." : "Add Courses"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
