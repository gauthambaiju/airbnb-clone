import { useContext } from "react";
import { TabContext } from "../../App";

const [tabName, setTabName] = useContext(TabContext);

type Props = {
    data: {
        label: string;
        videoSource: string;
        ml: string;
    };
};

export const Tab: React.FC<Props> = ({ data: { label, videoSource, ml } }) => {
    const handleClick = () => {};
    return (
        <div
            className="flex items-center pl-[5px] ml-[-5px] mb-3 w-fit"
            onClick={() => handleClick}
        >
            <span className="inline-block h-9 w-9 translate-y-[1px]">
                <video className="scale-200" src={videoSource}></video>
            </span>
            <span
                className="block leading-[18px] font-[600] h-fit text-[14px]"
                style={{ marginLeft: ml }}
            >
                {label}
            </span>
        </div>
    );
};
