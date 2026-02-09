import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  return (
    <a
      href={props.href}
      className={[
        'inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm',
        'hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-50',
        'dark:focus:ring-offset-slate-950',
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
      target={props.target}
      rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
      role="button"
    >
      {props.text}
    </a>
  )
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