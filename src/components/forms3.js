import React, { useState } from 'react';
import { Button } from 'antd';
import { Form, Input } from 'antd';
import {Select} from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
import Review from './preview-form';
import Sidebar from './sidebar';
import { NoCompactStyle } from 'antd/es/space/Compact';







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






const Forms3 = () => {
    const navigate = useNavigate();

    const goToNext =() =>{
        navigate('/Preview');
    };

    const goToPreview =() =>{
        navigate('/Forms2')
    }




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
                            <div className='bg-blue-400 p-3 w-80 text-white'>1.Bio Data</div>
                            <div className='bg-red-600 p-3 w-80 text-white'>2.Academic Information</div>
                        </div>
                        <br />
                        <br />

                        <Form name="form_item_path" layout="vertical" className='flex flex-wrap justify-between gap-2'>
                            <MyFormItemGroup prefix={['user']}>
                                <MyFormItemGroup prefix={['name']}>
                                    <MyFormItem name="" label="Former School Attended">
                                        <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                    </MyFormItem>
                                    <MyFormItem name="" label="Programme Studied">
                                        <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                    </MyFormItem>
                                </MyFormItemGroup>

                                <MyFormItem name="" label="Year Completed">
                                    <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                </MyFormItem>
                            </MyFormItemGroup>

                        </Form><br />
                        <Form className='flex flex-wrap justify-between gap-2' layout='vertical'>
                            <MyFormItemGroup>
                                <MyFormItem name="" label="Source Of Finance">
                                    <Input className='w-80 h-16 rounded-lg border-blue-900 border-3' />
                                </MyFormItem>

                                <Form.Item label="Apply As Fee paying?" className='w-80'>
                                    <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                        <Select.Option value="ghana Card">Ghana Card</Select.Option>
                                        <Select.Option value="Passport">Passport</Select.Option>
                                        <Select.Option value="Health Card">Health Card</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Entry Mode" className='w-80'>
                                    <Select className=' h-16 border-3 border-blue-900 rounded-lg'>
                                        <Select.Option value="ghana Card">Ghana Card</Select.Option>
                                        <Select.Option value="Passport">Passport</Select.Option>
                                        <Select.Option value="Health Card">Health Card</Select.Option>
                                    </Select>
                                </Form.Item>
                            </MyFormItemGroup>
                        </Form><br />

                        <Form className='flex flex-wrap justify-between gap-2' layout='vertical'>
                            <Form.Item label="First Choice" className='w-80'>
                                <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                    <Select.Option value="Christian">Christian</Select.Option>
                                    <Select.Option value="Muslim">Muslim</Select.Option>
                                    <Select.Option value="Traditionalist">Traditionalist</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Second Choice" className='w-80'>
                                <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                    <Select.Option value="ghana Card">Ghana Card</Select.Option>
                                    <Select.Option value="Passport">Passport</Select.Option>
                                    <Select.Option value="Health Card">Health Card</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Third Choice" className='w-80'>
                                <Select className='h-16 border-3 border-blue-900 rounded-lg'>
                                    <Select.Option value="Father">Father</Select.Option>
                                    <Select.Option value="Mother">Mother</Select.Option>
                                    <Select.Option value="Others">Others</Select.Option>
                                </Select>
                            </Form.Item>
                        </Form><br />
                        <Form className='flex flex-wrap justify-start gap-2' layout='vertical'>
                            <Form.Item label="Attended TTU?" className='w-80'>
                                <Select  className='h-16 border-3 border-blue-900 rounded-lg'>
                                    <Select.Option value="Father">Father</Select.Option>
                                    <Select.Option value="Mother">Mother</Select.Option>
                                    <Select.Option value="Others">Others</Select.Option>
                                </Select>
                            </Form.Item>
                        </Form><br /><br />

                        <div className='flex justify-between'>
                            <div>
                                <Button className='bg-blue-900 text-white  px-10 py-4' htmlType="Next" onClick={goToPreview}>
                                    Previous
                                </Button>
                            </div>
                            <div>
                                <Button className='bg-blue-900 text-white  px-10 py-4' htmlType="Next" onClick={goToNext}>
                                    Submit
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

export default Forms3;
