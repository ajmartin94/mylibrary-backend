import React,{useState,useEffect} from 'react';

function Library(props) {
    console.log(props.libraryData)
    return (
        <div>
            <ul className='nav nav-tabs' id='libraryTabs' role='tablist'>
                {props.libraryData.map((library,index) => {
                    return <li className='nav-item' role='presentation'>
                        <a 
                            className={index===0 ? 'nav-link active' : 'nav-link'}
                            data-toggle='tab'
                            href={'#tab'+index}
                            role='tab'
                            aria-controls={'tab'+index}
                            aria-selected={index===0 ? 'true' : 'false'}
                        >{library.name}</a>
                    </li>
                })}
            </ul>
            <div className='tab-content' id='libraryContent'>
                {props.libraryData.map((library,index)=>{
                    return <div 
                        className={index===0 ? 'tab-pane fade show active' : 'tab-pane fade'}
                        id={'tab'+index}
                        role='tabpanel'
                        aria-labelledby={'tab'+index}
                    >{library.name}</div>
                })
                }
            </div>
        </div>
    )
}

export default Library;