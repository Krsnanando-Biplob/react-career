import { useEffect, useState } from "react";
import Categoryis from "../Categoryis/Categoryis";

const Category = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCat(data))
  }, [])
  return (
    <div>
      <h2 className="text-center font-extrabold text-6xl my-4">Job category list </h2>
      <p className="text-center mb-6">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <img src={cat.logo} alt="" />
      <div className="grid md:grid-cols-4 gap-2 px-2 mx-auto">
        {
          cat.map(cat => <Categoryis key={cat.id} cat={cat} ></Categoryis>)
        }
      </div>
    </div>
  );
};

export default Category;