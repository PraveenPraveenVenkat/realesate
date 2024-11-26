export default function App() {
  return (
    <>
       <div
        style={{
          backgroundImage: `url('https://unsplash.com/photos/2keCPb73aQY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkxMjgxNzEw&force=true&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '50vh',
          position: 'relative',
        }}
      ></div>
        {/* Sign In Button */}
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <button className="bg-blue-500 text-white px-16 py-2 rounded-lg mx-12 ">
            Sign In
          </button>
        </div>

      
      <div className="text-black text-4xl px-8 p-6 bg-cyan-700 text-center font-bold mt-5">
        <h1>INDIA REAL ESTATE</h1>
      </div>

    
      <div>
        <h4 className="font-bold text-2xl mt-5 text-center ">
          Explore Buy / Sell / Rent Property in India
        </h4>
      </div>

      
      <ul>
        <li className="flex items-center border-red-400 gap-4 grid-cols-2 mt-4 pt-6">
          <div className="grid grid-cols-4 gap-6 ml-12 bg-stone-500 p-4 rounded-lg">
            <button className="rounded-lg px-4 py-2 bg-stone-300">Buy</button>
            <button className="rounded-lg px-4 py-2 bg-stone-300">Rent/PG</button>
            <button className="rounded-lg px-4 py-2 bg-stone-300">Commercial</button>
            <button className="rounded-lg px-4 py-2 bg-stone-300">Dealer</button>
          </div>
        </li>
      </ul>

      
      <div className="flex items-stretch mt-6 pr-4">
        <div className="py-12 bg-violet-900 pr-12 ml-2 text-center">
          Post Your Property Ads for Free
          <button className="text-black rounded-full bg-white px-4 py-2 mt-4">
            List Your Property
          </button>
        </div>
        <div className="py-12 bg-amber-300 pr-12 ml-4 text-center">
          Top Real Estate Agents & Property Dealers in India
          <button className="text-black rounded-full bg-white px-4 py-2 mt-4">
            List Your Property
          </button>
        </div>
        <div className="py-12 bg-cyan-700 pr-12 ml-4 text-center">
          Explore India's Top Residential Cities List
          <button className="text-black rounded-full bg-white px-4 py-2 mt-4">
            List Your Property
          </button>
        </div>
      </div>

    
      <div className="bg-blue-500 mt-12 pt-12 pb-12">
        <h4 className="text-white text-xl font-bold mb-6 text-center">
          Top Localities for Buying or Renting Properties
        </h4>
        <div className="grid grid-cols-4 gap-6 px-12">
          <div className="bg-white rounded-lg p-4 text-center">
            <img
              src="https://dynamic.realestateindia.com/proj_images/project40869/proj_img-40869_1-200x200.jpg"
              alt="Kovai Pudur"
              className="rounded-lg w-full"
            />
            <h5 className="mt-4 font-bold">Kovai Pudur</h5>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <img
              src="https://dyimg2.realestateindia.com/proj_images/project31863/proj_img-31863_1-200x200.jpg"
              alt="Race Course"
              className="rounded-lg w-full"
            />
            <h5 className="mt-4 font-bold">Race Course, Coimbatore</h5>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <img
              src="https://dyimg1.realestateindia.com/proj_images/project2829/proj_img-2829_1-200x200.jpg"
              alt="Race Course"
              className="rounded-lg w-full"
            />
            <h5 className="mt-4 font-bold">Race Course, Coimbatore</h5>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <noafnsn></noafnsn>
            <img
              src="https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg"
              alt="Pn Pudur"
              className="rounded-lg w-full"
            />
            <h5 className="mt-4 font-bold">Pn Pudur, Coimbatore</h5>
            <button className="bg-blue-500 text-white rounded-full px-4 py-2 mt-4">
              View More
            </button>
          </div>
        </div>
      </div>

      
      <div className="bg-gray-100 py-6">
        <h4 className="text-center text-2xl font-bold mb-4">Reviews</h4>
        <div className="flex justify-center gap-6">
          <div className="bg-white p-4 shadow-lg rounded-lg max-w-md">
            <h5 className="font-bold mb-2">Praveen</h5>
            <p>"Great platform to find properties. Highly recommended!"</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg max-w-md">
            <h5 className="font-bold mb-2">Joe</h5>
            <p>"Found the perfect home for my family. Excellent service!"</p>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg max-w-md">
            <h5 className="font-bold mb-2">Ram</h5>
            <p>"User-friendly and comprehensive property listings."</p>
          </div>
        </div>
      </div>

      
      <footer className="bg-black text-white text-center py-4 mt-6">
        <p>
          Copyright © Proton InfoTech.in Pvt. Ltd. All rights reserved.- Terms & Conditions
        </p>
      </footer>
    </>
  );
}
