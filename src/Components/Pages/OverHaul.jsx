import React from 'react';
import Che from '../../assets/che.png';
import Pla from '../../assets/pla.png';
import plan from '../../assets/plan.png';
import plane from '../../assets/plane.png';
import planet from '../../assets/planet.png';
import planet1 from '../../assets/planet1.png';

const OverHaul = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-white">
      <div className="text-center p-6 w-full max-w-4xl">
        {/* Signature Image */}
        <img
          src="https://images.squarespace-cdn.com/content/v1/59d3e6cef09ca42ec71380db/1590717144675-UFF10TADHHLVSQQNQ7Y7/asset-signature.png?format=750w"
          alt="Signature"
          className="w-auto h-20 mb-10 mx-auto"
        />

        {/* Increased space between heading and justified text */}
        <div className="mb-12">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-gray-700 text-justify leading-relaxed">
  Leading six teams to rebuild how all revenue flows into Airbnb
</h1>


          {/* Increased font size and line height for better spacing */}
          <p className="  text-xl leading-[2rem] text-gray-600 mb-12 text-justify">
            Multiple teams added features to Airbnb’s checkout flow for nearly ten years. Each team
            optimized for their own goals, leading to a checkout experience that was long, challenging,
            and frustrating for Guests. For six months I led an effort to improve the checkout flow,
            achieving results beyond what the company thought was possible.
          </p>
        </div>

        {/* Increased image size more */}
        <div>
          <img
            src={Pla}
            alt="Phone with Airbnb app"
            className="rounded-lg shadow-lg mx-auto w-full h-full max-w-6xl"
          />
        </div>
        <div className="text-center mt-20 mb-16">
        <h2 className="text-5xl  mb-4 text-gray-600">Challenges </h2>
      </div>

      <div className="mb-12">
          <h3 className="text-3xl  font-light mb-8 text-gray-700 leading-snug text-justify">
          Misaligned incentives
          </h3>

          {/* Increased font size and line height for better spacing */}
          <p className="  text-xl leading-[2rem] text-gray-600 mb-12 text-justify" >
  Six teams owned pages and components throughout the checkout flow. Each team worked independently, focused usually on smaller iterative tests that more easily hit metrics goals. There wasn’t much motivation or ability to fix the major tech and UX issues that spanned the entire checkout experience. Making significant improvements would require every team to work together in lockstep towards a shared vision—something we hadn’t done before.
</p>

        </div>
        <div>
          <img
            src={plan}
            alt="Phone with Airbnb app"
            className="rounded-lg shadow-lg mx-auto w-full max-w-6xl"
          />
        </div>
        <p className="   leading-[2rem] text-gray-600 mb-12 text-justify" >
        The original checkout flow was long, duplicative, had poor visual design, and was inconsistent between platforms
</p>

<div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Main Heading */}
      <h1 className="text-3xl text-justify  text-gray-800 mb-6">
        A variable and unpredictable experience
      </h1>

      {/* Description Text */}
      <p className="text-lg text-justify text-gray-600 mb-6 leading-relaxed">
        Not only was the checkout flow long, but it could vary dramatically.
        Different requirements were triggered by complex and unpredictable sets
        of criteria, so even veteran Airbnb Guests might suddenly encounter tasks
        they've never seen before:
      </p>

      {/* Ordered List with Points */}
      <ol className="list-decimal list-inside text-lg text-justify space-y-4 text-gray-700 pl-6">
        <li>
          <span className="font-semibold">Account and payment details</span> were needed from new Guests.
        </li>
        <li>
          <span className="font-semibold">Profile photo</span> and an <span className='font-semibold'>introductory message</span> were requested
          by some Hosts, who wished to learn about the guests booking their home.
        </li>
        <li>
          <span className="font-semibold">Passports or visas</span> may be required depending on the country
          of travel.
        </li>
        <li>
          <span className="font-semibold">Government IDs</span> may be needed to verify the identity of some
          Guests.
        </li>
      </ol>

      {/* Ending text */}
      <p className="mt-6 text-md text-justify text-gray-600 leading-relaxed">
        This unpredictable experience led to a feeling of "perpetual sign-up,"
        where Guests could never really know what they'd need to complete a booking.
      </p>
    </div>
    <div className="mb-12">
    <div className="text-center mt-20 mb-16">
        <h2 className="text-5xl  mb-4 text-gray-500">Approach </h2>
      </div>
          <h3 className="text-3xl  font-light mb-8 text-gray-700 leading-snug text-justify">
          Aligning the teams
          </h3>

          {/* Increased font size and line height for better spacing */}
          <p className="  text-xl leading-[2rem] text-gray-600 mb-12 text-justify" >
  Six We needed to collectively acknowledge problems with the checkout flow, share concerns about a project of this scale, and uncover requirements for finding solutions. My team achieved this through two design sprints. I planned and facilitated a two-hour discussion with 40 design, product, and engineering leaders from each team, which culminated in an intensive two-day design session involving 13 designers. The concepts from this design sprint created the shared principles and goals needed to make the project a success. Several major product ideas from the sprint would reshape not only the Checkout flow, but also Log In and Payments systems.
</p>

        </div>
        <div>
          <img
            src={plane}
            alt="Phone with Airbnb app"
            className="rounded-lg shadow-lg mx-auto w-full max-w-6xl"
          />
           <p className="   leading-[2rem] text-gray-600 mb-12 text-justify" >
           Initial problems, design principles, and product concepts generated a flurry of feedback, which helped me establish collaborative relationships with all teams involved.
</p>
        </div>
        <div className="mb-12">
    
          <h3 className="text-3xl  font-light mb-8 text-gray-700 leading-snug text-justify">
          Eliminate redundant content & steps
          </h3>

          {/* Increased font size and line height for better spacing */}
          <p className="  text-xl leading-[2rem] text-gray-600 mb-12 text-justify" >
          Because checkout was such a high-intent surface, teams had crammed the flow full of content they wanted to ensure Guests would see. Content was regularly copied from other product surfaces, and then duplicated again within the checkout flow itself.

I worked with each team to understand why components were arranged this way. We then worked together to determine which content to eliminate and which content to leave to other product surfaces.
</p>

        </div>
        <div>
          <img
            src={planet}
            alt="Phone with Airbnb app"
            className="rounded-lg shadow-lg mx-auto w-full max-w-6xl"
          />
           

           <h3 className="text-3xl mt-10  font-light mb-8 text-gray-700 leading-snug text-justify">
           A new way of working
          </h3>

          {/* Increased font size and line height for better spacing */}
          <p className="  text-xl leading-[2rem] text-gray-600 mb-12 text-justify" >
          At the start, I knew I’d need to enlist the help of every team for the checkout project to be successful. I worked to make sure that designers, engineers, and product managers who rarely worked together felt like part of one shared effort. This was one of the only times that so many teams have come together to make a dramatic shift to Airbnb’s product. As a result, I was credited with bringing a new level of collaboration to Airbnb.
</p>
<img
            src={planet1}
            alt="Phone with Airbnb app"
            className="rounded-lg shadow-lg mx-auto w-full max-w-6xl"
          />
              <p className="  text-xl leading-[2rem] text-gray-600 mb-12 text-justify" >
          At the start, I knew I’d need to enlist the help of every team for the checkout project to be successful. I worked to make sure that designers, engineers, and product managers who rarely worked together felt like part of one shared effort. This was one of the only times that so many teams have come together to make a dramatic shift to Airbnb’s product. As a result, I was credited with bringing a new level of collaboration to Airbnb.
</p>
        </div>
        
        <div className="text-center mt-20">
        <p className="text-gray-600 text-lg">
          Find me on <a href="https://linkedin.com" className="text-black -500 hover:underline">LinkedIn</a> and <a href="https://medium.com" className="text-black -500 hover:underline">Medium</a>
        </p>
      </div>
      
        
        
        
      </div>
      
      
      
      
    </section>
  );
};

export default OverHaul;
