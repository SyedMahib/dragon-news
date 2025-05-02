import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div className='container mx-auto'>
            <header>
                <Header></Header>
                <section className='mt-7'>
                    <LatestNews></LatestNews>
                </section>
                <section className='mt-9'>
                    <Navbar></Navbar>
                </section>
            </header>
            <main>
                <section className='left_nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;