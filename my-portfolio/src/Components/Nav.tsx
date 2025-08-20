import Navbar from "./Navbar";

function Nav() {
    return(
        <div className="w-full flex flex-row items-center backdrop-blur-3xl justify-between fixed md:px-24 px-12 py-4 z-10 top-0">
            <p className="text-white font-semibold text-lg w-28">Kevin Torres</p>

            <Navbar/>

            <div className="w-28 lg:flex hidden"></div>
        </div>
    )
}

export default Nav;