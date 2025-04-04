import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload() {
  const [fileName, setFileName] = useState("No file chosen");

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFileName(acceptedFiles[0]?.name || "No file chosen");
    },
    accept: { "image/jpeg": [".jpg", ".jpeg"], "image/png": [".png"] },
    maxSize: 500 * 1024, // 500KB
    multiple: false,
  });

  return (
    <div>
      <label className="text-white text-sm font-medium">Upload Avatar</label>
      <div>
        <div
          {...getRootProps()}
          className="mt-2 w-full h-24 border-2 border-dashed
           border-gray-500 rounded-lg flex flex-col items-center justify-center 
          text-center cursor-pointer bg-gray-900 hover:border-blue-400 transition opacity-[90%] p-4"
        >
          <input {...getInputProps()} />
          <div className="text-gray-400 text-3xl">
            <img src="/images/icon-upload.svg" alt="" />
          </div>
          <p className="text-gray-300 text-sm">
            Drag & drop or click to upload
          </p>
        </div>

        <span className="flex items-center justify-center">
          <img src="/images/icon-info.svg" className="mt-1" alt="" />
          <p className="text-gray-400 text-xs mt-1">{fileName}</p>
        </span>
      </div>
    </div>
  );
}
