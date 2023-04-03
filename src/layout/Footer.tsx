import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-2 px-4 flex items-center justify-center gap-5 "
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <p className="text-gray-400 text-center">
        © {new Date().getFullYear()} {`wonseok-han's Utilities`}
      </p>
      <a
        href={`https://github.com/wonseok-han/my-utilites`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={25} />
      </a>
    </footer>
  );
};

export default Footer;
