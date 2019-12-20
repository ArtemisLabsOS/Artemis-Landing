import React from "react";
import './about.css'

const About: React.FC = () => {
  return (
    <div>
      <p> Project Artemis is sitll in Beta, a subset project of OS-Labs.</p>
      <h2>Meet Our Engineering Team</h2>
      <div id='team'>
        <div className='person'>
          <img className='pro-img' src="https://media.licdn.com/dms/image/C4E03AQGGlWdJrf6G2A/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=5Hx_WnsYuNiCO4y2fxkqZCMmJ1mY3LTFBushzbHEoiE" alt='Altemis' />
          <h4 className='name'>Timothy Jung</h4>
          <p className='single-p'><a href='https://github.com/timjj92' target='_blank'>@timjj92</a></p>
        </div>
        <div className='person'>
          <img className='pro-img' src="https://avatars2.githubusercontent.com/u/50888159?s=460&v=4" alt='Altemis' />
          <h4 className='name'>Justin Lo</h4>
          <p className='single-p'><a href='https://github.com/justinnnlo' target='_blank'>@justinnnlo</a></p>
        </div>
        <div className='person'>
          <img className='pro-img' src="https://media.licdn.com/dms/image/C5603AQGIbDSa8YVYEg/profile-displayphoto-shrink_200_200/0?e=1582156800&v=beta&t=b9TBfTWk1ybaVuA56kTaXFTzSsSUwYJD6pqQVajGetk" alt='Altemis' />
          <h4 className='name'>Seong Choi</h4>
          <p className='single-p'><a href='https://github.com/choies921003' target='_blank'>@choies921003</a></p>
        </div>
        <div className='person'>
          <img className='pro-img' src="https://avatars1.githubusercontent.com/u/43552993?s=460&v=4" alt='Altemis' />
          <h4 className='name'>Angie Chang</h4>
          <p className='single-p'><a href='https://github.com/angiechangpagne' target='_blank'>@angiechangpagne</a></p>
        </div>
      </div>
      <footer> All rights Reserved Artemis Labs LLP located in Venice, CA is actively looking for contributors and engineers to join the team. Send a pull request!</footer>
    </div>
  );
};

export default About;