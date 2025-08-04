import { SvgHandler } from "../../assets/svgs/SvgHandler";
import { Modal } from "antd";
import type { PropertyDetails } from "../../types/home.types";

type Props = {
    modalProps: {
        isPropertyModalOpen: boolean;
        setIsPropertyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    };
    data: PropertyDetails;
};

let PROPERTY_DESCRIPTION_POSTFIX = "for 2 nights";

export const PropertyModal: React.FC<Props> = ({
    modalProps: { isPropertyModalOpen, setIsPropertyModalOpen },
    data: { title, imagePath, price, rating },
}) => {
    return (
        <Modal
            title={<span className="text-[24px] font-bold">{title}</span>}
            centered
            closable={true}
            open={isPropertyModalOpen}
            footer={null}
            onCancel={() => setIsPropertyModalOpen(false)}
        >
            <div>
                <div className="img-wrapper bg-[#dddddd] rounded-[20px] w-full aspect-[20/19]">
                    <img
                        src={imagePath}
                        alt={title}
                        className="cardImage w-full h-full rounded-[20px] object-cover"
                    />
                </div>
                <div>
                    <span className="font-[700] text-[25px]">
                        ₹{price.toLocaleString()}
                    </span>
                    &nbsp;
                    <span className="text-[20px] font-[500] ml-1">
                        {PROPERTY_DESCRIPTION_POSTFIX}
                    </span>
                </div>
                <div className="flex">
                    <span className="text-[20px] font-[600] my-auto ml-1">
                        {rating}
                    </span>
                    <span className="inline-flex ml-2 scale-200 pt-[1px]">
                        <SvgHandler name="star" />
                    </span>
                </div>
                <div>
                    <span className="text-[20px]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Odit voluptates error non sequi magnam cum, alias
                        reprehenderit, rerum esse omnis possimus maiores
                        doloribus, mollitia quibusdam nostrum dolor tempore fuga
                        maxime!
                    </span>
                </div>
            </div>
        </Modal>
    );
};
