import React from "react"
import './intro.css'

const Intro: React.FC = () => {
  return (
    <div>
      <div>
      <img src="" height='100px' />
      <h1></h1>
      <p id='artemis-bio'>
      A Chrome Developer Tool designed to help engineers debug React-GraphQL applications.
      </p>
      <p>Visualize the component hierarchy, state/props data and state changes of your React application</p>
      <p>See your GraphQL schema, queries, and cache in real-time</p>
      <p> Includes query snapshot </p>
      <video loop autoPlay controls width='100%' muted >
        <source src='' type='video/mp4' />
      </video>
      </div>
      <h3>Like our developer tool? Give us a star!</h3>

      <div id='github-btns'>
        {/* allows a user to follow our repo by watching the repo */}
        <a
          id='github-watch'
          className='github-button'
          href='https://github.com/ArtemisLabsLLP/Artemis-dev-tool'
          data-icon='octicon-eye'
          data-size='large'
          data-show-count='true'
          aria-label='Watch ArtemisLabsLLP/Artemis-dev-tool on GitHub'
        >
          Watch
        </a>
        <div className='space' />
        {/* A button created for a vistor to star our repo */}
        <a
          className='github-button'
          href='https://github.com/ArtemisLabsLLP/Artemis-dev-tool'
          data-icon='octicon-star'
          data-size='large'
          data-show-count='true'
          aria-label='Star ArtemisLabsLLP/Artemis-dev-tool on GitHub'
        >
          Star
        </a>
      </div>


    </div>
  );
};
export default Intro;