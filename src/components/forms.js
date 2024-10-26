import React from 'react';
import { Button} from 'antd';
import { Form, Input } from 'antd';
import { Radio, Select, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import Forms2 from './forms2';
import Sidebar from './sidebar';



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


const Forms = () => {

    const navigate = useNavigate();

    const gOtoForms2 =()=>{
        navigate('/Forms2');
    }


    return (
        <div>
            <Sidebar>
                <div>
                    <br />
                    <br />
                    <body>
                        {/* forms */}
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

                            <Form name="form_item_path" layout="vertical" className='flex flex-wrap justify-between  gap-2'>
                                <MyFormItemGroup prefix={['user']}>
                                    <MyFormItemGroup prefix={['name']}>
                                        <MyFormItem name="firstName" label="First Name">
                                            <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 '/>
                                        </MyFormItem>
                                        <MyFormItem name="lastName" label="Last Name">
                                            <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                        </MyFormItem>
                                    </MyFormItemGroup>

                                    <MyFormItem name="Other-Names" label="Other Names">
                                        <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                    </MyFormItem>
                                </MyFormItemGroup>

                            </Form><br />
                            <Form className='flex flex-wrap justify-between gap-2' layout='vertical'>
                                <MyFormItemGroup>
                                    <Form.Item label="Gender" className='w-80'>
                                        <Radio.Group>
                                            <Radio value="Male"> Male </Radio>
                                            <Radio value="Female"> Female </Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item label="Title" className='w-80'>
                                        <Select className='h-16 rounded-lg border-3 border-blue-900 '>
                                            <Select.Option value="Miss">Miss</Select.Option>
                                            <Select.Option value="Mr">Mr.</Select.Option>
                                            <Select.Option value="Mrs">Mrs.</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label="Marital Status" className='w-80'>
                                        <Select className='h-16 rounded-lg border-3 border-blue-900 '>
                                            <Select.Option value="single">Single</Select.Option>
                                            <Select.Option value="married">Married</Select.Option>
                                            <Select.Option value="divorced">Divorced</Select.Option>
                                            <Select.Option value="widowed">Widowed</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </MyFormItemGroup>
                            </Form><br />

                            <Form className='flex flex-wrap justify-between gap-2' layout='vertical'>
                                <Form.Item label="Date">
                                    <DatePicker className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                </Form.Item>
                                <MyFormItem name="Post GPS" label="Post GPS">
                                    <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                </MyFormItem>
                                <MyFormItem name="Hometown" label="Hometown">
                                    <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                </MyFormItem>
                            </Form><br />
                            <Form className='flex flex-wrap justify-between gap-2 ' layout='vertical'>
                                <MyFormItem name="Phone Number" label="Phone Number">
                                    <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                </MyFormItem>
                                <MyFormItem name="Alternate Phone Number" label="Alternate Phone Number">
                                    <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                </MyFormItem>
                                <MyFormItem name="Emergency" label="Emergency Contact No:">
                                    <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                </MyFormItem>
                            </Form><br />
                            <Form className='flex flex-wrap justify-between gap-2' layout='vertical'>
                                <MyFormItem name="Email" label="Email">
                                    <Input className='w-80 h-16 rounded-lg border-3 border-blue-900 ' />
                                </MyFormItem>
                                <Form.Item label="Are you physically challenged?"className='w-80' >
                                    <Select className='h-16 rounded-lg border-3 border-blue-900'>
                                        <Select.Option value="Yes">Yes</Select.Option>
                                        <Select.Option value="No">No</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Referral" className='w-80'>
                                    <Select className='h-16 border-3 border-blue-900 rounded-lg '>
                                        <Select.Option value="Lecturer">Lecturer</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Form><br /><br />
                            <div className='flex justify-end'>
                                <Button className='bg-blue-900 text-white  px-10 py-4' htmlType="Next" onClick={gOtoForms2}>
                                    Next
                                </Button>
                            </div>
                        </div><br /><br />
                    </body>
                </div>
            </Sidebar>
        </div>
    );
};

export default Forms;
