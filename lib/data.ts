import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'tanishqgarg57@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tanishq, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Tanishq1568' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tanishq-garg-5721242a3/' },
    { name: 'twitter', url: 'https://x.com/tanishqgarg57' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },

    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },

        {
            name: 'Linux',
            icon: '/logo/linux.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Nvidia Ecommerce',
        slug: 'Nvidia-ecom',
        liveUrl: 'https://nvidia-fend-three.vercel.app/',
        year: 2025,
        description: `
A modern NVIDIA-inspired e-commerce platform built to provide a seamless shopping experience for gaming laptops, monitors, and high-performance tech products. The platform includes product management, category organization, user authentication, and cart functionality. <br/><br/>

Key Features:
<ul>
  <li>🛍️ Product Management: Add, view, update, and manage products dynamically</li>
  <li>📂 Category-Based Browsing: Organized product categories for easy navigation</li>
  <li>🔍 Product Details Modal: Interactive product preview with specifications and pricing</li>
  <li>🛒 Shopping Cart System: Add, remove, and manage products in the cart</li>
  <li>👤 User Authentication: Secure login and registration system</li>
  <li>📱 Responsive Design: Optimized for desktop, tablet, and mobile devices</li>
  <li>⚡ Fast Performance: Efficient React rendering and API integration</li>
</ul><br/>

Technical Highlights:
<ul>
  <li>Implemented CRUD operations using MongoDB and Express.js</li>
  <li>Built reusable React components for products, categories, and cart management</li>
  <li>Created dynamic product listing using JavaScript map functionality</li>
  <li>Integrated REST APIs for product and user management</li>
  <li>Designed responsive UI with Tailwind CSS</li>
  <li>Developed category tables and dashboard pages for product administration</li>
</ul>
      `,
        role: `
Full-Stack Developer <br/>
Responsible for designing and developing the complete application:

<ul>
  <li>⚙️ Backend Development: Built RESTful APIs using Node.js, Express.js, and MongoDB</li>
  <li>🗄️ Database Design: Managed product collections and user data in MongoDB</li>
  <li>🎨 Frontend Development: Created responsive interfaces using React and Tailwind CSS</li>
  <li>🔐 Authentication System: Implemented secure login and registration workflows</li>
  <li>🛒 Cart Functionality: Developed add-to-cart and product management features</li>
  <li>📊 Dashboard Development: Built admin panels for managing categories and products</li>
  <li>🚀 Deployment & Optimization: Optimized application performance and user experience</li>
</ul>
`,
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
            'JavaScript',
            'REST API',
            'JWT Authentication',
            'Git',
            'GitHub'
        ],
        thumbnail: '/projects/thumbnail/nvidia_GamingPC3.png',
        longThumbnail: '/projects/long/nvidia_GamingPC3.png',
        images: [
            '/projects/images/nvidia1.png',
            '/projects/images/nvidia2.png',
        ],
    },
    {
        title: 'CareConnect',
        slug: 'careconnect',
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "Django",
            "SQLite",
            "Bootstrap",
            "Git",
            "GitHub"
        ],
        thumbnail: '/projects/thumbnail/careconnect4.png',
        longThumbnail: '/projects/long/careconnect4.png',
        images: [
            '/projects/images/careconnect1.png',
            '/projects/images/careconnect2.png',
            '/projects/images/careconnect3.png',


        ],
        liveUrl: 'https://care-connect-nccs.vercel.app/',
        year: 2025,
        description: `CareConnect is a healthcare emergency response platform designed to connect patients, healthcare providers, and emergency services during critical situations. The platform enables users to quickly access medical assistance, share emergency information, locate nearby healthcare facilities, and receive timely support when every second matters. It aims to improve healthcare accessibility and response efficiency through a simple and user-friendly interface. `,
        role: `
Full-Stack Developer <br/>
Led the development and implementation of the CareConnect platform:

<ul>
  <li>⚙️ Backend Development: Built healthcare management features using Python and Django</li>
  <li>🗄️ Database Design: Structured patient, hospital, and emergency request data models</li>
  <li>🎨 Frontend Development: Created responsive interfaces using HTML, CSS, and JavaScript</li>
  <li>🔐 Authentication: Implemented secure login and user account management</li>
  <li>🚑 Emergency Workflow: Developed request handling and healthcare service coordination features</li>
  <li>📱 Responsive Optimization: Ensured seamless usability across devices</li>
  <li>🧪 Testing & Deployment: Tested application functionality and optimized performance</li>
</ul>
`,
    },
    {
        title: 'Pearl Heritage',
        slug: 'pearlHeritage',
        techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            'Git',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/heritagenew.png',
        longThumbnail: '/projects/long/heritagenew.png',
        images: [
            '/projects/images/heritage.png',
            '/projects/images/heritage1.png',
        ],
        liveUrl: 'https://hotel-pearl-heritage.vercel.app/',
        year: 2025,
        description:
            'Hotel Pearl Heritage is a modern and elegant hotel booking website designed to showcase hospitality services, luxury accommodations, and customer facilities. The website provides visitors with an engaging user experience through a visually appealing interface, detailed room information, and seamless navigation, helping guests explore and book their stay with ease.',
        role: `Frontend Developer <br/>
Responsible for the complete design and development of the website:
<ul>
  <li>🎨 UI Design: Created modern layouts and engaging visual components</li>
  <li>💻 Frontend Development: Built the entire website using HTML, CSS, and JavaScript</li>
  <li>📱 Responsive Implementation: Ensured compatibility across multiple screen sizes</li>
  <li>🖼️ Content Presentation: Designed sections for rooms, services, gallery, and contact information</li>
  <li>⚡ Performance Optimization: Improved loading speed and user experience</li>
  <li>🔧 Testing & Deployment: Tested functionality and deployed the website successfully</li>
</ul>
`,
    },
    {
        title: 'Singhal Estate',
        slug: 'property-pro',
        techStack: [
            'HTML',
            'Javascript',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/estate2.png',
        longThumbnail: '/projects/long/estate2.png',
        images: [
            '/projects/images/estate.png',
            '/projects/images/estate1.png',
        ],
        liveUrl: 'https://singhal-property.vercel.app/',
        year: 2025,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using 
        - HTML,Javascript,Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'User Management Dashboard',
        slug: 'UserManagementDashboard',
        techStack: ['React', 'Nextjs', 'Javascript', 'HTML', 'CSS'],

        thumbnail: '/projects/thumbnail/dashboardnew.png',
        longThumbnail: '/projects/long/dashboardnew.png',
        images: [
            '/projects/images/dashboard.png',

        ],
        liveUrl: 'https://user-dashboard-ruddy-omega.vercel.app/users',
        year: 2025,
        description: `
User Management Dashboard is a web-based administration platform designed to efficiently manage user records through an intuitive and responsive interface. The dashboard enables administrators to view, add, update, delete, search, and organize user information, simplifying data management and improving operational efficiency.`,
        role: ``,
    },

];

export const MY_EXPERIENCE = [
    {
        title: 'MERN STACK',
        company: 'Groot Software',
        duration: 'Jun 2025 - Aug 2025',
    }
];
