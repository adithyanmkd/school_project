// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { Card } from "flowbite-react"; // Use Flowbite's Card component for consistency

const Home = () => {
  // Sample data for a parent's view (replace with actual data from your backend)
  const child = {
    name: "Alex Johnson",
    attendanceRate: 92, // Percentage
    averageGrade: "B+",
  };

  const recentActivities = [
    {
      id: 1,
      action: "Attendance marked: Present",
      timestamp: "2025-05-10 08:00 AM",
    },
    {
      id: 2,
      action: "Math assignment submitted",
      timestamp: "2025-05-09 02:30 PM",
    },
    {
      id: 3,
      action: "Received teacher note: Well done!",
      timestamp: "2025-05-08 10:00 AM",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome, Parent of {child.name}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Stay updated on your child’s academic progress and attendance.
        </p>
      </header>

      {/* Quick Actions */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              View Attendance
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Check your child’s attendance records.
            </p>
            <Link
              to="/attendance/reports"
              className="mt-3 inline-block rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Attendance
            </Link>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Check Grades
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              See your child’s academic performance.
            </p>
            <Link
              to="/academic/grades"
              className="mt-3 inline-block rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Grades
            </Link>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Contact Teacher
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Send a message to your child’s teacher.
            </p>
            <Link
              to="/contact-teacher"
              className="mt-3 inline-block rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact Teacher
            </Link>
          </Card>
        </div>
      </section>

      {/* Child's Recent Activity */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          {child.name}’s Recent Activity
        </h2>
        <Card className="bg-white dark:bg-gray-800">
          <ul className="space-y-3">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="flex justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">
                  {activity.action}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {activity.timestamp}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Child's Stats */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          {child.name}’s Stats
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Attendance Rate
            </h3>
            <p className="mt-1 text-2xl font-bold text-gray-700 dark:text-gray-300">
              {child.attendanceRate}%
            </p>
          </Card>
          <Card className="bg-white dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Average Grade
            </h3>
            <p className="mt-1 text-2xl font-bold text-gray-700 dark:text-gray-300">
              {child.averageGrade}
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
