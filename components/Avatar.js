import PropTypes from "prop-types";

const Avatar = ({ url, classes }) => {
  return (
    <img
      src={url}
      loading="lazy"
      alt="profile image"
      className={`h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${classes}`}
    />
  );
};

Avatar.propTypes = {
  url: PropTypes.string,
  classes: PropTypes.string,
};

export default Avatar;
