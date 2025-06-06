import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";

const gradeOptions = [
  { label: "A+", point: 4.0 },
  { label: "A", point: 3.75 },
  { label: "A-", point: 3.5 },
  { label: "B+", point: 3.25 },
  { label: "B", point: 3.0 },
  { label: "B-", point: 2.75 },
  { label: "C+", point: 2.5 },
  { label: "C", point: 2.25 },
  { label: "D", point: 2.0 },
  { label: "F", point: 0.0 },
];

const getGradeFromMarks = (marks) => {
  const m = parseFloat(marks);
  if (isNaN(m)) return "";
  if (m >= 80) return "A+";
  if (m >= 75) return "A";
  if (m >= 70) return "A-";
  if (m >= 65) return "B+";
  if (m >= 60) return "B";
  if (m >= 55) return "B-";
  if (m >= 50) return "C+";
  if (m >= 45) return "C";
  if (m >= 40) return "D";
  return "F";
};

const SubjectRow = ({ subject, onChange, onRemove }) => {
  const handleMarksChange = (e) => {
    const marks = e.target.value;
    const grade = getGradeFromMarks(marks);
    onChange("marks", marks);
    onChange("grade", grade);
  };

  return (
    <div className="relative border border-gray-200 rounded-lg p-3 mb-3 shadow-sm">
      <button
        onClick={onRemove}
        className="absolute top-3 right-2 px-4 py-2 border border-orange-400 text-orange-500 rounded-lg hover:bg-orange-50 text-sm font-medium transition cursor-pointer"
      >
        <h1 className="lg:inline hidden">Remove Subject</h1> ✖
      </button>

      <div className="mb-2">
        <input
          type="text"
          placeholder="Subject Name"
          value={subject.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="w-3/4 border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <input
          type="number"
          placeholder="Marks"
          value={subject.marks || ""}
          onChange={handleMarksChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <select
          value={subject.grade}
          onChange={(e) => onChange("grade", e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        >
          <option value="">Grade</option>
          {gradeOptions.map((g) => (
            <option key={g.label} value={g.label}>
              {g.label}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Credits"
          value={subject.credits}
          onChange={(e) => onChange("credits", e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
};

const Semester = ({ semester, index, updateSemester, removeSemester }) => {
  const updateSubject = (i, field, value) => {
    const updatedSubjects = [...semester.subjects];
    updatedSubjects[i][field] = value;
    updateSemester(index, { ...semester, subjects: updatedSubjects });
  };

  const addSubject = () => {
    updateSemester(index, {
      ...semester,
      subjects: [
        ...semester.subjects,
        { name: "", grade: "", credits: "", marks: "" },
      ],
    });
  };

  const removeSubject = (i) => {
    const updatedSubjects = semester.subjects.filter((_, idx) => idx !== i);
    updateSemester(index, { ...semester, subjects: updatedSubjects });
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    semester.subjects.forEach(({ grade, credits }) => {
      const gradeObj = gradeOptions.find((g) => g.label === grade);
      const point = gradeObj ? gradeObj.point : 0;
      const credit = parseFloat(credits);
      if (!isNaN(credit)) {
        totalPoints += point * credit;
        totalCredits += credit;
      }
    });
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <div className="bg-white border rounded-lg p-5 mb-6 shadow-md">
       
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700">
          Semester {index + 1}
        </h2>
        {index !== 0 && (
          <button
            onClick={() => removeSemester(index)}
            className="text-gray-400 hover:text-red-600 text-2xl"
          >
            ✖
          </button>
        )}
      </div>
      {semester.subjects.map((subject, i) => (
        <SubjectRow
          key={i}
          subject={subject}
          onChange={(field, value) => updateSubject(i, field, value)}
          onRemove={() => removeSubject(i)}
        />
      ))}
      <div className="flex flex-wrap items-center justify-between mt-4">
        <p className="font-medium text-gray-700">
          Semester {index + 1} GPA:{" "}
          <span className="font-bold text-black">{calculateGPA()}</span>
        </p>
        <button
          onClick={addSubject}
          className="px-4 py-1.5 border border-orange-400 text-orange-500 rounded-lg hover:bg-orange-50 text-sm font-medium transition cursor-pointer"
        >
          ADD SUBJECT
        </button>
      </div>
    </div>
  );
};

export default function CGPACalculator() {
  const [semesters, setSemesters] = useState([
    { subjects: [{ name: "", grade: "", credits: "", marks: "" }] },
  ]);

  const updateSemester = (index, updatedSemester) => {
    const updated = [...semesters];
    updated[index] = updatedSemester;
    setSemesters(updated);
  };

  const addSemester = () => {
    setSemesters([
      ...semesters,
      { subjects: [{ name: "", grade: "", credits: "", marks: "" }] },
    ]);
  };

  const removeSemester = (index) => {
    const updated = semesters.filter((_, i) => i !== index);
    setSemesters(updated);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    semesters.forEach((sem) => {
      sem.subjects.forEach(({ grade, credits }) => {
        const gradeObj = gradeOptions.find((g) => g.label === grade);
        const point = gradeObj ? gradeObj.point : 0;
        const credit = parseFloat(credits);
        if (!isNaN(credit)) {
          totalPoints += point * credit;
          totalCredits += credit;
        }
      });
    });
    return totalCredits ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {semesters.map((sem, idx) => (
        <Semester
          key={idx}
          semester={sem}
          index={idx}
          updateSemester={updateSemester}
          removeSemester={removeSemester}
        />
      ))}

      <div className="flex flex-wrap justify-between items-center border-t pt-6 mt-4">
        <button
          onClick={addSemester}
          className="px-5 py-2 border border-orange-400 text-orange-500 rounded-lg hover:bg-orange-50 transition text-sm font-semibold"
        >
          ADD NEXT SEMESTER
        </button>
        <p className="text-gray-700 font-medium text-lg">
          Your CGPA:{" "}
          <span className="font-bold text-black">{calculateCGPA()}</span>
        </p>
      </div>
    </div>
  );
}
