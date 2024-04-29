import { Github } from "lucide-react";

const About = () => {
  return (
    <div className="py-8">
      <div className="w-full px-4 py-5 rounded-lg grow bg-dark-lighter">
        <h1 className="mb-2 text-2xl font-bold text-white ">This project</h1>
        <p className="text-lg leading-normal text-left text-white">
          This simple to-do list app built with React and Tailwind CSS is for
          learning purposes. I created it to solidify my understanding of core
          React concepts.
        </p>
      </div>
      <div className="w-full px-4 py-5 mt-6 rounded-lg grow bg-dark-lighter">
        <h1 className="mb-2 text-2xl font-bold text-white ">Objectives</h1>
        <p className="text-lg leading-normal text-left text-white">
          I built this to-do list to delve deeper into React fundamentals like
          state management, component behavior, and rendering using:{" "}
          <code>useState</code>, <code>useContext</code>,...
        </p>
      </div>
      <div className="w-full px-4 py-5 mt-6 rounded-lg grow bg-dark-lighter">
        <h1 className="mb-2 text-2xl font-bold text-white">Credits</h1>
        <div className="text-lg text-left text-white">
          <p>Author: Nhat Khai</p>
          <p>Feel free to check out the source code on Github.</p>
          <p className="flex items-center gap-2">
            Source:
            <a
              className="inline-flex"
              href="https://github.com/dyrus1107/simple-todo"
            >
              <Github /> - <span className="underline">Github</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
