import { useState } from 'react';

const gradeMapping = [
  { min: 80, max: 100, grade: 'A+', point: 4.0 },
  { min: 75, max: 79, grade: 'A', point: 3.75 },
  { min: 70, max: 74, grade: 'A-', point: 3.5 },
  { min: 65, max: 69, grade: 'B+', point: 3.25 },
  { min: 60, max: 64, grade: 'B', point: 3.0 },
  { min: 55, max: 59, grade: 'B-', point: 2.75 },
  { min: 50, max: 54, grade: 'C+', point: 2.5 },
  { min: 45, max: 49, grade: 'C', point: 2.25 },
  { min: 40, max: 44, grade: 'D', point: 2.0 },
  { min: 0, max: 39, grade: 'F', point: 0.0 },
];

const getGradeFromMarks = (marks) => {
  for (let entry of gradeMapping) {
    if (marks >= entry.min && marks <= entry.max) {
      return entry;
    }
  }
  return { grade: '', point: 0.0 };
};

const subjects = [
  { name: 'Bangla Language and Literature', credits: 3 },
  { name: 'Developing Language Skill', credits: 3 },
  { name: 'Physics-1', credits: 3 },
  { name: 'Physics-1 Lab', credits: 1 },
  { name: 'Computer Fundamentals', credits: 3 },
  { name: 'Computer Fundamentals Lab', credits: 1.5 },
];

export default function FixedSemesterCGPACalculator() {
  const [data, setData] = useState(
    subjects.map((subj) => ({
      ...subj,
      ct1: '',
      ct2: '',
      mid: '',
      final: '',
      attendance: '',
      total: 0,
      grade: '',
      point: 0.0,
    }))
  );

  const [cgpa, setCGPA] = useState('0.00');

  const handleChange = (index, field, value) => {
    const maxLimits = {
      ct1: 10,
      ct2: 10,
      mid: 30,
      final: 40,
      attendance: 10,
    };

    const newData = [...data];
    const numericValue = parseFloat(value);
    const cappedValue = Math.min(numericValue, maxLimits[field]);

    newData[index][field] = isNaN(cappedValue) ? '' : cappedValue;
    setData(newData);
  };

  const calculateSubjectTotal = (item) => {
    const ct1 = parseFloat(item.ct1) || 0;
    const ct2 = parseFloat(item.ct2) || 0;
    const mid = parseFloat(item.mid) || 0;
    const final = parseFloat(item.final) || 0;
    const attendance = parseFloat(item.attendance) || 0;

    const total =
      (ct1 / 10) * 10 +
      (ct2 / 10) * 10 +
      (mid / 30) * 30 +
      (final / 40) * 40 +
      (attendance / 10) * 10;

    return total;
  };

  const handleCalculate = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    const updatedData = data.map((item) => {
      const totalMark = calculateSubjectTotal(item);
      const gradeData = getGradeFromMarks(totalMark);
      const credit = parseFloat(item.credits);
      totalPoints += gradeData.point * credit;
      totalCredits += credit;

      return {
        ...item,
        total: totalMark.toFixed(2),
        grade: gradeData.grade,
        point: gradeData.point,
      };
    });

    setData(updatedData);
    setCGPA(totalCredits ? (totalPoints / totalCredits).toFixed(2) : '0.00');
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 sm:p-6 bg-white shadow rounded">
      <h1 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 text-center">
        📚 Fixed Semester CGPA Calculator
      </h1>

      {data.map((item, idx) => (
        <div key={idx} className="mb-6 border-b pb-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            {item.name} <span className="text-sm">({item.credits} Credit)</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            <input
              type="number"
              value={item.ct1}
              onChange={(e) => handleChange(idx, 'ct1', e.target.value)}
              placeholder="CT1 (10)"
              min="0"
              max="10"
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              value={item.ct2}
              onChange={(e) => handleChange(idx, 'ct2', e.target.value)}
              placeholder="CT2 (10)"
              min="0"
              max="10"
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              value={item.mid}
              onChange={(e) => handleChange(idx, 'mid', e.target.value)}
              placeholder="Mid (30)"
              min="0"
              max="30"
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              value={item.final}
              onChange={(e) => handleChange(idx, 'final', e.target.value)}
              placeholder="Final (40)"
              min="0"
              max="40"
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              value={item.attendance}
              onChange={(e) => handleChange(idx, 'attendance', e.target.value)}
              placeholder="Attendance (10)"
              min="0"
              max="10"
              className="border p-2 rounded w-full"
            />
          </div>
          {item.total !== undefined && (
            <p className="mt-2 text-sm text-gray-600">
              Total: <span className="font-medium">{item.total}</span> | Grade: <span className="font-medium">{item.grade}</span> | Point: <span className="font-medium">{item.point}</span>
            </p>
          )}
        </div>
      ))}

      <div className="text-center">
        <button
          onClick={handleCalculate}
          className="bg-orange-500 text-white px-6 py-2 mt-4 rounded font-semibold hover:bg-orange-600 transition"
        >
          🎓 Calculate CGPA
        </button>

        <div className="text-xl font-semibold mt-6">
          Total CGPA: <span className="text-black">{cgpa}</span>
        </div>
      </div>
    </div>
  );
}
