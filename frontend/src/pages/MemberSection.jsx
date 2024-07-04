import React from "react";
import img1 from "../assets/abhishek.jpg";
import img2 from "../assets/sushil.jpg";
import img3 from "../assets/rohan.jpg";
import img4 from "../assets/shivam.jpg";

import MemberSection1 from "./MemberSection1";

export default function MemberSection() {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-3xl md:text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
          People who made it successful
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl"></p>
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
          memberName={"Sushil Thakur"}
          memberPosition={"Helper"}
          facebookLink={
            "https://www.facebook.com/profile.php?id=100080029884090"
          }
          instaLink={"https://www.instagram.com/sushill.aa/"}
          aboutMember={"Helping our Team to improve"}
        />
        <MemberSection1
          imgLink={img3}
          memberName={"Rohan Thakur"}
          memberPosition={"Project Manager"}
          facebookLink={"https://www.facebook.com/raghbendra.thakur.71"}
          instaLink={"https://www.instagram.com/iamnotrohan_/"}
          aboutMember={"Managing the project"}
        />
        <MemberSection1
          imgLink={img4}
          memberName={"Shivam Kumar Sah"}
          memberPosition={"Designer & Contributor"}
          facebookLink={
            "https://www.facebook.com/profile.php?id=100062786209367"
          }
          instaLink={"https://www.instagram.com/shivam_shah05/"}
          aboutMember={" Design of MeroCV "}
        />
      </div>
    </div>
  );
}
