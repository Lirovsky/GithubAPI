import { PropTypes } from "prop-types";
export default function Header({ avatar, name, login, created, bio }) {
  return (
    <div>
      <div className="flex gap-5">
        <img src={avatar} alt={name} className="w-20 rounded-full border-2" />
        <div className="w-full items-start justify-between lg:flex">
          <div>
            <h1 className="text-xl text-white">{name}</h1>
            <p className="my-1 font-bold text-blue-500">{login}</p>
          </div>
          <div>
            <p className="text-slate-300">
              Entrou {new Date(created).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <p className="my-4 text-slate-300">{bio}</p>
    </div>
  );
}

Header.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  login: PropTypes.string,
  created: PropTypes.string,
  bio: PropTypes.string,
};
