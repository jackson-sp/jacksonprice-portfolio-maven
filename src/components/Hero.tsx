import content from "@/data/content.json";

const Hero = () => {
  const { profile } = content;

  return (
    <section id="top" className="container-portfolio py-20 md:py-22 text-center">
      <h1 className="text-headline-mobile md:text-headline text-primary-brand mb-8 animate-fade-in">
        {profile.headline}
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-2">
        {profile.intro.map((line, index) => (
          <p
            key={index}
            className="text-intro-mobile md:text-intro text-secondary-brand animate-fade-in-up"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Hero;
