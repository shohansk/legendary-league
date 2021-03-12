import React, { useEffect, useState } from 'react';
import PlayerTeams from '../PlayerTeams/PlayerTeams';
import './Home.css';

const Home = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`)
      .then(response => response.json())
      .then(data => setTeams(data.teams.slice(0,15)))


  }, [])
  return (
    <div className="container ">
       <img className="media-image w-100 h-25" src={process.env.PUBLIC_URL + "/wwe.jpg"} alt="dsfdfsdf" />
      <div className="row backg">

        {
          teams.map((playerTeam) => <PlayerTeams playerTeam={playerTeam}></PlayerTeams>)
        }
      </div>

    </div>
  );
};

export default Home;