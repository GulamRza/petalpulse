'use client';

import FileSelector from '@/app/Components/FileSelector';
import convertToBase64 from '@/app/utils/FileToBase64';
import React, { ChangeEvent, ChangeEventHandler, FormEvent, Fragment, useEffect, useState } from 'react'
const template: any = {
    'name': "",
    "description": "",
    "overview": {
        "GenusName": "",
        "CommonName": "",
        "PlantType": "",
        "Light": "",
        "Height": "",
        "Width": "",
        "FlowerColor": "",
        "FoliageColor": "",
        "SeasonFeatures": "",
        "SpecialFeatures": "",
        "Zones": "",
        "Propagation": "",
    },
    "imgUrl": "",
    "extras": {}
};

function AddtemplatePage() {
    const [imageFile, setImageFile] = useState<File | null>(null);

    async function HandleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);

        const formattedData = {} as any;
        formattedData.overview = {};
        formattedData.extras = {};
        if (imageFile){
            formattedData.imageUrl = await convertToBase64(imageFile);
        }

        data.entries().forEach(([key, value]) => {
            value = String(value);
            if (key.includes('extras-title')){
                formattedData.extras[value] = data.get(`extras-content-${key.split('-')[2]}`);
            }else if(key.includes('overview')){
                formattedData.overview[key.split('-')[1]] = value;
            }else if (!key.includes('extras-content')){
                formattedData[key] = value;
            }
        });

        // do something with formattedData
        console.log(formattedData)
    }

    return (
        <section id="gallery" className="bg-green-50 dark:bg-gray-800 py-16 text-black dark:text-white ">
            <form className='container mx-auto px-6 lg:px-20 min-h-72 space-y-4' onSubmit={HandleFormSubmit}>

                <h1 className='text-6xl text-green-700'>
                    <Input name='template-name' placeholder='Plant Name' />
                </h1>

                <p className='text-gray-500'>
                    <Input name='template-type' placeholder='Plant Type' />
                </p>

                <div className='w-72 float-right m-6 h-72 content-center'>
                    <FileSelector onChange={setImageFile} className='h-full content-center' />
                    <p className='text-sm mt-2'><Input name='image-desc' placeholder='Image Description' /></p>
                </div>

                <p className='min-h-32'><Input name='description' placeholder='Plant Description' /></p>


                <OverviewInput />
                <ExtrasInput />

                <div className='border-b dark:border-gray-700'></div>

                <div className='space-x-4'>
                    <button className='default-button'>Submit</button>
                    <button className='default-button' style={{ backgroundColor: 'gray' }}>Cancel</button>
                </div>
            </form>
        </section>
    )
}

export default AddtemplatePage;

function Input({ name, placeholder, onChange }: { name: string, placeholder?: string, onChange?: ChangeEventHandler }) {
    return (
        <input type="text" className='bg-transparent max-w-max w-full' placeholder={placeholder || 'Type Here'} name={name} onChange={onChange} />
    )
}


function ExtrasInput() {
    const [extras, setExtras] = useState<Array<{ title: string, content: string, id: number }>>([
        { title: '', content: '', id: 0 }
    ]);


    return (
        <div className='space-y-4'>
            {extras.map(({ id }, index) => (
                <div key={id} className='border dark:border-gray-700 flex flex-col p-6 hover:bg-gray-100 hover:dark:bg-gray-700'>
                    <button type='button' className='self-end' onClick={() => setExtras(es => es.filter((_, i) => i != index))}>x</button>
                    <h1 className='text-4xl'>
                        <Input
                            name={`extras-title-${index}`}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setExtras(extras.map((val, i) => i == index ? { ...val, title: e.target.value } : val))
                            }}
                        />
                    </h1>

                    <p className='min-h-20'>
                        <Input
                            name={`extras-content-${index}`}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setExtras(extras.map((val, i) => i == index ? { ...val, content: e.target.value } : val))
                            }}
                        />
                    </p>
                </div>
            ))}
            <button type='button' onClick={(e) => setExtras(val => [...val, { title: '', content: '', id: val[val.length - 1] ? val[val.length - 1].id + 1 : 0}])}
            >+</button>

        </div>
    )
}

function OverviewInput() {
    return (
        <table className='border-collapse'>
            <tbody>
                {Object.keys(template.overview).map(prop => (
                    <tr key={prop}>
                        <td className='border dark:border-gray-700 p-2'>{prop}</td>
                        <td className='border dark:border-gray-700 p-2 w-dvw'>
                            <Input name={`overview-${prop}`} placeholder={`Plant's ${prop}`} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}