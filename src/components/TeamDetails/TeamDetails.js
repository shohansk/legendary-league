import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faClock } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './TeamDetails.css'
import { Link } from 'react-router-dom';


const TeamDetails = () => {
    const idTeam = useParams()
    const [selectTeam, setSelectTeam] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam.idTeam}`)
            .then(response => response.json())
            .then(data => setSelectTeam(data.teams[0]))

      

    }, [idTeam.idTeam])

 
    return (

        <div className="container-fluid ">

            <div className="team-logo mt-3 p-5 pt-5">
                <img class="rounded mx-auto d-block mt-3" src={selectTeam.strTeamBadge} alt="" />

            </div>

             <div className="Container back">
                 
            <div className="Container-fluid m-5 bg-success">
                <div className="row">

                    <div className=" bg-info col-md-6 ">
                        <h1>{selectTeam.strLeague}</h1>
                        <h2><FontAwesomeIcon className='text-white' icon={faClock} />Founded: {selectTeam.intFormedYear}</h2>
                        <h3><FontAwesomeIcon className='text-white' icon={faFlag} /> Country: {selectTeam.strCountry}</h3>

                        <h3><FontAwesomeIcon className='text-white' icon={faFutbol} /> Sports Type: {selectTeam.strSport}</h3>
                        <h4><FontAwesomeIcon className='text-white' icon={faMars} /> Gender: {selectTeam.strGender}</h4>

                    </div>

                    <div className="col-md-6 ">


                  {
                         selectTeam.strGender === 'Male' ? <img className="media-image w-100" src={process.env.PUBLIC_URL + "/male.png"} alt="" /> : <img className="media-image" src={process.env.PUBLIC_URL + "/female.png"} width="70px" alt="" />
                    }


                </div>

                </div>
            </div>
            <p>{selectTeam.strDescriptionEN}</p>
            <br />
            <br />

            <p>{selectTeam.strDescriptionEN}</p>


            <div className="media  mx-auto d-block m-3  w-25">

                <a  href={`https://${selectTeam.strTwitter}`}>  <span  ><FontAwesomeIcon className='media-image text-success fa-5x' icon={faTwitter} /></span></a>

                <a  href={`https://${selectTeam.strFacebook}`}> <span > <FontAwesomeIcon className=' media-image text-info fa-5x ml-3 mr-3' icon={faFacebook} /></span></a>

                <a  href={`https://${selectTeam.strYoutube}`}> <span as={Link} to={selectTeam.strYoutube}><FontAwesomeIcon className='fa-5x media-image text-danger' icon={faYoutube} /></span></a>
             

            </div>

             </div>

        </div>
    );
};

export default TeamDetails;