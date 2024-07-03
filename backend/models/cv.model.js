import mongoose from "mongoose";

const cvSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }, // Corrected field name
    image: {
      type: String,
    },
    aboutInfo: {
      type: {
        firstName: String,
        middleName: String,
        lastName: String,
        title: String,
        address: String,
        site: String,
        linkedIn: String,
        email: String,
        phone: Number,
        summary: String,
      },
    },
    workExperience: [
      {
        company: {
          type: String,
        },
        position: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    education: [
      {
        school: {
          type: String,
        },
        collage: {
          type: String,
        },
        university: {
          type: String,
        },
        schoolDegree: {
          type: String,
        },
        collageDegree: {
          type: String,
        },
        universityDegree: {
          type: String,
        },
        schoolStartDate: {
          type: String,
        },
        schoolEndDate: {
          type: String,
        },
        collageStartDate: {
          type: String,
        },
        collageEndDate: {
          type: String,
        },
        universityStartDate: {
          type: String,
        },
        universityEndDate: {
          type: String,
        },
      },
    ],

    skills: [
      {
        skill: {
          type: String,
        },
      },
    ],
    languages: [
      {
        language: {
          type: String,
        },
      },
    ],
    projects: [
      {
        name: {
          type: String,
        },
        description: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
      },
    ],
    references: [
      {
        name: {
          type: String,
        },
        position: {
          type: String,
        },
        company: {
          type: String,
        },
        contact: {
          type: String,
        },
        email: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Cv = mongoose.model("Cv", cvSchema);

export default Cv;
