import React from "react";
import Sidebar from "./sidebar";
import { Steps } from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';
import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";



function First() {
    const navigate = useNavigate();

    const goToUpload =() =>{
        navigate('/Dashboard');
    }

    
    return (
        <div>
            <Sidebar ><br /><br />
                <div className="flex flex-wrap justify-around">
                    <div >
                        <h1 className="font-semibold text-3xl">Welcome Back, Peter Asare</h1>
                        <p>Track Your Application Progress</p>
                    </div>
                    <div>
                        <h3 className='text-gray-500 font-medium'>Form No.</h3>
                        <p className='text-blue-900 font-semibold'>20244104113-HND-ZENITH TTU Tpconnect</p>
                    </div>
                </div><br />
                <div className="mx-auto w-10/12 flex justify-center  py-6 sm:px-6 lg:px-8 border border-gray-300 shadow-lg rounded-lg bg-white">
                    <Steps
                        current={1}
                        className="w-10/12 sm:justify-center "
                        items={[
                            {
                                title: 'Application Completed',
                                description: 'Application completed'

                            },
                            {
                                title: 'Application Submited ',
                                description: 'Application Submited'


                            },
                            {
                                title: 'Application Status',
                                description: 'Application Status '

                            },
                        ]}
                    />
                </div><br /><br />
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border border-gray-300 shadow-lg rounded-lg bg-white">
                    <h1 className="text-red-500 text-center font-semibold">INSTRUCTIONS IN FILLING THE FILLING THE FORMS</h1>
                    <div className="flex items-center justify-center my-4">
                        <hr className="sm:w-full md:w-60 border-gray-300" />
                        <hr className="sm:w-full md:w-60 border-gray-300" />
                    </div>
                    <p className="text-gray-500 text-3xl">All Ghanaian applicants for the 2024/2025 Academic year adimision are required to use Takoradi Technical<br />
                        University online adimision portal.<br />
                        The procedure for the online application process is as follows: </p><br />
                    <p className="text-2xl text-gray-400 pl-6">
                        1.In completing the online form, applicants will be required to upload their passport size photograph (not <br />
                        more than 250KB) with a white background.<br />
                        2.Applicants are advised to check thoroughly all details entered before they finally submit their online<br />
                        applications. A form, once submitted, can be viewed, but cannot be edited.<br />
                        3.Applicants should print out application form; attach result slips, certificates and all other<br /> relevant documents.
                    </p><br /><br />
                    <div className="flex justify-center">
                        <Button className="w-72 rounded-lg bg-blue-900 text-white py-6 px-8 " htmlType="submit" onClick={goToUpload}>
                            <CloudUploadOutlined /> Upload Picture
                        </Button>
                    </div>
                </div>
                <br /><br />
            </Sidebar>

        </div>
    );


}

export default First;