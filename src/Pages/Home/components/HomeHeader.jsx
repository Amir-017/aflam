import { Button } from "@material-tailwind/react";

const HomeHeader = () => {
  return (
    <div className="text-white mb-10">
      <h1 className="font-bold text-center text-blue-400 text-4xl pt-7 h-[3em]">
        Home
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 items-stretch justify-center mt-8">
        {/* SORT BY */}
        <div className="flex-1 rounded-xl p-5 flex flex-col items-center shadow-md">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-4 text-[#0DCAF0] tracking-wide">
            SORT BY
          </h2>
          <div className="grid grid-cols-2 gap-3 w-full md:flex md:flex-col md:gap-4">
            <Button
              variant="outlined"
              className="text-white hover:bg-[#0DCAF0] hover:text-black border-[#0DCAF0] transition-all"
            >
              Title
            </Button>
            <Button
              variant="outlined"
              className="text-white hover:bg-[#0DCAF0] hover:text-black border-[#0DCAF0] transition-all"
            >
              Popularity
            </Button>
            <Button
              variant="outlined"
              className="text-white hover:bg-[#0DCAF0] hover:text-black border-[#0DCAF0] transition-all"
            >
              Date
            </Button>
            <Button
              variant="outlined"
              className="text-white hover:bg-[#0DCAF0] hover:text-black border-[#0DCAF0] transition-all"
            >
              Rating
            </Button>
          </div>
        </div>
        {/* SORT ORDER */}
        <div className="flex-1  rounded-xl p-5 flex flex-col items-center shadow-md">
          <h2 className="font-bold text-2xl md:text-3xl text-center mb-4 text-[#0DCAF0] tracking-wide">
            SORT ORDER
          </h2>
          <div className="flex flex-col gap-3 w-full md:flex-row md:gap-4 justify-center items-center">
            <Button
              variant="outlined"
              className="text-white hover:bg-[#0DCAF0] hover:text-black border-[#0DCAF0] transition-all w-full"
            >
              DESCENDING
            </Button>
            <Button
              variant="outlined"
              className="text-white hover:bg-[#0DCAF0] hover:text-black border-[#0DCAF0] transition-all w-full"
            >
              ASCENDING
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
