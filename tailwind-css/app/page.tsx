import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-between px-12 py-10">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Tailwind CSS
        </h1>
        <p className="text-lg text-center">
          A utility-first CSS framework for rapidly building custom designs.
        </p>
      </div>

      <div className="grid md:grid-cols-5 grid-cols-2 gap-4 m-4">
        <div className="min-h-[100px] rounded-lg shadow bg-orange-500 flex items-center justify-center text-3xl">
          1
        </div>
        <div className="min-h-[100px] rounded-lg shadow bg-teal-500 flex items-center justify-center text-3xl md:col-span-3">
          2
        </div>
        <div className="min-h-[100px] rounded-lg shadow bg-red-500 flex items-center justify-center text-3xl">
          3
        </div>
      </div>

      {/* <div className="grid md:grid-cols-2 gap-4 m-4">
        <div className="min-h-[100px] rounded-lg shadow bg-orange-500"></div>
        <div className="min-h-[100px] rounded-lg shadow bg-teal-500"></div>
      </div> */}

      {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-4 m-4">
        <div className="min-h-[100px] rounded-lg shadow bg-orange-500 flex items-center justify-center text-3xl">
          1
        </div>
        <div className="min-h-[100px] rounded-lg shadow bg-teal-500 flex items-center justify-center text-3xl">
          2
        </div>
        <div className="min-h-[100px] rounded-lg shadow bg-red-500 flex items-center justify-center text-3xl">
          3
        </div>
        <div className="min-h-[100px] rounded-lg shadow bg-purple-500 flex items-center justify-center text-3xl">
          4
        </div>
      </div> */}
    </>
  );
}
