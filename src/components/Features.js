import React from "react";

const Features = () => {
  return (
    <div>
      <div
        id="features"
        className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0"
      >
        <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
          <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
            Our Products
          </h2>
          <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
            Built and Designed with you in Mind
          </h3>
          <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <img
                  className="absolute w-full h-full opacity-5 fill-current"
                  src="/feature1.svg"
                  alt=""
                />
                <img
                  className="relative w-20 h-20 "
                  src="https://img.icons8.com/3d-fluency/94/null/student-male.png"
                  alt=""
                />
                <h4 className="relative mt-6 text-lg font-bold">ClassCraft</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  Level up your classroom with ClassCraft - where learning meets
                  adventure.
                </p>
                <a
                  href="#_"
                  className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <img
                  className="absolute w-full h-full text-gray-100 opacity-5 fill-current"
                  src="/feature3.svg"
                  alt=""
                />
                {/* <!-- FEATURE Icon 2 --> */}
                <img
                  src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/64/null/external-waiter-restaurant-febrian-hidayat-outline-color-febrian-hidayat.png"
                  alt=""
                  className="relative w-20 h-20"
                />
                <h4 className="relative mt-6 text-lg font-bold">WaiterLess </h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  Transform your dining experience with WaiterLess - the app
                  that makes every meal effortless.
                </p>
                <a
                  href="#_"
                  className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
              <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                <img
                  src="/feature5.svg"
                  alt=""
                  className="absolute md:w-full md:h-full h-96 w-96 text-gray-100 opacity-5 fill-current"
                />
                {/* <!-- FEATURE Icon 3 --> */}
                <img
                  src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-clients-productivity-flaticons-lineal-color-flat-icons-2.png"
                  alt=""
                  className="relative w-20 h-20"
                />
                <h4 className="relative mt-6 text-lg font-bold">FluidView</h4>
                <p className="relative mt-2 text-base text-center text-gray-600">
                  Unleash the power of fluidity with FluidView - the CRM
                  platform that adapts to your business.
                </p>
                {/* <a
                  href="#_"
                  className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                >
                  Learn More
                </a> */}

              <div
                class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex pt-2"
                role="alert"
              >
                <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  Appologies!
                </span>
                <span class="font-semibold mr-2 text-left flex-auto">
                  Under Developmet{" "}
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
