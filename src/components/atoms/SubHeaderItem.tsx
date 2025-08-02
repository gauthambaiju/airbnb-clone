import type { SubHeaderDataType } from "../../types/home.types";

type Props = {
    data: SubHeaderDataType;
    divider: boolean;
};

export const SubHeaderItem: React.FC<Props> = ({
    data: { title, description, styles },
    divider,
}) => {
    return (
        <>
            <div>
                <div className={styles}>
                    <div className="leading-4 pb-[2px] text-[12px] font-[500]">
                        {title}
                    </div>
                    <div className="leading-[18px] text-[14px] text-[#6a6a6a] font-[400]">
                        {description}
                    </div>
                </div>
            </div>
            {divider && (
                <div id="bar" className="bg-[#dddddd] h-8 w-[1px]"></div>
            )}
        </>
    );
};
