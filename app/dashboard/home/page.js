'use client'
import { setRequestMeta } from "next/dist/server/request-meta";
import { useState } from 'react'
import { getSignedURL } from "../../../actions";

export default function HomePage(){
    const [message, setMessage] = useState("")
    async function handleFileUpload(event){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const file = formData.get("json_data");
        if(file){
            setMessage("Uploading")
            if (file.type !== "application/json") {
                console.error("Only JSON files are allowed");
                setMessage('Invalid File Type')
                return;
            }
            console.log('uploading')
            const signedUrl = await getSignedURL();
            console.log(signedUrl)
            const url = signedUrl.success.url
            if(signedUrl.failure !== undefined){
                setMessage('SURL error')
                console.error("Signed URL fetch error");
                return
            }
            // await fetch(url,{
            //     method: "PUT",
            //     body: file,
            //     headers: {
            //         "Content-Type": "application/json",
            //     }
            // })
            setMessage('Success')
            console.log("posted")
        }
    }
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
                <div className="flex items-center justify-center flex-grow">
                    <div className="w-1/3 h-1/3 rounded-lg shadow-white-lg bg-rose-900">
                        <div className="flex h-1/6 p-2 rounded-sm items-center bg-yellow-200">
                            {message && (<p aria-live="polite" className="">{message}</p>)}
                        </div>
                        <div className="flex flex-col items-center justify-center h-full w-full">
                            <div className="text-sm text-black text-center">
                                <h1>Click here to Upload</h1>
                                <form onSubmit={handleFileUpload}>
                                    <input className="mb-2 mx-auto" type="file" id="json_data" name="json_data"></input>
                                    <button className="text-black bg-teal-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">SUBMIT</button>
                                </form>
                            </div>
                        </div>
                    </div>
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