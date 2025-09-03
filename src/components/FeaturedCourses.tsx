"use client";

import courseData from "@/data/music_courses.json";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
function FeaturedCourses() {
  const courses = courseData.courses;
  const featuredCourses = courses.filter((course: Course) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="rounded-2xl max-w-xs w-full h-full p-0 bg-white dark:bg-zinc-900 shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center justify-between h-[340px] p-6 text-center">
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 flex-1 flex items-center justify-center">
                    {course.description}
                  </p>
                  <Link 
                    href={`/courses/${course.slug}`}
                    className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-teal-600 text-white shadow-md hover:bg-teal-700 transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-20 text-center">
          <Link
            href="/courses"
            className="px-6 py-2 rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 hover:scale-105 "
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;
