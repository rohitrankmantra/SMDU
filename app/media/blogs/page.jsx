"use client";

import { useState } from "react";
import blogs from "@/data/blogsData";
import Image from "next/image";

const Page = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      {/* BLOG LIST */}
      {!activeBlog ? (
        <>
          {/* BLOGS HEADING */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3">Our Latest Blogs</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore insightful articles, academic updates, and educational
              knowledge from Smt. Manjira Devi University to support your
              learning and career growth.
            </p>
          </div>

          {/* BLOG CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="border p-4 rounded-lg">
                <div className="w-full h-55 relative rounded-md overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-xl font-semibold mt-3">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.shortDesc}</p>
                <button
                  onClick={() => setActiveBlog(blog)}
                  className="text-[#EA580C] mt-3 hover:cursor-pointer font-medium"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* SINGLE BLOG VIEW */
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setActiveBlog(null)}
            className="mb-6 text-sm text-white border p-3 rounded-lg bg-[#F46B13] hover:bg-[#d2580d] hover:cursor-pointer"
          >
            ← Back to Blogs
          </button>

          <div className="w-full h-75 md:h-150 relative mb-6 rounded-xl overflow-hidden">
            <Image
              src={activeBlog.image}
              alt={activeBlog.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="flex gap-4 text-sm text-gray-500 mb-3">
            <span className="bg-[#ffe9dc] text-[#F46B13] px-3 py-1 rounded-full">
              University Blog
            </span>
            <span className="bg-[#ffe9dc] text-[#F46B13] px-3 py-1 rounded-full">
              August 2026
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{activeBlog.title}</h1>

          <div className="text-gray-700 leading-7 space-y-5">
            {activeBlog.content.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
