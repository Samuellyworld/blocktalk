import { DividerContainer, Line } from "./Divider.styles";


export const Divider = ({
    className
}: {
    className?: string;
}) => {
    return (
        <DividerContainer className={className}>
            <Line />
        </DividerContainer>
    );
};

export default Divider;