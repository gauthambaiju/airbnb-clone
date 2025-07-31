import "./index.css";
import { useState } from "react";
import { CardStrip } from "./components/organisms/CardStrip";
import { tabs } from "./data/homepage";

function App() {
    const [tabName, setTabName] = useState("homes");
    return (
        <>
            <div className="space h-[300px]"></div>
            {tabName in tabs
                ? tabs[tabName].cardStripsData.map((data, i) => (
                      <CardStrip key={i} data={data} />
                  ))
                : ""}
        </>
    );
}

export default App;
