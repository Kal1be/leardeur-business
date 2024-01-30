

function Body() {
  return (
    <div className="lg:flex items-center md:px-8 px-2 md:pt-16 pt-10">
        <div className="md:w-[60%] pe-3">
            <button className="border w-full p-2 rounded-full my-1 font-bold bg-slate-700 text-white">Acheter maintenant</button>
            <button className="border w-full p-2 rounded-full my-1 font-bold bg-sky-500 text-white">Voir plus..</button>
            <h2 className="text-4xl font-bold pt-2 text-gray-600 ">Qui somme nous ?</h2>
            <p className="font-medium">Leadeur business est une plateforme en ligne pour la vente des Canapes et certains fourniture de vos maison.
           Choississez Leadeur business c'est choisir l'accesoire .</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a3.jpg" alt="" className="h-[30vh] md:w-[60vw] w-full"/>
    <h2 className="text-xl font-bold my-2 px-1">Canaper italien couleur gray</h2>
    <p className="px-1 pb-10 font-bold">prix: 200000FCFa</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a7.png" alt="" className="h-[30vh] md:w-[60vw]"/>
 <h2 className="text-xl font-bold my-2 px-1">Canaper de couleur blanc</h2>
    <p className="px-1 pb-10 font-bold">prix: 250000FCFa</p>
        </div>
        <div className="shadow-xl my-4 md:my-0 lg:mx-2 w-full">
            <img src="/leardeur-business/a5.png" alt="" className="h-[30vh] md:w-[60vw] w-full"/>
            <h2 className="text-xl font-bold my-2 px-1">Canaper italien couleur brown</h2>
    <p className="px-1 pb-10 font-bold">prix: 300000FCFa</p>
        </div>
      
    </div>
  )
}

export default Body
