import React, { useState } from "react";
import { useLoginContext } from "../../context/useContext";
import axios from "axios";
import Tosat from "react-hot-toast"

function FeedbackForm() {
  const { showFeedback, setShowFeedback } = useLoginContext();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedback = { name, message };
    try {
      await axios.post(
        "http://localhost:8000/api/feedback/postfeedback",
        feedback
      );
      setName("");
      setMessage("");
      setShowFeedback(false);
      Tosat.success("Feedback Successful") // Close the feedback form after successful submission
    } catch (err) {
      console.error(err);
      Tosat.error("Failed to submit feedback") // Show an error message if the submission fails
    }
  };

  return (
    <div className="relative z-50">
      {showFeedback && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl animate-slideDown">
            <div className="flex justify-end gap-5 font-semibold">
              <button
                type="button"
                className="float-right"
                onClick={() => {
                  setShowFeedback(false);
                }}
              >
                ✖
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <label className="flex justify-center pb-10 font-bold text-2xl">
                  <span>Feedback</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Full Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
