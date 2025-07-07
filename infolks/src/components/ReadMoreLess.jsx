import React from 'react';
import { useReadMore } from '../context/ReadMoreContext';

// eslint-disable-next-line react/prop-types
const ReadMoreLess = ({ id, charLimit, readMoreText, readLessText, readMoreClassName, readLessClassName, children }) => {
  const { expanded, toggleReadMore } = useReadMore();

  const handleToggle = () => {
    toggleReadMore(id);
  };

  // Convert children to a string if it's not already (useful for JSX content)
  const content = React.Children.toArray(children).join('');

  return (
    <div>
      <p className="paragraph">
        {expanded[id] ? content : `${content.substring(0, charLimit)}...`}
      </p>
      <button
        onClick={handleToggle}
        className={expanded[id] ? `${readLessClassName} cursor-pointer` : `${readMoreClassName} cursor-pointer`}
      >
        {expanded[id] ? readLessText : readMoreText}
      </button>
    </div>
  );
};

export default ReadMoreLess;
