import React, { useState } from "react";


/**
 * Permet de créer une tache avec la tache/l'état/data 
 * Renvoie un tableau de donnée traité dans 'App.jsx' 
 * @param {function} onCreate 
 * @returns 
 */
function TodoForm({ onCreate }) {
  const [data, setdata] = useState("");

  const handleSave = () => {
    const element = {
      id: 0,
      tache: data,
      date: new Date().toLocaleDateString(),
      etat: false,
    };
    console.log(element);
    onCreate(element);
  };

  const handleChange = (e) => {
    setdata(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="flex my-10 bg-white/[.2]  w-2/6 p-4 rounded-lg  items-center">
          
          <input
            onChange={handleChange}
            value={data}
            type="text"
            className=" w-full h-10 rounded-lg border-2 border-slate-400 focus:outline-1 focus:ring focus:ring-blue-200"
            placeholder="Ajouter une tache..."
          />
          <button
            onClick={handleSave}
            className="rounded-lg h-10 border-solid border-2 px-2 py-2  bg-indigo-300 hover:bg-indigo-500 "
            type="submit"
          >
            <img src="./src/assets/add.svg" alt="icone_add" />
          </button>
          </div>
      </div>
    </>
  );
}

export default TodoForm;
