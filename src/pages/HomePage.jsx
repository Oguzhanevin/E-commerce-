import BestSellers from "@/components/BestSellers";
import Blog from "@/components/Blog";
import Container from "@/components/Container";
import EditorsPick from "@/components/EditorsPick";
import Slider from "@/components/Slider";

export default function HomePage() {
  return (
    <div>
      <EditorsPick />
      <BestSellers />
      <Slider />
      <Container />
      <Blog />
    </div>
  );
}