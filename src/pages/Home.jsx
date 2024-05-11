import Button from "../components/Button";
import SectionContainer from "../components/SectionContainer";
import CarouselServices from "../components/CarouselServices";
import ContainerCarousel from "../components/ContainerCarousel";

const links = [
  {
    title: "Eficiencia Energética",
    href: "https://porfolio-josechaverra.netlify.app/",
    img: "eficiencia-energetica.png",
  },
  {
    title: "Solar Cube",
    href: "https://www.linkedin.com/in/josechaverra/",
    img: "/solar-cube.png",
  },
  {
    title: "Energía solar",
    href: "https://www.youtube.com/",
    img: "energia-solar.png",
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
        <SectionContainer className="relative justify-center items-center mt-8 lg:mt-16">
          <ContainerCarousel />
          <div className="absolute top-12 left-0 w-full h-full">
            <CarouselServices images={imagesServices} />
          </div>
        </SectionContainer>

        {/* <SectionContainer className="justify-center items-center mt-8 lg:mt-16">
          <CarouselServices images={imagesServices} />
        </SectionContainer> */}

        <SectionContainer className="flex justify-center items-center space-x-32 mt-8 lg:mt-16">
          <Button {...links[0]} />
          <Button {...links[2]} />
          <Button {...links[1]} />
        </SectionContainer>

        {/* <SectionContainer className="flex justify-center items-center mt-8 lg:mt-16">
          <Button {...links[0]} />
        </SectionContainer>

        <SectionContainer className="flex justify-center items-center mt-8 lg:mt-16">
          <Button {...links[1]} />
        </SectionContainer> */}

        <SectionContainer className="justify-center items-center mt-8 lg:mt-16">
          <CarouselServices images={imagesProducts} />
        </SectionContainer>

        <SectionContainer className="flex justify-center items-center mt-8 lg:mt-16">
          <Button {...links[3]} />
          {/* <a
            href={href}
            className="block w-full max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a> */}
        </SectionContainer>
      </section>
    </main>
  );
};

export default HomePage;
