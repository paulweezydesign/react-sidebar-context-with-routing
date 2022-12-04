import { Link } from 'react-router-dom';
import kittens from '../data';
import React from 'react';

const Kittens = () => {
  return (
    <section className="flex justify-center mx-auto px-8">
      <div className="flex flex-wrap flex-col sm:flex-row gap-y-10 gap-x-4 mt-6">
        {kittens.map((kitten) => {
          return (
            <article
              className="w-[200px] h-[200px] rounded shadow-lg relative mt-6"
              key={kitten.id}
            >
              <img
                className="w-[200px] h-[200px] cover rounded"
                src={kitten.image}
                alt={kitten.name}
              />
              <div className="absoulute bottom-4 z-10">
                <h5 className="text-3xl font-black ">{kitten.name}</h5>
              </div>
              <Link to={`/kittens/${kitten.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Kittens;
