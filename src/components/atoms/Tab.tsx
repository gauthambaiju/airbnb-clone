import { useContext } from "react";
import { TabContext } from "../../App";
import type { TabDataType } from "../../types/home.types";
import clsx from "clsx";

type Props = { data: TabDataType };

export const Tab: React.FC<Props> = ({ data: { label, videoSource, ml } }) => {
    const { tabName, setTabName } = useContext(TabContext);
    return (
        <div
            className={clsx(
                "flex items-center pl-[5px] ml-[-5px] pb-[9px] w-fit border-b-3 px-[1.25px]",
                label === tabName ? "border-black" : "border-transparent"
            )}
            onClick={() => setTabName(label)}
        >
            <span className="inline-block h-9 w-9  translate-y-[1px]">
                <video className="scale-200" src={videoSource}></video>
            </span>
            <span
                className={clsx(
                    "block leading-[18px] h-fit text-[14px] text-[#6a6a6a]",
                    label === tabName && "text-black font-[600]",
                    `ml-[${ml}]`
                )}
                style={{ marginLeft: ml }}
            >
                {label}
            </span>
        </div>
    );
};
