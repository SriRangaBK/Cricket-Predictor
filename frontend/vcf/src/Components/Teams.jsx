import { useState } from "react";
import { Link } from "react-router-dom";
export default function Teams({team, opponent, onSelectTeam,onSelectOpp}) {
    const [teams, setTeams] = useState([
    { code: "CSK", name: "Chennai Super Kings" },
    { code: "MI", name: "Mumbai Indians" },
    { code: "RCB", name: "Royal Challengers Bengaluru" },
    { code: "KKR", name: "Kolkata Knight Riders" },
    { code: "DC", name: "Delhi Capitals" },
    { code: "PBKS", name: "Punjab Kings" },
    { code: "RR", name: "Rajasthan Royals" },
    { code: "SRH", name: "Sunrisers Hyderabad" },
    { code: "GT", name: "Gujarat Titans" },
    { code: "LSG", name: "Lucknow Super Giants" }
    ]);
        

    return(
        <div className="grid  grid-cols-1 md:grid-cols-3 place-items-center">
            <div className="grid  gap-3 text-white text-center">
                <h2 className="text-xl">Select Your Team</h2>

                    {teams.map((t) => {


                    return (
                        <div
                        key={t.code}
                        onClick={() =>  onSelectTeam(t.code)}
                        className={`p-4 border rounded-lg shadow-md border-black text-2xl font-bold cursor-pointer
                        ${team ===t.code ? "bg-green-600" : "bg-[#140245]"}`}
                        >
                        {t.name}
                        </div>
                    );
                    })}

            </div>
            <div className="grid place-items-center h-[75px]">
                {team && opponent && (
                    <Link className="border-1 rounded-[5px] p-4 text-3xl text-white hover:cursor-pointer hover:bg-white hover:text-black transition duration-700 ease-out hover:-translate-y-1" to="/selectplayers" state={{team,opponent}}>Start </Link>
                )}
            </div>
            <div className="grid gap-3 text-white text-center">
                <h2 className="text-xl">Select Opponent's Team</h2>

                    {teams.filter((t)=>t.code!==team)
                    .map((t) => {


                    return (
                        <div
                        key={t.code}
                        onClick={() => onSelectOpp(t.code)}
                        className={`p-4 border rounded-lg shadow-md border-black text-2xl font-bold cursor-pointer
                        ${opponent === t.code ? "bg-green-600" : "bg-[#140245]"}`}
                        >
                        {t.name}
                        </div>
                    );
                    })}
                    
            </div>
        </div>
    )

}