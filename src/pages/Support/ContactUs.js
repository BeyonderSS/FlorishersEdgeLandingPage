import React from "react";
import { useForm } from "react-hook-form";
import { BsFillEnvelopeFill, BsFillPinMapFill, BsFillTelephoneFill } from "react-icons/bs";

const ContactUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    window.location.href = `mailto:flourishersedge@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} & my Phone No. is ${formData.phoneNo},${formData.message} (${formData.email})`;
  };

  return (
    <>
      <div className="bg-indigo-200">
        <section className="min-h-screen">
          <div className=" flex"></div>

          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="text-center text-gray-900">
              <div
                className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
                style={{
                  marginTop: 180,
                  backgroundColor: "hsla(0, 0%, 100%, 0.8)",
                  backdropFilter: "saturate(200%) blur(25px)",
                }}
              >
                <section className="mb-12 text-gray-800">
                  <div className="flex justify-center">
                    <div className="text-center lg:max-w-3xl md:max-w-xl">
                      <h2 className="text-3xl font-bold mb-12 px-6">
                        Contact us
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto mb-8 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-6">
                          <input
                            {...register("name")}
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#0802A3] focus:outline-none"
                            id="exampleInput7"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group mb-6">
                          <input
                            {...register("email")}
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#0802A3] focus:outline-none"
                            id="exampleInput8"
                            placeholder="Email address"
                          />
                        </div>
                        <div className="form-group mb-6">
                          <input
                            {...register("subject")}
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#0802A3] focus:outline-none"
                            id="exampleInput8"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="form-group mb-6">
                          <input
                            {...register("phoneNo")}
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#0802A3] focus:outline-none"
                            id="exampleInput8"
                            placeholder="Phone No"
                          />
                        </div>
                        <div className="form-group mb-6">
                          <textarea
                            {...register("message")}
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#0802A3] focus:outline-none"
                            id="exampleFormControlTextarea13"
                            rows={3}
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full px-6 py-2.5 bg-[#0802A3] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                      <div className="flex flex-wrap">
                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                          <div className="flex items-start">
                            <div className="shrink-0">
                              <div className="p-4 bg-[#0802A3] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                <BsFillPinMapFill className="text-4xl text-white" />
                              </div>
                            </div>
                            <div className="grow ml-6">
                              <p className="font-bold mb-1">Address</p>
                              <p className="text-gray-500">
                                Flourishersedge near 11 miles Hoshangabad road
                                Bhopal 462046
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                          <div className="flex align-start">
                            <div className="shrink-0">
                              <div className="p-4 bg-[#0802A3] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                <BsFillEnvelopeFill className="text-4xl text-white" />
                              </div>
                            </div>
                            <div className="grow ml-6">
                              <p className="font-bold mb-1">Email</p>
                              <p className="text-gray-500">
                                flourishersedge@gmail.com
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                          <div className="flex align-start">
                            <div className="shrink-0">
                              <div className="p-4 bg-[#0802A3] rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                <BsFillTelephoneFill className="text-4xl text-white" />
                              </div>
                            </div>
                            <div className="grow ml-6">
                              <p className="font-bold mb-1">Phone No.</p>
                              <p className="text-gray-500">+917869088589</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
