import {useState} from "react"
import './style.scss';
import getApis from "./apis.json"
import Search from './components/Search/Search';
import ApiItem from './components/ApiItem';

function App() {
  return (
    <div className="App">
        <h3>A Collective list of free APIs for use in <br /> software and web development</h3>
        <Search placeholder="Find development, games, images APIs"/>
        <div className='container'>
          <h4>Featured APIs of this week</h4>
          <div className='api-list'>
            {getApis.map((api) => (
              <ApiItem key={api.id} data={api} />
            ))}
            
          </div>
        </div>
    </div>
  );
}

export default App;
