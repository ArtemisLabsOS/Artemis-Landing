import React from 'react';
import './features.css'

const Features: React.FC=()=>{


  return (
    <div id='features'>
      <h2>Project Artemis </h2>
      <h3>GraphQL Tab</h3>
      <h4>Artemis Dev TOol leverages Apollo's schema introspection and Chrome Devtool APIs to display GraphQL schema and query information from the server, allowing full-stack developers to debug their applications from the client side.
      </h4>
      <div className='artemis-features'>
        <div>
          <div className='bullets'>
            <i className="fas fa-history fa-2x"></i>
            <li>
             Artemis Dev Tool for Apollo Client stores history session logs of past queries and redirects to their respective response,
              a good way to backtrack when testing an Apollo App or site.
            </li>
          </div>
          <div className='bullets'>
            <i className="fas fa-search-plus fa-2x"></i>
            <li>
              Artemis displays GraphQL schema information from the server 
              using Apollo's schema introspection.
            </li>
          </div>
          <div className='bullets'>
            <img src="" width='32' height='32'/>
            <li>
              Artemis is currently geared towards Apollo client apps based on React and Node Express  without the need for a server or resolvers. In future releases, we
              plan to provide support for other GraphQL  implementations.
            </li>
          </div>
        </div>
        <img className='demo' src="" />
      </div>

      <h3>React Tab</h3>
      <h4>
      Artemis parses through React applications to generate a real-time interactive visualizer graph representing the app's React component hierarchy, with node-specific state and props data.
      </h4>
      <div className='artemis-features'>
        <div>
          <div className='bullets'>
            <i className="fas fa-sitemap fa-2x" style={{width: '32px'}}></i>
            <li>
              
            </li>
          </div>
          <div className='bullets'>
            <i className="fas fa-clipboard-list fa-2x" style={{width: '32px'}}></i>
            <li>
           
            </li>
          </div>
          <div className='bullets'>
            <i className="fas fa-filter fa-2x"></i>
            <li>
           
            </li>
          </div>
        </div>
        <img className='demo' src="" />
      </div>
    </div>
  );
};


export default Features;


