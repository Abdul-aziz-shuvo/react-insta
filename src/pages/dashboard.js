import React from 'react';
import Timeline from "../components/Timeline/Timeline";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
    return (
        <div className='bg-slate-400'>
            <Header />
            <div className='grid md:grid-cols-2 grid-cols-1  gap-4 justify-between mx-auto max-w-screen-lg'>
                <Timeline />
                <Sidebar />
            </div>
        </div>
    );
};

export default Dashboard;