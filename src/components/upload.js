    import React from "react";
    import { useState } from "react";
    import Sidebar from "./sidebar";
    import { Form, Input, Select, Button } from 'antd'; // Make sure you have Ant Design imported
    import { useNavigate } from "react-router-dom";

    function Results() {

        const navigate = useNavigate();

        const handleClick = () => {
          navigate('/Last')
        };

        return (
            <div>
                <Sidebar ><br /><br />
                    <div>
                    <div className='flex flex-wrap justify-around '>
                        <div>
                            <h1 className='text-blue-900 text-3xl font-semibold'>Fill All Forms</h1>
                            <p className='text-red-500 font-semibold'>Every Field Is Required</p>
                        </div>
                        <div>
                            <h3 className='text-gray-500 font-medium'>Form No.</h3>
                            <p className='text-blue-900 font-semibold'>20244104113-HND-ZENITH TTU Tpconnect</p>
                        </div>
                    </div>

                    <br />

                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border border-gray-300 shadow-lg rounded-lg bg-white">
                        <br />
                        <div className='flex'>
                            <div className='bg-blue-400 p-3 w-80 text-white'>1. Bio Data</div>
                            <div className='bg-red-600 p-3 w-80 text-white'>2. Academic Information</div>
                        </div>

                        <br /><br />

                        {/* Forms */}
                        <Form name="form_item_path" layout="vertical" className='flex flex-wrap justify-between gap-2'>
                            <Form.Item label="Index Number">
                                <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' placeholder="Type Here" />
                            </Form.Item>
                            <Form.Item label="Center">
                                <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' placeholder="Type Here" />
                            </Form.Item>
                            <Form.Item label="Exam Type" className="w-80">
                                <Select className='h-16 border-3 border-blue-900 rounded-lg' >
                                    <Select.Option value="WASSCE">WASSCE</Select.Option>
                                    <Select.Option value="BECE">BECE</Select.Option>
                                </Select>
                            </Form.Item>
                        </Form>

                        <br />

                        <Form className='flex flex-wrap justify-between gap-2' layout='vertical'>
                            <Form.Item label="Subject" className="w-80">
                                <Select className='h-16 border-3 border-blue-900 rounded-lg' >
                                    <Select.Option value="MATHS">MATHS</Select.Option>
                                    <Select.Option value="SCIENCE">SCIENCE</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Grades" className="w-80">
                                <Select className='h-16 border-3 border-blue-900 rounded-lg' >
                                    <Select.Option value="A">A</Select.Option>
                                    <Select.Option value="B">B</Select.Option>
                                    <Select.Option value="C">C</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Sitting" className="w-80">
                                <Select className='h-16 border-3 border-blue-900 rounded-lg' >
                                    <Select.Option value="Yes">Yes</Select.Option>
                                    <Select.Option value="No">No</Select.Option>
                                </Select>
                            </Form.Item>
                        </Form>

                        <br />

                        <Form className='flex flex-wrap justify-start lg:gap-32' layout='vertical'>
                            <Form.Item label="Month" className="w-80">
                                <Select className='h-16 border-3 border-blue-900 rounded-lg'> 
                                    <Select.Option value="">January</Select.Option>
                                    <Select.Option value="">February</Select.Option>
                                    <Select.Option value="">March</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Year" className="w-80">
                                <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                    <Select.Option value="">2020</Select.Option>
                                    <Select.Option value="">2021</Select.Option>
                                    <Select.Option value="">2022</Select.Option>
                                </Select>
                            </Form.Item>
                        </Form>
                        <br /><br />
                        {/* Action buttons */}
                        <div className=" flex justify-center">
                            <Button className='bg-[#4A4A4AB2] text-white px-10 py-4' onClick={handleClick}>
                                Submit
                            </Button>
                        </div><br /><br />
                        <h1 className="text-blue-900 font-bold flex justify-center">Upload Results</h1><br /><br /><br />
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 px-4 py-2 text-left">No</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Index Number</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Subject</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Grade</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Exam Type</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Sitting</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Month Of Exam</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                                        <th className="border border-gray-300 px-4 py-2 text-left">center</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white even:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">1</td>
                                        <td className="border border-gray-300 px-4 py-2">202567587</td>
                                        <td className="border border-gray-300 px-4 py-2">Graphic Design</td>
                                        <td className="border border-gray-300 px-4 py-2">A+</td>
                                        <td className="border border-gray-300 px-4 py-2">Certifiacte</td>
                                        <td className="border border-gray-300 px-4 py-2">50</td>
                                        <td className="border border-gray-300 px-4 py-2">September</td>
                                        <td className="border border-gray-300 px-4 py-2">2024</td>
                                        <td className="border border-gray-300 px-4 py-2">South</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </Sidebar>
                {/* Main content */}

            </div>
        );
    }

    export default Results;
