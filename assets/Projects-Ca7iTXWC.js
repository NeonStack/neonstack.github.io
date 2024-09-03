import{j as e}from"./index-Cx4qKjMR.js";import{M as o}from"./MainTitle-901Nsdo2.js";import{S as c}from"./SkillSvg-jgutWi2L.js";import{I as m}from"./Img-BdumSNGt.js";const d=({title:t="",imgLink:s="",shortDesc:n="",webLink:r="",srcLink:a="",skills:l=[]})=>e.jsxs("div",{className:"bg-background-alt flex flex-col gap-5 p-7 rounded-lg lg:w-[29%] lg:justify-between max-w-96",children:[e.jsx(m,{src:s,alt:t,className:"w-full aspect-video mx-auto rounded-lg shadow-md"}),e.jsx("h3",{className:"font-bold",children:t}),e.jsx("div",{className:"min-h-28",children:e.jsx("p",{className:"text-[0.95rem] text-text-subdued",children:n})}),e.jsx("div",{className:"flex flex-wrap items-center justify-evenly my-2",children:l.map(i=>l.includes(i)&&e.jsx("div",{className:"w-7",children:e.jsx(c,{value:i})},i))}),e.jsxs("div",{className:"flex flex-wrap gap-5 items-center justify-center",children:[a&&e.jsx("a",{href:a,target:"_blank",className:"text-text bg-background shadow-sm hover:shadow-lg duration-100 py-2 px-4 min-w-28 rounded-md",children:"Source"}),r&&e.jsx("a",{href:r,target:"_blank",className:"text-text bg-background shadow-sm hover:shadow-lg duration-100 py-2 px-4 min-w-28 rounded-md",children:"Demo"})]})]}),p=d;function f(){const t=[{title:"GO FOR IT - Internship Jobs",imgLink:"/projectPictures/goforit.png",shortDesc:"A research project website focusing on creating a seamless and empowering experience for both students and employers. Made user-friendly platform allowing them to discover internships that align with their specific skills and programs.",skills:["html","css","javascript","php","mysql"],webLink:"https://goforit.rf.gd/"},{title:"T1 Shop PH - Fan Concept",imgLink:"/projectPictures/t1website.png",shortDesc:"School web development project showcasing an unofficial e-commerce platform. Demonstrates modern web design and functionality skills.",skills:["html","css","javascript","php","mysql"],srcLink:"https://github.com/NeonStack/t1-website-mockup-philippines.git",webLink:"https://t1-philippines-shop.rf.gd/"},{title:"OLFU Quiz Game",imgLink:"/projectPictures/olfuQuizGame.png",shortDesc:"Console-based quiz program in C++ covering multiple subjects with various difficulty levels. Features randomized questions, user accounts, and a top players list.",skills:["c++"],srcLink:"https://github.com/NeonStack/OLFU-QUIZ-CONSOLE.git"}];return e.jsx("section",{className:"h-fit text-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(o,{title:"Projects"}),e.jsx("div",{className:"py-7 text-center flex flex-col gap-10 items-center lg:flex-row lg:justify-evenly lg:items-stretch lg:flex-wrap",children:t.map(s=>e.jsx(p,{title:s.title,imgLink:s.imgLink,shortDesc:s.shortDesc,skills:s.skills,srcLink:s.srcLink,webLink:s.webLink},s.title))})]})})}export{f as default};
