import Header from "./Header";

export default function Card() {
  return (
    <div
      className=" relative 
      bg-[url('/images/pattern-ticket.svg')]
       aspect-[3/1]
     bg-contain bg-no-repeat h-40 w-full 
      max-w-md max-w-sm  flex items-center p-4
 bg-center text-white mt-6"
    >
      <div className=" absolute top-5 left-7 flex flex-col items-left justify-center  mb-2 ">
        <img className=" w-30  " src="/images/logo-full.svg" alt="" />
        <p className=" indent-6 text-sm">Jan 31, 2025/ Austin, TX</p>
      </div>

      <div className="absolute left-7 flex items-center mt-18">
        <img src="/images/image-avatar.jpg" className="w-8 rounded-sm" alt="" />
        <div className="flex flex-col flex-start p-2">
          <p className="text-left text-xs">Jonatan Kristof</p>
          <span className="flex text-xs">
            <img src="/images/icon-github.svg" className="w-4" alt="" />
            <p>@jonathankristof0101</p>
          </span>
        </div>
      </div>
      <p className="absolute top-16 right-1 text-center  rotate-90 opacity-[50%] ">
        #160620
      </p>
    </div>
  );
}
