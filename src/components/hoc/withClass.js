import React from "react";
export const withClass = (WrappedComponent, classes) => {
    return (props) =>
        <div className={classes}>
            <WrappedComponent {...props}/>
        </div>
}