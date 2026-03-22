import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import TeamList from "../Components/TeamList";

export default function PlayingSelectionPage() {
    const location = useLocation()
    const {team,opponent} = location.state ||{}
    console.log(team,opponent)
    return(
        <div>
            <div className="bg-white sticky top-0 ">
                <NavBar />
            </div>
            <div className="h-screen bg-[#121111] p-3">
                <TeamList team1={team} team2={opponent} />
            </div>
        </div>
    )
}