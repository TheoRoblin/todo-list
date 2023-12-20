/**
 * Barre de recherche pour cibler le/les taches listées
 * Créer l'input et récupere la 'value' saisie
 * @param {string} placeholder
 * @param {string} value
 * @param {function} onChange 
 * @returns 
 */

export function Input({ placeholder, value, onChange }) {
  return (
    <div className="flex justify-center ">
      <div className="  bg-white/[.2] w-1/4 p-4  rounded-lg ">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className=" w-full h-10 border-2 border-slate-400 rounded-lg focus:outline-1 focus:ring focus:ring-blue-200 "
        />
      </div>
    </div>
  );
}
