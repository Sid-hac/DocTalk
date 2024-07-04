"use client"

import { FileUploadToS3 } from "@/lib/s3"
import { useMutation } from "@tanstack/react-query"
import { FileInput, Inbox, Loader2 } from "lucide-react"
import { useDropzone } from "react-dropzone"
import axios from "axios"
import toast from "react-hot-toast"
import { useState } from "react"

const FileUpload = () => {

    const [uploading, setUploading] = useState(false)

    const { mutate, isPending } = useMutation({
        mutationFn: async ({ file_key, file_name }: { file_key: string, file_name: string }) => {
            const res = await axios.post('/api/create-chat', { file_key, file_name });
            return res.data
        }
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: { "application/pdf ": [".pdf"] },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            console.log("Accepted files:", acceptedFiles)
            const file = acceptedFiles[0]
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File size should not exceed 10MB")
                return
            }

            try {
                setUploading(true)
                const data = await FileUploadToS3(file)
                console.log('data', data);

                if (!data?.file_key || !data?.file_name) {
                    toast.error("Failed to upload file")
                    return
                }
                mutate(data, {
                    onError: (error) => {
                        toast.error("Error uploading")
                    },
                    onSuccess: (data) => {
                        toast.success( data.message)
                    }
                })

            } catch (error) {
                console.log(error);

            } finally {
                setUploading(false)
            }

        }
    })

    return (
        <div className="p-2 bg-white rounded-xl w-[50%] " >
            <div {...getRootProps({
                className: "border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col h-40"
            })} >
                <input {...getInputProps()} />
                {(uploading || isPending) ? (
                    <>
                    <Loader2 className="w-10 h-10 text-blue-400 animate-spin " />
                    <p className="mt-2 text-sm text-slate-400" >Spilling tea to GPT....</p>
                    </>

                ): (
                    <>
                    <Inbox className="text-blue-600 w-10 h-10 " />
                    <p className="mt-2 text-sm text-slate-400" > Drop PDF here</p>
                </>
                )}
                
            </div>
        </div>
    )
}

export default FileUpload