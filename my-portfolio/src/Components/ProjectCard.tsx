
type ProjectCardProps = {
    image: any,
    name: string,
    desc: string,
}

function ProjectCard(props: ProjectCardProps) {
    return(
        <div className="w-full flex flex-col gap-2 p-6 bg-cards-bg border border-zinc-800 rounded-xl">
            <h1 className="text-white sm:text-xl text-lg font-semibold">{props.name}</h1>
            <p className="text-white opacity-70 sm:text-base text-sm font-normal">{props.desc}</p>
        </div>
    )
}

export default ProjectCard;