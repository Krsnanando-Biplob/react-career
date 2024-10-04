
const Categoryis = ({ cat }) => {
  const { logo, category_name, availability } = cat
  return (
    <div>
      <div className="card card-body mb-10 bg-base-100 mx-auto shadow-xl">
        <figure>
          <img className="w-14"
            src={logo}
            alt="Shoes" />
        </figure>
        <div className="">
          <h2 className="card-title ">{category_name}</h2>
          <h2> {availability} </h2>
        </div>
      </div>
    </div>
  );
};

export default Categoryis;