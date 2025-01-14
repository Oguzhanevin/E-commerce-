export default function Detail() {
    const paragraphs = [
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    ];
    
    const listparagraphs = [
      "The quick fox jumps over",
      "The quick fox jumps over",
    ];
  
    const listItems = [
      "The quick fox jumps over the lazy dog",
      "The quick fox jumps over the lazy dog",
      "The quick fox jumps over the lazy dog",
      "The quick fox jumps over the lazy dog",
    ];
  
    const TextSection = ({ title, text, isList }) => (
      <div className="mt-10">
        <p className="text-2xl font-semibold text-[#252B42]">{title}</p>
        {isList ? (
          <ul className="mt-5 space-y-2 text-sm font-semibold text-[#737373]">
            {text.map((item, index) => (
              <li key={index} className="flex items-center">
                <i className="fa-solid fa-chevron-right mr-2"></i>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 w-2/3 text-sm leading-[20px] text-[#737373]">{text}</p>
        )}
      </div>
    );
  
    return (
      <div className="flex flex-col items-center justify-center p-10 lg:flex-row lg:justify-between">
        {/* Left Image Section */}
        <div className="lg:flex-1">
          <img
            src="/productdetail.png"
            alt="Product Detail"
            className="rounded-lg shadow-lg shadow-gray-400"
          />
        </div>
  
        {/* Center Text Section */}
        <div className="lg:flex-1">
          <TextSection title="The quick fox jumps over" text={paragraphs} />
        </div>
  
        {/* Right List Section */}
        <div className="lg:flex-1">
          {listparagraphs.map((title, index) => (
            <TextSection key={index} title={title} text={listItems} isList={true} />
          ))}
        </div>
      </div>
    );
  }
  