import LeftBtnArrow from "./LeftButtonArrow.svg";
import RightBtnArrow from "./RightButtonArrow.svg";

export const SvgHandler = ({ name, dimensions }) => {
    const nameMap = {
        leftBtnArrow: LeftBtnArrow,
        rightBtnArrow: RightBtnArrow,
    };
    return <img src={nameMap[name]} alt="" className={dimensions} />;
};
