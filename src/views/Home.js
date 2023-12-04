import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import JobDetail from "./JobDetail";
import { setSearchJobCriteria, setRegion } from "../store/postsSlice";
import { countryMappings, countryMappings1 } from "../utils/data";
import category from "../utils/category.json";
import position from "../utils/position.json";
import hr from "../utils/hr.json";
import research from "../utils/research.json";
import lecturer from "../utils/lecturer.json";
import professor from "../utils/professor.json";
import industry from "../utils/industry.json";
import executive from "../utils/executive.json";
import student from "../utils/student.json";
import admin from "../utils/admin.json";
import cities from "../utils/cities.json";
import careerAdvice from "../utils/careerAdvice";
import { Helmet } from "react-helmet";
import DispatchLink from "../components/DispatchLink";
const Home = () => {
  const navigate = useNavigate();
  const keyWordRef = useRef("");
  const dispatch = useDispatch();
  const region = useSelector((state) => state.posts.region);
  console.log(region);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const a = {};
    if (keyWordRef.current.value.trim()) a.q = keyWordRef.current.value.trim();
    if (region !== "Global") {
      //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
      //dispatch(setRegion(countryMappings[country.toLowerCase()]))
      //dispatch(setSearchJobCriteria(a))
      //navigate(`/jobs`)
      navigate("/jobs/", {
        state: {
          q: keyWordRef.current.value.trim(),
          l: countryMappings1[region].searchLocation,
        },
      });
    } else {
      const fetchLocation1 = async () => {
        try {
          const response = await fetch(
            "https://api.geoapify.com/v1/ipinfo?apiKey=ea0e191c22a94bf39e0e58ffbe2d6b66"
          );
          const result = await response.json();
          return result.country.name;
        } catch (error) {
          return "";
        }
      };
      fetchLocation1()
        .then((country) => {
          //sessionStorage.setItem("location", countryMappings[country.toLowerCase()]);
          //alert(countryMappings[country.toLowerCase()])
          //alert(countryMappings[country.toLowerCase()])
          dispatch(setRegion(countryMappings[country.toLowerCase()]));
          //a.l = countryMappings1[sessionStorage.getItem("location")].searchLocation
          //alert(region)
          //dispatch(setSearchJobCriteria(a))
          //alert(countryMappings1[sessionStorage.getItem("location")].searchLocation)
          navigate("/jobs/", {
            state: {
              q: keyWordRef.current.value.trim(),
              l: countryMappings1[countryMappings[country.toLowerCase()]]
                .searchLocation,
            },
          });
          //navigate(`/jobs/${countryMappings1[sessionStorage.getItem("location")].searchLocation}`);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  };
  return (
    <main className="container mx-auto">
      <div className="flex flex-col items-center justify-center mb-32">
        <div className="h-[25vh] flex flex-col items-end justify-end">
          <Helmet>
            <title>
              Academic Jobs: Academic, research and science positions locally
              and globally.
            </title>
            <meta
              name="description"
              content="Discover academic jobs at all universities today! Explore your next academic positions through visiting our higher ed jobs, with new academic jobs added daily."
            />
            <meta
              name="keywords"
              content="Academic Jobs. Higher Ed Jobs, Academic positions, University Jobs, College Jobs"
            />
          </Helmet>
          <img
            // src="https://academicjobs.s3.amazonaws.com/img/_misc/academic-jobs-logo.png"
            src="academicJobsLogo.png"
            alt="AcademicJobs Logo"
            className="pl-4 w-[20rem] mb-[1rem] "
          />
        </div>

        {/* Job Search Form */}
        <div className="w-full md:w-3/5 h-[60vh] flex flex-col items-top max-w-screen-md mx-auto">
          <form
            className=" flex flex-col gap-1 items-center md:items-end w-full"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col  gap-2 md:flex-row md:gap-0 mx-18 w-full  mt-5 md:border rounded-full p-2 md:shadow-md ">
              <input
                type="text"
                className="flex-grow px-4 py-2 focus:outline-none border rounded-full shadow-md md:border-none md:shadow-none"
                placeholder="Jobs Search"
                ref={keyWordRef}
              />
              <button
                className="px-4 py-2 bg-[#f4a10c] text-white rounded-full shadow-md hover:bg-gradient-to-b from-white via-amber-500 to-amber-500 font-bold"
                type="submit"
              >
                Search In Your Country
              </button>
            </div>
            <button
              className="pr-7  font-bold text-[#f4a10c] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-l from-green-500 via-green-500 to-sky-500"
              onClick={() => {
                const a = {};
                if (keyWordRef.current.value.trim())
                  a.q = keyWordRef.current.value.trim();
                dispatch(setSearchJobCriteria(a));
                dispatch(setRegion("Global"));
                //navigate(`/jobs/`)
                navigate("/jobs/", {
                  state: { q: keyWordRef.current.value.trim() },
                });
              }}
            >
              Or Search Globally
            </button>
          </form>

          {/* Faculty Container */}
          <div className="mt-[3rem] ">
            <ul className="faculty-container flex flex-wrap gap-4 items-center justify-center text-gray-400 px-2">
              <li className="hover:underline">
                <Link to="/lecturer/"> Lecturer</Link>
              </li>
              <li className="hover:underline">
                <Link to="/research/"> Research </Link>
              </li>
              <li className="hover:underline">
                <Link to="/professor/"> Professor</Link>
              </li>
              <li className="hover:underline">
                <Link to="/executive/"> Executive</Link>
              </li>
              <li className="hover:underline">
                <Link to="/faculty/"> Faculty</Link>
              </li>
              <li className="hover:underline">
                <Link to="/admin/">Admin</Link>
              </li>
              <li className="hover:underline">
                <Link to="/hr-jobs/"> HR</Link>
              </li>
              <li className="hover:underline">
                <Link to="/student/"> Student</Link>
              </li>
              <li className="hover:underline">
                <Link to="/graduate/"> Graduate</Link>
              </li>
              <li className="hover:underline">
                <Link to="/phd/"> PhD</Link>
              </li>
            </ul>
          </div>

          {/* Employment Type Container */}
          <div className="mt-7">
            <ul className="faculty-container flex gap-4 items-center justify-center text-[#f4a10c] px-2">
              <li className="hover:underline">
                <Link to="/online/"> Online </Link>
              </li>
              <li className="hover:underline">
                <Link to="/jobs/remote/">Remote</Link>
              </li>
              <li className="hover:underline">
                <Link to="/jobs/full-time/">Full-Time</Link>
              </li>
              <li className="hover:underline">
                <Link to="/jobs/part-time/">Part-Time</Link>
              </li>
              <li className="hover:underline">
                <Link to="/jobs/casual/"> Casual</Link>
              </li>
            </ul>
          </div>

          <div className="mt-4 pb-4">
            <ul className="faculty-container flex  gap-4 items-center justify-center text-[#e39e39] font-bold ">
              <li className="mb-2 hover:underline px-4 text-center md:text-left">
                <Link
                  className="flex flex-row items-center justify-center gap-2"
                  to="/global-academic-awards-2023-nominations"
                >
                  <img
                    className="academic-award"
                    src="/academic-award.svg"
                    alt="The Global Academic Awards of 2023"
                  />
                  <span className="">
                    Nominate an Academic for the 'Global Academic Awards 2023'
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-[#f4a10c] flex flex-col items-center justify-center text-2xl animate-bounce h-6 pt-8">
            <a href="#section" class="scroll-smooth md:scroll-auto">
              ▼
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Panel */}
      <div
        id="section"
        className="bg-gradient-to-b to-white from-orange-100 rounded-t-[5.5rem] mt-[-1rem] px-5"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="blurb text-left py-6 ">
            <h1 className="font-bold text-lg md:text-3xl py-4 px-6 bg-[#f4a10c] text-white rounded-full mb-6 shadow-xl border-4">
              ACADEMIC JOBS: Academic, research and science positions locally
              and globally
            </h1>
            <div className="newLine mb-4">
              <p className="font-semibold"></p>
              <p className="font-semibold"></p>
            </div>
            {/* <p className="px-7 mb-4">
              Find the best academic positions and administrative jobs in higher
              ed. Search for academic jobs, college careers and faculty
              positions online. Seek and apply for lecturer, research, uni admin
              and senior academic jobs in every university in your country or
              globally.
            </p>
            <p className="px-7">
              Whether you are a professor, researcher, lecturer, or
              administrator, you can find the latest opportunities in higher
              education on academic jobs online.
            </p>
            <p className="px-7 mb-4"></p> */}
            <p className="px-7 mb-4">
              Discover top-tier faculty and administrative roles in the world of
              higher education. Begin your search for university academic jobs,
              college faculty positions, and administrative opportunities in
              higher ed. Explore and apply for a range of roles, including
              lecturer, researcher, university administrator, and senior
              academic positions, available nationally and internationally.
            </p>
            <p className="px-7">
              Whether you're an aspiring or established professor, researcher,
              lecturer, or higher education administrator, our platform offers
              the most current opportunities in academia globally. Connect with
              your next career move in the academic sector through our
              comprehensive online job board. Find your next academic job now!
            </p>
          </div>
          <p className="px-7 text-center mt-5">
            <Link
              className="link  text-[#f4a10c] font-bold text-2xl hover:text-orange-500"
              to="/global-academic-awards-2023-nominations"
            >
              Do you know someone deserving, nominate them for the 'Global&nbsp;
              Academic&nbsp;Awards 2023'&nbsp;NOW
            </Link>
          </p>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
            Top Academic Jobs Today
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="/jobs/Assistant-Professor-in-Pasifika-Theater-and-Performance-Studies,-UCLA/76215/"
                        className="text-blue-500 font-bold"
                      >
                        Assistant Professor in Pasifika Theater and Performance
                        Studies, UCLA
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="">Los Angeles, California,USA</Link>
                      </li>
                      <li>
                        <Link to="">5 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/Assistant-Associate-Professor,-Fall-2024---Artificial-Intelligence-in-Aerospace-Engineering/70907"
                        className="text-blue-500 font-bold"
                      >
                        Assistant/Associate Professor, Fall 2024 - Artificial
                        Intelligence in Aerospace Engineering
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">The University of Texas at Austin</Link>
                      </li>
                      <li>
                        <Link to="">Austin, TX, USA</Link>
                      </li>
                      <li>
                        <Link to="">11 Dec, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="/jobs/Project-Director-DHSI-Grant-Academic-Affairs/75567/"
                        className="text-blue-500 font-bold"
                      >
                        Project Director DHSI Grant - Academic Affairs
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of Texas Permian Basin</Link>
                      </li>
                      <li>
                        <Link to="">Odessa, Texas,USA</Link>
                      </li>
                      <li>
                        <Link to="">1 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/immunogenetics-and-histocompatibility-laboratory-director-health-sciences-open-rank-clinical-professor/73108/"
                        className="text-blue-500 font-bold"
                      >
                        Immunogenetics and Histocompatibility Laboratory
                        Director/Health Sciences Open Rank Clinical Professor
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link to=""> Aug 3, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/Oregon-Sea-Grant-Extension-Specialist-in-Human-Dimensions-of-Coastal-Systems/69048"
                        className="text-blue-500 font-bold"
                      >
                        Oregon Sea Grant Extension Specialist in Human
                        Dimensions of Coastal Systems
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">Oregon State University</Link>
                      </li>
                      <li>
                        <Link to="">Corvallis, OR, USA</Link>
                      </li>
                      <li>
                        <Link to="">04 Dec, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/clinical-instructor-clinical-professor/73147/"
                        className="text-blue-500 font-bold"
                      >
                        Clinical Instructor - Clinical Professor
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of Michigan</Link>
                      </li>
                      <li>
                        <Link to="">Ann Arbor, MI, USA</Link>
                      </li>
                      <li>
                        <Link to="">Jan 17, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/tenure-track-assistant-professor-of-machine-learning-in-biology/68725"
                        className="text-blue-500 font-bold"
                      >
                        Tenure-track Assistant Professor of Machine Learning in
                        Biology
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of Pennsylvania</Link>
                      </li>
                      <li>
                        <Link to="">Philadelphia, PA, USA</Link>
                      </li>
                      <li>
                        <Link to="">03 Dec, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/provost/69027"
                        className="text-blue-500 font-bold"
                      >
                        Provost
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">American University of Armenia</Link>
                      </li>
                      <li>
                        <Link to="">Yerevan, Armenia</Link>
                      </li>
                      <li>
                        <Link to="">03 Dec, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/open-rank-in-school-counseling-psychology/64801"
                        className="text-blue-500 font-bold"
                      >
                        Research Fellow In Natural Language Processing
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of Michigan</Link>
                      </li>
                      <li>
                        <Link to="">Ann Arbor, MI, USA</Link>
                      </li>
                      <li>
                        <Link to="">17 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/employers/johns-hopkins-university/3130/"
                        className="text-blue-500 font-bold"
                      >
                        Visiting Graduate Fellowship in the History of Science
                        and Technology
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">Johns Hopkins University</Link>
                      </li>
                      <li>
                        <Link to="">Baltimore, MD, USA</Link>
                      </li>
                      <li>
                        <Link to="">Dec 21, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/assistant-professor-or-associate-professor-complex-family-planning-division/44611/"
                        className="text-blue-500 font-bold"
                      >
                        Assistant Professor or Associate Professor - Complex
                        Family Planning Division
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">Yale University</Link>
                      </li>
                      <li>
                        <Link to="">New Haven, CT, USA</Link>
                      </li>
                      <li>
                        <Link to="">6 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/director-of-alumni-engagement/72223"
                        className="text-blue-500 font-bold"
                      >
                        Director of Alumni Engagement
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of Pennsylvania</Link>
                      </li>
                      <li>
                        <Link to="">Philadelphia, PA, USA</Link>
                      </li>
                      <li>
                        <Link to="">16 Dec, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/Executive-Officer---Full-time---Permanent---Robina---Gold-Coast/69249/"
                        className="text-blue-500 font-bold"
                      >
                        Executive Officer - Full time - Permanent - Robina -
                        Gold Coast
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">Bond University</Link>
                      </li>
                      <li>
                        <Link to="">Gold Coast QLD, Australia</Link>
                      </li>
                      <li>
                        <Link to="">26 Dec, 2023</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/client-services-officer/70860/"
                        className="text-blue-500 font-bold"
                      >
                        Client Services Officer
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">Queensland University of Technology</Link>
                      </li>
                      <li>
                        <Link to="">Kelvin Grove Brisbane, QLD</Link>
                      </li>
                      <li>
                        <Link to="">1 Jan, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/pediatrics-allergy-immunology-rheumatology-health-sciences-series/73113/"
                        className="text-blue-500 font-bold"
                      >
                        Pediatrics Allergy/Immunology/Rheumatology - Health
                        Sciences Series
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link to=""> Oct 10, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4 hover:underline">
                      <Link
                        to="https://www.academicjobs.com/jobs/clinical-positions-in-cardiology-central-coast-2023-2024/73047/"
                        className="text-blue-500 font-bold"
                      >
                        Clinical Positions in Cardiology (Central Coast)
                        2023-2024 Apply Now
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li>
                        <Link to="">University of California, Los Angeles</Link>
                      </li>
                      <li>
                        <Link to="">Los Angeles, CA, USA</Link>
                      </li>
                      <li>
                        <Link to="">Jun 29, 2024</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Link className="text-[#f4a10c] mt-4 mb-4 px-2 font-bold" to="/jobs/">
            ← view more
          </Link>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
            Top Cities for Uni Jobs
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-2 grid md:grid-cols-4 gap-8 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link to="/USA/" className="text-[#f4a10c] font-bold">
                        USA
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/boston/">Boston</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/new-york/">New York</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/los-angeles/">Los Angeles</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/san-francisco/">San Francisco</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/chicago/">Chicago</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/san-diego/">San Diego</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/washington-dc/">Washington DC</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/philadelphia/">Philadelphia</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/atlanta/">Atlanta</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/seattle/">Seattle</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/pittsburgh/">Pittsburgh</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/new-haven/">New Haven</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        to="/Australia/"
                        className="text-[#f4a10c] font-bold"
                      >
                        Australia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/melbourne/">Melbourne</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/sydney/">Sydney</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/brisbane/">Brisbane</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/gold-coast/">Gold Coast</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/canberra/">Canberra</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/perth/">Perth</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/adelaide/">Adelaide</Link>
                      </li>
                    </ul>
                    <li className="mb-1 mt-4">
                      <Link to="/UK/" className="text-[#f4a10c] font-bold">
                        UK
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/london/">London</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/edinburgh/">Edinburgh</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/manchester/">Manchester</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link to="/Canada/" className="text-[#f4a10c] font-bold">
                        Canada
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/toronto/">Toronto</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/vancouver/">Vancouver</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/montreal/">Montreal</Link>
                      </li>
                    </ul>
                    <li className="mb-1 mt-4">
                      <Link to="/Asia/" className="text-[#f4a10c] font-bold">
                        Asia
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/hong-kong/">Hong Kong</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/beijing/">Beijing</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/tokyo/">Tokyo</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/singapore/">Singapore</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link to="/Europe/" className="text-[#f4a10c] font-bold">
                        Europe
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/paris/">Paris</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/zurich/">Zurich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/munich/">Munich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/amsterdam/">Amsterdam</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/copenhagen/">Copenhagen</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/stockholm/">Stockholm</Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
            Top Universities To Work For
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7">
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        to="https://www.academicjobs.com/employers/queensland-university-of-technology/3786/"
                        className="text-[#003463] font-bold"
                      >
                        Queensland University of Technology (QUT)
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/jobs/QUT-lecturer/">QUT Lecturing Jobs</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/QUT-research/">QUT Research Jobs</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/QUT-professor/">
                          QUT Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/QUT-Executive/">QUT Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/QUT-Administration/">
                          QUT Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/QUT-Human-Resources/">
                          QUT Human Resources
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        to="/employers/bond-university/3785/"
                        className="text-orange-500 font-bold"
                      >
                        Bond University
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/jobs/bond-lecturer/">
                          Bond Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/bond-research/">
                          Bond Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/bond-professor/">
                          Bond Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/bond-Executive/">Bond Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/bond-Administration/">
                          Bond Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/bond-Human-Resources/">
                          Bond Human Resources
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        to="/employers/harvard-university/3100/"
                        className="text-[#A51C30] font-bold"
                      >
                        Harvard University
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/jobs/harvard-lecturer/">
                          Harvard Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/harvard-research/">
                          Harvard Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/harvard-professor/">
                          Harvard Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/harvard-Executive/">
                          Harvard Executive
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/harvard-Administration/">
                          Harvard Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/harvard-Human-Resources/">
                          Harvard Human Resources
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <li className="mb-1 mt-4">
                      <Link
                        to="https://www.academicjobs.com/employers/university-of-california-san-diego/3149/"
                        className="text-[#192847] font-bold"
                      >
                        University of California San Diego
                      </Link>
                    </li>
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/jobs/UCSD-lecturer/">
                          UCSD Lecturing Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/UCSD-research/">
                          UCSD Research Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/UCSD-professor/">
                          UCSD Professorial Jobs
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/UCSD-Executive/">UCSD Executive</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/UCSD-Administration/">
                          UCSD Administration
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/jobs/UCSD-Human-Resources/">
                          UCSD Human Resources
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-1xl font-bold py-1 px-7 border-2 border-[#f4a10c] text-[#f4a10c] rounded-3xl mt-20 shadow-md">
            <Link to="/the-university-rankings/">
              The University Rankings/ Top Academic Careers
            </Link>
          </h2>
          <div className="cate-group section23 ">
            <div className="widget__text-block">
              <div className="faculty-container grid-cols-1 grid md:grid-cols-4 gap-4 py-2 px-7 ">
                <div className="column">
                  <ul className="">
                    <ul className="pb-4">
                      <li className="hover:underline">
                        <Link to="/employers/harvard-university/3100/">
                          {" "}
                          Harvard University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/stanford-university/3101/">
                          {" "}
                          Stanford University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/university-of-cambridge/12635/">
                          {" "}
                          University of Cambridge
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/massachusetts-institute-of-technology/3103/">
                          MIT
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/university-of-california-berkeley/3105/">
                          {" "}
                          University of California, Berkeley
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/employers/princeton-university/3104/">
                          {" "}
                          Princeton University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/university-of-oxford/3099/">
                          {" "}
                          University of Oxford
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/columbia-university/3127/">
                          {" "}
                          Columbia University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/caltech/3128/">Caltech</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/University-of-Chicago/3126/">
                          {" "}
                          University of Chicago
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/employers/yale-university/3125/">
                          {" "}
                          Yale University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/Cornell-University/3138/">
                          Cornell University
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/university-of-california-los-angeles/3136/">
                          UCLA
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/university-of-pennsylvania/3131/">
                          UPenn
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/johns-hopkins-university/3130/">
                          Johns Hopkins University (JHU)
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                <div className="column">
                  <ul className="">
                    <ul className="innerUL">
                      <li className="hover:underline">
                        <Link to="/employers/university-college-london/12527/">
                          University College London (UCL)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/eth-zurich/3132/">ETH Zurich</Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/university-of-tokyo/3155/">
                          The University of Tokyo (UTokyo)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/new-york-university-nyu/3144/">
                          New York University (NYU)
                        </Link>
                      </li>
                      <li className="hover:underline">
                        <Link to="/employers/duke-university/3139/">
                          {" "}
                          Duke University (Duke)
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col  ">
            <Link to="/job-type/">
              <h2 className=" py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-[7rem] hover:bg-orange-500 hover:text-white shadow-md">
                → Find Academic<span className="font-bold"> Job-Types</span> (
                i.e. Professor, Fellow )
              </h2>
            </Link>
          </div>
          <div className="flex flex-col  ">
            <Link to="/industry/">
              {" "}
              <h2 className="  py-4 px-7 border-4 text-[#f4a10c] rounded-full mt-10 hover:bg-orange-500 hover:text-white shadow-md mb-12">
                → Find Academic Positions in
                <span className="font-bold"> Industry</span> ( i.e. laboratory
                technical services )
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
