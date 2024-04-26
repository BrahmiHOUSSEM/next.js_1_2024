import Image from "next/image";
import ArrowRight from "./icons/ArrowR";

const Landing = () => {
  return (
    <section className="landing">
      <div className="py-12">
        <h1 className="text-4xl font-bold leading-normal">
          Welcome to <br /> <span className="text-main">Taco</span>Topia !
        </h1>
        <h3 className="text-main text-2xl my-6 font-semibold">
          Indulge in the ultimate <br />
          taco experience at TacoTopia!
        </h3>
        <p className=" text-gray-600 mb-6">
          Our tacos are crafted with authentic Mexican recipes, ensuring an
          explosion of flavors in every bite.
        </p>

        <div className="flex gap-4 items-center text-sm">
          <button className="font-bold flex items-center gap-2 text-white bg-main py-2 px-4 rounded-full">
            ORDER NOW
            <ArrowRight size="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 font-semibold text-gray-800">
            Learn more
            <ArrowRight size="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"tacos.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={""}
        />
      </div>
    </section>
  );
};
export default Landing;
