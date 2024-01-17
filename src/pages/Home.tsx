import ConvertString from './components/ConvertString';
import UniversalLinkHrefTest from './components/UniversalLinkHrefTest';

const Home = () => {
  return (
    <>
      <div className="text-black">
        <ConvertString />
      </div>

      <div className="text-black">
        <UniversalLinkHrefTest />
      </div>
    </>
  );
};

export default Home;
