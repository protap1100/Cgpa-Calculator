import { Link } from "react-router-dom";
import image from "../assets/2514.jpg";
import SectionTitle from "./SectionTitle";

const Batch2514Feature = () => {
  return (
    <div>
      <SectionTitle
        heading="🎓 Exclusive CGPA Calculator for 2514 CSE Batch"
        subHeading="Accurately calculate your 1st semester CGPA with full mark breakdown"
      />

      <section className="my-10 p-4 sm:p-6 bg-blue-50 rounded-2xl shadow-lg flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-10">
        {/* Text Content */}
        <div className="flex-1 w-full">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-700 mb-3 sm:mb-4">
            Designed Just for You – 2514 CSE Batch
          </h2>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5 text-justify">
            Use our specially crafted CGPA Calculator tailored exclusively for the <strong>2514 CSE Batch</strong>! 🎯 Enter your actual scores for each course and get instant, precise results for your 1st semester.
            <br /><br />
            🧾 Inputs include:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>CT-1 (Best before Midterm)</li>
              <li>CT-2 (Best after Midterm)</li>
              <li>Midterm & Final Exams</li>
              <li>Attendance or Assignment</li>
            </ul>
            <br />
            📊 The calculator totals your subject-wise marks, converts them into grade points using the official system, and gives your final semester CGPA instantly.
            <br /><br />
            📥 You can also download a well-formatted <strong>PDF report</strong> of all your marks, grades, and GPA — perfect for record keeping or sharing with teachers/advisors!
          </p>

          <Link
            to="/2514-CGPA"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold px-5 py-2.5 rounded-lg shadow-md transition"
          >
            🚀 Start CGPA Calculation
          </Link>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full">
          <img
            src={image}
            alt="2514 Batch CGPA Calculator"
            className="w-full rounded-xl object-cover shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Batch2514Feature;
