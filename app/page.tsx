import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import TrueFocus from "./components/TrueFocus/TrueFocus";
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Navbar from './components/Navbar/Navbar';

const testimonials = [
  {
    quote:
      "I'm a developer with experience in developing web and mobile applications using programming languages such as Java, HTML, CSS, and JavaScript, as well as frameworks like React, Laravel, and Bootstrap.",
    name: "Personal Profile",
    designation: "Yudith Dwi Hardyanto",
    src: "./assets/images/foto_yudith2.jpg",
  },
  {
    quote:
      "Graduated with a Bachelor's degree in Informatics from Parahyangan Catholic University, specializing Computing Science.",
    name: "Education",
    designation: "Parahyangan Catholic University",
    src: "./assets/images/unpar.png",
  },
];
export default function Home() {
  return (
    
    <div className="scroll-smooth">
      
        {/* NAVBAR */}
        <Navbar />

        
        <BackgroundBeamsWithCollision>

          {/* HOME */}
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-40">
              <div>
                <img src="./assets/images/foto_yudith.jpg" alt="Yudith" className="rounded-full shadow-xl w-32 sm:w-40 lg:w-80" />
              </div>
              <div className="text-center font-semibold">
                <div className="mb-2 text-sm">
                  Hello, I'm
                </div>
                <div className="mb-2 text-2xl sm:text-4xl">
                  Yudith Dwi Hardyanto
                </div>
                <div className="mb-6 text-4xl sm:text-6xl">
                  <TrueFocus
                    sentence="Web Developer"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="black"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                    
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <div>
                    <button className="px-3 py-2 border-2 hover:bg-slate-200 border-black rounded-full shadow-md text-sm">Download CV</button>
                  </div>
                  <div>
                    <button className="relative transition-all group px-3 py-2  text-sm">
                      See Portfolio
                      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </BackgroundBeamsWithCollision>
 


        {/* ABOUT ME */}
        <div className="container mx-auto" id="aboutme">
          <div className="flex justify-center items-center mb-48 mt-20">
            <div>
              <div className="text-sm text-center mb-3">
                Get To Know More
              </div>
              <div className="text-center text-3xl font-bold mb-5">
                ABOUT ME
              </div>
              <div>
                <AnimatedTestimonials testimonials={testimonials} />
              </div>
              {/* <div className="flex">
      <div className="me-10">
        <TiltedCard
            imageSrc="./assets/images/foto_yudith2.jpg"
            containerHeight="250px"
            containerWidth="250px"
            imageHeight="250px"
            imageWidth="250px"
            rotateAmplitude={12}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
      </div>
      <div>
      <div className="flex justify-center items-center">
        <div className="border-2 rounded-2xl w-[500px] text-center p-4">
          <div className="flex justify-center">
            <img src="./assets/images/unpar.png" alt="unpar" className="w-10" />
          </div>
          <div className="font-bold mt-2">
            Education
          </div>
          <div>
          <SplitText
            text="Fresh graduate in Informatics with experience in web and mobile development. I have expertise in building web and mobile applications using programming languages such as Java, HTML, CSS, and JavaScript, as well as frameworks like Laravel and Bootstrap."
            className="text-center"
            delay={20}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.2}
            rootMargin="-50px"
          />
          
          </div>
        </div>
      </div>

      </div>
    </div> */}
            </div>
          </div>
        </div>


        {/* PORTFOLIO */}
        <div className="container mx-auto" id="portfolio">
          <div className="flex justify-center items-center min-h-screen mb-48">
            <div>
              <div className="text-sm text-center mb-3">
                Explore My
              </div>
              <div className="text-center text-3xl font-bold mb-5">
                PORTFOLIO
              </div>
              <div className="flex justify-center mb-10">
                <div className="w-full sm:w-[500px] text-center">
                  My experience in developing web and mobile applications using technologies such as Laravel, Java, PHP, HTML, CSS, jQuery, and Bootstrap.
                </div>
              </div>
              <div className="flex justify-center"> {/* Kontainer flex untuk memusatkan grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-full h-48 p-2">
                      <img src="./assets/images/POS.png" alt="POS" className="object-contained rounded-md" />
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Point of Sales</div>
                      <p className="text-gray-700 text-base">
                        Angkringan Onthel Point of Sales. This system helps staff record transactions quickly, maintain accurate stock, and generate sales reports.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex">
                      <a href="https://angkringan.web.id/" className="w-full bg-gray-900 me-2 text-white rounded-md py-2 hover:bg-gray-950 text-center">Live Demo</a>
                      <a href="https://github.com/YudithDwiHardyanto/Program-Skripsi-Final" className="w-full bg-gray-900 text-white rounded-md py-2 hover:bg-gray-950 text-center">Code {'</>'}</a>
                    </div>
                  </div>

                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-full h-48 p-2">
                      <img src="./assets/images/Procapita.png" alt="procapita" className="rounded-md w-full h-full object-contained" />
                    </div>

                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Procapita</div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex">
                      <a href="https://procapita.co.id/en" className="w-full bg-gray-900 me-2 text-white rounded-md py-2 hover:bg-gray-950 text-center">Live Demo</a>
                      <a href="#" className="w-full bg-gray-900 text-white rounded-md py-2 hover:bg-gray-950 text-center">Code {'</>'}</a>
                    </div>
                  </div>

                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="w-full h-48 p-2">
                      <img src="./assets/images/Teman-bus.png" alt="temanbus" className="w-full h-full object-contained rounded-md" />
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Teman Bus</div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex">
                      <a href="https://projectkiri.id/" className="w-full bg-gray-900 me-2 text-white rounded-md py-2 hover:bg-gray-950 text-center">Live Demo</a>
                      <a href="#" className="w-full bg-gray-900 text-white rounded-md py-2 hover:bg-gray-950 text-center">Code {'</>'}</a>
                    </div>
                  </div>

                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img src="./assets/images/space-ninja-game.png" alt="spaceninja" className="w-full h-48 object-cover" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Space Ninja Game</div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex">
                      <a href="https://github.com/YudithDwiHardyanto/SpaceNinja-UAS" className="w-full bg-gray-900 me-2 text-white rounded-md py-2 hover:bg-gray-950 text-center">Live Demo</a>
                      <a href="https://yudithdwihardyanto.github.io/SpaceNinja-UAS/" className="w-full bg-gray-900 text-white rounded-md py-2 hover:bg-gray-950 text-center">Code {'</>'}</a>
                    </div>
                  </div>

                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img src="./assets/images/flappy-bird.png" alt="flappybird" className="w-full h-48 object-cover" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">Rebuild Flappy Bird</div>
                      <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex">
                      <a href="https://yudithdwihardyanto.github.io/6181901070-YudithDwiHardyanto-flappybird/" className="w-full bg-gray-900 me-2 text-white rounded-md py-2 hover:bg-gray-950 text-center">Live Demo</a>
                      <a href="https://github.com/YudithDwiHardyanto/6181901070-YudithDwiHardyanto-flappybird" className="w-full bg-gray-900 text-white rounded-md py-2 hover:bg-gray-950 text-center">Code {'</>'}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}

        <div className="container mx-auto" id="skills">

          <div className="flex justify-center text-center items-center overflow-x-hidden mb-48">
            <div>
              <div className="text-center text-3xl font-bold mb-5">
                SKILLS
              </div>
              <div className="text-center w-full flex justify-center mb-5">
                <div className="w-96">
                  These are some of the technical skills I have acquired through personal projects and academic experiences.
                </div>
              </div>
              <div className="flex justify-center flex-wrap gap-4 p-3">
                <div className="flex items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">
                    <i className="devicon-html5-plain colored"></i>
                  </div>
                  <div className="font-semibold">
                    HTML
                  </div>
                </div>

                <div className="flex  items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">
                    <i className="devicon-css3-plain colored"></i>
                  </div>
                  <div className="font-semibold">
                    CSS
                  </div>
                </div>

                <div className="flex items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">
                    <i className="devicon-java-plain colored"></i>
                  </div>
                  <div className="font-semibold">
                    JAVA
                  </div>
                </div>

                <div className="flex items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">
                    <i className="devicon-javascript-plain colored"></i>
                  </div>
                  <div className="font-semibold">
                    JAVASCRIPT
                  </div>
                </div>

                <div className="flex items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">
                    <i className="devicon-php-plain colored"></i>
                  </div>
                  <div className="font-semibold">
                    PHP
                  </div>
                </div>

                <div className="flex items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">
                    <i className="devicon-mysql-original colored"></i>
                  </div>
                  <div className="font-semibold">
                    MYSQL
                  </div>
                </div>


                <div className="flex items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">
                    <i className="devicon-react-original colored"></i>
                  </div>
                  <div className="font-semibold">
                    REACT
                  </div>
                </div>

                <div className="flex items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">

                    <i className="devicon-bootstrap-plain colored"></i>

                  </div>
                  <div className="font-semibold">
                    BOOTSTRAP
                  </div>
                </div>


                <div className="flex items-center rounded-md p-2 shadow-md basis-1/5">
                  <div className="me-3">
                    <i className="devicon-tailwindcss-original colored"></i>
                  </div>
                  <div className="font-semibold">
                    TAILWIND
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERTIFICATION */}
        <div className="container mx-auto" id="sertif">
          <div className="flex justify-center items-center mb-48">
            <div>
              <div className="text-center text-3xl font-bold mb-5">
                SERTIFICATION
              </div>
              <div className="flex justify-center mb-5">
                <div className="w-96 text-center">
                  These certificates highlight the courses and programs I’ve completed along my learning journey.
                </div>
              </div>
              <div className="flex justify-center"> {/* Kontainer flex untuk memusatkan konten */}
                <div>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <div className="w-full h-48 p-2">
                        <img src="./assets/images/sertif_3d_maya.png" alt="3d-maya" className="w-full h-full object-contain rounded-md" />
                      </div>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">3D Design Using Autodesk Maya</div>
                        <p className="text-gray-700 text-base">
                          Sangnila Arts Academy & Parahyangan Catholic University September 2021.
                        </p>
                      </div>
                    </div>

                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <div className="w-full h-48 p-2">
                        <img src="./assets/images/IBM-SQL.png" alt="procapita" className="w-full h-full object-contain rounded-md" />
                      </div>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">SQL and Relational Databases 101</div>
                        <p className="text-gray-700 text-base">
                          Cognitive Class (by IBM Developer Skills Network) April 2022.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="container mx-auto" id="contact">
          <div className="flex justify-center items-center mb-20">
            <div>
              <div className="text-center text-3xl font-bold mb-5">
                CONTACT
              </div>
                <div className="flex flex-col sm:flex-row"> 
                <div className="w-full sm:w-80 h-80 sm:me-20 mb-8 sm:mb-0"> 
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1957.5872141472119!2d107.75265069670563!3d-6.296048593598865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTcnNDUuOCJTIDEwN8KwNDUnMTMuNyJF!5e0!3m2!1sid!2sid!4v1745332369325!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-8 sm:mt-16"> 
                  <div className="flex items-center mb-6 sm:mb-10"> 
                    <div className="me-2 sm:me-3"> 
                      <img src="./assets/images/map.png" alt="map" className="w-4 sm:w-5" />
                    </div>
                    <div className="text-lg sm:text-xl"> 
                      Subang, West Java, 41254
                    </div>
                  </div>
                  <div className="flex items-center mb-6 sm:mb-10"> 
                    <div className="me-2 sm:me-3"> 
                      <img src="./assets/images/email.png" alt="map" className="w-4 sm:w-5" /> 
                    </div>
                    <div className="text-lg sm:text-xl"> 
                      yudithdwihardyanto@gmail.com
                    </div>
                  </div>
                  <div className="flex items-center mb-6 sm:mb-10"> 
                    <div className="me-2 sm:me-3"> 
                      <img src="./assets/images/phone-call.png" alt="map" className="w-4 sm:w-5" /> 
                    </div>
                    <div className="text-lg sm:text-xl"> 
                      0895332171148
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        
      </div>
  );
}
