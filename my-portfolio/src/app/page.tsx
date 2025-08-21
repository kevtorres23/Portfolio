import Nav from "@/Components/Nav";
import ProjectCard from "@/Components/ProjectCard";

import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative bg-[#07070B] overflow-hidden flex flex-col items-center justify-items-center min-h-screen p-6 pb-20 gap-16 md:px-24 px-6 sm:py-10">
      <Nav />

      <div className="absolute lg:-left-42 md:-left-60 sm:-left-60 md:top-72 top-20 -left-28 sm:w-72 w-42 sm:h-72 h-42 bg-[rgb(58,200,121,0.5)] rounded-[50%] blur-3xl"></div>
      <div className="absolute lg:-right-42 md:-right-60 sm:-right-60 md:top-36 top-20 -right-28 sm:w-72 w-42 sm:h-72 h-42 bg-[rgb(44,156,231,0.5)] rounded-[50%] blur-3xl"></div>

      <main className="flex flex-col gap-4 row-start-2 items-center justify-center md:max-w-4xl sm:mt-48 sm:mb-48 mt-40 mb-28 ">
        <p className="text-white opacity-80 sm:text-[1.25rem] text-base text-center font-normal">Hello! I'm Kevin.</p>
        <h1 className=" text-white text-center sm:text-5xl/tight text-4xl/tight font-semibold tracking-tight">I'm a <span className="text-[#3AC879]">software engineering</span> student and <span className="text-[#2C9CE7]"> design</span> enthusiast.</h1>
        <p className="text-white opacity-80 sm:text-[1.25rem] text-base text-center font-normal md:max-w-2xl">I'm deeply passionate about UI/UX design, front-end development, and everything related to graphic design.</p>
      </main>

      <section className="max-w-[1600px] w-full">
        <div className="w-full flex flex-col sm:justify-between items-center justify-center sm:gap-10 gap-5">

          <div className="w-full flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-5">
            <h1 className="text-white sm:text-5xl text-4xl font-semibold tracking-tight">My Projects</h1>

            <div className="flex flex-row gap-2 items-center justify-center bg-zinc-900 hover:bg-zinc-800 cursor-pointer border border-zinc-800 rounded-full py-2 px-4">
              <p className="text-white sm:text-base text-sm sm:text-center text-right font-normal">See all</p>
              <MoveRight width={20} height={20} strokeWidth={1.5} color="white" />
            </div>
          </div>

          <div className="w-full grid md:grid-cols-2 grid-cols-1 sm:gap-7 gap-4">
            <ProjectCard name="Rocket" desc="Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio." image={"hola"} />
            <ProjectCard name="Artex Bordados" desc="Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio." image={"hola"} />
            <ProjectCard name="Abstract" desc="Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio." image={"hola"} />
            <ProjectCard name="Weather App" desc="Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio." image={"hola"} />
          </div>
        </div>
      </section>
    </div>
  );
}
