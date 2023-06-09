import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className="sticky top-0 z-10 flex flex-row items-center justify-center bg-white px-4 py-4 font-lilita-one shadow-custom-1">
      <Link to="/">
        <div className="flex h-16 w-72 cursor-pointer flex-row items-center justify-center gap-5 font-lilita-one text-4xl md:text-5xl xl:w-96">
          <h1 className=" text-sky-500">Where's</h1>
          <h1 className=" text-red-600">Waldo?</h1>
        </div>
      </Link>
      {children ? children : ''}
    </header>
  );
};

export default Header;
