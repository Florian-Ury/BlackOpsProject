import NavBar from "../NavBar";

function Header() {
    return (
        <header className="flex justify-between p-5 bg-zinc-700 text-white">
            <h1 className=""><a href={"/"}>Black Ops - Airsoft Team</a></h1>
            <NavBar />
        </header>
    )
}


export default Header