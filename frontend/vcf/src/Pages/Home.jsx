import Card from "../Components/Card";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import TeamSelectionPage from "./TeamSelectionPage";

export default function Home() {
    return(
        <>
        <div className="bg-gray-50">
            <header className="sticky top-0 bg-white shadow-xs ">
                <NavBar />
            </header>
            <div>
                <Hero />
            </div>
            <div className="p-10 flex flex-col items-center justify-center gap-5">
                <h1 className="text-5xl text-black font-bold ">Why Choose Virtual Cricket Field?</h1>
                <h5 className="text-xl text-gray-500 ">Features that make us the best platform for cricket predictions.</h5>
                <div className=" grid grid-cols-1  justify-center items-center md:grid-cols-[repeat(3,400px)] gap-3">
                    <Card title="Real Time Analytics" desc="Get access to live match statistics and performance analytics to make informed predictions." />
                    <Card title="Real Time Analytics" desc="Get access to live match statistics and performance analytics to make informed predictions." />
                    <Card title="Real Time Analytics" desc="Get access to live match statistics and performance analytics to make informed predictions." />
            </div>
            </div>
        </div>
        </>
    )
}