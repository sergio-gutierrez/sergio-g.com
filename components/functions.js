import React from "react";

import renderHomeContent from "pages/homePage";
import renderProjectsContent from "pages/projectsPage";
import renderContactContent from "pages/contactPage";
import renderCVContent from "pages/cvPage";

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