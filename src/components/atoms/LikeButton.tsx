import { SvgHandler } from "../../assets/svgs/SvgHandler";

type Props = {
    likeProps: {
        like: boolean;
        setLike: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

export const LikeButton: React.FC<Props> = ({
    likeProps: { like, setLike },
}) => {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                setLike((prev) => !prev);
            }}
            className="w-[32px] h-[32px] flex items-center justify-center -mt-1 -mr-1 ml-auto"
        >
            <span className="inline-block">
                {like ? (
                    <SvgHandler name="filledHeart" />
                ) : (
                    <SvgHandler name="heart" />
                )}
            </span>
        </div>
    );
};
