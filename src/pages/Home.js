import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
//import ReviewSlider from '/components/common/ReviewSlider';
import Footer from '../components/common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';


const Home = () => {
  return (
  <div>
        {/* Section 1 */}
      <div className='relative mx-auto flex flex-col w-11/12 items-center
                    text-white justify-between max-w-maxContent'>
            <Link to= {"signup"}>

                <div className='group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 
                drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                                    group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>

            <div className='text-center text-4xl font-semibold mt-7'>
                Empower Your Future with 
                <HighlightText text={"Coding Skills"} />
            </div>

            <div className='w-[90%] text-center text-lg font-bold text-richblack-300
                            mt-4'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes and personalized feedback from instructors.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CTAButton active={true} linkTo={"/signup"}>
                    Learn More
                </CTAButton>

                <CTAButton active={false} linkTo={"/login"}>
                    Book a Demo
                </CTAButton>

            </div>

            <div className='shadow-blue-200 mx-3 mt-12 my-12 w-[70%] relative shadow-[10px_-5px_50px_-5px] '>
                <div className='grad2 -top-10 w-[800px]'></div>
                <video className='shadow-[20px_20px_rgba(255,255,255)]'
                    muted
                    loop
                    autoPlay>
                        <source src={Banner} type="video/mp4"/>
                </video>
            </div>

             {/* Code Section 1 */}
            <div className='w-10/12  '> 
              <CodeBlocks
                position={"lg:flex-row"}
                heading={
                  <div className="text-4xl font-semibold">
                    Unlock your
                    <HighlightText text={"Coding Potential"} /> with our online
                    courses.
                  </div>
                }
                subheading={
                  "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={{
                  btnText: "Try it Yourself",
                  link: "/signup",
                  active: true,
                }}
                ctabtn2={{
                  btnText: "Learn More",
                  link: "/login",
                  active: false,
                }}
                codeColor={"text-yellow-25"}
                codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                backgroundGradient={<div className={`
              absolute
              w-[500px] h-[500px]
              top-[-150px] right-[90px]
              bg-[radial-gradient(circle_at_center,_rgba(2,123,150,0.5)_0%,_transparent_70%)]
              pointer-events-none
            `}
          />}
          />
            </div>

            {/*Code Section 2 */}

            <div className='w-10/12  '> 
              <CodeBlocks
                position={"lg:flex-row-reverse"}
                heading={
                  <div className="text-4xl font-semibold">
                    Start
                    <HighlightText text={"Coding in Seconds"} /> 
                  </div>
                }
                subheading={
                  "Go ahead, give it a try. Our hands-on learning environment means you'll be writing code from your very first lesson. "
                }
                ctabtn1={{
                  btnText: "Continue Lesson",
                  link: "/signup",
                  active: true,
                }}
                ctabtn2={{
                  btnText: "Learn More",
                  link: "/login",
                  active: false,
                }}
                codeColor={"text-white"}
                codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                backgroundGradient={<div className={`
              absolute
              w-[500px] h-[500px]
              top-[-150px] right-[90px]
              bg-[radial-gradient(circle_at_center,_rgba(242,126,22,0.41)_0%,_transparent_70%)]
              pointer-events-none
            `}
          />}
              />
            </div>

            {/* Explore Section */}
          <ExploreMore />
      </div>

        {/* Section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700'>
          <div className="homepage_bg h-[320px]">
            {/* Explore Full Catagory Section */}
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
              <div className="lg:h-[150px]"></div>
              <div className="flex flex-row gap-7 text-white lg:mt-8">
                <CTAButton active={true} linkto={"/signup"}>
                  <div className="flex items-center gap-2">
                    Explore Full Catalog
                    <FaArrowRight />
                  </div>
                </CTAButton>
                <CTAButton active={false} linkto={"/login"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
              {/* Job that is in Demand - Section 1 */}
              <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                <div className="text-4xl font-semibold lg:w-[45%] ">
                  Get the skills you need for a{" "}
                  <HighlightText text={"Job that is in demand."} />
                </div>

                <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                  <div className="text-[16px]">
                    The modern StudyNotion is the dictates its own terms. Today, to
                    be a competitive specialist requires more than professional
                    skills.
                  </div>

                  <CTAButton active={true} linkto={"/signup"}>
                    <div className="">Learn More</div>
                  </CTAButton>
                </div>
              </div>

              {/* Timeline Section - Section 2 */}
              <TimelineSection />

              {/* Learning Language Section - Section 3 */}
              <LearningLanguageSection />
            </div>
      </div>       
 
        {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
          <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
          {/* <ReviewSlider /> */}
      </div>


        {/* Footer */}
      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Home