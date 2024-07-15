import React, { useTransition } from'react';
import { Link } from 'react-router-dom';
import { useTranslation } from'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  
  return (
    <div id="navigation">
      <ul>
        <li><Link to="/">{t('main')}</Link></li>
        <li><Link to={"/guestbook"}>{t('guestbook')}</Link></li>
        <li><Link to={"/board"}>{t('board')}</Link></li>
      </ul>
    </div>
  );
};

export default Navigation;