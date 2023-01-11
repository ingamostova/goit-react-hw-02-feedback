// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';

export const OptionList = ({ options, onClick }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <div>
            <button type="button" onBtnClick={() => onClick(option)}>
              {option}
            </button>
          </div>
        );
      })}
    </div>
  );
};

OptionList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
