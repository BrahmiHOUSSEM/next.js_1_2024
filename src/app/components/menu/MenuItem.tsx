import Image from "next/image";

const MenuItem = () => {
  return (
    <div className="bg-gray-300 rounded-lg p-4 text-center hover:bg-gray-100 hover:shadow-md hover:shadow-black/50 duration-300 ease-in-out">
      <div className="flex justify-center">
        <Image src="/tacos.png" width={300} height={300} alt="TACOS IMAGE" />
      </div>
      <h3 className="uppercase font-bold text-xl py-2">tacos</h3>
      <p className="text-gray-700 text-sm my-2">
        Lorem, ipsum dolor sit abet consectetur adipisicing edit. Architect
        aliquot explicate repudiate maigres. Magi eos facer fugit durum
      </p>
      <button className="bg-main text-white font-semibold py-2 px-4 rounded-full border-none">
        Add to card $20.5
      </button>
    </div>
  );
};
export default MenuItem;
