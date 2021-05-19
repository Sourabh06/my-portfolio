import React from "react";
import image from "../img/sky.jpg";
import cmp_img from "../img/sky.webp";

export default function Home() {
  return (
    <main>
      <picture>
        <source srcset={cmp_img} type="image/webp" />
        <source srcset={image} type="image/jpeg" />
        <img
          src={image}
          alt="Sky"
          className="absolute object-cover w-full h-full"
        />
      </picture>

      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Aloha. I'm Sourabh.
        </h1>
      </section>
    </main>
  );
}
