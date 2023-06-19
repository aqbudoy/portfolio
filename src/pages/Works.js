import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import WorkCard from '../layout/WorkCard'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { categoryIcons } from '../layout/library'

export default function Works(props) {
    const works = props.data.filter(work => props.type.indexOf(work.category) !== -1)
    const location = useLocation();
    const [index, setIndex] = useState(0);

    const sliceImages = (set) => {
        if(set.length < 4)
        {
            return set
        }
        else
        {
            return set.slice(0, 4)
        }
    }

    useEffect(() => {
        setIndex(0)
    }, [location]);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
    <div className="w-100 row align-items-stretch justify-content-start">
        <div className="col-12">
            <div className="w-100 row">
                <div className="d-none d-xl-flex col-xl-1 text-start p-2 p-lg-3 p-xl-4 pe-0"/>
                <div className="col-md-7 col-lg-7 col-xl-6 p-2 p-lg-3 p-xl-4">
                    <div 
                        className="w-100 d-flex align-items-center justify-content-center" 
                        style={{
                            height: "400px",
                            overflow: "hidden",
                            textAlign: "center",
                            backgroundSize: "auto 100%",
                            backgroundPosition: "center"
                        }}
                    >
                        <Carousel 
                            id="recent-work-carousel"
                            className="w-100 h-100"
                            slide={true}
                            activeIndex={index}
                            onSelect={handleSelect}
                        >
                            {sliceImages(works[0].screens).map((image) => {
                                    return(
                                        <Carousel.Item key={image.img}>
                                            <img
                                                src={image.img}
                                                alt={""}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-4 p-2 p-lg-3 p-xl-4">
                    <div className="w-100 d-flex align-items-start justify-content-start flex-column" style={{ gap: "1em" }}>
                        <div className="w-100 h-100 d-flex align-items-center justify-content-between">
                            <Link className="text-decoration-none" to={"/view-work/" + works[0].id}>
                                <h1 className="primary-text"><strong>{works[0].title}</strong></h1>
                            </Link>
                            {props.isCategoryVisible &&
                                <h2><FontAwesomeIcon icon={categoryIcons[works[0].category]}/></h2>
                            }            
                        </div>
                        <Link className="flex-grow-1 text-decoration-none" to="/listbytype"  onMouseEnter={()=>{localStorage.setItem('selectedSubtitle', works[0].subtitle)}}>
                            <h5 className="subtitle">{works[0].subtitle}</h5>
                        </Link>
                        <h5>
                            {works[0].years.map((year, index)=>{
                                return(
                                    <span key={year}>
                                        <Link className="flex-grow-1 text-decoration-none" to="/listbyyear" onMouseEnter={()=>{localStorage.setItem('selectedYear', year)}}>
                                            {year}
                                        </Link>
                                        {index !== works[0].years.length - 1 &&
                                            <span>, </span>
                                        }
                                    </span>
                                )
                            })}
                        </h5>
                        <p className="w-100" style={{textAlign: "justify"}}>
                            {works[0].description}
                        </p>
                        <p>
                            <span>Tags: </span>
                            {works[0].tags.map((tag, index)=>{
                                return(
                                    <span key={tag}>
                                        <Link className="flex-grow-1" to="/listbytag" onMouseEnter={()=>{localStorage.setItem('selectedTag', tag)}}>
                                            {tag}
                                        </Link>
                                        {index !== works[0].tags.length - 1 &&
                                            <span>, </span>
                                        }
                                    </span>  
                                )
                            })}
                        </p>
                    </div>
                </div>
                <div className="d-none d-xl-flex col-xl-1 text-start p-2 p-lg-3 p-xl-4 pe-0"/>
            </div>
        </div>
        {works.slice(1).map((work) => {
            return(
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 p-md-3 p-lg-4 px-1 py-3 p-md-2 p-lg-3" key={work.title}>
                    <WorkCard
                        work={work}
                        isCategoryVisible={props.isCategoryVisible}
                    />
                </div>
            )
        })}
    </div>
    )
}