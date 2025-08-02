export type TabName = "Homes" | "Experiences" | "Services";

export type TabContextType = {
    tabName: TabName;
    setTabName: React.Dispatch<React.SetStateAction<TabName>>;
};

export type CarouselDataType = {
    title: string;
    cardData: {
        title: string;
        imagePath: string;
        price: number;
        rating: string;
        badge: boolean;
    }[];
};

export type SubHeaderDataType = {
    title: string;
    description: string;
    styles: string;
};

export type TabDataType = {
    label: TabName;
    videoSource: string;
    ml: string;
};
