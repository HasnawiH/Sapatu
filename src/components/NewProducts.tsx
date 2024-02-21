import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/jordan.png",
    title: "Air Jordan 1 Low G",
    desc: "Feel unbeatable, from the tee box to the final putt.",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/jordan-2.jpg",
    title: "Air Jordan 1 Low SE",
    desc: "Feel unbeatable, from the tee box to the final putt.",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/jordan-3.jpg",
    title: "Air Jordan 1 Mid",
    desc: "Feel unbeatable, from the tee box to the final putt.",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/jordan-4.png",
    title: "Air Jordan 1 Retro",
    desc: "Feel unbeatable, from the tee box to the final putt.",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/jordan-5.png",
    title: "Air Jordan 1 Low G",
    desc: "Feel unbeatable, from the tee box to the final putt.",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/jordan-6.jpg",
    title: "Air Jordan 1 Low G",
    desc: "Feel unbeatable, from the tee box to the final putt.",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/jordan-7.png",
    title: "Air Jordan 1 Low G",
    desc: "Feel unbeatable, from the tee box to the final putt.",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/jordan-8.jpg",
    title: "Air Jordan 1 Low ",
    desc: "Feel unbeatable, from the tee box to the final putt.",
    rating: 4,
    price: "120.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container py-16">
        <h2 className="font-medium text-2xl pb-4">Produk</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
