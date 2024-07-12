// src/components/SiteIntroduction.tsx
import React from 'react';

interface SiteIntroductionProps {
  profile: string;
  welcome: string;
  description: string;
}

const SiteIntroduction: React.FC<SiteIntroductionProps> = ({ profile, welcome, description }) => {
  return (
    <div id="site-introduction">
      <img id="profile" src={profile} width="230px" alt="Profile" />
      <h2>{welcome}</h2>
      <p>
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
        <br /><br />
        <a href="/guestbook">💟방명록💟</a> 에 글 남기기<br />
      </p>
    </div>
  );
};

export default SiteIntroduction;