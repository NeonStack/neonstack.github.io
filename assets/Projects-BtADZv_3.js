import{j as e}from"./index-B_Fv-e38.js";import{M as o}from"./MainTitle-CnBcQLpE.js";import{S as c}from"./SkillSvg-WrN4RIwh.js";import{I as d}from"./Img-CsJW0V8v.js";const m=({title:t="",imgLink:s="",shortDesc:n="",webLink:r="",srcLink:l="",skills:a=[]})=>e.jsxs("div",{className:"bg-background-alt flex flex-col gap-5 p-7 border-text-muted border-2 shadow-xl rounded-lg lg:w-[29%] lg:justify-between",children:[e.jsx(d,{src:s,alt:t,className:"w-full aspect-video mx-auto rounded-lg shadow-md"}),e.jsx("h3",{className:"font-bold",children:t}),e.jsx("div",{className:"min-h-28",children:e.jsx("p",{className:"text-[0.95rem] text-text-subdued",children:n})}),e.jsx("div",{className:"flex flex-wrap items-center justify-evenly my-2",children:a.map(i=>a.includes(i)&&e.jsx("div",{className:"w-7",children:e.jsx(c,{value:i})},i))}),e.jsxs("div",{className:"flex flex-wrap gap-5 items-center justify-center",children:[l&&e.jsx("a",{href:l,target:"_blank",className:"text-text bg-background hover:shadow-lg duration-100 py-2 px-4 min-w-28 rounded-md",children:"Source"}),r&&e.jsx("a",{href:r,target:"_blank",className:"text-text bg-background hover:shadow-lg duration-100 py-2 px-4 min-w-28 rounded-md",children:"Demo"})]})]}),p=m;function f(){const t=[{title:"GO FOR IT - Internship Jobs",imgLink:"/projectPictures/goforit.png",shortDesc:"A research project website focusing on creating a seamless and empowering experience for both students and employers. Made user-friendly platform allowing them to discover internships that align with their specific skills and programs.",skills:["html","css","javascript","php","mysql"],webLink:"https://goforit.rf.gd/"},{title:"T1 Shop PH - Fan Concept",imgLink:"/projectPictures/t1website.png",shortDesc:"School web development project showcasing an unofficial e-commerce platform. Demonstrates modern web design and functionality skills.",skills:["html","css","javascript","php","mysql"],srcLink:"https://github.com/NeonStack/t1-website-mockup-philippines.git",webLink:"https://t1-philippines-shop.rf.gd/"},{title:"OLFU Quiz Game",imgLink:"/projectPictures/olfuQuizGame.png",shortDesc:"Console-based quiz program in C++ covering multiple subjects with various difficulty levels. Features randomized questions, user accounts, and a top players list.",skills:["c++"],srcLink:"https://github.com/NeonStack/OLFU-QUIZ-CONSOLE.git"}];return e.jsx("section",{className:"h-fit text-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx(o,{title:"Projects"}),e.jsx("div",{className:"py-7 text-center flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:items-stretch lg:flex-wrap",children:t.map(s=>e.jsx(p,{title:s.title,imgLink:s.imgLink,shortDesc:s.shortDesc,skills:s.skills,srcLink:s.srcLink,webLink:s.webLink},s.title))})]})})}export{f as default};
