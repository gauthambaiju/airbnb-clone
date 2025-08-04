import { TabStrip } from "../molecules/TabStrip";
import { SubHeaderItem } from "../atoms/SubHeaderItem";
import type { SubHeaderDataType } from "../../types/home.types";
import { SvgHandler } from "../../assets/svgs/SvgHandler";

type Props = {
    data: {
        styles: string;
        subHeaderItemData: SubHeaderDataType[];
    };
};

export const Header: React.FC<Props> = ({
    data: { styles, subHeaderItemData },
}) => {
    return (
        <div
            className="h-50"
            style={{
                background:
                    "linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%)",
            }}
        >
            <div className="px-8 flex justify-between">
                <div className="flex items-center h-20 w-[225.28px]">
                    <SvgHandler name="logo" />
                </div>
                <TabStrip />
                <div className="flex items-center h-20">
                    <div className="flex gap-3 mr-3">
                        <button className="px-3 py-[11px]">
                            <span className="block text-[14px] text-[rgb(34,34,34)] font-[500] leading-[18px]">
                                Become a host
                            </span>
                        </button>
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#f2f2f2]">
                            <SvgHandler name="globe" />
                        </div>
                    </div>
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#f2f2f2]">
                        <SvgHandler name="hamburger" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.1) 0 8px 24px 0, rgba(0, 0, 0, 0.02) 0 0 0 1px",
                    }}
                    className={styles}
                >
                    {subHeaderItemData.map((dataItem, i) => (
                        <SubHeaderItem
                            key={i}
                            data={dataItem}
                            divider={subHeaderItemData.length - 1 !== i}
                        />
                    ))}
                    <div className="absolute right-0 p-[10px] h-[68px]">
                        <button
                            type="button"
                            className="flex justify-center items-center h-12 w-12 rounded-full bg-[#ff385c]"
                        >
                            <SvgHandler name="lens" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
