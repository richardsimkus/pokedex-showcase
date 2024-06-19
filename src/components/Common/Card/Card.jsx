import PropTypes from "prop-types";

import CardFigure from "./CardFigure/CardFigure.jsx";

const Card = ({
  hoverImageSrc,
  imageSrc,
  isFavorite,
  onClick,
  setFavorite,
  tags,
  title,
}) => {
  return (
    <div
      className="card group w-96 h-60 shadow-xl bg-base-200 m-2 hover:shadow-2xl hover:bg-base-300 cursor-pointer transition duration-200 ease-in-out min-w-80"
      onClick={() => onClick()}
    >
      <div className="indicator w-full">
        <span className="indicator-item z-0 mr-6 mt-6">
          <svg
            fill={isFavorite ? "#ffc22dbd" : "#97979782"}
            height="36"
            onClick={(event) => {
              setFavorite(title);
              event.stopPropagation();
            }}
            viewBox="0 0 24 24"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isFavorite ? (
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            ) : (
              <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
            )}
          </svg>
        </span>
      </div>
      <CardFigure
        hoverImageSrc={hoverImageSrc}
        imageSrc={imageSrc}
        title={title}
      />
      <div className="card-body justify-between">
        <h2 className="card-title group-hover:text-white transition duration-200 ease-in-out">
          {title}
        </h2>

        <div className="card-actions justify-start ">
          {tags.map((tag) => (
            <div
              className={`badge text-white font-bold`}
              key={tag.name}
              style={{
                backgroundColor: tag.color.backgroundColor,
                color: tag.color.text,
              }}
            >
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  hoverImageSrc: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
  setFavorite: PropTypes.func,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.shape({
        backgroundColor: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
      name: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string.isRequired,
};
