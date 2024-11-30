import { FaGithub, FaLink, FaTwitter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsFillGeoAltFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";

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
              <div className="flex gap-5">
                <img
                  src={data.avatar_url}
                  alt={data.name}
                  className="w-20 rounded-full border-2"
                />
                <div className="w-full items-start justify-between lg:flex">
                  <div>
                    <h1 className="text-xl text-white">{data.name}</h1>
                    <p className="my-1 font-bold text-blue-500">{data.login}</p>
                  </div>
                  <div>
                    <p className="text-slate-300">
                      Entrou {new Date(data.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              <p className="my-4 text-slate-300">{data.bio}</p>

              <div className="rounded-lg bg-zinc-800">
                <div className="flex justify-between px-4 py-3">
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-slate-300">Seguidores</p>
                    <p className="text-2xl text-white">{data.followers}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-slate-300">Seguindo</p>
                    <p className="text-2xl text-white">{data.following}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-sm text-slate-300">Repositórios</p>
                    <p className="text-2xl text-white">{data.public_repos}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 rounded-lg p-4 text-slate-300 sm:grid-cols-2">
                <div>
                  <p className="mb-2 flex items-center gap-2">
                    <BsFillGeoAltFill className="text-red-500" />
                    {data.location ? (
                      data.location
                    ) : (
                      <p className="text-gray-400">Não informado</p>
                    )}
                  </p>
                  <p className="mb-2 flex items-center gap-2">
                    <FaLink className="text-green-400" />
                    {data.blog ? (
                      <a href={data.blog} target="blank">
                        Blog
                      </a>
                    ) : (
                      <p className="text-gray-400">Não informado</p>
                    )}
                  </p>
                </div>
                <div>
                  <p className="mb-2 flex items-center gap-2">
                    <FaTwitter className="text-blue-500" />
                    {data.twitter_username ? (
                      data.twitter_username
                    ) : (
                      <p className="text-gray-400">Não informado</p>
                    )}
                  </p>

                  <a
                    href={data.html_url}
                    target="_blank"
                    className="mb-2 flex items-center gap-2"
                  >
                    <FaGithub className="text-white" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
