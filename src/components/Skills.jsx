import React from 'react'

export default function Skills(props) {

  return (
    <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-3'> 
    <div className="row m-1 setBorder p-1 ">
    <div className='col-xxl-4 col-xl-3 col-lg-3 col-md-2 col-sm-4 col-xs-4'>
        <img src={props.src} alt={props.name} width={25} height={25}/>
    </div>
    <div className='col-xxl-8 col-xl-9 col-lg-9 col-md-10 col-sm-8 col-xs-8 text-start text text-white'>
        {props.name}
    </div>
    </div>  
    </div>
  )
}
