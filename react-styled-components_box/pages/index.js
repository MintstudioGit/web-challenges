import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName isBlack={false} />
      <BoxWithClassName isBlack={true} />
      <BoxWithStyledComponents $isBlack={false} />
      <BoxWithStyledComponents $isBlack={true} />
    </div>
  );
}
