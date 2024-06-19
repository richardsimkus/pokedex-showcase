import PropTypes from "prop-types";
import { useState } from "react";

const CardFigure = ({ hoverImageSrc, imageSrc, title }) => {
  const [hovering, setHovering] = useState(false);

  if (!hoverImageSrc) {
    return (
      <figure className="pt-2">
        <img alt={`${title}`} className="scale-150" src={imageSrc} />;
      </figure>
    );
  }

  return (
    <figure
      className="pt-2"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {hovering ? (
        <img alt={`${title}`} className="scale-150" src={hoverImageSrc} />
      ) : (
        <img alt={`${title}-back`} className="scale-150" src={imageSrc} />
      )}
    </figure>
  );
};

export default CardFigure;

CardFigure.propTypes = {
  hoverImageSrc: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
