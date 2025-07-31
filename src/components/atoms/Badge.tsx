type BadgeProps = {
    label: string;
};

export const Badge: React.FC<BadgeProps> = ({ label }) => {
    return (
        <div className="w-[fit-content] h-[fit-content] bg-[rgba(255,255,255,0.8)] px-[9.5px] py-[5.5px] border border-solid border-[rgba(255,255,255,0.5)] rounded-[14px]">
            <div className="leading-[13px] flex items-center">
                <span className="text-[11px] font-[600]">{label}</span>
            </div>
        </div>
    );
};
