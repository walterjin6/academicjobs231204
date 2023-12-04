import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import careerAdvice from "../utils/careerAdvice";
const Careeradvice2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Helmet>
        <title>Academic hub and Career Advice</title>
        <meta name="description" content="Are you looking for hub in academia? Read our blog posts to discover the secrets of well-being, work-life balance, and career satisfaction for academics.  " />
        <meta name="keywords" content="academic hub, AcademicJobs hub" />
      </Helmet>
      <div className="blurb text-left py-8 ">
        <h1 className=" font-bold text-2xl md:text-3xl py-4 px-7 bg-[#f4ac10] text-white rounded-full shadow-xl"> Academic Hub & Top Career Advice Today</h1>
        <div className="newLine mb-4">
          <p className="font-semibold"></p>
          <p className="font-semibold"></p>
        </div>
        <div className="py-4 px-7  text-black rounded-2xl ">
          <p className="bg-gradient-to-b to-white from-orange-300 p-4 rounded-3xl" >Are you looking for an academic hub, career advice, tips, and insights from academics and researchers? Check out these academic jobs blogs and learn from the experts in your field. Whether you are a PhD student, a postdoc, or a professor, you will find valuable information and inspiration to advance your academic career. Read these blogs now and discover the best opportunities and practices for academic hub.</p>
        </div>
        <h2 className=" font-bold text-xl md:text-xl px-7 text-[#f4ac10] border-2 border-[#f4ac10] rounded-3xl mt-12 py-2"> Top Academic Hub Posts</h2>
        <div className="bg-white flex flex-col  ">
          <ul className=" mb-8 text-left items-stretch grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-1  w-full ">
            <Link to="/academic-hub/happiness-and-academics/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Happiness and Academics: Scott Galloway's Algebra of hub </h2>
                  <a className=" text-gray-400" > 10 Aug, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/how-to-be-a-happy-academic.jpg" alt="Happiness and Academics: Scott Galloway's Algebra of hub" /></figure>
              </div></Link>
            <Link to="/academic-hub/top-academic-jobs-australia/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Top Academic Jobs Australia </h2>
                  <a className=" text-gray-400" > 10 Aug, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/top-academic-jobs-australia.jpg" alt="Top Academic Jobs Australia" /></figure>
              </div></Link>
            <Link to="/academic-hub/how-to-land-your-dream-college-job-a-step-by-step-guide/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> How to Land Your Dream College Job: A Step-by-Step Guide </h2>
                  <a className=" text-gray-400" > 06 Jul, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Dream_Job_2.png" alt="How to Land Your Dream College Job: A Step-by-Step Guide" /></figure>
              </div></Link>
            <Link to="/academic-hub/exploring-the-benefits-of-academic-jobs-online-why-virtual-hiring-is-on-the-rise/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Exploring the Benefits of Academic Jobs Online: Why Virtual Hiring is on the Rise </h2>
                  <a className=" text-gray-400" > 20 Jun, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Virtual_Hiring.png" alt="Exploring the Benefits of Academic Jobs Online: Why Virtual Hiring is on the Rise" /></figure>
              </div></Link>
            <Link to="/academic-hub/exploring-the-global-landscape-of-academic-jobs-opportunities-and-challenges/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> Exploring the Global Landscape of Academic Jobs: Opportunities and Challenges </h2>
                  <a className=" text-gray-400" > 7 Jun, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Global_Opportunities_2.png" alt="Exploring the Global Landscape of Academic Jobs: Opportunities and Challenges" /></figure>
              </div></Link>
            <Link to="/academic-hub/the-evolution-of-university-recruitment/">
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title"> The Evolution of University Recruitment: Embracing Digital Platforms </h2>
                  <a className=" text-gray-400" > 15 May, 2023</a>
                </div>
                <figure><img src="https://academicjobs.s3.amazonaws.com/img/_misc/Recruitment_Evolution_2.png" alt="The Evolution of University Recruitment: Embracing Digital Platforms" /></figure>
              </div></Link>
          </ul>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<iframe class=" aspect-video  " src="https://www.youtube.com/embed/bEEmo_KhOOk?si=yiNtzXaYyASiWU8W" title="YouTube video player"></iframe>

<iframe class=" aspect-video " src="https://www.youtube.com/embed/hSbjVkmSIrc?si=qeq_VAZ3ZEQpWhjh" title="YouTube video player"></iframe>

<iframe class=" aspect-video " src="https://www.youtube.com/embed/yn-ctFDfI60?si=REwYQIJFPBm6NnXm"  title="YouTube video player"></iframe>


</div>



      </div>
      <div className="w-ful  mx-auto  bg-[#f4ac10] border-[0.65rem] rounded-full md:my-2 md:mb-4  border-[#f4a10c] shadow-xl"><h2 className=" font-bold text-xl md:text-xl px-7 text-white "> All Carrer Advice Posts</h2></div>
      <div className="mt-[-3.3rem]"><SearchResults q={{ l: "Academic_Hub" }} /></div>
    
    

    </div>







  );
};
export default Careeradvice2;