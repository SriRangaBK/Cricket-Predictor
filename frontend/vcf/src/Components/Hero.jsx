import { Link } from "react-router-dom"
export default function Hero() {
    return(
        <>
        <div className="relative">
            <img src="/hd.jpg" alt="head" className="w-full h-200 object-center"/>
            <div className="absolute inset-0 bg-black/40 flex gap-10 flex-col justify-center items-center">
             <h1 className="text-6xl text-white font-bold">Predict Cricket Match</h1>
             <h4 className="text-2xl text-white">Predict Matches. Get Fun before the match is begun</h4>
             <div className="flex gap-5">
                <Link className="border-1 rounded-[5px] p-4 text-3xl text-white hover:cursor-pointer hover:bg-white hover:text-black transition duration-700 ease-out hover:-translate-y-1" to="/selectteam">Start Prediction</Link>
                <button className="border-1 rounded-[5px] p-4 text-3xl text-white hover:cursor-pointer hover:bg-white hover:text-black transition duration-500 ease-out hover:-translate-y-1">How It Works</button>
             </div>
            </div>
        </div>
        </>
    )
}