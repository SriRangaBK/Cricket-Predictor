import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <>
        <div className="flex px-5 py-5 justify-between items-center ">
            <div className="w-100">
            <h1 className="text-4xl font-[700] text-[#2c3e50]">Virtual Cricket Field</h1>
            </div>
            <div className="text-3xl w-full ">
            <nav className="flex gap-10 justify-evenly ">
                <Link to="/">Home</Link>
                <a href="#">Matches</a>
                <a href="#">Leaderboards</a>
                <Link to="/selectteam">Prediction</Link>
                <a href="#">About</a>
            </nav>
            </div>
        </div>
        </>
    )
}