import { useState } from "react";
import data from "./json/nominations.json";
import Header from "./components/Header";

function App() {
  const [newList, setNewList] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleCheck = (categoria, nominados) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [categoria]: nominados,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewList(Object.entries(selectedOptions));
  };

  return (
    <>
      <Header />

      <main>
        <section className="max-w-[1440px] mx-auto p-5 md:p-10">
          {newList.length === 0 ? (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-3 gap-5   md:mx-5 "
            >
              {data.map((e) => (
                <fieldset
                  key={e.id}
                  className="bg-slate-800  p-10  flex flex-col gap-5 rounded-xl  "
                >
                  <h1 className="text-yellow-500 text-2xl md:text-3xl font-bold">
                    {e.category}
                  </h1>
                  {e.options.map((nominates, i) => (
                    <label
                      className="flex items-center gap-3 font-bold   text-[14px] hover:text-[#7a6ef7] "
                      key={i}
                    >
                      <input
                        onChange={() => handleCheck(e.category, nominates)}
                        checked={selectedOptions[e.category] === nominates}
                        type="checkbox"
                        id="checkboxNoLabel"
                        className="checkbox checkbox-primary border-1  border-purple-200"
                      />
                      {nominates}
                    </label>
                  ))}
                </fieldset>
              ))}
              <button className="bg-[#7a6ef7] hover:bg-[#9990f9] p-5 rounded-xl font-bold text-gray-200 shadow-2xl text-5xl">
                Generate
              </button>
            </form>
          ) : (
            <div className="h-auto">
              <ul className="grid grid-cols-1 lg:grid-cols-4 bg-slate-800 p-12 gap-10 rounded-3xl shadow-xl">
                {newList.map((e) => (
                  <li className="flex flex-col gap-2" key={e[1]}>
                    <h1 className="text-yellow-500 text-xl md:text-3xl">{e[0]}</h1>
                    <h2>{e[1]}</h2>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
