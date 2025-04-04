import Header from "./Header";

export default function Form() {
  return (
    <div
      className="  relative 
      bg-[url('/images/background-desktop.png')] 
    bg-cover bg-center w-[70%] min-h-screen m-auto p-4"
    >
      <Header />
      <img
        src="/images/pattern-squiggly-line-top.svg"
        className="absolute z-0 top-4 right-0 w-[30%] h-auto "
        alt=""
      />
      <img
        src="/images/pattern-squiggly-line-bottom-desktop.svg"
        className="absolute z-0 bottom-4 left-0 w-[60%] h-auto "
        alt=""
      />

      <h1 className="text-2xl font-bold">
        Your Journey to Coding Cof 2025 Starts Here!
      </h1>
      <p>Secure your spot at next year's biggest coding conference</p>

      {/* form starts Here!! */}
      <form
        className="flex flex-col mx-auto justify-center items-center z-10 relative"
        action=""
      >
        <label className="text-white  mt-4 text-left" htmlFor="uploadAvatar">
          <span className="relative ">
            Upload Avatar
            <img
              src="/images/icon-upload.svg"
              className="absolute center bottom-6 left-18 opacity-[40%] border 
              rounded-sm"
              alt=""
            />
            <input
              id="uploadAvatar"
              type="text"
              className="text-white  border  border-dashed
               border-blue-300
               rounded-sm block mt-1 h-20  "
            />
          </span>
        </label>{" "}
        <label className="text-white text-left mt-4" htmlFor="fullName">
          Full Name
          <input
            id="fullName"
            type="text"
            className="text-white border  border-blue-300 rounded-sm block mt-1 "
          />
        </label>{" "}
        <label className="text-white text-left mt-4" htmlFor="Emailaddress">
          Email Address
          <input
            id="Emailaddress"
            type="text"
            className="text-white border  border-blue-300 rounded-sm block mt-1 "
          />
        </label>
        <label
          className="text-white text-left  mt-4"
          htmlFor="github-user-name"
        >
          GitHub User Name:{" "}
          <input
            id="github-user-name"
            type="text"
            className="text-white border  border-blue-300 rounded-sm block mt-1"
          />
        </label>
        <div>
          {" "}
          <button
            className="border  border-blue-300 mt-4 p-1 rounded-sm bg-red-800"
            type="submit"
          >
            Generate Your Ticket
          </button>
        </div>
      </form>
    </div>
  );
}
