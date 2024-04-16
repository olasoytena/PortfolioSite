import React from "react";
import workHistory from "../data/workHistory";
import WorkItem from "./workItem";
import education from "../data/education";
import EducationItem from "./educationHistory";

function Timeline() {
    return (
        <div className="flex flex-col md:flex-row  justify-left w-full ">
            <div className="w-1/12"> </div>

            <div className="grid grid-cols-1 w-1/3 max-h-min bg-white mt-6 pb-4 pl-4 pr-4 pt-4 rounded-lg border-4 
            border-yellow-950 gap-3">
            <h2 className="text-xl md:text-2xl font-bold ">Education</h2>
                {education.map(el => (
                    <EducationItem 
                        degree={el.degree}
                        major={el.major}
                        school={el.school}
                        dates={el.dates}/>
                ))}
            </div>
            
            <div className="w-1/12"> </div>
            <div className="grid grid-cols-1 gap-4 w-1/2 bg-white mt-6 pb-4 pl-4 pr-4 pt-4 rounded-lg border-4 
            border-yellow-950 gap-2">
                <h2 className="text-xl md:text-2xl font-bold pt-6">Work History</h2>
                {workHistory.map(item => (
                    <WorkItem 
                        title={item.title}
                        company={item.company}
                        dates={item.dates}
                        description={item.description} />
                ))}
            </div>


        </div>
    )
}

export default Timeline;