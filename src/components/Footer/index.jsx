import { PropTypes } from "prop-types";
import { FaGithub, FaLink, FaTwitter } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";

export default function Footer({ location, blog, twitter, link }) {
  return (
    <div className="grid grid-cols-1 rounded-lg p-4 text-slate-300 sm:grid-cols-2">
      <div>
        <p className="mb-2 flex items-center gap-2">
          <BsFillGeoAltFill className="text-red-500" />
          {location ? location : <p className="text-gray-400">Não informado</p>}
        </p>
        <p className="mb-2 flex items-center gap-2">
          <FaLink className="text-green-400" />
          {blog ? (
            <a href={blog} target="blank">
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
          {twitter ? twitter : <p className="text-gray-400">Não informado</p>}
        </p>

        <a href={link} target="_blank" className="mb-2 flex items-center gap-2">
          <FaGithub className="text-white" /> GitHub
        </a>
      </div>
    </div>
  );
}

Footer.propTypes = {
  location: PropTypes.string,
  blog: PropTypes.string,
  twitter: PropTypes.string,
  link: PropTypes.string,
};
