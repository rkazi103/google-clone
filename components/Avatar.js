const Avatar = ({ url }) => {
  return (
    <img
      src={url}
      loading="lazy"
      alt="profile image"
      className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
    />
  );
};

export default Avatar;
