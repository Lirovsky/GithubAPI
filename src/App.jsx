import { FaGithub } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Img from "./icon.png";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-800">
      <div className="w-6/12 flex-col">
        <div>
          <div className="flex items-center gap-x-3 text-3xl font-bold lowercase text-white">
            <h1>Gitesquisa</h1>
            <FaGithub />
          </div>
        </div>
        <div className="my-5 flex items-center justify-between gap-x-3 rounded-lg bg-zinc-700 p-2">
          <IoIosSearch className="text-4xl text-blue-600" />
          <input
            type="text"
            placeholder="Digite o nome de usuário"
            className="w-full bg-transparent text-white outline-none placeholder:text-white"
          />
          <button className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white">
            Pesquisar
          </button>
        </div>
        <div className="flex items-start gap-x-5 rounded-lg bg-zinc-700 p-6">
          <img src={Img} alt="" className="w-24 rounded-full border-2" />
          <div className="w-full">
            <div className="flex justify-between">
              <h1 className="text-2xl text-white">Nome Completo</h1>
              <p className="text-slate-300">Data de criação</p>
            </div>
            <p className="font-bold text-blue-600">Nome de usuário</p>
            <p className="my-4 text-slate-300">Bio da conta</p>

            <div className="rounded-lg bg-zinc-800">
              <div className="flex justify-between px-4 py-3">
                <div className="flex flex-col items-center">
                  <p className="text-slate-300">Seguidores</p>
                  <p className="text-2xl text-white">0</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-slate-300">Seguindo</p>
                  <p className="text-2xl text-white">0</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-slate-300">Repositórios</p>
                  <p className="text-2xl text-white">0</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 rounded-lg p-4 text-slate-300">
              <div>
                <p>Endereço</p>
                <p>Link</p>
              </div>
              <div>
                <p>Twitter</p>
                <p>Link</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
