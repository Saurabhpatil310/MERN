import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-2 p-3">
        <div className="card bg-white w-92 shadow-xl hover:scale-105 duration:300">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px]]  hover:bg-pink-500 hover:text-white px">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
