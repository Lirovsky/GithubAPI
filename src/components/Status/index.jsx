import { PropTypes } from "prop-types";
import Stat from "./components/Stat";

export default function Status({ followers, following, repos }) {
  return (
    <div className="rounded-lg bg-zinc-800">
      <div className="flex justify-between px-4 py-3">
        <Stat title="Seguidores" stat={followers} />
        <Stat title="Seguindo" stat={following} />
        <Stat title="Repositórios" stat={repos} />
      </div>
    </div>
  );
}

Status.propTypes = {
  followers: PropTypes.number,
  following: PropTypes.number,
  repos: PropTypes.number,
};
