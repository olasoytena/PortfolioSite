import React from "react";

function EducationItem({degree, major, school, dates}){
    return(
        <div className="pt-6">
            <p className="text-lg font-medium" >{degree} in {major}</p>
            <p className="text-lg">{school}</p>
            <p className="text-white bg-yellow-950 w-max rounded-md border-4 border-yellow-950">{dates}</p>
        </div> 
    )
}

export default EducationItem