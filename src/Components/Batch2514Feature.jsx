import { Link } from "react-router-dom";
import image from "../assets/2514.jpg";
import SectionTitle from "./SectionTitle";

const Batch2514Feature = () => {
  return (
    <div>
      <SectionTitle
        heading="Exclusive CGPA Calculator for Batch 2514"
        subHeading="Easily calculate your semester CGPA by entering your marks"
      ></SectionTitle>
      <section className="my-10 p-6 bg-blue-50 rounded shadow-md flex flex-row items-center gap-6">
        <img
          src={image}
          alt="2514 Batch Exclusive"
          className="w-full  rounded shadow-md object-cover"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            🎓 Exclusive for 2514 CSE Batch
          </h2>
          <p className="mb-4 text-gray-700 max-w-md">
            Use our specially designed CGPA calculator tailored for the 2514 CSE
            batch. Get accurate results based on your semester courses and
            scores.
          </p>
          <Link
            to="/2514-CGPA"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Calculate Your CGPA
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Batch2514Feature;
