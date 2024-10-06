const image1 = "/images/1.webp";
const image2 = "/images/2.webp";
const image3 = "/images/3.webp";
const bgImage = "/images/home.webp";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col gap-20 mt-24 px-4">
      <div
        className="rounded-3xl min-h-[50dvh] max-h-full grid place-items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className=" h-full flex flex-col justify-center gap-6 sm:gap-10">
          <h1 className="sm:text-6xl text-4xl text-white font-bold text-center drop-shadow-lg">
            Welcome to Gymon
          </h1>
          <p className="text-center text-white/90 sm:text-2xl text-base">
            Here you can build your body and mind.
          </p>
        </div>
      </div>
      <div className="grid gap-8 place-items-center">
        <h2 className="sm:text-3xl text-2xl font-bold ">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-2 rounded-lg shadow-md">
              <img
                src={service.image}
                alt={service.title}
                className="w-full aspect-video object-cover  rounded-lg mb-4"
              />
              <div className="flex flex-col p-4">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-xl ml-4 text-sm mb-4">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    image: image1,
    title: "Personal Training",
    description:
      "Our personal trainers will help you reach your fitness goals faster.",
  },
  {
    image: image2,
    title: "Group Classes",
    description:
      "Join our group classes to have fun and meet other fitness enthusiasts.",
  },
  {
    image: image3,
    title: "Nutrition Counseling",
    description:
      "Our nutrition experts will help you create a diet plan that complements your fitness routine.",
  },
];
