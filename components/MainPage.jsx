import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/recordsFunctions";



const MainPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();

      setRecords(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);

      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleUpdateRecord = (id) => {
    router.push(`/records/edit?id=${id}`);
  };

  const handleCreateRecord = () => {
    router.push(`/records/create`);
  };

  const handleChat = () => {
    router.push(`/chat`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <button
                    className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => handleCreateRecord()}
                >
                    Create
                </button>
                <button
                    className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => handleChat()}
                >
                    Ask chat
                </button>
      {records.map((record) => (
        <div
          className="bg-red-500 border border-gray-200 rounded-lg shadow-md text-white"
          key={record._id}
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {record.grand_prix}
            </h3>
            <p className="text-white  mb-4">
              <span className="font-semibold">Date:</span> {record.date}
            </p>
            <p className="text-white  mb-4">
              <span className="font-semibold">Winner:</span> {record.winner}
            </p>
            <p className="text-white  mb-4">
              <span className="font-semibold">Team:</span> {record.team}
            </p>
            <p className="text-white  mb-4">
              <span className="font-semibold">Opinion:</span> {record.opinion}
            </p>
            <div className="flex justify-center">
                <button
                    className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={() => handleUpdateRecord(record._id)}
                >
                    Update
                </button>
              <button
                className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => handleDeleteRecord(record._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
