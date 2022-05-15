import React from "react";
import bgabout from "../img/bg-about.jpg";
import ppimage from "../img/mahmut-pp.jpg";


export default function About(){
    return (
        <main className="relative bg-portfolio">
            <div className="p-10 lg:pt-25 container mx-auto relative">
                <section className="bg-karanlik rounded-lg shadow-2xl lg:flex p-20">
                    <img src={ppimage} alt="Mahmut Can" className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-yellow-200 mb-4">
                            Selam.Ben Mahmut Can
                        </h1>
                        <p className="prose lg:prose-xl yazi2">
                            Sakarya Üniversitesi bilgisayar mühendisliği 3.sınıf öğrencisiyim. Aynı zamanda uzaktan Anadolu Üniversitesi'nde yönetim bilişim sistemleri okuyorum.
                            
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}