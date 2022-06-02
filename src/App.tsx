import React from "react";
import Tabs from "./components/Tabs";
import "./scss/index.scss";
import Components from "./views/Components";
import Design from "./views/Design";
import Develop from "./views/Develop";
import Resources from "./views/Resources";

const tabs = [
  { name: "Design", component: <Design /> },
  { name: "Resources", component: <Resources /> },
  { name: "Components", component: <Components /> },
  { name: "Develop", component: <Develop /> },
];

const App = () => {
  return (
    <div className="container">
      <h1>Reusable Tabs Component</h1>
      <Tabs tabs={tabs} defaultTabName="Resources" />
    </div>
  );
};

export default App;
