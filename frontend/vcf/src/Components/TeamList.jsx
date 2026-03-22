import { useState,useEffect } from "react";
export default function TeamList({team1,team2}) {
    const [teams, setTeams] = useState({});
    const [playing11,setPlaying11] = useState([])
    useEffect(() => {
    const loadTeams = async () => {
        const res = await fetch("/teamlist.json");
        const data = await res.json();
        setTeams(data);
    };

    loadTeams();
    }, []);
    const handleP11 = (player) => {

  const alreadySelected = playing11.includes(player);

  if (alreadySelected) {
    setPlaying11(prev => prev.filter(p => p !== player));
  } else {
    if (playing11.length < 11) {
      setPlaying11(prev => [...prev, player]);
    }
  }

};
    return(
        
        <div className="text-2xl text-white grid grid-cols-1 md:grid-cols-3 place-items-center">
                
            <div className="grid grid-cols-2 gap-5">      
                <div>
                <h1 className="text-3xl font-bold"> {teams?.[team1]?.name}</h1>
                {teams?.[team1]?.players?.map((player)=>{
                    const isSelected = playing11.includes(player)
                    return(           
                    <div key={player} 
                    onClick={()=>handleP11(player)}
                    className={`p-3 border rounded cursor-pointer
                                ${isSelected ? "bg-green-600" : "bg-[#140245]"}`}>
                        
                    {player}
                    </div>)
                })}
                </div>
                <div className="flex gap-3  flex-col">
                <h1 className="text-3xl font-bold"> Playing 11</h1> 
                {playing11 && playing11.map((p)=>(
                    <div key={p} className={`p-3 border rounded cursor-pointer`}>{p}</div>
                ))}
                </div>
            </div> 
            <div>
                {playing11&&(
                    <button>Start Match</button>
                )}
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div>
                <h1 className="text-3xl font-bold"> {teams?.[team2]?.name}</h1>
                {teams?.[team2]?.players?.map((player)=>{
                    const isSelected = playing11.includes(player)
                    return(           
                    <div key={player} 
                    onClick={()=>handleP11(player)}
                    className={`p-3 border rounded cursor-pointer
                                ${isSelected ? "bg-green-600" : "bg-[#140245]"}`}>
                        
                    {player}
                    </div>)
                })}
                </div>
                <div className="flex gap-3  flex-col">
                <h1 className="text-3xl font-bold"> Playing 11</h1> 
                {playing11&& playing11.map((p)=>(
                    <div key={p} className={`p-3 border rounded cursor-pointer`}>{p}</div>
                ))}
                </div>
            </div>
        </div>
    )
}