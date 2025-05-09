// src/pages/AttendanceReport.jsx
import { Card } from "flowbite-react";

const AttendanceReport = () => {
  // Sample data for the child's attendance (replace with actual data from your backend)
  const child = {
    name: "Alex Johnson",
    totalDays: 30, // Total school days in the period
    daysPresent: 27,
    daysAbsent: 3,
  };

  const attendanceRecords = [
    { id: 1, date: "2025-05-10", status: "Present" },
    { id: 2, date: "2025-05-09", status: "Present" },
    { id: 3, date: "2025-05-08", status: "Absent" },
    { id: 4, date: "2025-05-07", status: "Present" },
    { id: 5, date: "2025-05-06", status: "Present" },
  ];

  // Calculate attendance percentage
  const attendancePercentage = (
    (child.daysPresent / child.totalDays) *
    100
  ).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Attendance Report for {child.name}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          View your child’s attendance details for the current term.
        </p>
      </header>

      {/* Summary Section */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Summary
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Days Present
            </h3>
            <p className="mt-1 text-2xl font-bold text-gray-700 dark:text-gray-300">
              {child.daysPresent}
            </p>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Days Absent
            </h3>
            <p className="mt-1 text-2xl font-bold text-gray-700 dark:text-gray-300">
              {child.daysAbsent}
            </p>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Attendance Rate
            </h3>
            <p className="mt-1 text-2xl font-bold text-gray-700 dark:text-gray-300">
              {attendancePercentage}%
            </p>
          </Card>
        </div>
      </section>

      {/* Detailed Report */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Detailed Attendance Records
        </h2>
        <Card className="bg-white dark:bg-gray-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <td className="px-6 py-4">{record.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                          record.status === "Present"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default AttendanceReport;
