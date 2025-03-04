import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ProductDetailDescription = () => {
  return (
    <div>
      <div>
        <div className="font-sans text-[#737373] font-bold mt-24 flex flex-row justify-between md:justify-center gap-3 text-sm">
          <p>Description</p>
          <p>Additional Information</p>
          <p>
            Reviews <span className="text-[#23856D]">(0)</span>
          </p>
        </div>
        <div className="md:flex md:flex-row md:gap-10 md:mt-6">
          <div>
            <img
              className="w-full h-[300px] md:w-[500px] md:h-[410px] object-cover mt-6 rounded-lg"
              src="/images/product-detail-1.jpg"
              alt="Sample Image"
            />
          </div>
          <div className="font-sans mt-16 md:mt-6">
            <h2 className="text-[#252B42] font-bold text-xl">
              the quick fox jumps over{" "}
            </h2>
            <div className="font-bold text-sm text-[#737373] mt-6">
              <p>
                Met minim Mollie non desert Alamo est sit{" "}
                <br className="hidden md:block" />
                cliquey dolor do met sent. RELIT official{" "}
                <br className="hidden md:block" /> consequent door ENIM RELIT
                Mollie. <br className="hidden md:block" />
                Excitation venial consequent sent nostrum{" "}
                <br className="hidden md:block" />
                met.
              </p>{" "}
              <br />
              <p>
                Met minim Mollie non desert Alamo est sit{" "}
                <br className="hidden md:block" /> cliquey dolor do met sent.
                RELIT official <br className="hidden md:block" /> consequent
                door ENIM RELIT Mollie. <br className="hidden md:block" />
                Excitation venial consequent sent nostrum{" "}
                <br className="hidden md:block" /> met.
              </p>{" "}
              <br />
              <p>
                Met minim Mollie non desert Alamo est sit{" "}
                <br className="hidden md:block" /> cliquey dolor do met sent.
                RELIT official <br className="hidden md:block" /> consequent
                door ENIM RELIT Mollie. <br className="hidden md:block" />
                Excitation venial consequent sent nostrum{" "}
                <br className="hidden md:block" /> met.
              </p>
            </div>
          </div>
          <div className="font-sans mt-16 md:mt-6">
            <div className="md:flex md:flex-row">
              <div>
                <h2 className="text-[#252B42] font-bold text-xl">
                  the quick fox jumps over{" "}
                </h2>
                <div className="font-bold text-sm text-[#737373] mt-6">
                  <div className="flex flex-row items-center gap-3 mb-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[#737373] text-[12px]"
                    />
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex flex-row items-center gap-3 mb-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[#737373] text-[12px]"
                    />
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex flex-row items-center gap-3 mb-2">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[#737373] text-[12px]"
                    />
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-[#737373] text-[12px]"
                    />
                    <p>the quick fox jumps over the lazy dog</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-sans mt-16">
              <h2 className="text-[#252B42] font-bold text-xl">
                the quick fox jumps over{" "}
              </h2>
              <div className="font-bold text-sm text-[#737373] mt-6">
                <div className="flex flex-row items-center gap-3 mb-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[#737373] text-[12px]"
                  />
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex flex-row items-center gap-3 mb-2">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[#737373] text-[12px]"
                  />
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[#737373] text-[12px]"
                  />
                  <p>the quick fox jumps over the lazy dog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDescription;
