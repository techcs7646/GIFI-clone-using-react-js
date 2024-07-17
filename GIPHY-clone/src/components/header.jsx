import {useEffect, useState} from "react";
import GifSearch from "./gif-search";
import {Link} from "react-router-dom";
import {HiEllipsisVertical, HiMiniBars3BottomRight} from "react-icons/hi2";


const header = () => {

    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);


    // const fetchGifCategories = async () => {
    //     const res = await fetch("/categories.json");
    //     const {data} = await res.json();
    //     setCategories(data);
    //   };


    //   useEffect(() => {
    //     fetchGifCategories();
    //   }, []);
    

  return (
    <nav>
       <div className="relative flex gap-4 justify-between items-center mb-2">
        <Link to={"/"} className="flex gap-2">
          <img src="/logo.svg" alt="Giphy Logo" className="w-8" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>

        <Link className="px-4 py-1 transition ease-in-out hover:gradient border-b-4 hidden lg:block">
                 Reactions
        </Link>
        <button onClick={() => setShowCategories(!showCategories)}>
            <HiEllipsisVertical size={35} className={`py-0.5 transition ease-in-out hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 cursor-pointer hidden lg:block`}/>
        </button>

        <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to="/favorites">Favorite GIFs</Link>
            </div>
        
            <button onClick={() => setShowCategories(!showCategories)}>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>

          {showCategories && 
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
          </div>}

       </div>
    </nav>    
  )
}

export default header