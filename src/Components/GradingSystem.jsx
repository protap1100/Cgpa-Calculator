import SectionTitle from "./SectionTitle";

// src/components/GradingSystem.jsx
const gradingData = [
  { grade: "A+", point: 4.0, marks: "80 - 100" },
  { grade: "A", point: 3.75, marks: "75 - 79" },
  { grade: "A-", point: 3.5, marks: "70 - 74" },
  { grade: "B+", point: 3.25, marks: "65 - 69" },
  { grade: "B", point: 3.0, marks: "60 - 64" },
  { grade: "B-", point: 2.75, marks: "55 - 59" },
  { grade: "C+", point: 2.5, marks: "50 - 54" },
  { grade: "C", point: 2.25, marks: "45 - 49" },
  { grade: "D", point: 2.0, marks: "40 - 44" },
  { grade: "F", point: 0.0, marks: "0 - 39" },
];

const GradingSystem = () => {
  return (
    <div>
      <SectionTitle
        heading="Official Grading System"
        subHeading="See how marks are converted to grades and grade points"
      />
      <div className=" my-6 p-4 border rounded shadow-sm bg-white">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Grading System
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-3 py-2 text-left bg-gray-100">Grade</th>
              <th className="border px-3 py-2 text-left bg-gray-100">
                Grade Point
              </th>
              <th className="border px-3 py-2 text-left bg-gray-100">
                Marks Range
              </th>
            </tr>
          </thead>
          <tbody>
            {gradingData.map(({ grade, point, marks }) => (
              <tr key={grade} className="even:bg-gray-50">
                <td className="border px-3 py-2">{grade}</td>
                <td className="border px-3 py-2">{point.toFixed(2)}</td>
                <td className="border px-3 py-2">{marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradingSystem;
