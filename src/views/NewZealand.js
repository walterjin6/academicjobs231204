import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const NewZealand = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs New Zealand</title>
        <meta name="description" content="Find your dream academic job in New Zealand and join the leading universities at New Zealand university jobs with professor, researcher or manager roles." />
        <meta name="keywords" content="Academic Jobs New Zealand. academic job in New Zealand, New Zealand university jobs" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-nz-min.png"

          alt="AcademicJobs New Zealand"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <SearchBox />

      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link to="/New-Zealand/lecturer/" >	Lecturer</Link></li>
            <li><Link to="/New-Zealand/research/" >	Research </Link></li>
            <li><Link to="/New-Zealand/professor/" >	Professor</Link></li>
          </ul>
          <li><Link to="/New-Zealand/executive/" >	Executive</Link></li>
          <li><Link to="/New-Zealand/admin/" >Admin</Link></li>
          <li><Link to="/New-Zealand/hr-jobs/" >	HR</Link></li>
          <li><Link to="/New-Zealand/student/" >	Student</Link></li>

        </ul>
      </div>


      <div className=" mt-4 " >
        <ul className="faculty-container flex  gap-4 items-center justify-center text-[#f4a10c] ">

          <li><Link to="/online/" >	Online </Link></li>
          <li><Link to="/jobs/remote/" >	Remote</Link></li>

          <li><Link to="/jobs/full-time/" >Full-Time</Link></li>
          <li><Link to="/jobs/part-time/" >	Part-Time</Link></li>
          <li><Link to="/jobs/casual/" >	Casual</Link></li>
        </ul>
      </div>




      <div className="text-[#f4a10c]  flex flex-col items-center justify-center  text-2xl pt-8  animate-bounce h-6" >
        <a>▼</a></div>
      <div className="bg-gradient-to-b to-white from-orange-100 rounded-t-[3rem] mt-[-1rem]">
        <div className=" max-w-screen-xl mx-auto">
          <div className="blurb text-left py-8 mt-[30rem] ">
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs New Zealand</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">New Zealand is a beautiful and diverse country that offers a high quality of life and a supportive academic environment. Whether you are looking for teaching, research, or leadership positions, you can find a range of academic jobs in New Zealand that match your skills and interests. You can browse through hundreds of academic jobs in New Zealand on this page, covering various fields and disciplines such as education, science, arts, business, and more.</p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#f4a10c] border-2  text-[#f4a10c] rounded-3xl shadow-md ">AcademicJobs New Zealand: All University Jobs by Region</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/" className='text-[#f4a10c] font-bold'>North Island</Link></li>
                    <li><Link to="/employers/the-university-of-auckland/3809/">The
                      University of Auckland</Link></li>
                    <li><Link to="/employers/victoria-university-of-wellington/3807/">Victoria
                      University of Wellington</Link></li>
                    <li><Link to="/employers/waikato-university/3806/">Waikato
                      University</Link>
                    </li>
                    <li><Link to="/employers/auckland-university-of-technology/3804/">Auckland
                      University of Technology (AUT)</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/" className='text-[#f4a10c] font-bold'>South Island</Link></li>
                    <li><Link to="/employers/university-of-otago/3805/">University of
                      Otago</Link>
                    </li>
                    <li><Link to="/employers/lincoln-university/3808/">Lincoln
                      University</Link>
                    </li>
                    <li><Link to="/employers/massey-university/3810/">Massey University</Link>
                    </li>
                    <li><Link to="/employers/university-of-canterbury/3811/">University of
                      Canterbury</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewZealand