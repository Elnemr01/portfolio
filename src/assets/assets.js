import darkLogo from './darkLogo.png'
import whiteLogo from './whiteLogo.jpeg'
import personal from './personal.jpeg'

export const assets = {
    darkLogo,
    whiteLogo,
    personal,
}

export const personalData = {
    name: 'Ahmed Abdo Elnemr',
    position :'Frontend Developer',
    description: 'I\'m a fourth-year student at the Faculty of Engineering, Mansoura University, majoring in Computer and Control Systems. I am interested in web development and skilled at building interactive and responsive web applications. I continuously work on improving my problem-solving skills by solving problems on Codeforces and LeetCode.',
    education: 'Faculty of Engineer Mansoura University',
    experience : [
        'ITI Summer Training Program',
        'Deloitte Innovation Hub Mentorship 2025',
        'Participation in ECPC (Egyptian Collegiate Programming Contest)',
    ]
}

export const contact = {
    facebook :'https://www.facebook.com/share/17iL3kMu4w/?mibextid=wwXIfr',
    instagram : 'https://www.instagram.com/a7med_elnemr_?igsh=MWxocjh3MGRtdGhmdQ%3D%3D&utm_source=qr',
    whatsapp : 'https://wa.me/01204662807',
    gmail : 'mailto:elnemr21092003@gmail.com',
    github: 'https://github.com/Elnemr01',
    linkedin : 'https://linkedin.com/in/ahmed-elnemr-8728012b4',
}

export const projects=[
    {
        name:'E-Shop with Online Payment',
        description: [
            "A simple e-shop app built with Next.js to practice real-world concepts.",
            "Zustand handles state management for a smooth cart experience.",
            "The UI is styled with Tailwind and Shadcn UI for a clean modern look.",
            "TypeScript improves code quality and prevents common errors.",
            "Stripe integration simulates secure online payments.",
        ],
        repo:'https://github.com/Elnemr01/next-e-commerce',
        demo: 'https://next-e-commerce-topaz.vercel.app/'
    },
    {
        name:'Breakinpoint website',
        description: [
            'Breakinpoint is a student activity at the Faculty of Engineering, Mansoura University.',
            "I worked as the frontend developer on the project.",
            "It was my first time integrating with a backend developer.",
            "I faced some API and communication challenges at the start.",
            "Using React.js, Axios, and responsive design, we delivered a functional and responsive website."
        ],
        demo:'https://breakinpoint.com/',
    },
    {
        name:'Crowdfunding Platform',
        description: [
            'Developed the frontend of a crowdfunding web app in collaboration with a backend developer.',
            'Built key features including campaign listing, project details, milestones, reward tiers, and user authentication.',
            'Focused on API integration and state management using TanStack React Query.',
            'Implemented form validation with Joi for consistent and secure input handling.',
            'Tech stack: React, Vite, React Router, Axios, React Toastify, React Icons.'
        ],
        repo:'https://github.com/waleed21121/Crowdfunding',
    },
    {
        name:'Learning Management System',
        description: [
            'Developed a student-focused Learning Management System.',
            'Implemented secure user authentication using Clerk.',
            'Enabled students to register, log in, and access course materials.',
            'Added features for progress tracking and profile management.',
            'Delivered a safe, simple, and user-friendly learning experience.'
        ],
        repo:'https://github.com/Elnemr01/learning-management-system',
        demo: 'https://elnemr-learning-system.netlify.app/'
    },
    {
        name:'Appointment Management System',
        description: [
            'Developed a Doctor Appointment System using React.js and Tailwind CSS.',
            'Implemented application routing using React Router.',
            'Managed global state efficiently using Redux Toolkit and the Context API.',
            'Used uuid to generate unique IDs across the system.',
            'Applied Joi for robust and secure form validation.',
            'Integrated React Toastify to provide real-time alerts and user feedback.'
        ],
        repo:'https://github.com/Elnemr01/appointment-management-system',
        demo:'https://doctor-appointment-m-sys.netlify.app/'

    },
    {
        name:'E-commerce',
        description: [
            'I developed this site as a self-training project to gain experience with large-scale applications.',
            'I focused on creating clean and responsive styling.',
            'Built multiple interactive features to enhance the user experience.',
            'Implemented collaborative functionality using state management tools such as Redux and the Context API.',
        ],
        repo:'https://github.com/Elnemr01/e-commerce',
        demo :'https://elnemr-e-commerce.netlify.app/'
    },
    {
        name:'Coffee Shop',
        description: [
            'Animation is an essential skill for improving user experience in frontend development.',
            'I learned Framer Motion to simplify creating complex animations.',
            'This project was my first hands-on experience with the library.',
            'It helped me practice and build confidence in using animations.',
            'I’m now able to integrate smooth and modern animations into future projects.'
        ],
        repo:'https://github.com/Elnemr01/coffee-shop-with-framer-motion',
        demo: 'https://elnemr-coffee-shop.netlify.app/'
    },
    {
        name:'Food Zone',
        description: [
            'Developed a meals app using React.',
            'Used json-server to create a local API.',
            'Implemented data fetching with Axios.',
            'Added navigation using React Router.',
            'Used SweetAlert for clean and user-friendly error handling.'
        ],
        repo:'https://github.com/Elnemr01/food-zone',
    },
    {
        name:'Expense Tracker',
        description: [
            'Built a personal finance app using React Hooks and Context API.',
            'Tracked income, expenses, and real-time balance.',
            'Used useState, useEffect, and useReducer for dynamic state management.',
            'Implemented global data sharing with Context API.',
            'Improved my skills in modern React patterns and clean component structure.'
        ],
        repo:'https://github.com/Elnemr01/expense-tracker',
        demo: 'https://income-expense-tracter.netlify.app/'
    },
    {
        name:'To Do List',
        description: [
            'Built a simple to-do app to practice Redux and Redux Toolkit.',
            'Created a slice to manage all to-do state globally.',
            'Accessed and updated the state from any component in the tree.',
            'Used Redux to avoid lifting state up and improve state organization.'
        ],
        repo:'https://github.com/Elnemr01/to-do-list',
        demo :'https://let-tasks-be-done.netlify.app/'
    },
    // {
    //     name:'',
    //     description: [
    //         '',
    //         '',
    //         '',
    //         '',
    //         ''
    //     ],
    //     repo:'',
    //     demo: ''
    // }
]