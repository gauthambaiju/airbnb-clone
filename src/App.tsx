import "./index.css";
import { useState, createContext } from "react";
import { CardStrip } from "./components/organisms/CardStrip";
import { tabs } from "./data/homepage";
import { Header } from "./components/organisms/Header";
import type {
    TabName,
    TabContextType,
    CarouselDataType,
} from "./types/home.types";

export const TabContext = createContext<TabContextType>({
    tabName: "Homes",
    setTabName: () => {},
});

function App() {
    const [tabName, setTabName] = useState<TabName>("Homes");
    const { subHeaderData, propertyListing } = tabs[tabName];
    return (
        <>
            <TabContext.Provider value={{ tabName, setTabName }}>
                <Header data={subHeaderData} />
                {propertyListing.map((data: CarouselDataType, i: number) => (
                    <CardStrip key={`${data.title}-${i}`} data={data} />
                ))}
            </TabContext.Provider>
        </>
    );
}

export default App;
