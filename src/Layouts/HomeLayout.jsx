import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/MainLayout/LeftAside';
import RightAside from '../components/MainLayout/RightAside';
import Loader from '../Pages/Loader';

const HomeLayout = () => {

    const {state} = useNavigation();

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
            <main className='grid grid-cols-12 gap-6 mt-[80px]'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;