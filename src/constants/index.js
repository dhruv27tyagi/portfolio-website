import { color } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    DXC,
    Hashtag,
    python,
    tensorflow,
    scikit,
    MySQL,
    aws,
    azure,
    Spark,
    databricks,
    PowerBI,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Scientist",
      icon: web,
    },
    {
      title: "Data Engineer",
      icon: mobile,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "Business Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "Tensor Flow",
      icon: tensorflow,
    },
    {
      name: "Scikit Learn",
      icon: scikit,
    },
    {
      name: "MySQL",
      icon: MySQL,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Spark",
      icon: Spark,
    },
    {
      name: "DataBricks",
      icon: databricks,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: " Power BI",
      icon: PowerBI,
    },
  ];
  
  const experiences = [
    {
      title: "Analyst II",
      company_name: "DXC Technology",
      icon: DXC,
      iconBg: "#383E56",
      date: "June 2022 - June 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Ensuring the continous availability and maintenance of client infrastructure.",
        "Implementing new bots to automate and streamline redundant tasks.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Hashtag Stay",
      icon: Hashtag,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - May 2020",
      points: [
        "Analyzing the market for business growth and expansion opportunities.",
        "Performing pricing and revenue optimization and generating insights from data.",
        "Collaborating with cross-functional teams including designers, product managers, and others to discuss business stratergies.",
        "Participating in cross team meetings and providing constructive feedback to other teams.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make machine learning projects as well as Dhruv did.",
      name: "Sara ",
      designation: "Software Engineer",
      company: "XYZ Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a Data Scientist who truly generates insights from data like Dhruv does.",
      name: "Brown uncle",
      designation: "Senior Data Scientist",
      company: "XYZ Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Dhruv is a valuable asset to the team and to the company and a very quick learner,",
      name: "asian guy",
      designation: "Team Lead",
      company: "DXC Technology",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Trading Bot",
      description:
        "Web-based platform that allows users to automate their trades and earn money with the help of Machine Learning, Deep Learning and Natural Language Processing.",
      tags: [
        {
          name: "Machine Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Azure",
          color: "pink-text-gradient",
        },
        {
          name: "Kafka",
          color: "green-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Anamoly Detection in Cloud Servers ",
      description:
        "This project is centered around building an anomaly detection system for cloud servers and building a system that continously monitors and analyzes cloud behaviour to enreliability.",
      tags: [
        {
          name: "GCP",
          color: "blue-text-gradient",
        },
        {
          name: "bigdata",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "E-commerce Data Pipeline",
      description:
        "Designed and implemented Azure-based data engineering solution using Apache Spark, Databricks, and Delta Lake. Orchestrated data ingestion with Azure Data Factory, optimizing Spark jobs for processing and transformation tasks.",
      tags: [
        {
          name: "Databricks",
          color: "blue-text-gradient",
        },
        {
          name: "Spark",
          color: "green-text-gradient",
        },
        {
          name: "Azure",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };