import Header from "./Header";
import Card from "./Card";
export default function Ticket() {
  return (
    <div
      className="mt-8 flex flex-col mx-auto justify-center items-center font-inconsolanta container relative 
      bg-[url('/images/background-desktop.png')] 
    bg-cover bg-center w-[70%] min-h-screen p-4 "
    >
      <Header />
      <img
        src="/images/pattern-squiggly-line-top.svg"
        className="absolute z-2 top-4 right-0 w-[30%] h-auto "
        alt=""
      />
      <img
        src="/images/pattern-squiggly-line-bottom-desktop.svg"
        className="absolute z-2 bottom-4 left-0 w-[60%] h-auto "
        alt=""
      />
      <h1 className="text-2xl font-bold">
        Congrats! <span className="text-red-300">Johnathan Kristen!</span> , You
        ticket is ready!
      </h1>
      <p className="mt-4 mb-4">
        We've emailed your ticket to{" "}
        <span className="text-red-300">jonathan@gmail.com</span> and will send
        updates up to the run in he event soon{" "}
      </p>
      <Card />
    </div>
  );
}
