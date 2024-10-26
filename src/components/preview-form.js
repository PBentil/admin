import React from 'react';
import {PhoneOutlined} from '@ant-design/icons';
import { Button} from 'antd';
import TTU from '../images/TTU.png';
import image from '../images/image.png';
import Sidebar from './sidebar';


function Review() {
    return (
    <div>
        <Sidebar>
            <div>
            <br />
                <br />
                <body>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border border-gray-300 shadow-lg rounded-lg bg-white">
                        <div className="flex justify-center">
                            <img src={TTU} alt="Logo" className="w-auto" />
                        </div><br />
                        <h1 className='text-center font-bold'>UNDERGRADUATE (HND) ONLINE APPLICATION SUMMARY<br /></h1>
                        <h1 className='text-center font-bold'>APPLICATION NO. 2024104113- REGULAR</h1><br /><br />
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-blue-950 text-3xl'>Bio Data</h1><br />
                                <p>Full Name: Ms Crentsil, Maame Aba<br />
                                    Dob : 04/08/2002<br />
                                    Gender : Female<br />
                                    Physically Challenged : No<br />
                                    Phone :0592229344 <br />
                                    Emergency Contact : 02042042820 <br />
                                    Address : Takoradi, Kobina Biney St.Ho No27, South Africa
                                </p>
                            </div>
                            <div>
                                <img src={image} alt='passport picture' className='w-auto h-56' />
                            </div>
                        </div><br /><br />
                        <div>
                            <h1 className='text-blue-950 text-3xl'>Educational Background</h1><br />
                            <p>SchooL Attended: ABETIFI TECH, INST.<br />
                                Programme Studied: General Arts<br />
                                Year Completed : 2018<br />
                                Entry Certifiacte: WASSCE<br />
                            </p>
                        </div><br /><br />
                        <div>
                            <h1 className='text-blue-950 text-3xl'>Programme Information</h1><br />
                            <p>First Choice : HND COMMERCIAL ARTS (GRAPHICAL DESIGN)<br />
                                Second Choice : HND COMMERCIAL ARTS (PANTING OPTION)<br />
                                Entry Year : 2024/2025<br />
                                Applied As Waiting : False<br />
                                Exams IndexNo : 2424245889
                            </p>
                        </div><br /><br />
                        <div>
                            <h1 className='text-blue-950 text-3xl'>Results</h1><br />
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
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className='flex justify-center'>
                                <Button type="primary" htmlType="Next">
                                    Print Page
                                </Button>
                            </div><br /><br /><br />
                            {/* <div className='flex'>
                                <div className='bg-blue-950'></div>
                                <div className='bg-yellow-500'></div>
                                <div className='bg-red-800'></div>
                            </div> */}
                            <p className='text-center'>Powered By TPCONNECT <PhoneOutlined /> 0246091283 / 0243348522</p>
                        </div>
                    </div>
                </body><br /><br />

            </div>
        </Sidebar>
    </div>
        
    );
};

export default Review;
