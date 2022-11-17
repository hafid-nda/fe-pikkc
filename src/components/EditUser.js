import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [jurnal, setJurnal] = useState("");
  const [tahun, setTahun] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8005/api/v1/directories/${id}`, {
        name,
        jurnal,
        tahun,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8005/api/v1/directories/${id}`);
    setName(response.data.name);
    setJurnal(response.data.jurnal);
    setTahun(response.data.tahun);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">jurnal</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jurnal}
                onChange={(e) => setJurnal(e.target.value)}
                placeholder="jurnal"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">tahun</label>
            <div className="control">
  
              <input
                type="text"
                className="input"
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
                placeholder="jurnal"
                />

            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
