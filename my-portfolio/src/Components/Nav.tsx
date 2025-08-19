import Navbar from "./Navbar";

function Nav() {
    return(
        <div className="w-full flex flex-row items-center justify-between">
            <p className="text-white font-semibold text-lg w-28">Kevin Torres</p>

            <Navbar/>

            <div className="w-28"></div>
        </div>
    )
}

export default Nav;