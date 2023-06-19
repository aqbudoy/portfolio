import React from "react";

import WorkCard from "../layout/WorkCard";

export default function ListByYear(props){
    const value = localStorage.getItem('selectedYear')
    let data = props.data.filter((datum) => datum.years.includes(parseInt(value)))
    window.scrollTo({ top:0, left:0, behavior: "instant"});
    
    if(value)
    {
        return(
            <div className="w-100 row align-items-stretch justify-content-start">
                <div className="d-none d-lg-flex col-1"/>
                <div className="col-lg-10">
                    <h1 className="primary-text mb-2 mb-md-3 mb-lg-4 px-2 px-lg-0">
                        <strong>Works from<span style={{color: "white"}}> {value}</span></strong>
                    </h1>
                    <div className="w-100 row">
                        {data.map((work) => {
                            return(
                                <div className="col-12 col-md-6 col-lg-4 p-2 p-md-3 p-xl-4 px-1 py-3 p-md-2 p-lg-3" key={work.title}>
                                    <WorkCard
                                        work={work}
                                        isCategoryVisible={props.isCategoryVisible}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="d-none d-lg-flex col-1"/>
            </div>
        )
    }
    else
    {
        return(
            <div>

            </div>
        )
    }
}