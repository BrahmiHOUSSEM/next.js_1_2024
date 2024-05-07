import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import MainTitle from "./MainTitle";

const HomeMenu = () => {
  return (
    <section>
      <div className="absolute -z-10 h-full w-full right-0 left-0">
        <div className="left-0 -top-24 absolute">
          <Image
            src={"/side_tacos_right.png"}
            width={250}
            height={250}
            alt="Side Images"
          />
        </div>
        <div className="right-0 -top-24  absolute">
          <Image
            src={"/side_tacos_left.png"}
            width={250}
            height={250}
            alt="Side Images"
          />
        </div>
      </div>

      <MainTitle subTitle="Check out" title="Menu" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};
export default HomeMenu;
