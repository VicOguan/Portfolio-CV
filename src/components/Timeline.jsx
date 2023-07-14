import React from "react";
import Rocket from "../assets/Market launch.gif";

const Timeline = () => {
  return (
    <section id="timeline" className="bg-slate-900 select-none">
      <div className=" text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose ">
              Work Experience
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Starting my journey as a web developer
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4 ">
              I gained hands-on experience in HTML, CSS, and JavaScript, and
              assisted in the development of various website components.
            </p>
            <a
              href="#profile"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              
              P r o f i l e
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #ffc100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 absolute h-full border"
                  style={{
                    right: "50%",
                    border: "2px solid #ffc100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      June-July 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      UI/UX Design Intern at PINDLE CO., LTD.
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 ">
                      Visual Design Intern: Detail-oriented student with a keen
                      eye for aesthetics, assisting in creating visually
                      stunning and engaging visual designs for user interfaces.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">
                      2021 - 2022
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Play2Learn: An Interactive Mobile Game App with Learning
                      Analytics for Kindergarten Pupils
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      <ul className="list-inside list-disc hover:list-outside">
                        <li>
                          {" "}
                          Develop a mobile game app using Java for the back-end
                          and Canva for Graphical images.{" "}
                        </li>
                        <li>
                          Developed an Algorithm to determine the Learning
                          Analytics
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      August - Oct 2022
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      QPAX TRAFFIC SYSTEM
                      <span>
                        <img src="images/minus.png" width="5" alt="" />
                      </span>
                      <sub>Technology Engineer</sub>
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Experienced professional responsible for monitoring CCTV
                      cameras across locations in Manila. Committed to
                      maintaining a vigilant and proactive approach to ensure
                      the overall safety and protection of the monitored
                      premises in Manila.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">
                      2022 - 2023
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">
                      COGNIZANT SOFTVISION
                      <span>
                        <img src="images/minus.png" width="5" alt="" />
                      </span>
                      <sub>Jr. Software Engineer</sub>
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      <ul className="list-inside list-disc">
                        <li>
                          Java Spring Boot, including RESTful APIs and backend
                          services.
                        </li>
                        <li>
                          authentication and authorization, using Spring
                          Security.
                        </li>
                        <li>
                          Database: PostgreSQL and MySQL, using Hibernate/JPA
                        </li>
                        <li>Unit Testing: JUnit and Mockito</li>
                        <li>Worked in agile development environment.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <img className="mx-auto -mt-36 md:-mt-36" src={Rocket} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
