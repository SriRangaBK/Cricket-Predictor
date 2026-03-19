import { useState } from "react";
export default function Teams({onSelectTeam,selectedTeams}) {
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
        <div className="grid  grid-cols-1 md:grid-cols-2 justify-items-center">
            <div className="grid gap-3 text-white text-center">
                <h2 className="text-xl">Select Your Team</h2>

{teams.map((t) => {
  const isSelected = selectedTeams.includes(t.code);

  return (
    <div
      key={t.code}
      onClick={() => !isSelected && onSelectTeam(t.code)}
      className={`p-4 border rounded-lg shadow-md border-black text-2xl font-bold 
      ${isSelected ? "opacity-50 pointer-events-none bg-gray-400" : "bg-[#140245] cursor-pointer"}`}
    >
      {t.name}
    </div>
  );
})}

            </div>
            <div className="grid gap-3 text-white text-center">
                <h2 className="text-xl">Select Opponent's Team</h2>

                {teams.map((t)=>(
                    <div className="bg-[#140245] p-4 border rounded-lg shadow-md border-black text-2xl font-bold" key={t.code}>
                        <button className="w-full" type="button" disabled={selectedTeams.includes(t.code)} onClick={()=> onSelectTeam(t.code)}>{t.name}</button>
                    </div>
                ))}
   
            </div>
        </div>
    )

}