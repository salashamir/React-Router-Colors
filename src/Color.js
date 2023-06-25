import React from "react";
import {
  Link,
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

const Color = ({ colors }) => {
  const { color } = useParams();
  const hex = colors[color];
  const history = useHistory();

  if (!hex) {
    history.push("/colors");
  }

  return (
    <div style={{ backgroundColor: hex }}>
      <p>this is {color}</p>
      <p>
        <Link to="/colors">Go back!</Link>
      </p>
    </div>
  );
};

export default Color;
