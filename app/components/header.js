export default function Navbar() {
    return (
        <header>
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex-none items-center justify-self-start">
                        <span className="text-xl font-semibold text-white">Spotify Rewrapped</span>
                    </div>
                    <div className="flex-none items-center">
                        <a href="#about" className="text-white px-4">About</a>
                        <a href="#contact" className="text-white px-4">Contact</a>
                        <a href="#contact" className="text-white px-4">Sign Up</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
