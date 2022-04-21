import React from "react";
import Image from "next/image";
import myImageOne from "../public/ko-pic-1.png";
import myImageTwo from "../public/ko-pic-2.png";
import { homePage } from "../data/portfolioData";
import adze from "adze";

type Props = {};

const HomePage = (props: Props) => {
  const decideImage = () => {
    const myImages = [myImageOne, myImageTwo];
    const imageIndex = Math.floor(Math.random() * myImages.length);
    return myImages[imageIndex];
  };
  const { name, aboutMe, role } = homePage;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <Image alt="A picture of me" src={decideImage()} />
      <p>{aboutMe}</p>
    </div>
  );
};

export default HomePage;
