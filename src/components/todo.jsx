import React, { useState } from "react";
import "tailwindcss/tailwind.css";


/**
 * Composants permettant d'incrémenter visuellement les données sous forme de liste
 * recupere un array, puis affiche nom, data, état et bouton supprimer
 * @param {array} tasks
 * @param {function} onDelete 
 * @returns 
 */
function Todo({ tasks, onDelete }) {
  const [etat, setEtat] = useState(tasks.etat);
  let miseEnPage;
  if (etat === true) miseEnPage = "bg-green-200";

  const handleChecked = () => {
    setEtat(!etat);
  };

  const handleSupp = (id) => {
    onDelete(id);
  };

  return (
    <>
      <div className="drop-shadow-sm p-1">
        <div
          key={tasks.id}
          className={
            "flex justify-between px-5 p-2 m border-2 border-white rounded-lg " +
            miseEnPage
          }
        >
          <div className="flex justify-between gap-4">
            <input type="checkbox" checked={etat} onChange={handleChecked} />
            <span>{tasks.tache}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span>{tasks.date}</span>
            <button onClick={() => handleSupp(tasks.id)} className="bg-red-700">
              <img
                src="./src/assets/delete_forever.svg"
                className="h-7 text-white"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
