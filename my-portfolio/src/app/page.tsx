import Nav from "@/Components/Nav";

export default function Home() {
  return (
    <div className="bg-zinc-950 font-sans flex flex-col items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:px-24 sm:py-16">
      <Nav/>

      <main className="flex flex-col gap-5 row-start-2 items-center justify-center md:max-w-3xl mt-20">
        <p className="text-white opacity-95 sm:text-[1.25rem] text-base text-center font-light">Hello! My name is Kevin Torres</p>
        <h1 className=" text-white text-center sm:text-5xl/tight text-4xl/tight font-semibold tracking-tight">I'm a <span className="text-[#3AC879]">software engineering</span> student and <span className="text-[#2C9CE7]">graphic design</span> enthusiast.</h1>
        <p className="text-white opacity-95 sm:text-[1.25rem] text-base text-center font-light">I'm deeply passionate about UI/UX design, front-end development, and everything related to graphic design.</p>
      </main>

      <section className="max-w-[1600px] w-full mt-32 hidden">
        <div className="w-full flex flex-row justify-between items-end">
          <h1 className="text-white sm:text-5xl text-4xl font-semibold tracking-tight">My Projects</h1>
          <p className="text-white sm:text-[1.25rem] text-base text-center font-light">See my full portfolio</p>
        </div>
      </section>
    </div>
  );
}
