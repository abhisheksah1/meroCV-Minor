import React, { useState } from "react";
import useSubscribe from "../../hooks/useSubscribe";
import toast from "react-hot-toast";

export default function Cta() {
  // State for storing the email address
  const [email, setEmail] = useState("");
  // Custom hook for subscribing, which provides loading state and subscribe function
  const { loading, subscribe } = useSubscribe();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent submission if already loading
    if (loading) {
      return;
    }
    // Call subscribe function with the email
    await subscribe({
      email: email,
    });
    // Reset the email input after submission
    setEmail("");
  };

  // Get the user token from localStorage
  const token = localStorage.getItem("user-token");

  // Function to handle subscription when user is not logged in
  const handleSubscribe = () => {
    // Show an error message using toast if user is not logged in
    toast.error("Please login");
  };
  return (
    <section>
      <div className="px-2 lg:flex lg:flex-row lg:items-center mb-20 mt-28">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Get full access to Platform
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600"></p>

            <form onSubmit={handleSubmit} className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-900 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-1  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                  />
                  {token ? (
                    <button
                      type="submit"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Subscribe
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      onClick={handleSubscribe}
                    >
                      Subscribe
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="ManWith Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
