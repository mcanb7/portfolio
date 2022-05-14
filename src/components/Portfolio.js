import React from "react";
import imageVektor from "../img/vektor.PNG";
import imageBms from "../img/bms.PNG";
import imagePerfect from "../img/perfectHouse.PNG";

export default function Portfolio(){
    return(
        <main className="bg-portfolio min-h-screen p-12">
              <section className="container mx-auto">
                 <h1 className="text-5xl flex justify-center cursive3">
                      Portfolyo
                  </h1>
                <h2 className="text-lg yazi2 flex justify-center mb-12">
                      Bugüne kadar yapmış olduğum internet siteleri.
                  </h2>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      
                    
                    <article>
                     <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-400" key="{index}">
                              <img
                              src={imageVektor}
                              alt="VektorEgitim"
                              className="w-full h-full rounded-r object-cover absolute"
                              />
                             <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                  <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-900 text-red-100 bg-opacity-75 rounded">
                                      Vektör Eğitim
                     </h3>
                              </span>
                              <a href="https://vektoregitim.net" target="_blank">
                            <button class="btn1">
                            <span class="btn1span">Siteye gözatın.</span>
                            </button>
                          </a>
                          </span>
                  </article>

                  
                  <article>
                     <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-400" key="{index}">
                              <img
                              src={imageBms}
                              alt="BmsYapıOtomasyon"
                              className="w-full h-full rounded-r object-cover absolute"
                              />
                             <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                  <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-900 text-red-100 bg-opacity-75 rounded">
                                      BMS Yapı Otomasyon
                     </h3>
                              </span>
                              <a href="https://bmsyapiotomasyon.com/" target="_blank">
                            <button class="btn1">
                            <span class="btn1span">Siteye gözatın.</span>
                            </button>
                          </a>
                          </span>
                  </article>

                  <article>
                     <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-yellow-400" key="{index}">
                              <img
                              src={imagePerfect}
                              alt="PerfectHouse"
                              className="w-full h-full rounded-r object-cover absolute"
                              />
                             <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                  <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-900 text-red-100 bg-opacity-75 rounded">
                                      Perfect House
                     </h3>
                              </span>
                              <a href="https://perfecthousemersin.com" target="_blank">
                            <button class="btn1">
                            <span class="btn1span">Siteye gözatın.</span>
                            </button>
                          </a>
                          </span>
                  </article>
                    
                  </div>
          </section>
          </main>
    )
}