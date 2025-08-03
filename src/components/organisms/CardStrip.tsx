import { Card } from "../molecules/Card";
import { useRef } from "react";
import type { CarouselDataType } from "../../types/home.types";
import { SvgHandler } from "../../assets/svgs/SvgHandler";

const cardContainerStyles = {
    columnGap: "11px",
    gridAutoColumns: "calc(16.6667% - 9.16667px)",
    gridAutoFlow: "column",
};

type Props = { data: CarouselDataType };

export const CardStrip: React.FC<Props> = ({ data }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const handleScroll = (value: number) => {
        carouselRef.current?.scrollBy({ left: value, behavior: "smooth" });
    };
    return (
        <div>
            <div className="card-strip-header">
                <div className="flex mx-8 mt-8 mb-[14px]">
                    <h2 className="inline-block">
                        <span className="flex items-center leading-6 text-[20px] font-[600] pr-3 w-fit tracking-[-0.18px]">
                            {data.title}
                            <span className="flex items-center ml-[2px] h-fit mt-[2px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    aria-hidden="true"
                                    role="presentation"
                                    focusable="false"
                                    style={{
                                        display: "block",
                                        fill: "none",
                                        height: "12px",
                                        width: "12px",
                                        stroke: "rgb(34, 34, 34)",
                                        strokeWidth: "5.33333",
                                        overflow: "visible",
                                    }}
                                >
                                    <path
                                        fill="none"
                                        d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
                                    ></path>
                                </svg>
                            </span>
                        </span>
                    </h2>
                    <div className="ml-auto flex">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center bg-[white] opacity-50 rounded-full w-6 h-6 border border-[#dddddd]"
                            onClick={() => handleScroll(-409)}
                        >
                            <span>
                                <SvgHandler
                                    name="leftBtnArrow"
                                    dimensions="w-3 h-3"
                                />
                            </span>
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center bg-[#f2f2f2] rounded-full w-6 h-6 ml-1"
                            onClick={() => handleScroll(409)}
                        >
                            <span>
                                <SvgHandler
                                    name="rightBtnArrow"
                                    dimensions="w-3 h-3"
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-strip px-[32px]">
                <div
                    className="grid justify-start overflow-x-scroll"
                    style={cardContainerStyles}
                    ref={carouselRef}
                >
                    {data.cardData.map((cardContent, i) => (
                        <Card
                            key={`${cardContent.title}-${i}`}
                            data={cardContent}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
