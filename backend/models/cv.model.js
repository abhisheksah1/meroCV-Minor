import mongoose from "mongoose";

const cvSchema = new mongoose.Schema({
  aboutInfo: {
    type: {
      firstName: String,
      middleName: String,
      lastName: String,
      gender: String,
      dateOfBirth: Date,
      nationality: String,
      occupation: String,
      maritalStatus: String,
      city: String,
      state: String,
      country: String,
      email: String,
      phone: Number,
      summary: String,
      designation: String,
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
        type: Date,
      },
      endDate: {
        type: Date,
      },
      description: {
        type: String,
      },
      technologies: {
        type: [String],
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
      degree: {
        type: String,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
  ],
  skills: {
    type: [String],
  },
  languages: {
    type: Object,

    properties: {
      language: String,
      proficiency: String,
    },
  },
  projects: [
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
      },
    },
  ],
  certifications: [
    {
      name: {
        type: String,
      },
      authority: {
        type: String,
      },
      dateIssued: {
        type: Date,
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
    },
  ],
});

const Cv = mongoose.model("Cv", cvSchema);

export default Cv;
