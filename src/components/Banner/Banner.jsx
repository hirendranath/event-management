

const Banner = () => {
  return (
    <div className="container">
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/bzg6qY5/home-bg.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="mb-2 text-2xl font-bold">Turning Moments into Memories.</h2>
            <p className="mb-5">Your Vision, Our Expertise, One Unforgettable Day.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div>
        <div className=" justify-center w-full bg-base-100 shadow-xl image-full">
          <div className="card-body">
            <h2 className="justify-center text-4xl">When & Where</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>

            <div className=" grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5" >
              {/* when a where 1 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title justify-center">The Ceremony</h2>
                  <p>
                    Friday, August 28, 2020 <br />
                    11:30 AM - 01.00 PM <br />
                    678 Central Square <br />
                    Melbourne – 10160, Australia</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book for Ceremony</button>
                  </div>
                </div>
              </div>
              {/* when a where 1 */}

              {/* when a where 1 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title justify-center">The Reception</h2>
                  <p>
                    Friday, August 28, 2020 <br />
                    11:30 AM - 01.00 PM <br />
                    678 Central Square <br />
                    Melbourne – 10160, Australia</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book for Reception </button>
                  </div>
                </div>
              </div>
              {/* when a where 1 */}
              {/* when a where 1 */}
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title justify-center">The Party</h2>
                  <p>
                    Friday, August 28, 2020 <br />
                    11:30 AM - 01.00 PM <br />
                    678 Central Square <br />
                    Melbourne – 10160, Australia</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book for Party</button>
                  </div>
                </div>
              </div>
              {/* when a where 1 */}
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-primary text-2xl mt-10">Visit our past events</button>
            </div>

            {/* 2ed section */}
            <div className="container grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/VxB9h6y/sally-1.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Best event on october !</h2>
                  <p>This was the best event in October</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">visit the event</button>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/wQM6tzj/gallery-1-300x300.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Best event on May !</h2>
                  <p>This was the best event in May</p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">visit the event</button>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="container">
              <h3 className="text-5xl mt-12">Our All Events</h3>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
