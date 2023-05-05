import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../utils/initFirebase";

const Pricing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(firestore, "Courses");
      const coursesSnapshot = await getDocs(coursesCollection);
      const coursesData = coursesSnapshot.docs.map((doc) => doc.data());
      setCourses(coursesData);
    };
    fetchCourses();
  }, []);

  // Filter courses based on their subHeading value
  const schoolCourses = courses.filter(
    (course) => course.subHeading === "School"
  );
  const upscalingCourses = courses.filter(
    (course) => course.subHeading === "Upscaling"
  );
  const collegeCourses = courses.filter(
    (course) => course.subHeading === "College"
  );
  console.log(courses);

  return (
    <div>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Courses designed for aspiring students like you, to help you
              thrive.
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl ">
              Welcome to Flourishers Edge - where aspiring students harness the
              power of technology, innovation, and capital to create value and
              drive economic growth.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* <!-- School Courses --> */}
            {schoolCourses.length > 0 && (
              <div>
                <h3 className="text-4xl  flex py-5 font-semibold justify-center items-center ">
                  {" "}
                  <span className=" text-purple-800">S</span>chool
                </h3>
                <hr class="h-px mb-4 bg-gray-300 border-0 "></hr>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                  {schoolCourses.map((course) => (
                    <div className="">
                      <div
                        key={course.mainHeading}
                        className="flex flex-col p-6 mx-auto max-w-lg md:w-96 w-72 h-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 "
                      >
                        <h3 className="mb-4 text-2xl font-semibold">
                          {course.mainHeading}
                        </h3>
                        <p className="font-light text-gray-500 sm:text-lg ">
                          {course.subHeading}
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                          <span className="mr-2 text-5xl font-extrabold">
                            ₹{course.price}
                          </span>
                        </div>

                        <button className="text-white cursor-pointer bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                          Contact Us
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* <!-- Upscaling Courses --> */}
            {upscalingCourses.length > 0 && (
              <div>
                <h3 className="text-4xl flex py-10 font-semibold justify-center items-center">
                  Up <span className="text-purple-800">scaling </span>
                </h3>
                <hr class="h-px mb-4 bg-gray-300 border-0 "></hr>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                  {upscalingCourses.map((course) => (
                    <div
                      key={course.mainHeading}
                      className="flex flex-col p-6 mx-auto max-w-lg md:w-96 w-72 h-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 "
                    >
                      <h3 className="mb-4 text-2xl font-semibold">
                        {course.mainHeading}
                      </h3>
                      <p className="font-light text-gray-500 sm:text-lg ">
                        {course.subHeading}
                      </p>
                      <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold">
                          ₹{course.price}
                        </span>
                      </div>
                      <button className="text-white cursor-pointer bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        Contact Us
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* <!-- College Courses --> */}
            {collegeCourses.length > 0 && (
              <div>
                <h3 className="text-4xl flex py-10 font-semibold justify-center items-center">
                  Col <span className="text-purple-800"> lege</span>
                </h3>
                <hr class="h-px mb-4 bg-gray-300 border-0 "></hr>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                  {collegeCourses.map((course) => (
                    <div
                      key={course.mainHeading}
                      className="flex flex-col p-6 mx-auto max-w-lg md:w-96 w-72 h-auto text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 "
                    >
                      <h3 className="mb-4 text-2xl font-semibold">
                        {course.mainHeading}
                      </h3>
                      <p className="font-light text-gray-500 sm:text-lg ">
                        {course.subHeading}
                      </p>
                      <div className="flex justify-center items-baseline my-8">
                        <span className="mr-2 text-5xl font-extrabold">
                          ₹{course.price}
                        </span>
                      </div>
                      <button className="text-white cursor-pointer bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        Contact Us
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
