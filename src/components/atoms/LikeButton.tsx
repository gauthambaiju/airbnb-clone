import clsx from "clsx";

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
            onClick={() => setLike((prev) => !prev)}
            className="w-[32px] h-[32px] flex items-center justify-center -mt-1 -mr-1 ml-auto"
        >
            <span className="inline-block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                        display: "block",
                        height: "24px",
                        width: "24px",
                        stroke: "white",
                        strokeWidth: 2,
                        overflow: "visible",
                    }}
                    className={clsx(
                        like ? "fill-red-600" : "fill-[rgba(0,0,0,0.5)]"
                    )}
                >
                    <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" />
                </svg>
            </span>
        </div>
    );
};
