import React, { useState } from "react";
import { useLoginContext } from "../../context/useContext";
import Toast from "react-hot-toast";

function ForgotPass() {
  const { setShowLogin, showReset, setShowReset } = useLoginContext();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      Toast.error("Please fill the email input");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8000/api/user/forgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        Toast.success("Check your email to reset your password");
        setShowReset(true); // Update state to indicate email sent
      } else {
        Toast.error(data.message || "User not found");
      }
    } catch (error) {
      console.log(error);
      Toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const backhandler = () => {
    setShowReset(false);
    setShowLogin(true);
  };

  return (
    showReset && (
      <div className="relative z-50">
        {showReset && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-end gap-5 font-semibold">
                    <button
                      className=" float-right"
                      onClick={() => {
                        setShowReset(false);
                      }}
                    >
                      ✖
                    </button>
                  </div>
                  <label className="flex justify-center pb-10 font-bold text-2xl">
                    <span>Recover your Password</span>
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className="flex items-center justify-between pt-10">
                  <div>
                    <button
                      onClick={backhandler}
                      className="hover:border-b-2 border-spacing-2 border-[black] "
                    >
                      Go back
                    </button>
                  </div>
                  <div>
                    <button className="btn" disabled={loading}>
                      {loading ? (
                        <span className="loading loading-spinner loading-md"></span>
                      ) : (
                        "Reset"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default ForgotPass;
