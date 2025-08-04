import { useState } from "react";
import { Badge } from "../atoms/Badge";
import { LikeButton } from "../atoms/LikeButton";
import { SvgHandler } from "../../assets/svgs/SvgHandler";
import { PropertyModal } from "./PropertyModal";
import type { PropertyDetails } from "../../types/home.types";

type Props = { data: PropertyDetails };

let PROPERTY_DESCRIPTION_POSTFIX = "for 2 nights";

export const Card: React.FC<Props> = ({
    data,
    data: { title, imagePath, price, rating, badge },
}) => {
    const [like, setLike] = useState(false);
    const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
    return (
        <>
            <div onClick={() => setIsPropertyModalOpen(true)}>
                <div className="img-container relative">
                    <div className="img-wrapper bg-[#dddddd] rounded-[20px] aspect-[20/19]">
                        <img
                            src={imagePath}
                            alt={title}
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
                            <span>
                                <SvgHandler name="star" />
                            </span>
                            <span className="text-[12px] my-auto ml-[2.5px]">
                                {rating}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <PropertyModal
                modalProps={{
                    isPropertyModalOpen,
                    setIsPropertyModalOpen,
                }}
                data={data}
            />
        </>
    );
};
