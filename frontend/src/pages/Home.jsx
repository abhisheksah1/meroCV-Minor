import React, { useEffect, useState } from "react";
import CvImage from "../assets/cv.png";
import OtherImage1 from "../assets/pngwing.com.png";
import OtherImage2 from "../assets/bike.jpg";
import { Link } from "react-router-dom";
import useSubscribe from "../hooks/useSubscribe";
import toast from "react-hot-toast";
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
      <div>
        {/* Hero Section */}

        <div className="flex justify-around min-h-[50] mt-10 ">
          <div className="flex flex-col gap-4 min-h-[50] justify-center">
            <div>
              <p className="text-5xl font-bold mb-5 ">
                Build a professional resume for free
              </p>
              <p className="text-2xl ">
                Create your resume easily with our free builder and professional
                templates.
              </p>
            </div>
            <div className="flex gap-5">
              <Link to="/cvtemp" className="btn font-bold text-xl pl-5 ">
                Go to My Resume
              </Link>
              <Link
                to="/grayTemplate"
                className="btn bg-gray-800 text-white font-bold text-xl hover:bg-white hover:text-black"
              >
                Create New Resume
              </Link>
            </div>
          </div>
          <img
            className="min-h-[50vh] h-auto w-[30vw] shadow-md"
            src={CvImage}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col mt-28 text-5xl font-bold ">
          <p className=" ">Land your dream job with the</p>
          <p> help of our resume builder</p>
        </div>

        {/* Tutorials Of resume  2nd Section */}

        <div className="flex justify-around min-h-[50] mt-28 ml-40 ">
          <img
            className="min-h-[60vh] h-auto w-96 shadow-md"
            src={currentImage}
            alt=""
          />
          <div className="flex flex-col gap-8 min-h-[50] justify-center  ">
            <div
              className="pl-20 bg-gray-200 pt-3 pb-3 pr-10 cursor-pointer rounded-md"
              onClick={() => handleImageChange(CvImage)}
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
          <div className="pt-10 mt-52 flex flex-col gap-10">
            <div className="detail text-4xl font-bold flex justify-center items-center">
              <p>Every detail on your resume, built to perfection</p>
            </div>
            <div className="selection-model flex justify-center gap-28 font-bold text-2xl ">
              <div className="hover:text-gray-400">
                <button onClick={handleTemplateOption}>EDUCATION</button>
              </div>
              <div className="hover:text-gray-400">
                <button onClick={handleTemplateOption1}>SKILL</button>
              </div>
              <div className="hover:text-gray-400">
                <button onClick={handleTemplateOption2}>EXPERIENCE</button>
              </div>
              <div className="hover:text-gray-400">
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
                  <div
                    className="img-container relative "
                    onMouseEnter={() => setHoveredImg(1)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />

                      {hoveredImg === 1 && (
                        <button className="btn absolute  top-[193px] left-[123px]">
                          Use This Tempalte
                        </button>
                      )}
                    </Link>
                  </div>
                  <div
                    className="img-container relative"
                    onMouseEnter={() => setHoveredImg(2)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 2 && (
                        <button className="btn absolute top-[193px] left-[123px]">
                          Use This Tempalte
                        </button>
                      )}
                    </Link>
                  </div>
                  <div
                    className="img-container relative"
                    onMouseEnter={() => setHoveredImg(3)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 3 && (
                        <button className="btn absolute top-[193px] left-[123px]">
                          Use This Template
                        </button>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {templateOption1 && (
              <div>
                <p className="mb-10 text-xl font-bold flex justify-around">
                  Demonstrate the skills that put you a step ahead of the rest.
                </p>
                <div className="flex max-w-[80vw] mx-auto gap-32">
                  <div
                    className="img-container relative "
                    onMouseEnter={() => setHoveredImg(1)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 1 && (
                        <button className="btn absolute  top-[193px] left-[123px]">
                          Use This Tempalte
                        </button>
                      )}
                    </Link>
                  </div>
                  <div
                    className="img-container relative"
                    onMouseEnter={() => setHoveredImg(2)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 2 && (
                        <button className="btn absolute top-[193px] left-[123px]">
                          Use This Tempalte
                        </button>
                      )}
                    </Link>
                  </div>
                  <div
                    className="img-container relative"
                    onMouseEnter={() => setHoveredImg(3)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 3 && (
                        <button className="btn absolute top-[193px] left-[123px]">
                          Use This Template
                        </button>
                      )}
                    </Link>
                  </div>
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
                  <div
                    className="img-container relative "
                    onMouseEnter={() => setHoveredImg(1)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 1 && (
                        <button className="btn absolute  top-[193px] left-[123px]">
                          Use This Tempalte
                        </button>
                      )}
                    </Link>
                  </div>
                  <div
                    className="img-container relative"
                    onMouseEnter={() => setHoveredImg(2)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 2 && (
                        <button className="btn absolute top-[193px] left-[123px]">
                          Use This Tempalte
                        </button>
                      )}
                    </Link>
                  </div>
                  <div
                    className="img-container relative"
                    onMouseEnter={() => setHoveredImg(3)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 3 && (
                        <button className="btn absolute top-[193px] left-[123px]">
                          Use This Template
                        </button>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {templateOption3 && (
              <div>
                <p className="mb-10 text-xl font-bold flex justify-around">
                  Show that you’re more than just your experience.
                </p>
                <div className="flex max-w-[80vw] mx-auto gap-32">
                  <div
                    className="img-container relative "
                    onMouseEnter={() => setHoveredImg(1)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 1 && (
                        <button className="btn absolute  top-[193px] left-[123px]">
                          Use This Tempalte
                        </button>
                      )}
                    </Link>
                  </div>
                  <div
                    className="img-container relative"
                    onMouseEnter={() => setHoveredImg(2)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 2 && (
                        <button className="btn absolute top-[193px] left-[123px]">
                          Use This Tempalte
                        </button>
                      )}
                    </Link>
                  </div>
                  <div
                    className="img-container relative"
                    onMouseEnter={() => setHoveredImg(3)}
                    onMouseLeave={() => setHoveredImg(null)}
                  >
                    <Link to="/grayTemplate">
                      <img src={CvImage} alt="" />
                      {hoveredImg === 3 && (
                        <button className="btn absolute top-[193px] left-[123px]">
                          Use This Template
                        </button>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* 4th section */}

        <div className="flex flex-col justify-center items-center mt-28 ">
          <div>
            <p className="text-4xl font-bold mb-10">
              Why build my resume with MeroCV?
            </p>
          </div>
          <div className="flex gap-10 p-10 text-xl font-semibold">
            <div>
              <img src="" alt="" />
              <p className="text-3xl pb-5 font-semibold">We’re actually free</p>
              <p>No gimmicks, no freemium features, no joke.</p>
              <p>Get everything you need to build a</p>
              <p>professional resume that shows off your best</p>
              <p>qualities to help you land your next job.</p>
            </div>
            <div>
              <img src="" alt="" />
              <p className="text-3xl pb-5 font-bold">Data-Driven Templates</p>
              <p>Rest assured that the templates you find on</p>
              <p>Resume.com are the best around. Based on</p>
              <p>data from what employers want to see in</p>
              <p>candidates, we’ve created our templates with</p>
              <p>hiring in mind.</p>
            </div>
            <div>
              <img src="" alt="" />
              <p className="text-3xl pb-5 font-bold">Get Seen</p>
              <p>With your resume ready for top employers,</p>
              <p>easily share with millions of interested</p>
              <p>employers on Indeed, the world’s #1 job site.</p>
            </div>
          </div>
        </div>
        {/* 5th section */}
        <div className="flex flex-col justify-center items-center mt-28 gap-14">
          <div
            className="text-5xl font-bold flex
          flex-col items-center gap-2"
          >
            <p>Start building your resume</p>
            <p>today, land your dream job</p>
            <p>tomorrow</p>
          </div>
          <div>
            <Link
              to="/cvtemp"
              className="btn text-xl font-semibold pl-10 pr-10 mb-20"
            >
              Go to My Resume
            </Link>
          </div>
        </div>
        <div>
          <footer className="footer p-10 bg-base-200 text-base-content">
            <nav>
              <h6 className="footer-title">Job Seekers</h6>
              <button className="link link-hover">Build a Resume</button>
              <button className="link link-hover">Samples</button>
              <button className="link link-hover">Cover Letter Samples</button>
              <button className="link link-hover">Apps</button>
            </nav>
            <nav>
              <h6 className="footer-title">Resources</h6>
              <button className="link link-hover">Career Advice</button>
              <button className="link link-hover">Resumes</button>
              <button className="link link-hover">Career development</button>
              <button className="link link-hover">Getting a Job</button>
              <button className="link link-hover">Cover Letters</button>
              <button className="link link-hover">Interviewing</button>
            </nav>
            <nav>
              <h6 className="footer-title">Need Help?</h6>
              <button className="link link-hover">Help Center</button>
              <button className="link link-hover">About</button>
              <button className="link link-hover">Sitemap</button>
            </nav>
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
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
