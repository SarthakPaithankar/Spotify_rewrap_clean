import { signOut } from '../../auth';
export default function Navbar() {
    async function handleSignOut(){
        'use server';
        await signOut();
    };
    return (
        <header>
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex-none items-center justify-self-start">
                        <span className="text-xl font-semibold text-white">Spotify Rewrapped</span>
                    </div>
                    <div className="flex-none items-center">
                    <form action={handleSignOut}>
                            <a href="#about" className="text-white px-4">About</a>
                            <a href="#contact" className="text-white px-4">Sign Up</a>
                            <button className="text-white px-4">
                                <div className="hidden md:block">Sign Out</div>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}
