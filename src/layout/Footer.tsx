import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-2 px-4 flex items-center justify-center gap-5 opacity-95"
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <p className="text-gray-400 text-center">
        © {new Date().getFullYear()} {`wonseok-han's Utilities`}
      </p>
      <a
        href={`https://github.com/wonseok-han/my-utilites`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub size={25} />
      </a>
    </footer>
  );
};

export default Footer;
