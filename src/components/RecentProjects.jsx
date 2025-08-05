import React, { useEffect, useRef, useState } from "react";
import { ProjectComponent } from "./ProjectComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TechnoComponent } from "./TechnoComponent";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const videos = [
  "/01.mp4",
  "/02.mp4",
  "/03.mp4",
  "/04.mp4",
  "/laravel-project.mp4",
];

export function RecentProjects() {
  const [current, setCurrent] = useState(0);

  const videoRef = useRef();

  const goLeft = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-x-hidden">
      <div className="font-bold uppercase text-center text-2xl underline">
        <div className="p-4 flex flex-col justify-center h-full" id="Projects">
          <p className="text-slate-600 leading-relaxed font-light fromUp">
            Here are some of my best projects:
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
        <div className="fadeIn">
          <ProjectComponent
            title={"Realtime chat app"}
            built={
              "Built using firebase, React, Next js, Tailwind, Typescript, Webtrc"
            }
            content={
              "The chatapp has functionalties like adding friends, chatting with them, sending pictures, voice messages e.t.c. Being able to voice call friends. Realtime noftifcations."
            }
            githubLink={"https://github.com/mrhamda/chatAppAdvance"}
          />
        </div>

        <div className="fadeIn">
          <ProjectComponent
            title={"Restuarant store"}
            built={
              "Built using React, Nextjs, Tailwind, Typescript, Mysql, Prisma, Paypal api, Stripe api, Stripe webhook, Gsap, Nodemailer"
            }
            content={
              "Has the ability to put items in cart, to later buy them using either paypal or stipe. Has a form to submit the adress and personal information required for delievery. The order that get paid will later be put in the admin dashboard so that they know where to deliever"
            }
            githubLink={"https://github.com/mrhamda/restaurantDelievery"}
          />
        </div>

        <div className="fadeIn ">
          <ProjectComponent
            title={"Shop socialmedia"}
            built={
              "Built using React Inertia Laravel, Tailwind, Sqllite, Dbengine, Tableplus"
            }
            content={
              "Is an app with full authenication as well email vertifcation. It is about selling and buying. You post products for other people to buy. You can visit their profile. It is almost like a social media for selling and buying. The buyer and seller recieve info about their actions and if a seller tries to deny a guy bought from him and try to scam him they can't because it is saved in the database."
            }
            githubLink={"https://github.com/mrhamda/laravelShop"}
          />
        </div>
      </div>

      <div className="font-bold uppercase text-center text-2xl underline">
        <div className="p-4 flex flex-col justify-center h-full">
          <p className="text-slate-600 leading-relaxed font-light mt-6">
            Here are video footages of some of my other projects:
          </p>
        </div>
      </div>
      <div
        className="w-[99vw] flex justify-center items-center relative scaleOut mt-5 "
        id="Technologies"
        ref={videoRef}
      >
        <div className="w-[60rem] h-[30rem] relative flex items-center justify-center mt-10">
          <div
            className="relative w-full max-w-4xl mx-auto rounded-3xl p-6 bg-black shadow-2xl"
            style={{
              border: "12px solid #222", // thick dark bezel
              boxShadow: "0 0 30px 8px #000", // subtle glow/shadow around TV
            }}
          >
            <div
              className="rounded-2xl overflow-hidden border-4 border-gray-800"
              style={{
                boxShadow: "inset 0 0 15px 2px #111", // inner bevel effect
              }}
            >
              <video
                key={videos[current]}
                src={videos[current]}
                preload="metadata"
                className="w-full h-[30rem] object-cover"
                muted
                autoPlay
                controls
                onEnded={goRight}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video */}

          {/* Left Arrow Button */}
          <button
            onClick={goLeft}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md hover:opacity-50 cursor-pointer transition-all"
            style={{ background: "rgba(0, 0, 0, 0.4)", color: "white" }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              goRight();
            }}
            className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white px-4 py-2 rounded-l-md hover:bg-gray-600 cursor-pointer hover:opacity-50 transition-all"
            style={{ background: "rgba(0, 0, 0, 0.4)", color: "white" }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 mt-10 fromLeft">
        <h2 className="text-2xl font-bold text-gray-800 mb-2" id="Contact">
          Technologies
        </h2>
        <p className="text-gray-600 text-base mb-4">
          Over the years, I have worked with a variety of technologies. Here are
          some of the technologies I have experience with:
        </p>
        <div className="flex flex-wrap gap-2 text-gray-600 text-base mb-4 uppercase fromLeft">
          <TechnoComponent
            link={"https://nextjs.orgب"}
            imgSrc={"./Nextjs.png"}
            technoName={"Next js"}
          />

          <TechnoComponent
            imgSrc={"./mysql.svg"}
            technoName={"Mysql"}
            link={"https://www.mysql.com"}
          />

          <TechnoComponent
            imgSrc={"./Mongodb.png"}
            technoName={"Mongodb"}
            link={"https://www.mongodb.com/company/newsroom/brand-resources"}
          />

          <TechnoComponent
            imgSrc={"./Prisma.svg"}
            technoName={"Prisma"}
            link={"https://www.prisma.io"}
          />

          <TechnoComponent
            imgSrc={"./React.png"}
            technoName={"React"}
            link={"https://react.dev"}
          />

          <TechnoComponent
            imgSrc={"./Vue.png"}
            technoName={"Vue"}
            link={"https://vuejs.org"}
          />

          <TechnoComponent
            imgSrc={"./Nodejs.png"}
            technoName={"Nodejs"}
            link={"https://nodejs.org/en"}
          />

          <TechnoComponent
            imgSrc={"./Laravel.png"}
            technoName={"Laravel"}
            link={"https://laravel.com"}
          />

          <TechnoComponent
            imgSrc={"./Typescript.png"}
            technoName={"Typescript"}
            link={"https://www.typescriptlang.org"}
          />

          <TechnoComponent
            imgSrc={"./Express.png"}
            technoName={"Express js"}
            link={"https://expressjs.com"}
          />

          <TechnoComponent
            imgSrc={"./Github.png"}
            technoName={"Github"}
            link={"https://github.com"}
          />

          <TechnoComponent
            imgSrc={"./Jest.png"}
            technoName={"Jest"}
            link={"https://jestjs.io"}
          />

          <TechnoComponent
            imgSrc={"./Tailwind.png"}
            technoName={"Tailwind"}
            link={"https://tailwindcss.com"}
          />

          <TechnoComponent
            imgSrc={"./Bootstrap.png"}
            technoName={"Boostrap"}
            link={"https://getbootstrap.com"}
          />

          <TechnoComponent
            imgSrc={"./Vite.svg"}
            technoName={"Vite"}
            link={"https://vite.dev"}
          />

          <TechnoComponent
            imgSrc={"./Vite.svg"}
            technoName={"Vite"}
            link={"https://vite.dev"}
          />

          <TechnoComponent
            imgSrc={"./djagno.png"}
            technoName={"Django"}
            link={"https://www.djangoproject.com/community/logos"}
          />

          <TechnoComponent
            imgSrc={"./Capcut.png"}
            technoName={"Capcut"}
            link={
              "www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjb18HNk4OOAxVsU1UIHVyMNi4QFnoECAkQAQ&url=https%3A%2F%2Fwww.capcut.com%2F&usg=AOvVaw2xAdsWoyQjUGscYMJsXsUo&opi=89978449"
            }
          />
        </div>

        <p className="text-gray-600 text-base mb-4">And so much more!</p>

        <p className="text-gray-600 text-base mb-4">
          Here you can visit my and{" "}
          <a
            className="text-blue-500 text-base mb-4 hover:text-blue-800 transition-all"
            href="https://github.com/mrhamda?tab=repositories"
            target="_blank"
          >
            Github
          </a>
          <span> and see my projects!</span>
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 mt-10 fromLeft">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Why choose me?
        </h2>
        <p className="text-gray-600 text-base mb-4">
          Since I am young fullstack webdeveloper I am not selling projects
          really for money. I am just doing that to get real life experience. So
          that means the price can be discussed.
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-6 hover:shadow-xl transition-shadow duration-300 mt-10 overflow fromLeft">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact me</h2>
        <p className="text-gray-600 text-base mb-4">
          So I currently don't have any social medias like instagram, facebooks
          and such for facebooks. Only whatsapp is available for communction.
          Github is available for thoose who want to see my code.
        </p>

        <div className="flex gap-2.5  justify-center p-4 mt-5">
          <a
            target="_blank"
            href="https://github.com/mrhamda"
            className="socialContainer containerFour cursor-pointer"
          >
            <FontAwesomeIcon
              className="socialSvg whatsappSvg "
              icon={faGithub}
            />
          </a>
          <a
            onClick={() => {
              var win = window.open(
                `https://api.whatsapp.com/send?phone=+46720353524&text=${"Enter you message"}`,
                "_blank"
              );

              win.focus();
            }}
            className="socialContainer containerFour cursor-pointer"
          >
            <svg className="socialSvg whatsappSvg " viewBox="0 0 16 16">
              {" "}
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.00 7a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
