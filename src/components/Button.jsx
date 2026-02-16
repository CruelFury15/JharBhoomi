import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Button(props) {
  // Check if it's an external link
  const isExternal = props.href.startsWith('http') || props.href.startsWith('//');
  
  const className = [
    'inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm',
    'hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-yellow-50',
    'dark:focus:ring-offset-yellow-950',
    props.className,
  ]
    .filter(Boolean)
    .join(' ');

  // Use regular <a> for external links, Link for internal navigation
  if (isExternal) {
    return (
      <a
        href={props.href}
        className={className}
        target={props.target}
        rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        role="button"
      >
        {props.text}
      </a>
    );
  }

  return (
    <Link
      to={props.href}
      className={className}
      target={props.target}
      rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
      role="button"
    >
      {props.text}
    </Link>
  );
}
Button.propTypes = {text: PropTypes.string.isRequired,
href: PropTypes.string.isRequired,
className: PropTypes.string,
target: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  target: undefined,
};