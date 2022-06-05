import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <span className={s.title}>{message}</span>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
