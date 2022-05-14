import emailjs from "emailjs-com";
import React, {useRef} from "react";

export default function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gqw5wwg', 'template_4qub4ej', e.target , 'fYTYzcY8kXCfKOOoK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

      return(
          <main className="relative bg-portfolio">
              <div className="p-10 lg:pt-25 container mx-auto relative">
                  <section className="bg-karanlik rounded-lg shadow-2xl lg:flex p-20">

                  <form className="w-full max-w-lg" ref={form} onSubmit={sendEmail}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide yazi2 text-xs font-bold mb-2" for="grid-first-name">
        İsim
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="name"  type="text" placeholder="İsminizi giriniz." />
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide yazi2 text-xs font-bold mb-2" for="grid-last-name">
        Soyisim
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Soyadınızı giriniz." />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide yazi2 text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="E-mail adresinizi giriniz." />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide yazi2 text-xs font-bold mb-2" for="grid-password">
        Mesaj
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="message"  placeholder="Mesajınızı yazınız."></textarea>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Gönder
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>
                      
                  </section>
              </div>
          </main>
      )
}



