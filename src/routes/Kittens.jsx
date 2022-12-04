import React from 'react';
import { NavLink } from 'react-router-dom';
const Kittens = () => {
  return (
    <section className="">
      <main className="">
        <h1 className="text-7xl font-black">Kittens</h1>
        <div className="">
          <NavLink to="/kittens/filaberta">Filaberta</NavLink>
        </div>
      </main>
    </section>
  );
};
export default Kittens;
