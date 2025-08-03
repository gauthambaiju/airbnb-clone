import LeftBtnArrow from "./LeftButtonArrow.svg";
import RightBtnArrow from "./RightButtonArrow.svg";
import RightArrow from "./RightArrow.svg";

export const SvgHandler = ({ name, dimensions }) => {
    const nameMap = {
        leftBtnArrow: LeftBtnArrow,
        rightBtnArrow: RightBtnArrow,
        rightArrow: RightArrow,
    };
    return <img src={nameMap[name]} alt="" className={dimensions} />;
};
