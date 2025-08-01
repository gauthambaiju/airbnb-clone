import "./index.css";
import { useState, createContext } from "react";
import { CardStrip } from "./components/organisms/CardStrip";
import { tabs } from "./data/homepage";
import { Header } from "./components/organisms/Header";

type TabContextType = {
    tabName: string;
    setTabName: React.Dispatch<React.SetStateAction<string>>;
};

export const TabContext = createContext<TabContextType>({
    tabName: "homes",
    setTabName: () => {},
});

function App() {
    const [tabName, setTabName] = useState("homes");
    return (
        <>
            <TabContext.Provider value={{ tabName, setTabName }}>
                <Header />
                {tabName in tabs &&
                    tabs[tabName].propertyListing.map((data, i) => (
                        <CardStrip key={i} data={data} />
                    ))}
            </TabContext.Provider>
        </>
    );
}

export default App;
