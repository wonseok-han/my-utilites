const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white py-2 px-4"
      style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <p className="text-gray-400 text-center">
        © {new Date().getFullYear()} {`wonseok-han's Utilites`}
      </p>
    </footer>
  );
};

export default Footer;
