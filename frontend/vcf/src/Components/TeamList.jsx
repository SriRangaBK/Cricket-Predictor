import { useState,useEffect } from "react";
export default function TeamList({team1,team2}) {
    const [teams, setTeams] = useState({});

    useEffect(() => {
    const loadTeams = async () => {
        const res = await fetch("/teamlist.json");
        const data = await res.json();
        setTeams(data);
    };

    loadTeams();
    }, []);
    
    return(
        
        <div className="text-2xl text-white">
        <h1 className="text-3xl font-bold"> {teams?.[team1]?.name}</h1>
                
        {teams?.[team1]?.players?.map((player,i)=>(
            <div key={i} className="flex ">
                <input type="checkbox" />
            {player}
            </div>
        ))}
        
            <h1 className="text-3xl font-bold"> {teams?.[team2]?.name}</h1>
        {teams?.[team2]?.players?.map((player,i)=>(
            <div key={i} className="flex ">
                <input type="checkbox" />
            <li key={i}>{player}</li>
            </div>
        ))}
        </div>
    )
}