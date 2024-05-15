import React, { useEffect, useState } from "react";
import CvImage from "../assets/recume.png";
import cv from "../assets/cvvv.png";
import secontPortionImg from "../assets/secondPortionImg.png";
import tailored from "../assets/tailored.png";
import { Link } from "react-router-dom";
import useSubscribe from "../hooks/useSubscribe";
import toast from "react-hot-toast";

import "../style/home.style.css";
import DescriptionSection from "./Description Section/DescriptionSection.jsx";
import Section5 from "../pages/Fifth Section/Section5.jsx";
import MemberSection from "../pages/MemberSection.jsx";

function Home() {
  const [currentImage, setCurrentImage] = useState(CvImage);
  const [templateOption, setTemplateOption] = useState(true);
  const [templateOption1, setTemplateOption1] = useState(false);
  const [templateOption2, setTemplateOption2] = useState(false);
  const [templateOption3, setTemplateOption3] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("user-token"));
  }, [localStorage.getItem("user-token")]);
  // const token = localStorage.getItem("user-token");

  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  const [hoveredImg, setHoveredImg] = useState(null);

  const handleTemplateOption = () => {
    setTemplateOption(true);
    setTemplateOption1(false);
    setTemplateOption2(false);
    setTemplateOption3(false);
  };
  const handleTemplateOption1 = () => {
    setTemplateOption1(true);
    setTemplateOption2(false);
    setTemplateOption3(false);
    setTemplateOption(false);
  };
  const handleTemplateOption2 = () => {
    setTemplateOption1(false);
    setTemplateOption2(true);
    setTemplateOption3(false);
    setTemplateOption(false);
  };
  const handleTemplateOption3 = () => {
    setTemplateOption1(false);
    setTemplateOption2(false);
    setTemplateOption3(true);
    setTemplateOption(false);
  };

  //subscribe for email

  const [email, setEmail] = useState("");
  const { loading, subscribe } = useSubscribe();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    await subscribe({
      email: email,
    });

    setEmail("");
  };

  const handleSubscribe = () => {
    // alert("please login");
    toast.error("please login");
  };

  return (
    <>
      <div className="bg-gray-300">
        {/* Hero Section */}

        <section className="grid gap-10 lg:grid-cols-2 md:items-center md:justify-center w-full mt-32">
          <div className="md:text-center md:pr-10">
            <div>
              <p className="text-4xl md:text-5xl font-bold mb-3 md:mb-5">
                Build a professional resume for free
              </p>
              <p className="text-lg md:text-2x">
                Build beautiful, recruiter-tested resumes in a few clicks!
                <br />
                Our resume builder is powerful and easy to use, with
                <br />a range of amazing functions. Custom-tailor resumes
                <br />
                for any job within minutes. Increase your interview
                <br />
                chances and rise above the competition.
              </p>
            </div>
            <div className="flex gap-5 justify-center mt-3 md:mt-5">
              <Link to="/cvtemp" className="heroSectionBtn">
                Try for Free
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full md:max-w-lg rounded-lg"
              src={tailored}
              alt="Resume Preview"
            />
          </div>
        </section>

        <div className="flex justify-center items-center flex-col mt-28 text-5xl font-bold ">
          <p className=" ">Land your dream job with the</p>
          <p> help of our resume builder</p>
        </div>

        {/* Tutorials Of resume  2nd Section */}

        <div className="flex justify-around min-h-[50] mt-28 ml-40 ">
          <img className="secondsectionImg" src={secontPortionImg} alt="" />
          <div className="flex flex-col gap-8 min-h-[50] justify-center  ">
            <div
              className="pl-20 bg-gray-200 pt-3 pb-3 pr-10 cursor-pointer rounded-md"
              onClick={() => handleImageChange(secontPortionImg)}
            >
              <p className="text-2xl font-bold pb-3">
                Intuitive Resume Builder
              </p>
              <p>Build your resume easily with our step by step</p>
            </div>
            <div
              className="text-2xl font-bold pl-20 hover:bg-gray-200 cursor-pointer pt-3 pb-3 pr-10 rounded-md"
              onClick={() => handleImageChange(OtherImage1)}
            >
              <p>A Resume Tailored to your job</p>
            </div>
            <div
              className="text-2xl font-bold pl-20 hover:bg-gray-200 cursor-pointer pt-3 pb-3 pr-10 rounded-md mt-0"
              onClick={() => handleImageChange(OtherImage2)}
            >
              <p>Free Download</p>
            </div>
          </div>
        </div>

        {/* Selection Of Template 3rd Section */}

        <div className="  min-h-[70vh] w-100vw">
          <div className="pt-10 mt-28 flex flex-col gap-10">
            <div className="detail text-4xl font-bold flex justify-center items-center">
              <p>Every detail on your resume, built to perfection</p>
            </div>
            <div className="selection-model flex justify-center gap-28 font-bold text-2xl ">
              <div className="text-gray-500 hover:text-gray-800">
                <button onClick={handleTemplateOption}>EDUCATION</button>
              </div>
              <div className="text-gray-500 hover:text-gray-800">
                <button onClick={handleTemplateOption1}>SKILL</button>
              </div>
              <div className="text-gray-500 hover:text-gray-800">
                <button onClick={handleTemplateOption2}>EXPERIENCE</button>
              </div>
              <div className="text-gray-500 hover:text-gray-800">
                <button onClick={handleTemplateOption3}>PERSONALITY</button>
              </div>
            </div>
            <div className="about-template min-w-[95vw] mx-auto">
              <hr />
            </div>

            {templateOption && (
              <div>
                <p className="mb-10 text-xl font-bold flex justify-around">
                  Highlight the academic background that makes you shine.
                </p>
                <div className="flex max-w-[80vw] mx-auto gap-32">
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(1)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 1 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(1)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 1 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(2)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 2 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(2)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 2 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(3)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 3 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(3)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 3 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {templateOption1 && (
              <div>
                <p className="mb-10 text-xl font-bold flex justify-around">
                  Demonstrate the skills that put you a step ahead of the rest.
                </p>
                <div className="flex max-w-[80vw] mx-auto gap-32">
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(1)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 1 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(1)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 1 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(2)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 2 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(2)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 2 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(3)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 3 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(3)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 3 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
            {templateOption2 && (
              <div>
                <p className="mb-10 text-xl font-bold flex justify-around">
                  Let your experience show you’re ready for the next step in
                  your career.
                </p>
                <div className="flex max-w-[80vw] mx-auto gap-32">
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(1)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 1 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(1)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 1 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(2)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 2 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(2)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 2 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(3)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 3 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(3)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 3 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {templateOption3 && (
              <div>
                <p className="mb-10 text-xl font-bold flex justify-around">
                  Show that you’re more than just your experience.
                </p>
                <div className="flex max-w-[80vw] mx-auto gap-32">
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(1)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 1 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(1)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 1 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(2)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 2 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(2)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 2 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                  {token ? (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(3)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/grayTemplate">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 3 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  ) : (
                    <div
                      className="img-container relative "
                      onMouseEnter={() => setHoveredImg(3)}
                      onMouseLeave={() => setHoveredImg(null)}
                    >
                      <Link to="/login">
                        <img className="templateImg" src={CvImage} alt="" />

                        {hoveredImg === 3 && (
                          <button className="btn absolute  top-[193px] left-[123px]">
                            Use This Tempalte
                          </button>
                        )}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* 4th section */}

        {/* Description Section */}
        <div className="mt-28 mb-10">
          <DescriptionSection />
        </div>

        {/* End of Description Section */}

        {/* Start Member section */}
        <div className="mt-28 mb-10">
          <MemberSection />
        </div>
        {/* End Member section */}

        {/* 5th section */}

        <div className="mt-28 mb-10">
          <Section5 />
        </div>
        {/* END of 5th section */}

        <div>
          <form onSubmit={handleSubmit}>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                  name="email"
                  value={email}
                  required
                />
                {token ? (
                  <button type="submit" className="btn join-item btn-success">
                    Subscribe
                  </button>
                ) : (
                  <span
                    className="btn join-item btn-success"
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </span>
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
