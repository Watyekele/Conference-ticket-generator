import Header from "./Header";

export default function Card() {
  return (
    <div>
      <div
        className="relative  text-white min-w-90 p-8 rounded-2xl
       shadow-lg mb-8  "
      >
        {/* Background Image (inside card) */}
        <div
          className="absolute inset-0 bg-no-repeat bg-contain bg-center opacity-70  "
          style={{ backgroundImage: "url('/images/pattern-ticket.svg')" }}
        ></div>

        {/* Ticket Content */}
        <div className=" relative z-10  p-4 min-w-[100%] min-h-auto">
          <img
            className="absolute top-0 left-2 w-30 mt-2"
            src="/images/logo-full.svg"
            alt=""
          />

          <p className="text-xs text-left ml-4 mt-2 text-gray-300">
            Jan 31, 2025 / Austin, TX
          </p>
          <p className="absolute top-10 right-0 [writing-mode:vertical-rl] opacity-[30%]">
            #067&12
          </p>
          {/* User Info */}
          <div className="flex  items-center gap-3 mt-14 pt-4  ">
            <img
              src="/images/image-avatar.jpg"
              className="w-12 h-12 rounded-sm border-1 border-white"
              alt="Profile"
            />
            <div>
              <p className="font-semibold">Jonatan Kristof</p>
              <span className="flex  items-center">
                <img src="/images/icon-github.svg" className="w-4" alt="" />
                <p className="text-gray-400 text-sm">@jonatankristof0101</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
