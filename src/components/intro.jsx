import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center
        flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Jesus Carnero</h1>
            <p className="text-base md:text-2xl mb-3 font-medium">Software Engineer & Data Scientist</p>
            <p className="text-base md:text-xl mb-1 font-bold">About Me</p>
            <p className="text-sm max-w-xl mb-6 font-bold">As a current student my goal is to secure an 
            internship where I can apply my skills in machine learning, data analysis and software engineering. 
             I'm eager to collaborate on real-world projects, refine my data visualization techniques,
              and gain practical experience deploying machine learning models. I believe I'm at a point 
              where I can make meaningful contributions in a team while also getting hands-on learning 
              from more experienced programmers.</p>
        </div>
    )
}

export default Intro;