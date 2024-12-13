import { PropTypes } from "prop-types";
export default function Stat({ stat, title }) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm text-slate-300">{title}</p>
      <p className="text-2xl text-white">{stat}</p>
    </div>
  );
}

Stat.propTypes = {
  stat: PropTypes.number,
  title: PropTypes.string,
};
