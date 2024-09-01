import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';

const Menu = ({ items = [] }) => {
  return (
    <Fade cascade damping={0.3}>
      <ul className='lg:flex lg:gap-5 space-y-4 lg:space-y-0 font-m-plus'>
        {items.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'border-2 border-royal-amethyst px-3 py-1 rounded text-deep-plum text-sm lg:text-base'
                  : 'hover:border-b-2 border-b-royal-amethyst text-sm lg:text-base'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Fade>
  );
};

Menu.propTypes = {
  items: PropTypes.array,
}

export default Menu;
