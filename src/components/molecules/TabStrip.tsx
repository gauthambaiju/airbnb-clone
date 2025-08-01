import { Tab } from "../atoms/Tab";
import { tabInfo } from "../../data/homepage";

export const TabStrip = () => {
    return (
        <div className="w-[500px] justify-self-center">
            <div className="flex justify-center pt-[22px] pb-6">
                <div className="flex w-fit gap-[35px]">
                    {tabInfo.map((tab, i) => (
                        <Tab key={i} data={tab} />
                    ))}
                </div>
            </div>
        </div>
    );
};
