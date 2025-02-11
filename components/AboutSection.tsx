import React from "react"
import Image from "next/image"
import { FaDownload } from "react-icons/fa" // Import download icon

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React Native" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "API" },
  { skill: "REST" },
  { skill: "SQL" },
  { skill: "JSON" },
  { skill: "Jira" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Andres and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Costa Rica.
            </p>
            <br />
            <p>
              I graduated from Universidad Americana, San Jose in 2019
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From bicycling, playing soccer, traveling, go hacking,
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
            <br />
            <p>
              Beyond the world of technology, I maintain an active and balanced lifestyle. You'll often find me cycling through Costa Rica's beautiful landscapes, enjoying a soccer match, or planning my next travel adventure.
              I believe in continuous growth, both personally and professionally. This mindset has led me to consistently expand my skill set through various certifications, including recent completions in Next.js, Qwik, Node.js, and React Native development. I'm always excited to tackle new challenges and push the boundaries of what's possible in software development.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <div className="mt-8">
              <a
                href="/cv_english_andres_camacho.pdf"
                download
                className="inline-flex items-center text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection