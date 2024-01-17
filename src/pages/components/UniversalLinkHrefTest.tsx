import { useEffect, useState } from 'react';

import ContentTitle from 'components/ContentTitle';

const UniversalLinkHrefTest = () => {
  const [deepLink, setDeepLink] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value;

    setDeepLink(event.target.value);
  };

  const handleClick = () => {
    location.assign(deepLink);
  };

  useEffect(() => {
    if (deepLink) {
      window.open(deepLink);
      // const element = document.createElement('a');
      // element.href = deepLink;
      // element.click();
    }
  }, [deepLink]);

  return (
    <>
      <ContentTitle text="2. Universal Link Href Test" />
      <div style={{ display: 'flex', gap: '5px' }}>
        <input
          style={{ width: '100%', padding: '10px 5px' }}
          value={deepLink}
          onChange={handleChange}
        />
        <button
          style={{ border: '1px solid black', width: '100px' }}
          type="button"
          onClick={handleClick}
        >
          연결
        </button>
      </div>
    </>
  );
};

export default UniversalLinkHrefTest;
