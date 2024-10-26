import React from "react";
import adminlogo from '../images/adminlogo.png';

function Login() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Takoradi Technical University"
                        src={adminlogo}
                        className="mx-auto h-10 w-auto"
                    />
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="StaffId" className="block text-sm font-medium leading-6 text-darkblue-900">
                                Staff ID:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-950 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password:
                                </label>
                                <div className="text-sm">
                                    {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a> */}
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
                            >
                                Sign in
                            </button><br /><br />
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-950"></input>
                                <span class="ml-2 text-blue-950">keep me logged in for 30 days</span>
                            </label>


                        </div>

                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        {/* Horizontal Rule with Text in Between */}
                        <div className="flex items-center justify-center my-4">
                            <hr className="sm:w-full md:w-20 border-gray-300" />
                            <span className="px-4 text-gray-500">&copy; 2024 Takoradi Technical University</span>
                            <hr className="sm:w-full md:w-20 border-gray-300" />
                        </div>
                        {/* <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"></a> */}
                    </p><br /><br />
                    <p className="text-center text-blue-950 ">Applicants needing help can send their enquires to the following addresses:</p><br /><br />
                    <h1 className="text-center text-gray-500">Addmission Units</h1>
                    <p className="text-center text-red-800">050833992 / 0508335033</p>
                    <p className="text-center text-red-800">055377777 / 0243348522</p>
                </div>
            </div>
        </>

    );
}

export default Login;
