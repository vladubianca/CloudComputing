import React, { useState } from "react";
import { useRouter } from "next/router";

const RecordForm = (props) => {
  const { data, onSubmit } = props;
  const router = useRouter();
  const [entry, setEntry] = useState(data);

  const updateEntry = (type, value) => {
    setEntry({ ...entry, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }

  return (
    <div className="flex justify-center p-4">
      <div className="border p-4 rounded-md shadow-sm flex flex-col gap-4 w-full max-w-80">
        <div>
          <label
            htmlFor="grand_prix"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Grand Prix
          </label>
          <input
            type="text"
            id="grand_prix"
            value={entry.grand_prix}
            onChange={(e) => updateEntry("grand_prix", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Grand Prix"
            required
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date
          </label>
          <input
            type="text"
            id="date"
            value={entry.date}
            onChange={(e) => updateEntry("date", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Date"
            required
          />
        </div>
        <div>
          <label
            htmlFor="winner"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Winner
          </label>
          <input
            type="text"
            id="winner"
            value={entry.winner}
            onChange={(e) => updateEntry("winner", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Winner"
            required
          />
        </div>
        <div>
          <label
            htmlFor="team"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Team
          </label>
          <input
            type="text"
            id="team"
            value={entry.team}
            onChange={(e) => updateEntry("team", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Team"
            required
          />
        </div>
        <div>
          <label
            htmlFor="opinion"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Opinion
          </label>
          <textarea
            id="opinion"
            rows="4"
            value={entry.opinion}
            onChange={(e) => updateEntry("opinion", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your opinion here..."
          ></textarea>
        </div>
        <div className="w-full flex justify-center gap-4">
            <button
            type="button"
            onClick={handleCancel}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(entry)}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {entry._id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordForm;