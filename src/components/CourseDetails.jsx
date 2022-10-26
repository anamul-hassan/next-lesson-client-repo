import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import underlineDark from '../asset/underline-gray.png';

const CourseDetails = () => {
  const courseInfo = useLoaderData();
  const {
    atAGlance,
    courseDetails,
    courseStatus,
    courseTitle,
    enrolled,
    id,
    instructor,
    rating,
    thumbnailUrl,
    timeRequire,
  } = courseInfo;
  const {
    Institution,
    Language,
    Level,
    Prerequisites,
    Subject,
    VideoTranscript,
  } = atAGlance;
  // console.log(timeRequire);
  return (
    <section
      style={{
        fontFamily: "'Nunito', sans-serif",
      }}
      className="w-[95%] lg:w-4/5 mx-auto my-8 border-2  border-[#f4f7fc] rounded-xl bg-[#f4f7fc]"
    >
      <div>
        <img className="w-full rounded-t-xl" src={thumbnailUrl} alt="" />
      </div>
      <div className="mt-6 px-4 lg:px-8">
        <h2 className="text-2xl lg:text-4xl font-bold mb-3">{courseTitle}</h2>
        <p className="text-[#495057] text-sm lg:text-md font-semibold leading-5 lg:leading-7">
          {courseDetails}
        </p>
        <h3 className="mt-6 mb-2 text-xl lg:text-2xl font-semibold text-[#212529]">
          Some Basic Information
        </h3>
        <ul className="text-md lg:text-xl font-semibold text-[#495057] list-disc ml-8">
          <li>
            <span className="font-bold">Institution:</span> {Institution}
          </li>
          <li>
            {' '}
            <span className="font-bold">Subject:</span> {Subject}
          </li>
          <li>
            {' '}
            <span className="font-bold">Language:</span> {Language}
          </li>
          <li>
            <span className="font-bold">Level:</span> {Level}
          </li>
          <li>
            <span className="font-bold">Video Transcript:</span>{' '}
            {VideoTranscript}
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-xl lg:text-2xl font-semibold text-[#212529]">
          Prerequisites
        </h3>
        <ul className="text-md lg:text-xl font-semibold text-[#495057] list-disc ml-8">
          {Prerequisites.split('|').map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
        <div className="flex flex-col lg:flex-row items-center relative py-8 justify-center mt-12">
          <div className="w-full lg:w-2/4 px-6 py-4 mb-10 lg:mb-0">
            <h3 className="text-2xl font-bold">Course Specification</h3>
            <ul className="text-lg font-semibold text-[#495057]">
              <li>
                <span className="font-bold">Course Status:</span> {courseStatus}
              </li>
              <li>
                <span className="font-bold">Rating:</span> {rating}
              </li>
              <li>
                <span className="font-bold">Enrolled:</span> {enrolled} Learner
              </li>
              <li>
                <span className="font-bold">Time Require: </span>{' '}
                {timeRequire.week} week, {timeRequire.perDay} hours a day
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-2/4 flex items-center flex-col justify-center">
            <p className="text-2xl  font-bold my-2">
              Instructor of this course
            </p>
            <img
              className="w-[25%] rounded-full"
              src={instructor?.img}
              alt={instructor?.name}
            />
            <p className="text-xl font-bold mt-2">{instructor.name}</p>
          </div>
          <img
            className="absolute hidden lg:block left-2/4 translate-x-[-50%] rotate-180 lg:rotate-90 w-4/5 lg:w-[20%]"
            src={underlineDark}
            alt=""
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-4/5 2xl:w-3/5 mx-auto">
          {courseStatus === 'Free' ? (
            <button
              className=" text-white font-bold text-lg lg:text-2xl px-6 py-2 rounded-md inline-block my-6  bg-[#27aae2]
            duration-300
            hover:bg-[#0071b3] "
            >
              Enroll this Course
            </button>
          ) : (
            <button
              className=" text-white font-bold text-lg lg:text-2xl px-6 py-2 rounded-md inline-block my-6  bg-[#e67700]
            duration-300
            hover:bg-[#f08c00] "
            >
              Purchase this Course
            </button>
          )}
          <Link className="bg-[#f08c00] text-white text-center font-bold text-lg lg:text-2xl px-6 py-2 rounded-md inline-block my-6 duration-300 hover:bg-[#e67700] ">
            Get Premium Access
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;