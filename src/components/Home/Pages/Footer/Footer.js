import React from "react";
import logo from "../../../../images/web-logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div>
              <img src={logo} className=" mr-12 w-64 " alt="logo" />
              <p className="max-w-xs mt-4 text-sm text-gray-600">
                              
              Solving Technology Challenges for a Sustainable World
              Align To Market Demands • Gain Competitive Advantage • Streamline a Smarter Supply Chain
              </p>
              <div className="flex mt-8 space-x-6 text-gray-600">
                <a
                  className="hover:opacity-75"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  className="hover:opacity-75"
                  href="https://www.linkedin.com/in/hamed-hasan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only "> Linkedin </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="text-gray-300 cursor-pointer opacity-70"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  className="hover:opacity-75"
                  href="https://github.com/hamed-hasan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> GitHub </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-medium">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    About{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Meet the Team{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    History{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Careers{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    1on1 Coaching{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Company Review{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Accounts Review{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    HR Consulting{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Helpful Links</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    Contact{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    FAQs{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Live Chat{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href>
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Terms &amp; Conditions{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Returns Policy{" "}
                  </a>
                  <a className="hover:opacity-75" href>
                    {" "}
                    Accessibility{" "}
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-800">
            © 2022 All Right Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
