import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import CarouselServices from "../components/CarouselServices";

const links = [
  {
    title: "Quiero ser autosostenible",
    href: "https://porfolio-josechaverra.netlify.app/",
  },
  {
    title: "Conoce la Solar Cube",
    href: "https://www.linkedin.com/in/josechaverra/",
  },
  {
    title: "Conoce tú huella de carbono",
    href: "https://www.youtube.com/",
  },
];

const imagesServices = [
  "/casa-kame-de-dragon-ball_1920x1080_xtrafondos.com.jpg",
  "/champinones-brillando_1920x1080_xtrafondos.com.jpg",
  "/dark-star-thresh-league-of-legends_1920x1080_xtrafondos.com.jpg",
];

const imagesProducts = [
  "/fuente-de-luces_1920x1200_xtrafondos.com.jpg",
  "/kento-nanami-de-jujutsu-kaisen_1920x1080_xtrafondos.com.jpg",
  "/retrowave-lineas-montanas_1920x1080_xtrafondos.com.jpg",
];

const HomePage = () => {
  return (
    <main className="px-4">
      <section className="py-16 md:py-16">
        {/* {carouselServices} */}
        <SectionContainer className="justify-center items-center mt-8 lg:mt-16">
          <CarouselServices images={imagesServices}/>
        </SectionContainer>

        <SectionContainer className="flex justify-center items-center mt-8 lg:mt-16">
          <Button {...links[0]} />
        </SectionContainer>

        <SectionContainer className="flex justify-center items-center mt-8 lg:mt-16">
          <Button {...links[1]} />
        </SectionContainer>

        <SectionContainer className="justify-center items-center mt-8 lg:mt-16">
          <CarouselServices images={imagesProducts}/>
        </SectionContainer>

        <SectionContainer className="flex justify-center items-center mt-8 lg:mt-16">
          <Button {...links[2]} />
        </SectionContainer>
      </section>
    </main>
  );
};

export default HomePage;
