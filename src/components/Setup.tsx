import React from "react";
import './setup.css'

const Setup: React.FC = () => {
  return(
    <div id='artemis-setup'>
      <h2>Setup</h2>

      <table id='table-setup'>
        <thead>
          <tr className='table-headings'>
            <th> <i className="fab fa-chrome"></i> Install from Chrome Extension Store</th>
            <th> <i className="fas fa-download"></i> Build your own extension</th>
          </tr>
          <tr className='table-headings'>
            <td>1. Install <b><a href='https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en' target='_blank'>React Developer Tools</a></b>.</td>
            <td>1. Clone the repo and npm install</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2. Install <b><a href='https://chrome.google.com/webstore/detail/' target='_blank'>Artemis Dev Tool</a></b> or <b className='strong'></b>.</td>
            <td>2. npm run build</td>
          </tr>
          <tr>
            <td>
              3. Open your React (v16+) GraphQL application.
          </td>
            <td>
              3. Navigate to chrome://extensions.
          </td>
          </tr>
          <tr>
            <td>
              4. Open Chrome Developer Tools (Inspect).
          </td>
            <td>
              4. Load Unpacked from './artemis/build'.
          </td>
          </tr>
          <tr>
            <td>5. Click on the Artemis panel and enjoy!</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default Setup;