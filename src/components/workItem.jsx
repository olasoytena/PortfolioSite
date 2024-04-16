import React from "react";

function WorkItem ({title, company, description, dates}) {
    return (
        <div>
            <p className="text-lg font-medium">{title}</p>
            <p className="text-lg font-medium">{company}</p>
            <p className="text-md text-white bg-yellow-950 w-max rounded-md border-4 border-yellow-950">{dates}</p>
            <p className="text-md text-justify">{description}</p>
        </div>

    )
}

export default WorkItem