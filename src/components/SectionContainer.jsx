const SectionContainer = ({ id, className, children }) => {
  return (
    <section
      id={id}
      data-section={id}
      className={`section ${className} w-full mx-auto`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;

/* flex justify-center items-center lg:max-w-4xl md:max-w-2xl */