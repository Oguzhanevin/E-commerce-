import { Button } from "@/components/ui/button";
import TeamCards from "@/pages/TeamPage/teampagecomponents/TeamCards";

export default function AboutUsContainer() {
  return (
    <div className="flex flex-col items-center justify-center font-montserrat">
      {/* About Us Section */}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[40px] font-semibold leading-[50px] tracking-[0.2] lg:text-left lg:text-[58px] lg:leading-[80px]">
            ABOUT US
          </p>
          <p className="max-w-80 p-10 text-center lg:text-left">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <Button size="lg" className="m-10 bg-[#23A6F0] text-white">
            Get Quote Now
          </Button>
        </div>

        <div className="m-3 mb-20 flex items-center justify-center p-5">
          <img src="/aboutus.png" alt="About Us Image" />
        </div>
      </div>

      {/* Problems Section */}
      <div className="flex flex-col items-center justify-center lg:w-full lg:flex-row lg:p-20">
        <div>
          <p className="m-5 text-center text-sm text-[#E74040] lg:mb-2 lg:ml-10 lg:text-left">
            Problems trying
          </p>
          <p className="max-w-80 p-10 text-center text-2xl font-semibold lg:m-0 lg:max-w-xl lg:text-left">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <div>
          <p className="m-5 max-w-80 p-10 text-center text-sm font-light lg:m-0 lg:mt-10 lg:max-w-xl">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="m-3 flex flex-col items-center justify-center gap-10 p-5 lg:flex-row lg:justify-between">
        <div className="p-5">
          <p className="mb-3 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">15K</p>
          <p className="text-base font-semibold">Happy Customers</p>
        </div>
        <div className="p-5">
          <p className="mb-3 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">150K</p>
          <p className="text-base font-semibold">Monthly Visitors</p>
        </div>
        <div className="p-5">
          <p className="mb-3 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">15</p>
          <p className="text-base font-semibold">Countries Worldwide</p>
        </div>
        <div className="p-5">
          <p className="mb-3 text-center text-[58px] font-semibold leading-[80px] tracking-[0.2]">100+</p>
          <p className="text-base font-semibold">Top Partners</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative mb-10 lg:w-2/3">
        <img
          src="/media bg-cover.png"
          alt="Media background"
          className="rounded-lg lg:h-96 lg:w-full lg:object-cover"
        />
        <button className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#23A6F0] p-3">
          <i className="fa-solid fa-play text-white"></i>
        </button>
      </div>

      {/* Meet Our Team Section */}
      <div className="mt-20 flex flex-col items-center justify-center font-montserrat font-semibold">
        <p className="m-5 w-1/2 text-center text-[40px] leading-[50px] text-[#252B42]">
          Meet Our Team
        </p>
        <div className="lg:flex">
          <TeamCards
            username="Erhan Fırat"
            image="/teampage/1708951317641.jpeg"
            profession="Project Owner"
          />
          <TeamCards
            username="Gökhan Özdemir"
            image="/teampage/1635783306921.jpeg"
            profession="Scrum Master"
          />
          <TeamCards
            username="Oğuzhan Evin"
            image="/teampage/me.jpeg"
            profession="Full Stack Developer"
          />
        </div>
      </div>
    </div>
  );
}
