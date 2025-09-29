import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Twitter, ExternalLink, Calendar, Code, Layers, Cloud, Sun, Moon, ArrowRight } from 'lucide-react';

// --- Portfolio Configuration Data ---
const portfolioConfig = {
  name: "Sharon",
  role: "MERN Stack Developer",
  location: "Kochi, Kerala, India",
  bio: "I build modern web applications with React, Next.js, and Node.js. Passionate about creating scalable solutions and seamless user experiences.",
  email: "iamsharonts@gmail.com",
  socials: {
    github: "https://github.com/sharon884",
    linkedin: "https://www.linkedin.com/in/sharon-t-s-78786132a/",
    twitter: "https://twitter.com/sharon",
  },
  projects: [
    {
      title: "PassGo",
      description:
        "Event Ticketing Platform with real-time features, secure payment integration using Razorpay, and comprehensive event management system built with MERN stack.",
      link: "https://github.com/sharon/passgo",
      year: "2025",
      status: "Ongoing Development",
      tags: ["Next.js", "MongoDB", "Razorpay", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "React UMS",
      description:
        "User Management System with authentication, role-based access control, and admin dashboard. Built with React.js and modern UI components.",
      link: "https://github.com/sharon884/react-ums",
      year: "2025",
      status: "Completed",
      tags: ["React", "Node.js", "Express", "Context API"], 
    },
    {
      title: "Netflix Clone",
      description:
        "Full-featured streaming platform clone with user authentication, movie browsing, and responsive design using React and Firebase.",
      link: "https://github.com/sharon884/netflix-clone--react",
      year: "2025",
      status: "Completed",
      tags: ["React", "Firebase", "API Integration", "CSS"],
    },
    {
      title: "SocketTalk",
      description:
        "Real-time chat application with Socket.IO, featuring instant messaging, user presence indicators, and modern chat interface.",
      link: "https://github.com/sharon884/SocketTalk",
      year: "2025",
      status: "Completed",
      tags: ["React", "Socket.IO", "Node.js", "Real-Time"],
    },
  ],
  skills: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "AWS",
    "Git",
    "Redux",
    "REST APIs",
    "WebSockets"
  ],
};

// --- Helper Functions ---
const scrollIntoView = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


export default {portfolioConfig}