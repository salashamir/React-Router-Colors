import React, { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Color from "./Color";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";

const Routes = () => {
  const initColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00ff00",
    blue: "#0000ff",
  };

  const [colors, setColors] = useState(initColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  const handleAdd = (newColorObj) => {
    setColors((prev) => ({ ...prev, ...newColorObj }));
  };

  const renderCurrColor = (props) => {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={handleAdd} />
        </Route>
        <Route exact path="/colors/:color" renderColor={renderCurrColor}>
          <Color colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
