export default function Card({title,desc}) {
    return(
        <>
        {/* <div className="p-8 w-100 bg-white rounded-xl transition-all duration-200 hover:-translate-y-2 hover:shadow-lg text-center shadow">
            <div className="w-30 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold ">
                {title}
            </div>
            <div className="">
                {desc}
            </div>
        </div> */}

    <div className="p-8 h-[200px] shadow-md bg-white rounded-xl shadow transition-all duration-200 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-around items-center">

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>


        </>
    )
}