// eslint-disable-next-line no-unused-vars
import React from "react";
import list from '../../src/assets/list.json'
import Cards from "../components/Cards"
import {Link} from "react-router-dom"

function course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className=" mt-28 items-center justify-center text-center">
        <div className="text-2xl md:text-4xl">
          <h1>We are delighted to have you 
            <span className="text-blue-500"> Here! :)</span>
          </h1>
          </div>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi beatae temporibus hic, necessitatibus porro ullam, quibusdam quis consequuntur omnis ut debitis repellat aspernatur mollitia. Eius sed laudantium illum obcaecati.
          </p>
          <Link to="/">
          <button className=" mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-orange-500 duration:300">Back</button></Link>
        </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">

          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      
    </>
  );
}

export default course;
