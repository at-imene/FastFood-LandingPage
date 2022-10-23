import React from "react";
import Card from "./Card";
import Container from "../Container";

const cardsData = [
  {
    title: "Sun's Out, BOGO's Out",
    subtitle: "Through 8/26",
    img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  },
  {
    title: "New restaurants",
    subtitle: "Added Daily",
    img: "https://images.pexels.com/photos/5807020/pexels-photo-5807020.jpeg",
  },
  {
    title: "We delever Desert Too",
    subtitle: "Teasty Treals",
    img: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg",
  },
];
const Hero = () => {
  return (
    <main>
      <Container>
        <div className="max-h-[450px] w-full box-border relative">
          <img
            src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg"
            alt="humberger"
            className="  w-full max-h-[450px] object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black/40  flex items-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-4 font-bold">
              The <span className="text-orange-500">Best</span>
              <br></br>
              <span className="text-orange-500">Foods </span>Delivered
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-6 gap-4 mt-6 mb-12 ">
          {cardsData.map((card) => {
            return <Card key={card.title} {...card} />;
          })}
        </div>
      </Container>
    </main>
  );
};

export default Hero;
