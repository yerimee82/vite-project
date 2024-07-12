import React from "react";
import SiteIntroduction from "../../components/SiteIntroduction";

const Home: React.FC = () => {
  const profileUrl = "/src/assets/images/poo.jpg";
  const welcomeMessage = "Welcome to MySite!";
  const description =
    "This is a sample description.\nFeel free to explore.\nHave a great day!";

  return (
    <div id="wrapper">
      <div id="content">
        <SiteIntroduction
          profile={profileUrl}
          welcome={welcomeMessage}
          description={description}
        />
      </div>
    </div>
  );
};

export default Home;
