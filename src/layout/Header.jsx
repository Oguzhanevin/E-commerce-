export default function Header() {
  return (
    <div className="font-montserrat mx-5">
      <div className="flex justify-between">
        <img src="/navbar-brand.png" />

        <div>
          <i class="fa-solid fa-magnifying-glass p-7"></i>
          <i class="fa-solid fa-cart-shopping p-7"></i>
          <i class="fa-solid fa-bars p-7"></i>
        </div>
      </div>

      <div className="font-2xl m-10 flex justify-center p-5 text-center text-xl font-normal leading-[45px] tracking-[0.2px]">
        <ul className="text-[#737373]">
          <li>Home</li>
          <li className="font-semibold">Product</li>
          <li className="font-semibold">Pricing</li>
          <li className="font-semibold">Contact</li>
        </ul>
      </div>
    </div>
  );
}