import { Button } from "./ui/button";
export default function Carousel1() {
  return (
    <div className="font-montserrat relative mx-5">
      <img src="/carousel1.jpg" alt="Carousel Item" className="w-full" />
      <p className="absolute left-40 top-16 text-sm font-bold text-white">
        SUMMER 2020
      </p>
      <h1 className="absolute left-20 right-20 top-36 text-3xl font-bold leading-relaxed text-white">
        NEW COLLECTION
      </h1>
      <p className="absolute left-20 right-20 top-1/2 px-4 text-center text-lg leading-normal text-white">
        {" "}
        We know how large objects will act, but things on a small scale.
      </p>
      <button className="absolute left-1 top-1/2 p-2">
        <i class="fa-solid fa-chevron-left text-4xl text-white"></i>
      </button>
      <button className="absolute right-1 top-1/2 p-2">
        <i class="fa-solid fa-chevron-left fa-flip-horizontal text-4xl text-white"></i>
      </button>
      <Button className="absolute bottom-40 left-[35%] h-10 w-44 rounded-none !bg-green-600 p-7 text-lg">
        SHOP NOW
      </Button>
    </div>
  );
}