// import Icons
import { FaReact,  FaCss3Alt, FaJsSquare, FaBootstrap, FaDatabase, FaUnity } from 'react-icons/fa';
import { SiExpress, SiLaravel, SiHtml5, SiTailwindcss, SiMysql } from 'react-icons/si';
import { DiPython, DiJava } from 'react-icons/di';
import { ReactComponent as Kotlin } from '../assets/ico/kotlin.svg';
import { ReactComponent as C } from '../assets/ico/csharp.svg';

// import project images
import Blank from "../assets/images/blank.jpg";
import Integra from "../assets/images/Project1.png";
import AgentShooter from "../assets/images/Project2.png";
import GraphicalTools from "../assets/images/Project3.png";
import Cipherian from "../assets/images/Project5.png";

// import theme
import { Theme } from "../utils/Theme";

export const Projects = [
    {
        id: 0,
        project_name: "Integra (Corporate Project) by RadyaLab",
        project_type: "Website",
        project_description: "A job seeking application platform designed to facilitate the process of finding and securing employment easily and efficiently. This application is developed using Xamarin and the C# programming language, along with the ASP .NET Core framework, with support for both mobile and web devices. Mobile version can be achieved at https://install.appcenter.ms/orgs/radyalabs/apps/integra/distribution_groups/testing",
        tech_stack: ["C#", "Xamarin", "Net .Asp Core", "PostgreSQL", "Swagger"],
        project_image: Integra,
        project_url: "https://integra-amd29.web.app/",
        images: "https://drive.google.com/drive/folders/1f-CVqWaSMOTXvBNyk-i_HWFXwkdk67eA?usp=sharing",
        source_code: "F",
        reverse: false,
    },
    {
        id: 1,
        project_name: "Agent Shooter (Game)",
        project_type: "Game",
        project_description: "A game adventure filled with intense action, strategic decision-making, and thrilling battles as you wield four distinct weapons, command loyal pets, face off against diverse enemies, engage in captivating quests, and ultimately challenge a formidable boss for an epic showdown. Developed application for Windows using C# programming language and the Unity3D platform.",
        tech_stack: ["C#", "Unity", "Canva"],
        project_image: AgentShooter,
        project_url: "https://drive.google.com/file/d/1a1R1BiVmvqcYKaqluUAmigisPzv2Jbvk/view?usp=sharing",
        images: "https://drive.google.com/drive/folders/17t93bj1U2STk0Hs1bh4cpB6lj7GmJbVf?usp=sharing",
        source_code: "F",
        reverse: true,
    },
    {
        id: 2,
        project_name: "Graphical Object Tools",
        project_type: "Website",
        project_description: "A graphical object website that can draw and display a 2D or 3D object and perform utility action such as coloring, transformation, shadowing, reflection and animation. User can import an object image and make a simple art then export it to their device with picture format (png, jpg, etc). Developed a frontend web application using TypeScript, Node JS (React) and Tailwind and implemented WebGL for graphical visualization and logics for tools utility.",
        tech_stack: ["TypeScript", "NodeJS (React)", "Tailwind", "WebGL"],
        project_image: GraphicalTools,
        project_url: "https://graphicaltools.netlify.app/",
        images: "https://drive.google.com/drive/folders/1xNbUU4X7EBn2ZhdzIYv-EuYS4KTODf8e?usp=sharing",
        source_code: "F",
        reverse: false,
    },
    {
        id: 3,
        project_name: "Extended Email App",
        project_type: "Mobile App",
        project_description: "An email messaging mobile application using K9 tools that allows users to send and receive emails. The application has been modified to perform encryption-decryption and digital signatures during the message transaction process. Development using Java and Kotlin in Android platform using Android Studio.",
        tech_stack: ["Java", "Kotlin", "Android Studio", "K9"],
        project_image: Blank,
        project_url: "",
        images: "",
        source_code: "F",
        reverse: true,
    },
    {
        id: 4,
        project_name: "Cipherian",
        project_type: "Website",
        project_description: "A Dcode-like website was developed for encoding and decoding cipher message. User can encode plaintext or decode cyphertext using plenty of algorithms such as Vigenere Cipher, Playfair Cipher,Hill Cipher, and Affine Cipher. Developed frontend website using JavaScript and Node JS (React) with server API route using Flask modules with own custom made encoding-decoding algorithms with Python.",
        tech_stack: ["JavaScript", "Node JS (React)", "CSS", "Flask", "Python"],
        project_image: Cipherian,
        project_url: "https://cipherian.netlify.app/",
        images: "https://drive.google.com/drive/folders/1RHEth1oACx0sZV-STIHxTN68OPp-3b6O?usp=sharing",
        source_code: "F",
        reverse: false,
    },
    {
        id: 5,
        project_name: "Majika",
        project_type: "Mobile App",
        project_description: "An Android application for food ordering purposes. User can see a list of restaurants that integrate with the application, make an order based on a bunch of dishes, and pay the bill with a QR Code. Developed an Android mobile app using Kotlin programming language and Android platform using Android Studio and integrated backend system with database using Retrofit for local access and Firebase for server side.",
        tech_stack: ["Kotlin", "Retrofit", "Firebase", "Andoid Studio"],
        project_image: Blank,
        project_url: "",
        images: "",
        source_code: "F",
        reverse: true,
    },
    {
        id: 6,
        project_name: "Binotify",
        project_type: "Website",
        project_description: "A Spotify-like web application was developed with the purpose of playing music. The web application offers users the functionality to play, pause, and search for songs or albums. Premium users are granted additional privileges, such as the ability to add, edit, and delete songs and albums within the application. Incorporated a RESTful backend system and SOAP for data exchange between modules.",
        tech_stack: ["JavaScript", "Node JS (React)", "Express JS", "PHP", "Java"],
        project_image: Blank,
        project_url: "",
        images: "",
        source_code: "F",
        reverse: false,
    },
    {
        id: 7,
        project_name: "E-Foodery",
        project_type: "UI/UX Design",
        project_description: "A high-fidelity design of a GoFood-like mobile application and business process. The application is designed to perform food ordering from a restaurant, including functionalities such as filtering, a shopping cart, ordering, payment processing, order tracking, and chat communication with the delivery courier.",
        tech_stack: ["Fgima", "Adobe Photoshop"],
        project_image: Blank,
        project_url: "",
        images: "",
        source_code: "F",
        reverse: true,
    },
    {
        id: 8,
        project_name: "Minecraft Card Battles",
        project_type: "Game",
        project_description: "A desktop multiplayer game application with a themed genre of card games. Each player will have their own deck, hand of cards, and board. Playable cards include character cards with points and attack power, skill cards, and buff-debuff cards. Developed an simple dekstop app using Java programming language and Maven.",
        tech_stack: ["Java", "Maven"],
        project_image: Blank,
        project_url: "",
        images: "",
        source_code: "F",
        reverse: false,
    },
    {
        id: 9,
        project_name: "DNA-Pattern Matching",
        project_type: "Website",
        project_description: "A website that detects diseases based on DNA patterns for medical purposes. Detection is performed by checking the regex between the patient's DNA and the disease DNA stored in the database. DNA patterns are processed as strings of A, C, G, and T, and the similarity percentage is checked against the infected patient's DNA. The threshold for the matching process is determined based on existing studies.",
        tech_stack: ["JavaScript", "Node JS (React)", "Bootstrap", "Flask", "Python"],
        project_image: Blank,
        project_url: "",
        images: "",
        source_code: "F",
        reverse: true,
    },
]

export const Skills = [
    {
        id: 0,
        tech: "React",
        icon: <FaReact />,
    },
    {
        id: 1,
        tech: "Express JS",
        icon: <SiExpress />,
    },
    {
        id: 2,
        tech: "Laravel",
        icon: <SiLaravel />,
    },
    {
        id: 3,
        tech: "HTML",
        icon: <SiHtml5 />,
    },
    {
        id: 4,
        tech: "CSS",
        icon: <FaCss3Alt />,
    },
    {
        id: 5,
        tech: "JavaScript",
        icon: <FaJsSquare />,
    },
    {
        id: 6,
        tech: "Bootstrap",
        icon: <FaBootstrap />,
    },
    {
        id: 7,
        tech: "Tailwind CSS",
        icon: <SiTailwindcss />,
    },
    {
        id: 8,
        tech: "C, C++, C#",
        icon: <C width={35} height={35} />,
    },
    {
        id: 9,
        tech: "Python",
        icon: <DiPython />,
    },
    {
        id: 10,
        tech: "Java",
        icon: <DiJava />,
    },
    {
        id: 11,
        tech: "Kotlin",
        icon: <Kotlin fill={Theme.colors.secondary} width={35} height={30} />,
    },
    {
        id: 12,
        tech: "MySQL",
        icon: <SiMysql />,
    },
    {
        id: 13,
        tech: "PostreSQL",
        icon: <FaDatabase />,
    },
    {
        id: 14,
        tech: "Unity",
        icon: <FaUnity />,
    },
]

export const navLinks = [
    {
        id: 0,
        name: "Home",
        href: "#Home",
    },
    {
        id: 1,
        name: "My Skills",
        href: "#Skills",
    },
    {
        id: 2,
        name: "My Projects",
        href: "#Projects",
    },
    {
        id: 3,
        name: "My Contact",
        href: "#Contact",
    },
]
