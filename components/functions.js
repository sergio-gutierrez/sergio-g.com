import React from "react";

import {renderCVContent} from '../pages/cvPage.js';
import {renderHomeContent} from '../pages/homePage.js';
import {renderProjectsContent} from '../pages/projectContent.js'; 
import {renderContactContent} from '../pages/contactPage.js';

export const renderContent = (currentPage) => {
    switch (currentPage) {
      case 'home':
        return renderHomeContent();
      case 'projects':
        return renderProjectsContent();
      case 'contact':
        return renderContactContent();
      case 'cv':
        return renderCVContent();
      default:
        return <div className="content-container">Page Not Found</div>;
    }
  };