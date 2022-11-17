import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DirectoryList = () => {
  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    getDirectories();
  }, []);

  const getDirectories = async () => {
    const response = await axios.get("http://localhost:8005/api/v1/directories");
    setDirectory(response.data);
  };
  console.log(directory)
  const deleteDirectory = async (id) => {
    try {
      await axios.delete(`http://localhost:8005/api/v1/directories${id}`);
      getDirectories();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Jurnal</th>
              <th>Tahun</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {directory?.data?.directories?.length>0 && directory.data.directories.map((directory, index) => (
              <tr key={directory.id}>
                <td>{index + 1}</td>
                <td>{directory.nama}</td>
                <td>{directory.judulJurnal}</td>
                <td>{directory.tahunTerbit}</td>
                <td>
                  <Link
                    to={`/dashboard/add/edit/${directory.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteDirectory(directory.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DirectoryList;
