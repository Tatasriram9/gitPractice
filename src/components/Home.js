import React from 'react'
import { Link } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import imgbusiness from "../assets/black-businessman-4599847_1280.jpg"

const Home = () => {
  return (
    <>
    <div className="site-container font-sans">
      <div className="container mx-auto mb-1 flex px-5 py-6 md:py-24 md:flex-row flex-col items-center">
        <div className="center mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-2xl bg-[#575757]"
            alt=""
            src={imgbusiness}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-10 font-bold">
            Hilmi Can Taşkran
          </h1>
          <div className="mb-10 leading-relaxed">
            <p className="mb-1">
              Hey, I'm Hilmi Can. I'm the Software Engineer at
              <Link href="#" className="font-bold">
                {' '}
                Eteration
              </Link>
              .
            </p>
            <p>
              I develop web applications using React and Next.js, and mobile
              applications using React Native. I do open source developments
              on
              <Link
                href="#"
                className="hover px-1 font-bold"
              >
                Github
              </Link>
              .
            </p>
          </div>
          <div>
            <p className="font-bold">Reach me at:</p>
            <div className="flex gap-4 mt-2">
              <Link href="mailto:sulthanbashasyed2020@gmail.com">
              <MdAttachEmail />
              </Link>
              <Link href="#">
              <ImInstagram />
              </Link>
              <Link href="#">
              <FaTwitter />
              </Link>
              <Link href="#">
              <FaLinkedin />

              </Link>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </>
  )
}

export default Home