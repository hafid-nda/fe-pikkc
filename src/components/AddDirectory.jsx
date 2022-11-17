import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddDirectory = () => {
  const [name, setName] = useState("");
  const [jurnal, setJurnal] = useState("");
  const [tahun, setTahun] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      console.log(name)
      await axios.post("http://localhost:8005/api/v1/directory", 
      {
        "nama": name,
        "judulJurnal": jurnal,
        "tahunTerbit": tahun
    },{headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }});
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
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
            <label className="label">Jurnal</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jurnal}
                onChange={(e) => setJurnal(e.target.value)}
                placeholder="Jurnal"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tahun</label>
            <div className="control">
              
                <input
                  type="text"
                  className="input"
                  value={tahun}
                  onChange={(e) => setTahun(e.target.value)}
                  placeholder="Tahun"
                  />
              
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDirectory;
