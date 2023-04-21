import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="shadow-custom-1">
      <Link to="/">
        <div className="flex h-24 cursor-pointer flex-row items-center justify-center gap-5 px-4 py-4 text-5xl">
          <h1 className=" text-sky-500">Where's</h1>
          <h1 className=" text-red-600">Waldo?</h1>
        </div>
      </Link>
      {children ? children : ''}
    </header>
  );
};

export default Header;
