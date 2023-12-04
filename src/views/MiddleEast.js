import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox'

import { setSearchJobCriteria, setRegion } from '../store/postsSlice';
import { countryMappings, countryMappings1 } from "../utils/data";
import { Helmet } from "react-helmet";
const MiddleEast = () => {
  const navigate = useNavigate()
  const keyWordRef = useRef("")
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div>
      <Helmet>
        <title>Academic Jobs Middle East</title>
        <meta name="description" content="Find your dream academic job in Middle East and join the leading universities at Middle East university jobs with professor, researcher or manager roles." />
        <meta name="keywords" content="Academic Jobs Middle East. academic jobs in Middle East, Middle East university jobs" />
      </Helmet>
      <div className="pt-[8rem] flex flex-col items-center justify-center" >
        <img
          src="https://academicjobs.s3.amazonaws.com/img/_misc/simply-the-best-middle-east-min.png"

          alt="AcademicJobs Middle East"
          className=" w-[20rem] mb-[1rem] "
        /></div>
      <SearchBox />

      <div className=" mt-[10rem] " >
        <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-[#f4a10c] ">
          <ul className="w-full  md:w-auto flex items-center  justify-center gap-4">
            <li><Link to="/Middle-East/lecturer/" >	Lecturer</Link></li>
            <li><Link to="/Middle-East/research/" >	Research </Link></li>
            <li><Link to="/Middle-East/professor/" >	Professor</Link></li>
          </ul>
          <li><Link to="/Middle-East/executive/" >	Executive</Link></li>
          <li><Link to="/Middle-East/admin/" >Admin</Link></li>
          <li><Link to="/Middle-East/hr-jobs/" >	HR</Link></li>
          <li><Link to="/Middle-East/student/" >	Student</Link></li>

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
            <h1 className="py-3 px-7 bg-[#f4a10c] text-white rounded-3xl font-bold text-2xl md:text-2xl lg:text-2xl  shadow-xl">Academic Jobs Middle East</h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            <div className="newLine">
              <p className="px-7 pb-8">Academic Jobs Middle East is a diverse and dynamic website that offers many opportunities for academic professionals. Whether you are interested in teaching, research, or administration, you can find a variety of academic jobs in the middle east that suit your qualifications and goals. You can explore hundreds of academic jobs in the middle east on this page, covering various fields and disciplines such as engineering, humanities, social sciences, health sciences, and more.</p>
              <p className="font-semibold"></p>
            </div>
          </div>
          <div id="myUniversity" class="myUniversity">
            <div class="widget__text-block1">
              <div>
                <h2 className="text-1xl font-bold py-3 px-7 border-[#f4a10c] border-2  text-[#f4a10c] rounded-3xl shadow-md ">AcademicJobs Middle East: University Jobs  </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-7">
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/saudi arabia/" className='text-[#f4a10c] font-bold'>Saudi Arabia</Link></li>
                    <li><Link to="/employers/king-saud-university-saudi-arabia/8522/">King
                      Saud University</Link>
                    </li>
                    <li><Link to="/employers/king-abdullah-university-of-science-and-technology-saudi-arabia/8513/">King
                      Abdullah University of Science and Technology</Link></li>
                    <li><Link to="/employers/king-abdul-aziz-university-saudi-arabia/8512/">King
                      Abdul Aziz University</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/uae/" className='text-[#f4a10c] font-bold'>UAE</Link></li>
                    <li><Link to="/employers/khalifa-university-uae/8481/">Khalifa
                      University</Link>
                    </li>
                    <li><Link to="/employers/united-arab-emirates-university-uae/10985/">United
                      Arab Emirates University</Link></li>
                    <li><Link to="/employers/american-university-in-dubai-uae/5799/">American
                      University in Dubai</Link></li>
                    <li><Link to="/employers/american-university-of-sharjah-uae/5815/">American
                      University of Sharjah</Link></li>
                  </ul>
                  <ul>
                    <li className='mb-1 '><Link to="/jobs/lebanon/" className='text-[#f4a10c] font-bold'>Lebanon</Link></li>
                    <li><Link to="/employers/american-university-of-beirut-lebanon/5804/">American
                      University of Beirut</Link></li>
                    <li className='mb-1 '><Link to="/jobs/jordan/" className='text-[#f4a10c] font-bold'>Jordan</Link></li>
                    <li><Link to="/employers/university-of-jordan-jordan/12763/">University
                      of Jordan</Link></li>
                    <li className='mb-1 '><Link to="/jobs/qatar/" className='text-[#f4a10c] font-bold'>Qatar</Link></li>
                    <li><Link to="/employers/qatar-university-qatar/12944/">Qatar
                      University</Link>
                    </li>
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
export default MiddleEast