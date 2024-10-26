import React, { useState } from 'react';
import { MenuFoldOutlined, CloseOutlined, UserOutlined, HomeOutlined, UploadOutlined, FormOutlined, LogoutOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Drawer, Typography, Upload, message } from 'antd';
import frame_bg from '../images/frame_bg.png';
import ttu_final_logo_2 from '../images/ttu_final_logo_2.png';
import Modal from './model';
import Model from './model'
import Forms from './forms';
import Results from './upload';
import { useNavigate } from 'react-router-dom';




const { Title, Text } = Typography;
const { Header, Sider, Content } = Layout;

const Sidebar = ({ children }) => {
        const navigate = useNavigate();

        const goToForms =()=>{
            navigate('/Forms');
        }

        const goToUpload =()=>{
            navigate('/Dashboard')
        }


        const goToPreview =()=>{
            navigate('/Preview')
        }


        const goToFirst =() =>{
            navigate('/First')
        }

        const goToResults =() =>{
            navigate('/Results')
        }

        const Logout =() =>{
            navigate('/Logout')
        }
    const [open, setOpen] = useState(false); // Hook correctly placed inside the component
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isMobileDrawerVisible, setIsMobileDrawerVisible] = useState(false);

    const handleLogout = () => {
        setOpen(true); // Open the logout confirmation dialog
    };

    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const toggleMobileDrawer = () => {
        setIsMobileDrawerVisible(!isMobileDrawerVisible);
    };

    return (
        // laptop
        <Layout className="min-h-screen">
            <Sider
                trigger={null}
                collapsible
                collapsedWidth={0}
                width={200}
                className={`fixed top-0 h-full bg-blue-900 transition-transform duration-300 ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
                    } hidden md:block`}
                style={{ zIndex: 1000 }}
            >
                <div className="py-2 px-4 text-center">
                    <img src={ttu_final_logo_2} alt="Logo" className="w-full h-14" />
                </div>
                <Menu className="inline-block bg-blue-900 text-white" mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />} style={{ color: 'white' }} onClick={goToFirst}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UploadOutlined />} style={{ color: 'white' }} onClick={goToUpload}>
                        Upload Picture
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FormOutlined />} style={{ color: 'white' }} onClick={goToForms}>
                        Forms
                    </Menu.Item>
                    <Menu.Item key="4" icon={<FormOutlined />} style={{ color: 'white' }} onClick={goToPreview}>
                        Preview Forms
                    </Menu.Item>
                    <Menu.Item key="5" icon={<FormOutlined />} style={{ color: 'white' }} onClick={goToResults}>
                        Upload Results
                    </Menu.Item>

                    <Menu.Item key="6" style={{ color: 'white' }} icon={<LogoutOutlined />} onClick={Logout}>
                        Log Out 
                    </Menu.Item>
                </Menu>

            </Sider>


            {/* mobile view */}
            <Drawer
                title=""
                placement="left"
                closable={true}
                onClose={toggleMobileDrawer}
                visible={isMobileDrawerVisible}
                className="block md:hidden"
                bodyStyle={{ backgroundColor: '#203F82', color: 'white', padding: 0 }}
                width={165}
            >
                <div className="py-2 px-4 text-center">
                    <img src={ttu_final_logo_2} alt="Logo" className="w-full" />
                </div>

                <Menu className="bg-blue-900 text-white" mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />} style={{ color: 'white' }}  onClick={goToFirst}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UploadOutlined />} style={{ color: 'white' }} onClick={goToUpload}>
                        Upload Picture
                    </Menu.Item>
                    <Menu.Item key="3" icon={<FormOutlined />} style={{ color: 'white' }} onClick={goToForms}>
                        Forms
                    </Menu.Item>
                    <Menu.Item key="4" icon={<FormOutlined />} style={{ color: 'white' }} onClick={goToPreview}>
                        Preview Forms
                    </Menu.Item>
                    <Menu.Item key="5" icon={<FormOutlined />} style={{ color: 'white' }} onClick={goToResults}>
                        Upload Results
                    </Menu.Item>
                    <Menu.Item key="6" style={{ color: 'white' }} icon={<LogoutOutlined />} onClick={Logout}>
                        Log Out 
                    </Menu.Item>
                </Menu>
            </Drawer>

            <Layout className={`transition-all duration-300 ${isSidebarVisible ? 'ml-0' : ''}`} style={{ marginLeft: isSidebarVisible ? 200 : 0 }}>
                <Header className="flex justify-between items-center p-4 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${frame_bg})`, zIndex: 999 }}>
                    {!isSidebarVisible && (
                        <Button type="text" icon={<MenuFoldOutlined className="text-white" />} onClick={toggleSidebarVisibility} className="hidden md:block" />
                    )}
                    {isSidebarVisible && (
                        <Button type="text" icon={<CloseOutlined className="text-white" />} onClick={toggleSidebarVisibility} className="hidden md:block" />
                    )}

                    <Button type="text" icon={<MenuFoldOutlined className="text-white" />} onClick={toggleMobileDrawer} className="block md:hidden" />

                    <div>
                        <UserOutlined className="text-white text-2xl" onClick={Logout} />
                    </div>
                </Header>
                {children}
            </Layout>

        </Layout>
    );
};

export default Sidebar;
