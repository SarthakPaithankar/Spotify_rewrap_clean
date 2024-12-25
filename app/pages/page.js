export default function HomePage() {
    return (
        <div className="shadow-lg p-6 bg-rose-900 flex">
            <div className="w-1/2 rounded-lg min-h-screen flex items-center justify-center pt-10 pb-10 bg-black bg-[url('/logo.jpg')] bg-cover bg-center">
                <div className="rounded-lg shadow-lg p-6 h-5/6 w-4/5 h-4/5 opacity-100">
                    <div className="h-1/5"></div>
                    <div className="text-xl font-bold text-center text-rose-900">
                        <h5>Explore Your Music</h5>
                    </div>
                    <div className="h-1/5"></div>
                    <div className="h-1/2 flex items-start text-rose-900">
                        <form className="max-w-sm mx-left">
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-lg font-large text-rose-900">Your email</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-lg font-large text-rose-900">Your password</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-lg font-medium text-rose-900">Remember me</label>
                        </div>
                        <button type="submit" className="text-white bg-rose-900 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                        </form>
                    </div>
                </div>
            </div>


            <div className="w-1/2 rounded-lg min-h-5/6 flex items-center justify-center pt-10 pb-10 bg-black bg-[url('/logo.jpg')] bg-cover bg-center">
                <div className="rounded-lg shadow-lg p-6 h-4/5 w-4/5 opacity-.1">
                    <div className="top-2/5"></div>
                    <h5 className="text-xl font-bold text-center">Explore Your Music</h5>
                    <p className="text-gray-600 mt-4 text-center">Content for the left card.</p>
                </div>
            </div>
        </div>
    );
  }



