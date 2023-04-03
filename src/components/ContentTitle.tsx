interface ContentTitleProps {
  text?: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const TitleTag = (type: string, text: string) => {
  if (type === 'h1') {
    return <h1>{text}</h1>;
  } else if (type === 'h2') {
    return <h2>{text}</h2>;
  } else if (type === 'h3') {
    return <h3>{text}</h3>;
  } else if (type === 'h4') {
    return <h4>{text}</h4>;
  } else if (type === 'h5') {
    return <h5>{text}</h5>;
  } else {
    return <h6>{text}</h6>;
  }
};

const ContentTitle = ({ text, type = 'h1', className }: ContentTitleProps) => {
  return (
    <div className={`text-black font-extrabold text-3xl py-4 ${className}`}>
      {TitleTag(type, text)}
    </div>
  );
};

export default ContentTitle;
