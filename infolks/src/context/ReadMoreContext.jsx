import { createContext, useState, useContext } from 'react';

// Create a context
const ReadMoreContext = createContext();

// Custom hook to use the ReadMoreContext
export const useReadMore = () => {
  return useContext(ReadMoreContext);
};

// Provider component
// eslint-disable-next-line react/prop-types
export const ReadMoreProvider = ({ children }) => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <ReadMoreContext.Provider value={{ expanded, toggleReadMore }}>
      {children}
    </ReadMoreContext.Provider>
  );
};
