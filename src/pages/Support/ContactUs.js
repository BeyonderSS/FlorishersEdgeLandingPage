import { useForm } from "react-hook-form";
import { BiPhoneIncoming } from "react-icons/bi";
import { BsFillEnvelopeFill, BsPinMapFill } from "react-icons/bs";

function ContactUs({ pageInfo }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:flourishers.edge2023@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name},${formData.message} (${formData.email})`;
  };

  return (
    <div className=" bg-purple-100">

    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-3xl justify-evenly mx-auto items-center md:w-full w-80 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-40 mb-5">
        <h4 className="md:text-4xl text-lg font-semibold text-center">
          We Have Got Just What You Need.{" "}
          <span className="decoration-[#985DEA]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-1 justify-center">
            <BiPhoneIncoming className="h-7 w-7 animate-pulse text-[#985DEA]" />
            <p className="text-l">+917869088589</p>
          </div>
          <div className="flex items-center space-x-1 justify-center">
            <BsFillEnvelopeFill className="h-7 w-7 animate-pulse text-[#985DEA]" />
            <p className="text-l">Flourishers.edge2023@gmail.com</p>
          </div>
          <div className="hidden md:flex items-center space-x-1 justify-center">
            <BsPinMapFill className="h-7 w-7 animate-pulse text-[#985DEA]" />
            <p className="text-l ">
              flourishersedge near 11 miles hausangabad road Bhopal 462046
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:w-auto w-96 mx-auto "
        >
          <div className=" md:flex flex-row md:space-x-2 md:space-y-0 space-y-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="outline-none w-full bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#985DEA]/40 focus:text-[#985DEA]/40 hover:border-[#985DEA]/40"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="outline-none w-full bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#985DEA]/40 focus:text-[#985DEA]/40 hover:border-[#985DEA]/40"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#985DEA]/40 focus:text-[#985DEA]/40 hover:border-[#985DEA]/40"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#985DEA]/40 focus:text-[#985DEA]/40 hover:border-[#985DEA]/40"
          />
          <button
            type="submit"
            className="bg-[#985DEA] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;
