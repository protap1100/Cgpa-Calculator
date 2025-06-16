import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";

const semesterLinks = {
  "1st Semester": {
    name: "1st Semester",
    path: "/cgpa/semester-1",
  },
  "2nd Semester": {
    name: "2nd Semester",
    path: "/cgpa/semester-2",
  },
};

const Tm2514 = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <SectionTitle
        heading={"Calculate Your CGPA"}
        subHeading={"Calculate your CGPA for each semester"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {Object.entries(semesterLinks).map(([key, { name, path }]) => (
          <Link
            key={key}
            to={path}
            className="bg-orange-500 hover:bg-orange-600 transition text-white p-4 rounded shadow text-center font-semibold"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tm2514;
