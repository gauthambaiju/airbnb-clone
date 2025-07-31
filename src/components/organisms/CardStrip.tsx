import { Card } from "../molecules/Card";

const cardContainerStyles = {
    columnGap: "11px",
    gridAutoColumns: "calc(16.6667% - 9.16667px)",
    gridAutoFlow: "column",
    gridTemplateRows: "225.812px",
};

type Props = {
    data: {
        title: string;
        cardData: {
            title: string;
            imagePath: string;
            price: number;
            rating: string;
            badge: boolean;
        }[];
    };
};

export const CardStrip: React.FC<Props> = ({ data }: Props) => {
    return (
        <div>
            <div className="card-strip-header">
                <div>
                    <h2>
                        <span>
                            {data.title}
                            <span>
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
                    <div>
                        <button>
                            <span>
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
                                        stroke: "rgb(193, 193, 193)",
                                        strokeWidth: "4",
                                        overflow: "visible",
                                    }}
                                >
                                    <path
                                        fill="none"
                                        d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                        <button>
                            <span>
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
                                        strokeWidth: "4",
                                        overflow: "visible",
                                    }}
                                >
                                    <path
                                        fill="none"
                                        d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="card-strip px-[32px]">
                <div
                    className="grid justify-start overflow-x-scroll"
                    style={cardContainerStyles}
                >
                    {data.cardData.map((cardContent, i) => (
                        <Card key={i} data={cardContent} />
                    ))}
                </div>
            </div>
        </div>
    );
};
