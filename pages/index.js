import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import dawit from "../public/dawit-avataaar.png";
import Image from "next/image";
import techblog from "../public/tech-blog.png";
import s3upload from "../public/s3-upload.png";
import espnscraper from "../public/EspnScraper.png";
import ems from "../public/employee-management-system.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Dawit Hagos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">dawit hagos</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1ygNO_JoRQKRVBgkp4ITsjvF_692PEbJH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Dawit Hagos
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software engineer currently seeking new opportunities in the tech
              industry, I am passionate about building innovative solutions and
              collaborating with others to drive positive change. Join me down
              below!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/dawhagos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/dawhagos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="cursor-pointer" />
              </a>
            </div>
            <div className="mx-auto fill bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={dawit} alt="dawit" style={{ objectFit: "cover" }} />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of the projects I&apos;ve built along my programming
              journey - a mix of completed projects and those still in active
              development - that showcase my skills and passion for creating
              innovative solutions.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 relative hover:opacity-50 cursor-pointer">
              <a
                href="https://github.com/dawhagos/tech-blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover responsive"
                  alt="techblog"
                  src={techblog}
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 flex justify-center items-center">
                  <p className="text-gray-700 font-bold text-5xl">github</p>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:opacity-50 cursor-pointer relative">
              <a
                href="https://github.com/dawhagos/s3-upload"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover responsive"
                  alt="s3upload"
                  src={s3upload}
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 flex justify-center items-center">
                  <p className="text-white font-bold text-5xl">github</p>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:opacity-50 cursor-pointer relative">
              <a
                href="https://github.com/dawhagos/EspnScraper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover responsive"
                  alt="espnscraper"
                  src={espnscraper}
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 flex justify-center items-center">
                  <p className="text-gray-700 font-bold text-5xl">github</p>
                </div>
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:opacity-50 cursor-pointer relative">
              <a
                href="https://github.com/dawhagos/user-management-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="rounded-lg object-cover responsive"
                  alt="ems"
                  src={ems}
                />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 flex justify-center items-center">
                  <p className="text-gray-700 font-bold text-5xl">github</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
