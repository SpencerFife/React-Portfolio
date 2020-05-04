import React from "react";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header message={"Spencer Fife"} />
      <Wrapper>
        <h2 className="about">About Me</h2>

        <img src={} alt="SpencerPic"></img>

        <p>
          My name is Spencer Fife. I am formerly a baker in trade, but now have
          decided to apply myself to the coding and programming field. I was
          born in Seattle and have lived there my entire life, so far. While
          growing up, it was hard to ignore the tech and internet boom and now
          the field seems to still be competitive and ever growing. It seems
          natural to get caught up in the zeitgeist of the programming industry,
          as it is embedded in our daily lives and I want to be a part of it.
        </p>

        <p>
          This is my first dabbling with coding and by the end of this coding
          bootcamp, I want it to represent what I've learned and how I apply
          that knowledge. It may be rough right now, but it is miles ahead of
          what I could do when I signed up for this class.
        </p>
      </Wrapper>
      <Footer />
    </>
  );
}

export default About;
