import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-center text-blue-600">
          About Our Task Manager
        </h1>
        <p className="mb-6 text-lg text-center text-gray-700">
          Simplify your daily tasks and boost your productivity with our powerful yet user-friendly task management application.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl font-bold text-blue-600 bg-blue-100 rounded-full">
              💡
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Purpose</h2>
            <p className="mt-2 text-gray-600">
              Our application is designed to help individuals and teams stay organized by managing their tasks effectively.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl font-bold text-green-600 bg-green-100 rounded-full">
              ✨
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Features</h2>
            <p className="mt-2 text-gray-600">
              Create, edit, and manage tasks with ease. Filter tasks by status, track completion, and much more!
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl font-bold text-yellow-600 bg-yellow-100 rounded-full">
              🚀
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Why Choose Us?</h2>
            <p className="mt-2 text-gray-600">
              With a sleek interface and real-time updates, our task manager is built for performance and usability.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 text-3xl font-bold text-red-600 bg-red-100 rounded-full">
              🔒
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Security</h2>
            <p className="mt-2 text-gray-600">
              Your data is secure with us. We ensure top-notch security and privacy for all your tasks.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            className="px-6 py-3 text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={() => window.location.href = "/"}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
