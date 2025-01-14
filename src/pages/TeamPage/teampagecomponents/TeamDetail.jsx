import { Button } from "@/components/ui/button";
import TeamCards from "./TeamCards";

export default function TeamDetail() {
  return (
    <div className="flex flex-col items-center justify-center font-montserrat font-semibold">
      {/* Title Section */}
      <p className="m-5 w-1/2 text-center text-[40px] leading-[50px] text-[#252B42]">
        Meet Our Team
      </p>

      {/* Team Cards Section */}
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

      {/* Call to Action Section */}
      <div className="flex flex-col items-center justify-center lg:mt-20">
        <p className="m-5 w-2/3 text-center text-[40px] leading-[50px] text-[#252B42]">
          Start your 14 days free trial
        </p>
        <p className="w-2/3 text-center text-sm font-thin">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>

        {/* Button */}
        <Button className="m-10 bg-[#23A6F0]">Try it free now</Button>

        {/* Social Media Icons */}
        <div className="m-2 flex items-center justify-center gap-3">
          <img src="/teampage/twblue.png" alt="Twitter" />
          <img src="/teampage/fbblue.png" alt="Facebook" />
          <img src="/teampage/instblue.png" alt="Instagram" />
          <img src="/teampage/linkedblue.png" alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
}
