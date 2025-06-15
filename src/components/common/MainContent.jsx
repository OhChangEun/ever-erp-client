import React from "react";

const MainContent = ({ children }) => {
  return (
    <main className="bg-gray-100 h-full rounded-xl flex justify-center items-center">
      {children}
    </main>
  );
};

export default MainContent;
