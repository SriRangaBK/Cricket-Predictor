import NavBar from "../Components/NavBar";
import TeamList from "../Components/TeamList";
import Teams from "../Components/Teams";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function TeamSelectionPage(){
      
    const [yourTeam,setYourTeam] = useState(null);
    const [oppTeam,setOppTeam] = useState(null);

    const handleYourteam =(tcode)=>{
        setYourTeam(tcode)
    }
    const handleOppteam =(ocode)=>{
        setOppTeam(ocode)
    }
    console.log(yourTeam,oppTeam)
      
    return(
        <div>
            <div className="sticky bg-white top-0 ">
                <NavBar/>
            </div>
            <div className="h-screen bg-[#121111] p-3">
                <Teams team={yourTeam} opponent={oppTeam} onSelectTeam={handleYourteam} onSelectOpp={handleOppteam} />
            
            </div>

        </div>
      
    )
}