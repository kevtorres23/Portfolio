import Navbar from "./Navbar";

function Nav() {
    return(
        <div className="w-full flex flex-row items-center justify-center fixed md:px-24 sm:px-12 px-6 py-6 z-10 top-0">
            <Navbar/>
        </div>
    )
}

export default Nav;