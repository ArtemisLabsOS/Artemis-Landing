import React from "react"
import './intro.css'

const Intro: React.FC = () => {
  return (
    <div>
      <div>
        <img src="" height='100px' />
        <div id='artemis-bio'>
          <h1>Artemis Bio</h1>
          <p>
            Project Artemis is an Open Sourced client developer tool for single endpoint testing of GraphQL queries with Apollo Client.
            Query endpoint testing and cache management can be done in real time for instant engineering feedback without the need for backend resolvers.
          </p>
        </div>
        <div>
          {/* <p>
        Debug and test query mutations and calls using introspection.
        The web based extension is best used for React and Express products/applications in development mode, and is available at the chrome store.    
        </p> */}
          <h3>Core features:</h3>
          <ul>
            <li>1. Display schema, query, and GraphQL response with endpoint detection </li>
            <li>2. Query caching and component storage- View normalized Apollo Client cache in JSON Format</li>
            <li>3. History of past queries per testing session </li>
            <li>4. Query response Snapshot featured</li>
            <li>5. View Response and Query Visualizer tree in inspection window</li>
            <li>6. Performance monitoring and Management </li>
          </ul>
        </div>

        {/* <p>See your GraphQL schema, queries, and cache in real-time</p>
        <p> Includes query snapshot </p> */}
        {/* */}
        <p> To utilize, open the inspector window. If a website or hosted site you are currently testing contains Apollo Client.
        Artemis will appear and will render once a GraphQL query is detected. </p>
      </div>
      <h3>Like our developer tool? Give us a star!</h3>

      <div id='github-btns'>
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