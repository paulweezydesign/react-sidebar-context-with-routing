import React from 'react';
import { Outlet } from 'react-router-dom';
const KittenLayout = () => {
  return (
    <section className="">
      <main className="">
        <Outlet />
      </main>
    </section>
  );
};
export default KittenLayout;
