import { FaGithub } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Status from "./components/Status";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("Lirovsky");
  const [error, setError] = useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  const onClickHandler = () => {
    getUser();
  };

  async function getUser() {
    if (!inputValue) return;
    try {
      const response = await axios.get(
        `https://api.github.com/users/${inputValue}`,
      );
      setData(response.data);
      setError("");
    } catch (error) {
      setError(error.status);
    }
  }

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-800">
      <div className="sm:8/12 w-9/12 flex-col md:w-6/12">
        <div>
          <div className="flex items-center gap-x-3 text-3xl font-bold lowercase text-white">
            <h1>Gitesquisa</h1>
            <FaGithub />
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between gap-x-3 rounded-lg bg-zinc-700 p-2">
          <IoIosSearch className="text-4xl text-blue-600" />
          <input
            type="text"
            placeholder="Digite o nome de usuário"
            className="w-full bg-transparent text-white outline-none placeholder:text-sm placeholder:text-white sm:placeholder:text-base"
            onChange={onChangeHandler}
            value={inputValue}
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white"
            onClick={onClickHandler}
          >
            Pesquisar
          </button>
        </div>
        {error &&
          (error === 404 ? (
            <p className="ps-2 text-red-500">Usuário não encontrado</p>
          ) : (
            <p className="ps-2 text-red-500">Ocorreu um erro</p>
          ))}
        {data && !error ? (
          <div className="mt-5 flex items-start gap-x-5 rounded-lg bg-zinc-700 p-6">
            <div className="w-full">
              <Header
                avatar={data.avatar_url}
                name={data.name}
                login={data.login}
                created={data.created_at}
                bio={data.bio}
              />
              <Status
                followers={data.followers}
                following={data.following}
                repos={data.public_repos}
              />
              <Footer
                location={data.location}
                blog={data.blog}
                twitter={data.twitter_username}
                link={data.html_url}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
