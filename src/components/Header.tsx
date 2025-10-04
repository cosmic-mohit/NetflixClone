import SearchBar from "./searchBar";

function Header() {
    return (
        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-20">
            <div>
                <h1 className="text-red-600 font-extrabold text-6xl uppercase">
                    NETFLIX
                </h1>
            </div>
            <div>
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;
