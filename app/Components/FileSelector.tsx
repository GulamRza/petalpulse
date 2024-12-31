'use client';
import React, { useState } from "react";
import Image from "next/image";

const FileSelector = ({ onChange, className } : { onChange : Function, className?: any }) => {
  const [file, setFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e : React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      if (onChange) onChange(droppedFile); // Call onChange prop with the selected file
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files){
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          setFile(selectedFile);
          if (onChange) onChange(selectedFile); // Call onChange prop with the selected file
        }
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      
      className={`border-2 border-dashed rounded-lg relative p-6 text-center transition-colors duration-300 ${
        isDragging ? "border-blue-500/50 bg-blue-100/50" : "border-gray-400/50 bg-gray-500/5"
      } ${className}`}
    >
      <input
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        id="fileInput"
        accept="*"
      />
      <label htmlFor="fileInput" className="cursor-pointer text-gray-600 block">
        Drag & drop a file here, or click to select a file
      </label>

      {file && (file.type.includes('image') ? (
        <div className="mt-4">
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            width={200}
            height={200}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
          />
        </div>
      ) : (
        <div className="mt-4">
          <p className="text-gray-600 w-full">{file.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FileSelector;
