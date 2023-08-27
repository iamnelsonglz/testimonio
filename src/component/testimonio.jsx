import React from "react";
import "../css/testimonio.css";

const Testimonio = (props) => {
    return (
        <div className="testimonio-content">
        <h1 className="testimonio-title">{props.name}</h1>
        <h1 className="testimonio-title">{props.lastname}</h1>
        </div>
    );
}

export default Testimonio;