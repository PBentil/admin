import React from "react";
import { useState } from "react";
import loginBackground from "../images/loginBackground.jpg";
import seal from "../images/seal.png";
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import First from "./first-page";


const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};





function SignIn() {

    const navigate = useNavigate();


    const goToFirst= () =>{
        navigate('/First')
    };
    return (
        <div className="flex flex-wrap gap-48">
            <div className="h-screen w-1/2 bg-cover bg-center hidden sm:block" style={{ backgroundImage: `url(${loginBackground})` }}>
                <div className="flex justify-center items-center h-full">
                    <img src={seal} alt="logo" className="w-2/3 h-auto" />
                </div>
            </div>
            <div className=" justify-center pt-20">
                <h1 className="text-blue-900 text-center font-semibold text-5xl">Welcome</h1><br />
                <p className="text-gray-500 text-center font-semibold">Dail *772*45# to buy a voucher </p><br /><br /><br />
                <Form name="basic" layout="vertical">
                    <Form.Item
                        label="Serial No"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Serial No!',
                            },
                        ]}
                    >
                        <Input className="w-96 border-3 rounded-lg border-blue-900" />
                    </Form.Item><br />

                    <Form.Item
                        label="Pin Code"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your pin!',
                            },
                        ]}
                    >
                        <Input.Password className="w-96 border-3 rounded-lg border-blue-900" />
                    </Form.Item><br />
                    <Button className="w-96 rounded-lg bg-blue-900 text-white py-4 px-6" onClick={goToFirst} htmlType="submit">
                        Sign In
                    </Button><br />
                    <p className="mt-10 text-center text-sm text-gray-500">
                        {/* Horizontal Rule with Text in Between */}
                        <div className="flex items-center justify-center my-4">
                            <hr className="sm:w-full md:w-20 border-gray-300" />
                            <span className="px-4 text-gray-500">&copy; 2024 Takoradi Technical University</span>
                            <hr className="sm:w-full md:w-20 border-gray-300" />
                        </div>
                        {/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"></a> */}
                    </p><br />
                    <p className="text-gray-500 text-center">Powered by Tpconnect</p>

                </Form>

            </div>
        </div>
    );

}
export default SignIn;  