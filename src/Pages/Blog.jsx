import React from 'react';
import Navbar from '../component/Header/Navbar';
import Footer from '../component/common/Footer';
import one from "../assests/blog/1.jpeg";
import two from "../assests/blog/2.jpg";
import three from "../assests/blog/3.jpg";
import { Link } from 'react-router-dom';

const articles = [
    {
        title: "Exploring the Health Benefits of Millets: A Guide to Nutritious Eating",
        date: "May 2, 2024",
        path : "1",
        content: "No Comments",
        image: two  // Replace with the appropriate image variable
    },
    {
        title: "5 Different Spices Products to Ship from India",
        date: "March 28, 2024",
        path : '2',

        content: "No Comments",
        image: one  // Replace with the appropriate image variable
    },
    {
        title: "Grains of the World: A Global Pantry at Your Doorstep",
        date: "March 28, 2024",
        path : '3',

        content: "No Comments",
        image: three  // Replace with the appropriate image variable
    }
];

function Blog() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">List of Articles</h1>
            <div className=' flex gap-2 flex-wrap'>
            {articles.map((article, index) => (
                    <Link key={index} to={article.path} className="max-w-lg rounded overflow-hidden shadow-lg bg-white mb-4">
                        <img className="w-full" src={article.image} alt="Article thumbnail" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{article.title}</div>
                            <p className="text-gray-700 text-base">{article.content}</p>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{article.date}</span>
                        </div>
                    </Link>
                ))}
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
