import React from 'react';
import { Button } from 'antd';
import { Form, Input } from 'antd';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';
import Forms from './forms';
import Forms3 from './forms3';
import { useState } from 'react';




//forms
const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};








const Forms2 = () => {

    const navigate = useNavigate();

    const goToPreview = () =>{
        navigate('/Forms');
    };

    const goToNext = () =>{
        navigate('/Forms3');
    };


    return (
        <div>
            <Sidebar>
                <div>
                    <br />
                    <br />
                    <body>

                        <div className='flex flex-wrap justify-around'>
                            <div>
                                <h1 className='text-blue-900 text-3xl font-semibold'>Fill All Forms</h1>
                                <p className='text-red-500 font-semibold'>Every Field Is Required</p>
                            </div>
                            <div>
                                <h3 className='text-gray-500 font-medium'>Form No.</h3>
                                <p className='text-blue-900 font-semibold'>20244104113-HND-ZENITH TTU Tpconnect</p>
                            </div>
                        </div><br />
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border border-gray-300 shadow-lg rounded-lg bg-white">
                            <br />
                            <div className='flex'>
                                <div className='bg-red-600 p-3 w-72 text-white'>1.Bio Data</div>
                                <div className='bg-gray-300 p-3 w-3/4 text-white'>2.Academic Information</div>
                            </div>
                            <br />
                            <br />

                            <Form name="form_item_path" layout="vertical" className='flex flex-wrap justify-between gap-10'>
                                <MyFormItemGroup prefix={['user']}>
                                    <MyFormItemGroup prefix={['name']}>
                                        <Form.Item label="Country" className='w-80'>
                                            <Select className=' h-16 border-3 border-blue-900 rounded-lg'>
                                                <Select.Option value="Ghana">Ghana</Select.Option>
                                                <Select.Option value="Uk">Uk</Select.Option>
                                                <Select.Option value="America">USA</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item label="Region" className='w-80'>
                                            <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                                <Select.Option value="West">West</Select.Option>
                                                <Select.Option value="East">East</Select.Option>
                                                <Select.Option value="south">South</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </MyFormItemGroup>

                                    <MyFormItem name="District" label="District">
                                        <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                    </MyFormItem>
                                </MyFormItemGroup>

                            </Form><br />
                            <Form className='flex flex-wrap justify-start lg:gap-32' layout='vertical'>
                                <MyFormItemGroup>
                                    <Form.Item label="ID Type" className='w-80'>
                                        <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                            <Select.Option value="ghana Card">Ghana Card</Select.Option>
                                            <Select.Option value="Passport">Passport</Select.Option>
                                            <Select.Option value="Health Card">Health Card</Select.Option>
                                        </Select>
                                    </Form.Item>

                                    <MyFormItem name="ID Number" label="ID Number">
                                        <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                    </MyFormItem>
                                </MyFormItemGroup>
                            </Form><br />

                            <Form className='flex flex-wrap justify-between gap-2' layout='vertical'>
                                <Form.Item label="Religion" className='w-80'>
                                    <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                        <Select.Option value="Christian">Christian</Select.Option>
                                        <Select.Option value="Muslim">Muslim</Select.Option>
                                        <Select.Option value="Traditionalist">Traditionalist</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Residential Status" className='w-80'>
                                    <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                        <Select.Option value="ghana Card">Ghana Card</Select.Option>
                                        <Select.Option value="Passport">Passport</Select.Option>
                                        <Select.Option value="Health Card">Health Card</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Are you under sponsorship?" className='w-80'>
                                    <Select  className='h-16 border-3 border-blue-900 rounded-lg'>
                                        <Select.Option value="Father">Father</Select.Option>
                                        <Select.Option value="Mother">Mother</Select.Option>
                                        <Select.Option value="Others">Others</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Form><br />
                            <Form className='flex flex-wrap justify-between gap-2' layout='vertical'>
                                <MyFormItem name="Guardian Name" label="Guardian">
                                    <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                </MyFormItem>
                                <MyFormItem name="Guardian Relationship" label="Guardian Relationship">
                                    <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                </MyFormItem>
                                <MyFormItem name="Guardian Occupation" label="Guardian Occupation">
                                    <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                </MyFormItem>
                            </Form><br />
                            <Form className='flex flex-wrap justify-start gap-2' layout='vertical'>
                                <MyFormItem name="Guardian Phone Number " label="Guardian Phone Number">
                                    <Input className='w-80 h-16 rounded-lg border-blue-900 border-3x ' />
                                </MyFormItem>
                            </Form><br /><br />
                            <div className='flex justify-between'>
                                <div>
                                    <Button className='bg-blue-900 text-white  px-10 py-4' htmlType="Next" onClick={goToPreview} >
                                        Previous
                                    </Button>
                                </div>
                                <div>
                                    <Button className='bg-blue-900 text-white  px-10 py-4' htmlType="Next" onClick={goToNext} >
                                        Next
                                    </Button>
                                </div>
                            </div>
                        </div><br /><br />
                    </body>
                </div>
            </Sidebar>
        </div>
    );
};

export default Forms2;
