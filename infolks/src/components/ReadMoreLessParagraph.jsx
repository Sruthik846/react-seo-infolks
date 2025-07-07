import React from 'react';
import { useReadMore } from '../context/ReadMoreContext';

// eslint-disable-next-line react/prop-types
const ReadMoreLessParagraph = ({ id, charLimit, readMoreText, readLessText, readMoreClassName, readLessClassName, children }) => {
  const { expanded, toggleReadMore } = useReadMore();

  const handleToggle = () => {
    toggleReadMore(id);
  };

  // Convert children to an array of elements
  const contentArray = React.Children.toArray(children);

  return (
    <div>
      <div className="paragraph">
        {expanded[id]
          ? contentArray.map((para, index) => <p key={index}>{para}</p>)
          : <p>{contentArray[0]?.props?.children.substring(0, charLimit)}...</p>}
      </div>
      <button
        onClick={handleToggle}
        className={expanded[id] ? `${readLessClassName} cursor-pointer` : `${readMoreClassName} cursor-pointer`}
      >
        {expanded[id] ? readLessText : readMoreText}
      </button>
    </div>
  );
};

export default ReadMoreLessParagraph;
