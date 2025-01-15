import React from 'react';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Posts.css';

const Posts = () => {
  const connections = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jaydeshaw',
      icon: <FaLinkedin size={30} color="#0A66C2" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/JaydeTech',
      icon: <FaTwitter size={30} color="#1DA1F2" />,
    },
    {
      name: 'Email',
      url: 'mailto:shawintelligence@yahoo.com',
      icon: <FaEnvelope size={30} color="#EA4335" />,
    },
    // Add more connections as needed
  ];

  return (
    <div className="connections-container">
      <h1 className="connect-heading">Connect with me</h1>
      {connections.map((connection, index) => (
        <a
          key={index}
          href={connection.url}
          target="_blank"
          rel="noopener noreferrer"
          className="connection-box"
        >
          <div className="connection-icon">{connection.icon}</div>
          <div className="connection-name">{connection.name}</div>
        </a>
      ))}
    </div>
  );
};

export default Posts;
