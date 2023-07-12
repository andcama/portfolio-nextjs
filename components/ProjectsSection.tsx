import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Journal App",
    description:
      "Journal App with Reactjs",
    image: "/portfolio/three.png",
    github: "https://github.com/andcama/journal-app-material",
    link: "https://journal-app-material.vercel.app/",
  },
  {
    name: "Gift Random Generator",
    description: "Random Image Generator Finder API",
    image: "/portfolio/fourth.png",
    github: "https://github.com/andcama/gift-expert",
    link: "https://gift-expert-app-pi.vercel.app/",
  },
  {
    name: "Todo App with Reactjs",
    description:
      "Todo App CRUD",
    image: "/portfolio/five.png",
    github: "https://github.com/andcama/todo-app-react",
    link: "https://todo-app-react-mocha.vercel.app/",
  },
  {
    name: "Todos RTK Query",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/portfolio/two.png",
    github: "https://github.com/andcama/toolkit-redux",
    link: "https://toolkit-redux-kxvf7rzbd-andcama.vercel.app/",
  },
  {
    name: "Weather App Search Engine",
    description: "Displays information about forecast and weather in the city",
    image: "/portfolio/six.png",
    github: "https://github.com/andcama/react-weather-app",
    link: "https://react-weather-app-pearl-five.vercel.app/",
  },
  {
    name: "Calendar App CRUD with Reactjs + MongoDB",
    description:
      "Calendar App CRUD appoinment system",
    image: "/portfolio/seven.png",
    github: "https://github.com/andcama/react-mern-calendar-frontend",
    link: "https://react-mern-calendar-frontend.vercel.app/#/auth/login",
  },
  {
    name: "Pokemon App with Nextjs v12",
    description:
      "Display different types of Pokemons",
    image: "/portfolio/nine.png",
    github: "https://github.com/andcama/pokemon-nextjs-app",
    link: "https://airbnb-gciabql9b-andcama.vercel.app/",
  },
  {
    name: "Airbnb Clone with Nextjs v13",
    description: "Full Stack Airbnb Clone with Nextjs + Tailwind + Prisma + MongoDB + NextAuth",
    image: "/portfolio/eight.png",
    github: "https://github.com/andcama/airbnb-app",
    link: "https://airbnb-app-iota.vercel.app/",
  },
  {
    name: "Jira Clone App with Nextjs v13",
    description:
      "Jira Clone with Next.js 13 App Create/Update : React,MongoDB,Typescript",
    image: "/portfolio/ten.png",
    github: "https://github.com/andcama/open-jira-app",
    link: "https://open-jira-app-two.vercel.app/",
  },
  {
    name: "TypeScript React Introduction Example",
    description:
      "Basic concepts with TS and React",
    image: "/portfolio/eleven.png",
    github: "https://github.com/andcama/app-ts-react-introduction",
    link: "https://app-ts-react-introduction.vercel.app/",
  },
  {
    name: "Family Guy App with Nextjs",
    description: "Engaging app that showcases information about Family Guy characters",
    image: "/portfolio/twelve.png",
    github: "https://github.com/andcama/family-guy-app-nextjs",
    link: "https://next-fcc-familyguy.vercel.app/",
  },
  {
    name: "Jira Clone with Angular",
    description:
      "Jira Clone App CRUD",
    image: "/portfolio/thirteen.png",
    github: "https://github.com/andcama/jira-clone-angular",
    link: "https://jira-clone-angular-ten.vercel.app/project/board",
  },
  {
    name: "Angular Calculator",
    description:
      "Calculator with basic operations",
    image: "/portfolio/fourteen.png",
    github: "https://github.com/andcama/app-calculator-angular",
    link: "https://app-calculator-angular.vercel.app/",
  },
  {
    name: "Quote Generator",
    description: "Inspiritional Quote Generator Nextjs",
    image: "/portfolio/fifthen.png",
    github: "https://github.com/BrianHHough/inspirational-quote-generator-freeCodeCamp",
    link: "https://prod.d162tlmsvnhy1m.amplifyapp.com/",
  },
  {
    name: "Ecommerce Store",
    description:
      "Ecommerce Store:Display products and categories from Dashboard ",
    image: "/portfolio/store.png",
    github: "https://github.com/andcama/ecommerce-app-store",
    link: "https://ecommerce-app-store.vercel.app/",
  },
  {
    name: "Dashboard",
    description:
      "Dashboard Store:CMS, Admin and API",
    image: "/portfolio/dashboard.png",
    github: "https://github.com/andcama/ecommerce-admin-app",
    link: "https://ecommerce-admin-app-two.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
