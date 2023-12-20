import React, { useState, useEffect } from 'react';
import constructImage from "../../assets/construct.png";
import { Link } from 'react-router-dom';
import "./Posts.css";
import Post from './Post';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = [
      {
        title: "🚧 Exciting Developments Underway! 🚧",
        body: `Currently in the process of building my blog, where insightful content awaits. Please check back soon to explore more. Your patience is appreciated — stay tuned for a journey into inspiration, knowledge, and creativity! 🌟`,
        author: "Coming Soon",
        imgUrl: constructImage,
      },
      {
        title: "🚧 Exciting Developments Underway! 🚧",
        body: `Currently in the process of building my blog, where insightful content awaits. Please check back soon to explore more. Your patience is appreciated — stay tuned for a journey into inspiration, knowledge, and creativity! 🌟`,
        author: "Coming Soon",
        imgUrl: constructImage,
      }
    
    ];

    setPosts(postData);
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post, index) => (
        <Link key={index} to={`/post/${index}`}>
          <Post index={index} post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;