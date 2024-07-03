"use client"

import { FileInput, Inbox } from "lucide-react"
import { useDropzone } from "react-dropzone"


const FileUpload = () => {

    const { getRootProps, getInputProps } = useDropzone({
        accept : {"application/pdf " : [".pdf"]},
        maxFiles : 1,
        onDrop : (acceptedFiles) => {
            console.log("Accepted files:", acceptedFiles)
        }
    })

    return (
        <div className="p-2 bg-white rounded-xl w-[50%] " >
            <div {...getRootProps({
                className: "border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col h-40"
            })} >
                <input {...getInputProps()} />
                <Inbox className="text-blue-600 w-10 h-10 " />
                <p className="mt-2 text-sm text-slate-400" > Drop PDF here</p>
            </div>
        </div>
    )
}

export default FileUpload