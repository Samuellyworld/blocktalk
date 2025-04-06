import { GridLoader } from "react-spinners";
import { HashLoaderDiv } from "./Loader.styles";

interface CustomHashLoaderProps {
  color?: string;
  size?: number;
}
export function Loader({ color, size }: CustomHashLoaderProps) {
  return (
    <HashLoaderDiv>
      <GridLoader color={color} size={size} />
    </HashLoaderDiv>
  );
}