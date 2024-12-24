import { useEffect, useState } from "react";
import { fetchCandidate } from "../utils/function";

const CandidatesTable = () => {
  const [Candidates, setCandidates] = useState([
    {
        "id": 1,
        "name": "John Doe",
        "position": "Software Engineer",
        "experience": 5
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "position": "Data Scientist",
        "experience": 3
    },
    {
        "id": 3,
        "name": "Michael Brown",
        "position": "Product Manager",
        "experience": 7
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "position": "UX Designer",
        "experience": 4
    },
    {
        "id": 5,
        "name": "Daniel Johnson",
        "position": "DevOps Engineer",
        "experience": 6
    },
    {
        "id": 6,
        "name": "Sophia Martinez",
        "position": "Marketing Specialist",
        "experience": 2
    },
    {
        "id": 7,
        "name": "James Wilson",
        "position": "QA Engineer",
        "experience": 3
    },
    {
        "id": 8,
        "name": "Isabella Moore",
        "position": "Frontend Developer",
        "experience": 4
    },
    {
        "id": 9,
        "name": "Liam Taylor",
        "position": "Backend Developer",
        "experience": 5
    },
    {
        "id": 10,
        "name": "Olivia Anderson",
        "position": "Business Analyst",
        "experience": 3
    }
]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredCandidates = Candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.skills.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) => {
    return sortOrder === "asc"
      ? a.experience - b.experience
      : b.experience - a.experience;
  });

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  useEffect(()=>{
    fetchCandidate(setCandidates)
  },[])

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search by Name or Skills"
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex justify-end mb-4">
          <button
            onClick={handleSort}
            className="bg-blue-500 text-white px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sort
          </button>
        </div>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Skills</th>
            <th
              className="border border-gray-300 px-4 py-2 cursor-pointer"
              onClick={handleSort}
            >
              Years of Experience <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.length > 0 ? (
            sortedCandidates.map((candidate) => (
              <tr key={candidate.id} className="text-center hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {candidate.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {candidate.position}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {candidate.experience}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 px-4 py-2 text-center text-gray-500"
              >
                No candidates found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesTable;
