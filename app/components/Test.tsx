import React, { useState } from 'react';

export default function Test({data}){
  const [hoveredType, setHoveredType] = useState(null);

  const types = [...new Set(data.map(item => item.type))];

  const handleTypeHover = (type) => {
    setHoveredType(type);
  };

  return (
    <div>
      <ul>
        {types.map((type) => (
          <li
            key={type}
            onMouseEnter={() => handleTypeHover(type)}
            onMouseLeave={() => handleTypeHover(null)}
          >
            {type}
            {hoveredType && (
          <ul>
            {data
              .filter((item) => item.type === hoveredType)
              .map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
          </ul>
        )}
          </li>
        ))}
      </ul>
      <div>

      </div>
    </div>
  );
};


