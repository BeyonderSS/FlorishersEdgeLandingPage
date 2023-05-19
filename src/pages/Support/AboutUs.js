import React from "react";
import ContactUs from "./ContactUs";

export default function AboutUs() {
  return (
    <div className="bg-purple-100">
      <div>
        {/* Container for demo purpose */}
        <div className="container py-24 px-6 mx-auto">
          {/* Section: Design Block */}
          <section className="mb-32 text-gray-800">
            <h2 className="text-3xl font-bold mb-12 text-center">About Us</h2>
            {/* Jumbotron */}
            <div className="container mx-auto xl:px-32 text-center lg:text-left">
              <div className="grid lg:grid-cols-2  items-center">
                <div className="mb-12 lg:mb-0">
                  <div
                    className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                    style={{
                      background: "hsla(0, 0%, 100%, 0.55)",
                      backdropFilter: "blur(30px)",
                    }}
                  >
                    <h2 className="text-3xl font-bold mb-6">
                      Flourishers Edge{" "}
                      <span className="text-purple-600 text-4xl">.</span>
                    </h2>
                    <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
                      Our objective at Flourishers Edge is to provide a
                      professional and exceptional delivery of services and
                      solutions.
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                      <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="#985DEA"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Streamlining
                      </p>
                      <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="#985DEA"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Efficiency{" "}
                      </p>
                      <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="#985DEA"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Visual Appeal
                      </p>
                    </div>
                    <p className="text-gray-500 mb-0">
                      Welcome to Flourishers Edge, a premier IT services company
                      specializing in cutting-edge IT products, innovative web
                      design, and comprehensive web solutions. We are dedicated
                      to delivering unparalleled excellence, providing our
                      esteemed clients with compelling and highly effective
                      solutions. Our team of seasoned professionals excels in
                      crafting visually stunning websites that seamlessly blend
                      aesthetics with functionality, leaving a lasting
                      impression on your target audience. With a deep
                      understanding of the industry&apos;s ever-evolving landscape,
                      we bring a harmonious fusion of simplicity and
                      effectiveness to every project, ensuring optimal results.
                      Trust us to be your trusted partner in driving your
                      business forward with our exceptional IT services and
                      captivating web solutions.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src="/metaverso-animate.svg"
                    className="w-full rounded-lg "
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Jumbotron */}
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
      </div>
      <>
        {/* Container for demo purpose */}
        <div className="container py-24 px-6 mx-auto">
          {/* Section: Design Block */}
          <section className="mb-32">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n      @media (min-width: 992px) {\n        #cta-img-nml-50 {\n          margin-left: 50px;\n        }\n      }\n    ",
              }}
            />
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                <div className="flex lg:py-12">
                  <img
                    src="/pleasant-surprise-animate.svg"
                    className="w-full rounded-lg shadow-lg"
                    id="cta-img-nml-50"
                    style={{ zIndex: 10 }}
                    alt=""
                  />
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                <div className="bg-purple-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                  <div className="lg:pl-12">
                    <h2 className="text-3xl font-bold mb-6">
                      Let <span className="underline"> Us</span> surprise you !
                    </h2>
                    <p className="mb-6 pb-2 lg:pb-0">
                      Prepare to be astonished by our unparalleled expertise and
                      groundbreaking solutions. At Flourishers Edge, we push the
                      boundaries to deliver extraordinary results that surpass
                      your wildest expectations.
                    </p>
                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                      <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="white"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Cutting-edge IT solutions
                      </p>
                      <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="White"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Innovative web design
                      </p>
                      <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fill="white"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                          ></path>
                        </svg>
                        Best experience
                      </p>
                    </div>
                    <p>
                      Welcome to Flourishers Edge, where we redefine excellence
                      in the world of IT services. With our exceptional
                      expertise and innovative solutions, we are here to
                      surprise and delight you. Our team of seasoned
                      professionals is committed to pushing boundaries and
                      exceeding expectations. Prepare to be amazed by our
                      cutting-edge IT products, designed to elevate your
                      business to new heights. Experience the artistry of our
                      web design, where aesthetics meet functionality in a
                      captivating blend. Our comprehensive web solutions will
                      leave you in awe as we seamlessly integrate the latest
                      technologies to optimize your online presence. But that&apos;s
                      not all. We go above and beyond to deliver remarkable
                      results. Our commitment to customer satisfaction drives us
                      to provide personalized solutions tailored to your unique
                      needs. Our attention to detail ensures every aspect of our
                      services is meticulously crafted to perfection. At
                      Flourishers Edge, surprises await at every turn. We thrive
                      on challenges, turning them into opportunities to shine.
                      From concept to execution, we are your trusted partner,
                      guiding you through the journey of success. Experience the
                      thrill of innovation. Embrace the power of technology.
                      Discover a new world of possibilities with Flourishers
                      Edge, where surprises become the foundation of exceptional
                      growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
      </>
      <section class="bg-purple-100 py-8 ">
        <h1 class="text-4xl font-bold mb-4 flex justify-center items-center flex-col">
          Not Satisfied Yet? Contact us to find more
        </h1>
          <ContactUs />

      </section>
    </div>
  );
}
