import PropTypes from "prop-types";

const TeamCards = ({ username, profession, image }) => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      <img
        src={image}
        alt={`Photo of ${username}`}
        height="231px"
        width="329px"
        className="m-3 rounded-full object-cover"
      />
      <p className="m-2 text-lg font-semibold text-[#252B42]">{username}</p>
      <p className="m-2 text-sm text-[#737373]">{profession}</p>
      <div className="m-2 flex items-center justify-center gap-3">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/teampage/face.png" alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/teampage/inst.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/teampage/twitter.png" alt="Twitter" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

TeamCards.propTypes = {
  username: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TeamCards;
