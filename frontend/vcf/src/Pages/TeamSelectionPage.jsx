import NavBar from "../Components/NavBar";
import TeamList from "../Components/TeamList";
import Teams from "../Components/Teams";
import { useEffect, useState } from "react";

export default function TeamSelectionPage(){
      
    const [selectedTeams,setSelectedTeams] = useState([])

    const handleteam =(team)=>{
        setSelectedTeams((prev)=>[...prev,team])
    }
    console.log(selectedTeams)
      
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="h-full bg-[#121111] p-3">
                <Teams onSelectTeam={handleteam} selectedTeams={selectedTeams} />
                <TeamList team1={selectedTeams[0]} team2={selectedTeams[1]}/>
            </div>

        </div>
      
    )
}