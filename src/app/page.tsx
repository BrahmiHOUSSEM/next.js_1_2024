import HomeMenu from "./components/layout/HomeMenu";
import Landing from "./components/layout/Landing";
import MainTitle from "./components/layout/MainTitle";

const Home = () => {
  return (
    <>
      <Landing />
      <HomeMenu />
      <section className="my-12">
        <MainTitle subTitle="Our story" title="About" />

        <div className="my-4 flex flex-col gap-4 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            omnis doloremque cupiditate exercitationem rerum quod voluptatibus
            incidunt nostrum perferendis eum corporis et fugit nisi atque, eaque
            velit libero minima laborum?
          </p>
          <p>
            omnis doloremque cupiditate exercitationem rerum quod voluptatibus
            incidunt nostrum perferendis eum corporis
          </p>

          <p>
            omnis doloremque cupiditate exercitationem rerum quod voluptatibus
            incidunt nostrum perferendis eum corporis et fugit nisi atque, eaque
            velit libero minima laborum?
          </p>
        </div>
      </section>
      <section className="text-center">
        <MainTitle subTitle="Don't hastate" title="Contact Us" />
        <div className="my-8">
          <a
            className="text-4xl font-bold underline text-gray-600"
            href="tel:+216 810 852<"
          >
            +216 810 852
          </a>
        </div>
      </section>
    </>
  );
};
export default Home;
