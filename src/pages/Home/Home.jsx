import React from 'react';
import Banner from './Banner';
// import { Typed } from 'react-typed';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          Banner Now
              {/* <Typed
                          strings={[
                            "Kotha helo text...",
                            "Ami React developer",
                            "Typing animation",
                          ]}
                          typeSpeed={40}
                          backSpeed={50}
                          loop
                        /> */}
        </div>
    );
};

export default Home;