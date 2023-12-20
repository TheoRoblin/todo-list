import { useEffect, useState } from "react";
import Todo from "./components/todo";
import TodoForm from "./components/todo_form";
import { Input } from "./components/search_bar";

function App() {
  if (localStorage.getItem("ListeTache") === null) {
    localStorage.setItem(
      "ListeTache",
      JSON.stringify([
        { id: 1, tache: "Exemple de tâche", date: "dd/MM/yyyy", etat: false },
      ])
    );
  }

  const [array, setArray] = useState(
    JSON.parse(localStorage.getItem("ListeTache"))
  );
  const [nav, setNav] = useState("");

  useEffect(() => {
    localStorage.setItem("ListeTache", JSON.stringify(array));
  }, [array]);

  /**
   * recupere l'élement d'une liste pour supprimer son contenu 
   * @param {number} elementID 
   */
  const handleTaskDelete = (elementID) => {
    const isIdEqual = (element) => element.id === elementID;
    const indexToDelete = array.findIndex(isIdEqual);
    let copie = [...array];
    copie.splice(indexToDelete, 1);
    setArray(copie);
  };

  const dataNav = array.filter((data) => {
    if (nav && !data.tache.includes(nav)) {
      return false;
    }
    return true;
  });

  /**
   * Recupere les élements saisie pour les pushs dans une copie du tableau 
   * @param {array} element 
   */
  const handlePushArray = (element) => {
    try {
      element.id = array[array.length - 1].id + 1;
    } catch {
      element.id = 0;
    }
    setArray([...array, element]);
  };

  return (
    <>
      <TodoForm onCreate={handlePushArray} />
      <Searchbar nav={nav} onNav={setNav} />
      <h1 className="text-center text-3xl my-20 "><strong>Tâche a effectuer</strong></h1>
      <div className="flex justify-center">
        <div className="w-1/2 flex-col items-center p-2 bg-white/[.2] rounded-lg">
          {dataNav.map((todo) => (
            <Todo tasks={todo} onDelete={handleTaskDelete} />
          ))}
        </div>
      </div>
    </>
  );
}

function Searchbar({nav, onNav }) {
  return (
    <div>
      <div>
        <Input value={nav} onChange={onNav} placeholder={"Recherche..."} />
      </div>
    </div>
  );
}

export default App;
