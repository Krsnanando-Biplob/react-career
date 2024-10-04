
const Banner = () => {
  return (
    <div className="grid mx-auto gap-6 px-2 grid-cols-5">
      <div className="col-span-3 items-center my-auto">
        <h1 className="text-6xl font-extrabold">One Step <br /> Closer To Your</h1>
        <h2 className="text-6xl my-4 text-blue-500 font-extrabold">Dream Job</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className="btn my-4 btn-primary">Get Started</button>
      </div>
      <div className="col-span-2">
        <img src="../public/images/user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;