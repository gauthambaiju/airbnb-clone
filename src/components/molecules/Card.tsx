import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { LikeButton } from "../atoms/LikeButton";

type Props = {
    data: {
        title: string;
        imagePath: string;
        price: number;
        rating: string;
        badge: boolean;
    };
};

let PROPERTY_DESCRIPTION_POSTFIX = "for 2 nights";

export const Card: React.FC<Props> = ({
    data: { title, imagePath, price, rating, badge },
}) => {
    const [like, setLike] = useState(false);
    return (
        <div>
            <div className="img-container relative">
                <div className="img-wrapper bg-[#dddddd] rounded-[20px] aspect-[20/19]">
                    <img
                        src={imagePath}
                        alt=""
                        className="cardImage w-full h-full rounded-[20px] object-cover"
                    />
                </div>
                <div className="wishlist-container flex justify-between absolute inset-0 px-[12px] pt-[12px]">
                    {badge && <Badge label="Guest favourite" />}
                    <LikeButton likeProps={{ like, setLike }} />
                </div>
            </div>
            <div className="flex flex-col gap-[2px] mx-[4px]  mt-2">
                <span className="inline-block font-medium text-[13px] leading-[16px] ">
                    {title}
                </span>
                <div className="flex items-center text-[#6a6a6a] leading-[16px] h-4">
                    <div className="leading-[16px] flex items-center h-4">
                        <div>
                            <span className="font-[400] text-[12px]">
                                ₹{price.toLocaleString()}
                            </span>
                            &nbsp;
                        </div>
                        <div>
                            <span className="text-[12px] ml-[-0.8px]">
                                {PROPERTY_DESCRIPTION_POSTFIX}
                            </span>
                        </div>
                    </div>
                    <span className="text-[#c1c1c1c1] font-[700] text-[12px] inline-block">
                        <span>&nbsp;·&nbsp;</span>
                    </span>
                    <span className="flex items-center">
                        <span className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                    display: "block",
                                    height: "8px",
                                    width: "8px",
                                    fill: "rgba(106, 106, 106, 1",
                                }}
                            >
                                <path
                                    fillRule="evenodd"
                                    d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                                ></path>
                            </svg>
                        </span>
                        <span className="text-[12px] my-auto ml-[2.5px]">
                            {rating}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};
