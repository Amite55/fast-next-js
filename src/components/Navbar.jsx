"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "search",
            path: "/search"
        },
        {
            title: "Gallery",
            path: "/gallery"
        },
        {
            title: "Blogs",
            path: "/blog"
        },
        {
            title: "Meals",
            path: "/meals"
        },
        {
            title: "Dashboard",
            path: "/dashboard"
        },
        {
            title: "Post",
            path: "/post"
        },
    ]

    const handleLogin = () => {
        router.push('/login')
    }

    if(pathName.includes('dashboard')){
        return (
            <div className='bg-green-600 text-center h-20 my-2 py-2'>
                <h1>dashboard layout</h1>
                <Link className='bg-slate-600 px-2 py-1 rounded-lg' href={'/'}>Home</Link>
                <Link className='bg-slate-600 px-2 py-1 rounded-lg' href={'/user'}>All User</Link>
            </div>
        )
    }
    
    return (
        <nav className="flex gap-8  my-5 bg-slate-600 h-20 items-center justify-between px-4">
          <a className='text-3xl'>Fast <span className='text-cyan-400'>NextJs</span></a>
          <ul className="flex gap-5">
           {
            navLinks?.map((link) =>  (
                    <Link 
                    className={`${pathName === link?.path && 'text-cyan-400'}`}                    key={link?.path} 
                    href={link?.path} 
                    >
                        {link?.title}
                    </Link>
                )
            )
           }
          </ul>
          <button onClick={handleLogin} className='bg-white py-1 text-black px-2 rounded-lg hover:bg-slate-200'>Login</button>
        </nav>
    );
};

export default Navbar;