import React from "react";

function Footer() {
    return (
        <div className="py-5 text-center">
            <p className="text-sm mt-2 text-grey">
                &copy; {new Date().getFullYear()} Jesus Carnero.
            </p>
        </div>
    )
}

export default Footer;