export default function HomePage(){
    return(
        <div className="flex flex-row p-6 bg-rose-900">
            <div className="flex flex-col p-1 min-h-screen rounded-lg shadow-lg bg-black flex-grow">
                <div className="h-16 w-full rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="text-lg text-white">
                        <h1>Welcome User!</h1>
                    </div>
                </div>
            </div>
            
            <div className="p-2"></div>
            
            {/* center div for file uploads */}
            <div className="flex flex-col p-1 w-1/2 min-h-screen rounded-lg shadow-lg bg-black">
                <div className="h-16 w-full rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="text-lg text-white">
                        <h1>Drop Your Files Here</h1>
                    </div>
                </div>
                <div className="w-20 h-20 flex items-center justify-center rounded-lg shadow-lg bg-white">

                </div>
            </div>
            
            <div className="p-2"></div>
            
            {/* right card */}
            <div className="flex flex-col p-1 min-h-screen rounded-lg shadow-lg bg-black flex-grow">
                <div className="h-16 w-full rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="text-lg text-white">
                        <h1>Welcome User!</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}