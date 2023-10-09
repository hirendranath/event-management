

const Banner = () => {
  return (
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
    // 2nd section
    
  );
};

export default Banner;
