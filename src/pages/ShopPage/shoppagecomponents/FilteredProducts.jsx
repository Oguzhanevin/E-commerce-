import { brandlogos } from "@/mockdatas/brandlogos";

export default function Brands() {
  return (
    <div className="flex w-full flex-col bg-[#FAFAFA] lg:mb-5 lg:flex-row lg:justify-between">
      {brandlogos.map((brand) => (
        <div
          key={brand.id}
          className="flex items-center justify-center m-6 lg:m-10"
        >
          <img
            src={brand.src}
            alt={brand.name}  // Alt etiketi eklendi, "name" mock data'dan geliyor olmalı
            className="max-w-full h-auto" // Görsellerin boyutlarını esnek hale getiriyoruz
          />
        </div>
      ))}
    </div>
  );
}
