import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Arrow from 'assets/images/chevrot-down.svg';
import Less from 'assets/images/less.svg';
import Plus from 'assets/images/plus.svg';

function FoldingCard(props) {
  const {
    data: {
      title,
      content,
      id,
      image,
    },
    checked,
    onSelect,
  } = props;
  const [showMore, setShowMore] = useState(false);

  return (
    <div id={`foldingCard-${id}`} className="cardComponent">
      <div className="cardComponent__content">
        <div className="contentImg">
          <img src={image} alt="tab-img" />
        </div>
        <div className="content">
          <div className="content__title">
            <h2>{title}</h2>
            <label htmlFor={`switch-${id}`} className={`generalSwitch ${checked ? 'generalSwitch--checked' : ''}`}>
              <input
                id={`switch-${id}`}
                type="checkbox"
                checked={checked}
                onChange={() => onSelect(props.data)}
              />
              <div />
            </label>
          </div>
          <div className="content__action">
            <button
              type="button"
              className="increaser__less"
              onClick={() => onSelect(props.data)}
            >
              <img src={checked ? Less : Plus} alt="-" />
            </button>
            <p>{checked ? 'QUITAR' : 'AGREGAR'}</p>
          </div>
          <div className={`content__body ${showMore ? 'content__body--show' : ''}`}>
            <p>{content}</p>
          </div>
          <div
            role="button"
            aria-hidden="true"
            className={`content__showMore ${showMore ? 'content__showMore--show' : ''}`}
            onClick={() => setShowMore(!showMore)}
          >
            <img src={Arrow} alt=">" />
          </div>
        </div>
      </div>
    </div>
  );
}

FoldingCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
  }),
  checked: PropTypes.bool,
  onSelect: PropTypes.func,
};

FoldingCard.defaultProps = {
  data: PropTypes.shape({
    title: 'Card Title',
    content: 'Card Content',
    id: 1,
    image: PropTypes.string,
  }),
  checked: false,
  onSelect: () => {},
};

export default FoldingCard;
