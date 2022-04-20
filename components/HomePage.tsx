import React from "react";
import Image from "next/image";
import myImageOne from "../public/ko-pic-1.png";
import myImageTwo from "../public/ko-pic-2.png";

type Props = {};

const HomePage = (props: Props) => {
  const decideImage = () => {
    const myImages = [myImageOne, myImageTwo];
    const imageIndex = Math.floor(Math.random() * myImages.length);
    return myImages[imageIndex];
  };
  return (
    <div>
      <h1>Home Page Stuff</h1>
      <Image alt="A picture of me" src={decideImage()} />
    </div>
  );
};

export default HomePage;
