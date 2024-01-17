import { useEffect, useRef, useState } from 'react';

import ContentTitle from 'components/ContentTitle';

const UniversalLinkHrefTest = () => {
  const buttonRef = useRef<HTMLButtonElement>();
  const [deepLink, setDeepLink] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value;

    setDeepLink(event.target.value);
  };

  const handleClick = () => {
    // location.assign(deepLink);
    setTimeout(() => {
      const openWin = window.open('about:blank');
      openWin.location.href = deepLink;
    }, 500);
  };

  useEffect(() => {
    if (deepLink) {
      buttonRef.current.click();
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
          ref={buttonRef}
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
