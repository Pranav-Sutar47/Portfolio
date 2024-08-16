import React from 'react'

export default function Achievements() {
  return (
    <>
        <div className="container mt-3">
            <h6 className='text-white about'>ACHIEVEMENTS/EXTRA CURRICULARS</h6>
            <div className="row mt-3">
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-white p-2'>
                    <div className='background mb-5'>
                    <img src='./resource/bos.jpg' width={120} height={150} alt='bos'/>
                    <h2>Best Outgoing Student</h2>
                    <h6 className='pb-3'><em>Ashokrao Mane Polytechnic</em></h6>
                    </div>
                   
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-white p-2'>
                    <div className='background mb-5'>
                    <img src='./resource/topper.jpg' height={150} width={120} alt='topper'/>
                    <h2>Academic Topper</h2>
                    <h6 className='pb-3'><em>Ashokrao Mane Polytechnic</em></h6>
                    </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 text-white p-2'>
                    <div className='background mb-5'>
                    <img src='./resource/nsse.jpg' height={150} width={120} alt='topper'/>
                    <h2>State Rank 10</h2>
                    <h6 className='pb-3'><em>National Scholar Search Examination,Pune</em></h6>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}
