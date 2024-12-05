'use client';

import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';



const PlantDiseaseDetection = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<string | null>(null); // State to store the result

  function convertToBase64(file: File){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        }

        fileReader.onerror = (err) => {
            reject(err);
        }
    })
}

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files)
    setSelectedFile(e.target.files[0]);
    setResult(null); // Reset the result when a new file is selected
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const base64url = await convertToBase64(selectedFile);
      const response = await fetch('/api/checkup', {
        method: "POST",
        body: JSON.stringify({
          imageData: base64url
        })
      });

      const result = await response.json();
      setResult(result.result);
      
    } else {
      alert('Please upload an image first.');
    }
  };

  return (
    <section id="plant-disease-detection" className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Detect Plant Diseases Instantly
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Upload a photo of your plant, and we'll identify any diseases affecting it along with expert solutions.
        </p>

        {/* Upload Feature */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl flex flex-col lg:flex-row justify-center lg:w-max gap-2 p-4 mx-auto">
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {selectedFile ? `File Selected: ${selectedFile.name}` : 'Upload a Plant Photo'}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={handleSubmit}
            className=" bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Analyze Photo
          </button>
        </div>

        {/* Result Section */}
        {result && (
          <div className="mt-8 gap-10 bg-green-100 dark:bg-gray-800 p-4 lg:p-16 rounded-lg text-left">
              <h3 className="text-2xl font-semibold text-green-700 dark:text-green-500 mb-4">
                Disease Detected
              </h3>

              <div className='text-gray-900 dark:text-gray-100'>
                
                <Image 
                  src={selectedFile ? URL.createObjectURL(selectedFile) : '/thumbnail-image.png'}
                  width={400}
                  height={400}
                  alt='dieased-plant-image'
                  className='max-w-full float-right ml-6 mb-6 mx-auto rounded'
                />
                <ReactMarkdown
                  className='space-y-5 [&_strong]:bg-gray-400/40 [&_ul]:list-disc [&_ul]:px-8'
                >{result}</ReactMarkdown>

                
              </div>

            </div>
        )}
      </div>
    </section>
  );
};

export default PlantDiseaseDetection;
