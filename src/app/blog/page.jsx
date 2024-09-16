import Link from 'next/link';
import React from 'react';


export const metadata = {
  title: "Blogs ",
  description: "Blogs Page",
};


const page = () => {
    return (
        <div className='text-center '>
           <p className='text-lg font-bold'> see Our Blogs</p>

        <div>
            {
                blogsData.map(blog => {
                    return (
                        <div key={blog?.slug} className='border p-12'>
                            <h3>{blog?.title}</h3>
                            <h3>{blog?.description}</h3>
                            <button className='bg-slate-600 px-2 text-white rounded-lg hover:bg-slate-500'>
                                <Link href={`/blog/${blog?.id}`}>See Details</Link>
                            </button>
                        </div>
                    )
                })
            }
        </div>

        </div>
    );
};


const blogsData = [
    {
      "id": 1,
      "title": "Understanding JavaScript Closures",
      "slug": "understanding-javascript-closures",
      "description": "A deep dive into closures in JavaScript and how they work under the hood."
    },
    {
      "id": 2,
      "title": "Next.js: The Future of Server-Side Rendering",
      "slug": "nextjs-server-side-rendering",
      "description": "An introduction to server-side rendering in Next.js and its benefits for modern web development."
    },
    {
      "id": 3,
      "title": "Building a REST API with Node.js and Express",
      "slug": "building-rest-api-node-express",
      "description": "Learn how to build a scalable REST API using Node.js and the Express framework."
    },
    {
      "id": 4,
      "title": "CSS Grid vs Flexbox: Which One Should You Use?",
      "slug": "css-grid-vs-flexbox",
      "description": "An in-depth comparison between CSS Grid and Flexbox for layout design."
    },
    {
      "id": 5,
      "title": "How to Optimize Web Performance in React Applications",
      "slug": "optimize-web-performance-react",
      "description": "Best practices and techniques to improve the performance of your React applications."
    },
    {
      "id": 6,
      "title": "Mastering Async/Await in JavaScript",
      "slug": "mastering-async-await-javascript",
      "description": "Learn how to write clean, asynchronous code using async/await in JavaScript."
    },
    {
      "id": 7,
      "title": "A Guide to Authentication in Node.js with JWT",
      "slug": "authentication-nodejs-jwt",
      "description": "Implement secure authentication in Node.js using JSON Web Tokens (JWT)."
    },
    {
      "id": 8,
      "title": "State Management in React: Context API vs Redux",
      "slug": "state-management-react-context-redux",
      "description": "A comparison between Context API and Redux for managing state in React applications."
    },
    {
      "id": 9,
      "title": "Introduction to TypeScript: A Beginner’s Guide",
      "slug": "introduction-to-typescript",
      "description": "An overview of TypeScript, its features, and why you should consider using it in your JavaScript projects."
    },
    {
      "id": 10,
      "title": "The Power of Progressive Web Apps (PWAs)",
      "slug": "power-of-progressive-web-apps",
      "description": "Learn how Progressive Web Apps (PWAs) can enhance your website's performance and user experience."
    }
  ]
  


export default page;