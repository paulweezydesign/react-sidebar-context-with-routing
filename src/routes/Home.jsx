import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <section className="grid grid-cols-1 place-items-center h-screen">
      <main>
        <h1 className="text-7xl font-black">Home</h1>
   
      </main>
    </section>
  );
};

export default Home;
