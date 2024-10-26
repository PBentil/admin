import React from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import Sidebar from './sidebar';


const { Dragger } = Upload;


const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


const Dashboard = () => {
    return (
        <div>
            <Sidebar><br /><br />   
            <Dragger {...props} className="px-10">
                        <p className='text-center text-red-800 pt-9'>UPLOAD WHITE BACKGROUND PASSPORT PICTURE HERE. ONLY(.JPEG.JPG)ARE <br />
                            ALLOWED. MAXIMUM SIZE 250KB.</p><br />
                        <p className="ant-upload-drag-icon">
                            <CloudUploadOutlined />
                        </p>
                        <p className="ant-upload-text pb-9">Drag and Drop a file or click to upload</p>
                    </Dragger>
            </Sidebar>
        </div>
        
                      
    );
};

export default Dashboard;
