import React from "react";
import img1 from "../assets/abhishek.jpg";
import img2 from "../assets/priyanka.png";
import img3 from "../assets/hritik.jpg";
import img4 from "../assets/rahul.jpg";

import MemberSection1 from "./MemberSection1";

export default function MemberSection() {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-3xl md:text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
          People who made it successful
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
          
        </p>
      </div>
      <div className="mt-8  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MemberSection1
          imgLink={img1}
          memberName={"Abhishek Kumar Sah"}
          memberPosition={"Founder & CEO"}
          facebookLink={"https://www.facebook.com/Abheesah12?mibextid=ZbWKwL"}
          instaLink={
            "https://www.instagram.com/avi_sake01?igsh=MWxyMDlqb29wMGdkMg%3D%3D&utm_source=qr"
          }
          aboutMember={" Founder of MeroCV website. "}
        />
        <MemberSection1
          imgLink={img2}
          memberName={"Priyanka Kumari "}
          memberPosition={"Helper"}
          facebookLink={
            "https://www.facebook.com/profile.php?id=100055496693741"
          }
          instaLink={"https://www.instagram.com/priyankasah446/"}
          aboutMember={"Helping our Team to improve"}
        />
        <MemberSection1
          imgLink={img3}
          memberName={"Hritik Jaiswal"}
          memberPosition={"Project Manager"}
          facebookLink={"https://www.facebook.com/hritikjaiswal.com.np"}
          instaLink={"https://www.instagram.com/hritikjaiswal.com.np/"}
          aboutMember={"Managing the project"}
        />
        <MemberSection1
          imgLink={img4}
          memberName={"Rahul Jaiswal"}
          memberPosition={"Designer & Contributor"}
          facebookLink={"https://www.facebook.com/rahul.jaishwal.9235"}
          instaLink={"https://www.instagram.com/rahul_jaiswal4123/"}
          aboutMember={" Design of MeroCV "}
        />
      </div>
    </div>
  );
}
