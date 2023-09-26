"use client";
import { useState } from "react";

import { IResponse, IUserDetails } from "../../services/types";
import { HiOutlinePlus } from "react-icons/hi";
import DashboardFooter from "../components/DashboardFooter";
import CourseCard from "../components/CourseCard";
import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
import { useQuery } from "react-query";
import { getCourses, getProfile } from "@/services";
import { Loader } from "lucide-react";
import CreateCourseModal from "../components/CreateCourseModal";

const DashboardIndex = () => {
  const [navOpen, setNavOpen] = useState(false);
  const {
    data: data,
    isLoading,
    refetch,
  } = useQuery<IResponse<IUserDetails>>(["get-profile"], getProfile);

  const {
    data: courses,
    isLoading: isCourseLoading,
    refetch: refetchCourse,
  } = useQuery<IResponse<any>>(["get-courses"], getCourses);

  console.log(courses && courses);

  if (isLoading || isCourseLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col gap-3">
        <Loader className="animate-spin" />
        <h1 className="font-bold text-lg text-center">Please wait...</h1>
      </div>
    );
  }

  return (
    <div className="h-full flex">
      <Sidebar
        name={data?.data.data.user.fullName!}
        email={data?.data.data.user.email!}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />

      <div className="w-full md:ml-[210px]">
        <DashboardNav navOpen={navOpen} setNavOpen={setNavOpen} />
        <div className="px-5 py-10 w-full bg-neutral-800 text-white">
          <h2 className="text-4xl mb-3">My Courses</h2>
          <p>Manage your courses here and some extra text</p>
        </div>
        <div className="px-8">
          <div className="mb-8 flex gap-6 flex-col lg:flex-row mt-8">
            <div className="h-full px-8 py-5 flex items-center justify-between lg:w-5/12 border rounded-xl">
              <div className=" flex items-center">
                <span className="font-semibold">Courses Created</span>
              </div>
              <h2 className="font-bold text-2xl">{courses?.data.data.total}</h2>
            </div>
            <div className="h-full px-8 py-5 flex items-center justify-between lg:w-5/12 border rounded-xl">
              <div className=" flex items-center">
                <span className="font-semibold">Students</span>
              </div>
              <h2 className="font-bold text-2xl">0</h2>
            </div>
            <CreateCourseModal />
          </div>
          <div className="flex flex-wrap gap-y-9 justify-center md:justify-normal mt-8 -mx-2">
            {courses?.data.data.courses.length > 0 ? (
              courses?.data.data.courses.map((course: any) => (
                <CourseCard
                  key={course.id}
                  img={`/assets/course${Math.ceil(Math.random() * 5)}.jpeg`}
                  title={course.courseName
                  }
                  author={data?.data.data.user.fullName!}
                />
              ))
            ) : (
              <h3>You have not created an course</h3>
            )}
          </div>
        </div>
        <DashboardFooter />
      </div>
    </div>
  );
};

export default DashboardIndex;
