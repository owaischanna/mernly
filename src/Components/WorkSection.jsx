import React from 'react';
import TitleImage from '../assets/asset-tile-checkout.png';
import Checkout from '../assets/asset-tile-moweb.png';
import Noro from '../assets/image-asset.jpeg';
import Airnb from '../assets/airnblogo.png';
import Air from '../assets/air.png';
import {Link} from 'react-router-dom';

const WorkSection = () => {
  return (
    <section className="py-20">
      {/* Work Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl  mb-4 text-black">Work </h2>
      </div>

      {/* Work Cards */}
<div className="max-w-7xl mx-auto px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Card 1 */}
    <div className="bg-white drop-shadow-sm max-w-md mx-auto rounded-lg overflow-hidden relative">
      <Link to="/OverHaul">
        <div className="flex justify-center"> {/* Center the logo */}
          <img
            src={Airnb}  // Add your logo image
            alt="Airbnb Logo"
            className="logo-above-card mb-4 w-84 h-24 object-contain" 
          />
        </div>
        <img
          src={TitleImage}
          alt="Airbnb Checkout System"
          className="w-full h-64 object-fill"
        />
        <div className="p-6">
          <h3 className="text-xl mb-2 text-black cursor-pointer hover:underline">
            Overhauling Airbnb's checkout system
          </h3>
          <p className="text-gray-600">
            I led a six team effort to completely rethink how all revenue flows into Airbnb.
          </p>
        </div>
      </Link>
    </div>

    {/* Card 2 */}
    <div className="bg-white drop-shadow-sm max-w-md mx-auto rounded-lg overflow-hidden">
      <Link to="/OverHaul">
        <div className="flex justify-center"> {/* Center the logo */}
          <img
            src={Airnb}  // Add your logo image
            alt="Airbnb Logo"
            className="logo-above-card mb-4 w-84 h-24 object-contain"
          />
        </div>
        <img
          src={Checkout}
          alt="Airbnb Mobile Website"
          className="w-full h-64 object-fill"
        />
        <div className="p-6">
          <h3 className="text-xl mb-2 text-black cursor-pointer hover:underline">
            Redesigning Airbnb's mobile website
          </h3>
          <p className="text-gray-600">
            I was part of a special team tasked with completely redesigning Airbnb's mobile web platform.
          </p>
        </div>
      </Link>
    </div>

    {/* Card 3 */}
    <div className="bg-white drop-shadow-sm max-w-md mx-auto rounded-lg overflow-hidden">
      <Link to="/OverHaul">
        <div className="flex justify-center"> {/* Center the logo */}
          <img
            src={Airnb}  // Add your logo image
            alt="Airbnb Logo"
            className="logo-above-card mb-4 w-84 h-24 object-contain"
          />
        </div>
        <img
          src={Noro}
          alt="DoorDash Photography Program"
          className="w-full h-64 object-fill"
        />
        <div className="p-6">
          <h3 className="text-xl mb-2 text-black cursor-pointer hover:underline">
            Building DoorDash’s photography program
          </h3>
          <p className="text-gray-600">
            I founded the program that brought delicious food photography to DoorDash.
          </p>
        </div>
      </Link>
    </div>

    {/* Card 4 - New Card */}
    <div className="bg-white drop-shadow-sm max-w-md mx-auto rounded-lg overflow-hidden">
      <Link to="/OverHaul">
        <div className="flex justify-center"> {/* Center the logo */}
          <img
            src={Air}
            alt="Airbnb Logo"
            className="logo-above-card mb-4 w-84 h-24 object-contain"
          />
        </div>
        <img
          src={Checkout}
          alt="New Project"
          className="w-full h-64 object-fill"
        />
        <div className="p-6">
          <h3 className="text-xl mb-2 text-black cursor-pointer hover:underline">
            New Exciting Project
          </h3>
          <p className="text-gray-600">
            Description of your new project.
          </p>
        </div>
      </Link>
    </div>

    {/* Card 5 - New Card */}
    <div className="bg-white drop-shadow-sm max-w-md mx-auto rounded-lg overflow-hidden">
      <Link to="/OverHaul">
        <div className="flex justify-center"> {/* Center the logo */}
          <img
            src={Air}
            alt="Airbnb Logo"
            className="logo-above-card mb-4 w-84 h-24 object-contain"
          />
        </div>
        <img
          src={Noro}
          alt="Another Project"
          className="w-full h-64 object-fill"
        />
        <div className="p-6">
          <h3 className="text-xl mb-2 text-black cursor-pointer hover:underline">
            Another Interesting Project
          </h3>
          <p className="text-gray-600">
            A brief overview of what this project is about.
          </p>
        </div>
      </Link>
    </div>

    {/* Card 6 - New Card */}
    <div className="bg-white drop-shadow-sm max-w-md mx-auto rounded-lg overflow-hidden">
      <Link to="/OverHaul">
        <div className="flex justify-center"> {/* Center the logo */}
          <img
            src={Air}
            alt="Airbnb Logo"
            className="logo-above-card mb-4 w-84 h-24 object-contain"
          />
        </div>
        <img
          src={Noro}
          alt="Yet Another Project"
          className="w-full h-64 object-fill"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-black cursor-pointer hover:underline">
            Yet Another Interesting Project
          </h3>
          <p className="text-gray-600">
            A brief overview of what this project is about.
          </p>
        </div>
      </Link>
    </div>
  </div>
</div>


      <div className="text-center my-16">
        <h2 className="text-4xl mb-10 text-black">Articles</h2>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Article 1 */}
            <Link to="/OverHaul">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl  mb-4 cursor-pointer hover:underline text-black">
                10 Questions You Should Ask in a UX Interview
              </h3>
              <p className="text-gray-600">
                Interview your interviewer to know whether a position is a good fit for you.
              </p>
             
            </div>
            </Link>
             {/* Article 2 */}
             <Link to="/OverHaul">
             <div className="bg-white shadow-md rounded-lg p-6">
             <h3 className="text-xl  mb-4 cursor-pointer hover:underline text-black">
                How UX Debt Messes with Your Metrics
              </h3>
              <p className="text-gray-600">
                How UX debt is making sound solutions appear unsuccessful.
              </p>
              
            </div>
            </Link>

            {/* Article 3 */}
            <Link to="/OverHaul">
            <div className="bg-white shadow-md rounded-lg p-6 ">
            <h3 className="text-xl  mb-4 cursor-pointer hover:underline text-black">
                Designing for Empathy and Retention
              </h3>
              <p className="text-gray-600">
                Five lessons from an intimate evening with IDEO's top designers.
              </p>
            </div>
            </Link>

            {/* Article 4 */}
            <Link to="/OverHaul">
            <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl  mb-4 cursor-pointer hover:underline text-black">
                Breaking into UX
              </h3>
              <p className="text-gray-600">
                The three-step path to becoming a user experience designer.
              </p>
            </div>
            
            </Link>
            </div>
            </div>
            </div>
            <div className="text-center mt-16">
        <p className="text-gray-600 text-lg">
          Find me on <a href="https://linkedin.com" className="text-black -500 hover:underline">LinkedIn</a> and <a href="https://medium.com" className="text-black -500 hover:underline">Medium</a>
        </p>
      </div>
      


     
    </section>
    
  );
};

export default WorkSection;
