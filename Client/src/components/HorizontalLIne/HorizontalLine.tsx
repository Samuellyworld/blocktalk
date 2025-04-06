import { HorizontalLineContainer } from "./HorizontalLine.styles";

export const HorizontalLine = ({
    className
}: {
    className?: string;
}) => {
    return (
        <HorizontalLineContainer className={className} />
    );
};
export default HorizontalLine;