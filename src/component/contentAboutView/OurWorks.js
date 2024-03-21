import React, {useEffect, useState} from "react";
import "./OurWorks.css"
import ContentService from "./ContentService";
import chevronLeft from "../../static/icon/chevron-left.png"
import chevronRight from "../../static/icon/chevron-right.png"

const OurWorks = () => {
 
    const [data , setData] = useState(null);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [sizePerPage, setSizePerPage] = useState(9);
    const [linkActive, setLinkActive] = useState("allCases")
    const [ isLoading, setLoading ] = useState(false);

    const fetchRecord = async (type , page = 1) => {
        setLoading(true)
        try {
           
            setPage(page)
            console.log('running fetch record...')
            const queryParams = new URLSearchParams({
                'type': type, // Assuming 'type' is a variable containing the type of records you're interested in
                'page' : page,       // Current page number
                'sizePerPage' : sizePerPage // Number of records per page
            }).toString();
            
            const response = await fetch(`https://us-central1-image-storing-project.cloudfunctions.net/app/records?${queryParams}`);

            if (!response.ok) {
                throw new Error('Response not found');
            }

            const dataResponse = await response.json();
            console.log(dataResponse.records)
            console.log(Array.isArray(dataResponse.records))

            if (dataResponse && Array.isArray(dataResponse.records)) {
                console.log("data --> ", data)
                setData(dataResponse.records);
                setTotalPages(dataResponse.totalPages)
                setLoading(false)
            }

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        
    }

    const onClickType = async (type) => {
        console.log('onClickType ', type)
        let activeLink = ''

        if(type === 'Website App') {
            activeLink = 'website'
        } else if(type === 'UI/UX Design') {
            activeLink = 'design'
        } else if(type === 'Mobile App') {
            activeLink = 'mobile'
        } else if(type === 'allCases') {
            activeLink = 'allCases'
            type = ''
        }
        setLinkActive(activeLink);
        fetchRecord(type);        
    }

    const onHandlePages = (item) => {
        setPage(item)
        fetchRecord('' , item)
    }

    const loadingComponent = () => {
        return (
            <div className="spinner-border" role="status" style={{width:"3rem", height:"3rem", margin:'64px'}}>
               <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    const iteratePages = () => {
        const items =  Array.from({ length: totalPages }, (_, index) => index + 1);

        return (
                <>
                {items.map((item) => (
                    <li className={page === item ? 'pages active_pages' : 'pages'} 
                        onClick={ () => onHandlePages(item) }
                        key={item}>{item}</li>
                ))}
              </>
          );
    }

    useEffect(() => {
        try {
            fetchRecord('');
        }catch(error) {
            console.log(error)
        }
    }, []) 
        
        return (
            <div id="container-ourworks">
                <div className="row">
                
                    <span id="our-work-title">Our Works</span>
                    <span className="subhead">Crafting seamless user experiences across diverse digital platforms, from mobile apps to enterprise</span>
                    <span className="subhead">web solutions, consistently exceeding expectations</span>
                </div>
                <div className="row">
                    <ul className="list_of_service">
                        <li className={linkActive == 'allCases' ? 'active_list': ''} onClick={() => onClickType('allCases')}>
                            All Case Studies
                        </li>
                        <li className={linkActive == 'design' ? 'active_list': ''} onClick={() => onClickType('UI/UX Design')}>
                            UI/UX Design
                        </li>
                        <li className={linkActive == 'website' ? 'active_list': ''} onClick={() => onClickType('Website App')}>
                            Web App
                        </li>
                        <li className={linkActive == 'mobile' ? 'active_list': ''} onClick={() => onClickType('Mobile App')}>
                            Mobile App
                        </li>
                    </ul>
                </div>

                <div>
                    { !isLoading && data ? <ContentService data={data}/> : loadingComponent()}
                </div>

               { !isLoading && data  ? (
                    <div className="row mt-5 pt-5 mb-5 pb-2">
                        <div className="pagination_container">
                            <ul>
                                <li className="chevron">
                                    <img src={chevronLeft} />
                                </li>
                                
                                { iteratePages() }
                                
                                <li className="chevron">
                                    <img src={chevronRight} />
                                </li>
                            </ul>
                        </div>
                    </div>
               ) : ''}
                
            </div>
        )
}

export default OurWorks;