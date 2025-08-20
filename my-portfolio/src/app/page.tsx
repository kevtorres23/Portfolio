import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <div className="relative bg-zinc-950 overflow-hidden flex flex-col items-center justify-items-center min-h-screen p-6 pb-20 gap-16 md:px-24 px-12 sm:py-10">
      <Nav/>

      <div className="absolute lg:-left-42 md:-left-52 top-72 w-72 h-72 bg-[rgb(58,200,121,0.5)] rounded-[50%] blur-3xl"></div>
      <div className="absolute lg:-right-42 md:-right-52 top-28 w-72 h-72 bg-[rgb(44,156,231,0.5)] rounded-[50%] blur-3xl"></div>

      <main className="flex flex-col gap-4 row-start-2 items-center justify-center md:max-w-4xl h-screen">
        <p className="text-white opacity-90 sm:text-[1.25rem] text-base text-center font-normal">Hello! I'm Kevin.</p>
        <h1 className=" text-white text-center sm:text-[54px]/tight text-4xl/tight font-semibold tracking-tight">I'm a <span className="text-[#3AC879]">software engineering</span> student and <span className="text-[#2C9CE7]"> design</span> enthusiast.</h1>
        <p className="text-white opacity-90 sm:text-[1.25rem] text-base text-center font-normal md:max-w-2xl">I'm deeply passionate about UI/UX design, front-end development, and everything related to graphic design.</p>
      </main>

      <section className="max-w-[1600px] w-full mt-48">
        <div className="w-full flex flex-row justify-between items-end">
          <h1 className="text-white sm:text-5xl text-4xl font-semibold tracking-tight">My Projects</h1>
          <p className="text-white sm:text-[1.25rem] text-base text-center font-light">See my full portfolio</p>
        </div>
      </section>
    </div>
  );
}
