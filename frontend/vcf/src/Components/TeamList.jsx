import { useState,useEffect } from "react";
export default function TeamList({team1,team2}) {
    const [teams, setTeams] = useState({});
    const [my11,setMy11] = useState([])
    const [opp11,setOpp11] = useState([])
    const [myOverseasCount,setMyOverseasCount] = useState(0)
    const [oppOverseasCount,setoppOverseasCount] = useState(0)
    useEffect(() => {
    const loadTeams = async () => {
        const res = await fetch("/teamlist.json");
        const data = await res.json();
        setTeams(data);
    };

    loadTeams();
    }, []);
    
    const handleMy11 = (player,type) => {

    const alreadySelected = my11.includes(player);
    if(alreadySelected){
        setMy11(prev => prev.filter(p => p !== player));
        if(type === "✈️"){
            setMyOverseasCount(prev => prev - 1)
        }
        return;
    }
    if(type==="✈️"){
        if (my11.length <11 && myOverseasCount<4) {
      setMy11(prev => [...prev, player]);
      setMyOverseasCount(prev => prev + 1)
    }
    else{
        alert("Max 4 Overseas allowed per team")
    }
  }else{
    if (my11.length <11) {
      setMy11(prev => [...prev, player]);
    }
    else{
        alert("Max 11 players")
    }
  };
}

    const handleOpp11 = (player,type) => {
        const alreadySelected = opp11.includes(player);
    if(alreadySelected){
        setOpp11(prev => prev.filter(p => p !== player));
        if(type === "✈️"){
            setoppOverseasCount(prev => prev - 1)
        }
        return;
    }
    if(type==="✈️"){
        if (opp11.length <11 && oppOverseasCount<4) {
      setOpp11(prev => [...prev, player]);
      setoppOverseasCount(prev=>prev+1)
    }
    else{
        alert("Max 4 Overseas allowed per team")
    }
  }else{
    if (opp11.length <11) {
      setOpp11(prev => [...prev, player]);
    }
    else{
        alert("Max 11 players")
    }
}
    };

    return(
        
        <div className="text-2xl text-white grid grid-cols-1 md:grid-cols-3 place-items-center">
                
            <div className="grid grid-cols-2 gap-5 ">      
                <div >
                <h1 className="text-3xl font-bold"> {teams?.[team1]?.name}</h1>
                {teams?.[team1]?.players?.map((player)=>{
                    const isSelected = my11.includes(player.name)
                    return(           
                    <div key={player.name}
                    onClick={()=>handleMy11(player.name,player.type)}
                    className={`p-3 border rounded cursor-pointer flex justify-between
                                ${isSelected ? "bg-green-600" : "bg-[#140245]"}`}>
                        
                    <span>{player.name}</span> 
                    <span>{player.role}</span>
                    {player.type === "🇮🇳" || (<span>{player.type}</span>)} 
                    </div>)
                })}
                </div>
                <div className="flex gap-3  flex-col">
                <h1 className="text-3xl font-bold"> Playing 11</h1> 
                {my11 && my11.map((p)=>(
                    <div key={p} className={`p-3 border rounded cursor-pointer`}>{p}</div>
                ))}
                </div>
            </div> 
            <div>
                {my11&&(
                    <button>Start Match</button>
                )}
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div>
                <h1 className="text-3xl font-bold"> {teams?.[team2]?.name}</h1>
                {teams?.[team2]?.players?.map((player)=>{
                    const isSelected = opp11.includes(player.name)
                    return(           
                    <div 
                    onClick={()=>handleOpp11(player.name,player.type)}
                    className={`p-3 border rounded cursor-pointer flex justify-between
                                ${isSelected ? "bg-green-600" : "bg-[#140245]"}`}>
                        
                    <span>{player.name}</span> 
                    <span>{player.role}</span>
                    {player.type === "🇮🇳" || (<span>{player.type}</span>)} 
                    </div>
                )

                })}
                </div>
                <div className="flex gap-3  flex-col">
                <h1 className="text-3xl font-bold"> Playing 11</h1> 
                {opp11&& opp11.map((p)=>(
                    <div key={p} className={`p-3 border  rounded cursor-pointer`}>{p}</div>
                ))}
                </div>
            </div>
        </div>
    )
    }