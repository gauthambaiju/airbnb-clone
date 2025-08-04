import LeftBtnArrow from "./LeftButtonArrow.svg";
import RightBtnArrow from "./RightButtonArrow.svg";
import RightArrow from "./RightArrow.svg";
import Logo from "./Logo.svg";
import Globe from "./Globe.svg";
import Hamburger from "./Hamburger.svg";
import Lens from "./Lens.svg";
import Heart from "./Heart.svg";
import FilledHeart from "./FilledHeart.svg";
import Star from "./Star.svg";

type Props = {
    name:
        | "leftBtnArrow"
        | "rightBtnArrow"
        | "rightArrow"
        | "logo"
        | "globe"
        | "hamburger"
        | "lens"
        | "heart"
        | "filledHeart"
        | "star";
};

export const SvgHandler: React.FC<Props> = ({ name }) => {
    const nameMap = {
        leftBtnArrow: LeftBtnArrow,
        rightBtnArrow: RightBtnArrow,
        rightArrow: RightArrow,
        logo: Logo,
        globe: Globe,
        hamburger: Hamburger,
        lens: Lens,
        heart: Heart,
        filledHeart: FilledHeart,
        star: Star,
    };
    return <img src={nameMap[name]} alt={name} />;
};
