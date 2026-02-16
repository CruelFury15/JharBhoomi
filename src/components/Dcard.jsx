import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import heart from '../images/heart.svg';
import share from '../images/share.svg'; // Fixed typo here (added /)
import duration from '../images/duration.svg';
import visitors from '../images/visitors.svg';
import month from '../images/month.svg';

function Dcard(props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-yellow-200 bg-white shadow-sm transition hover:shadow-md dark:border-yellow-800 dark:bg-yellow-900">
      <div className="relative">
        <img src={props.img} className="h-48 w-full object-cover" alt={props.alt} loading="lazy" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3">
          {props.describe ? (
            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {props.describe}
            </span>
          ) : <span />}

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 ring-1 ring-black/10 backdrop-blur hover:bg-white"
              aria-label="Like"
            >
              <img src={heart} alt="like" className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 ring-1 ring-black/10 backdrop-blur hover:bg-white"
              aria-label="Share"
            >
              <img src={share} alt="share" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-50">{props.cardtitle}</h3>
          <p className="text-sm text-yellow-600 dark:text-yellow-300">{props.cardtext}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-yellow-700 dark:text-yellow-200">
          <span className="inline-flex items-center gap-2">
            <img src={duration} alt="duration" className="h-5 w-5" />
            <span className="font-medium">{props.duration}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <img src={visitors} alt="visitors" className="h-5 w-5" />
            <span className="font-medium">{props.visitors}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <img src={month} alt="month" className="h-5 w-5" />
            <span className="font-medium">{props.month}</span>
          </span>
        </div>

        {(props.l1 || props.l2 || props.l3) && (
          <ul className="grid grid-cols-1 gap-2 text-sm text-yellow-700 dark:text-yellow-200">
            {props.l1 ? <li className="rounded-lg bg-yellow-50 px-3 py-2 ring-1 ring-yellow-200 dark:bg-yellow-950 dark:ring-yellow-800">{props.l1}</li> : null}
            {props.l2 ? <li className="rounded-lg bg-yellow-50 px-3 py-2 ring-1 ring-yellow-200 dark:bg-yellow-950 dark:ring-yellow-800">{props.l2}</li> : null}
            {props.l3 ? <li className="rounded-lg bg-yellow-50 px-3 py-2 ring-1 ring-yellow-200 dark:bg-yellow-950 dark:ring-yellow-800">{props.l3}</li> : null}
          </ul>
        )}

        <div className="flex items-center justify-between gap-3">
          <Button href={props.btnhref} text={props.btntxt} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-yellow-200 bg-white text-yellow-700 shadow-sm hover:bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 dark:hover:bg-yellow-800"
            aria-label="Share"
          >
            <img src={share} alt="share" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-yellow-200 px-5 py-4 text-sm dark:border-yellow-800">
        <span className="text-yellow-600 dark:text-yellow-300">Starting From</span>
        <span className="text-base font-semibold text-yellow-900 dark:text-yellow-50">{props.price}</span>
      </div>
    </article>
  );
}

Dcard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  describe: PropTypes.string,
  cardtitle: PropTypes.string,
  cardtext: PropTypes.string,
  duration: PropTypes.string,
  visitors: PropTypes.string,
  month: PropTypes.string,
  l1: PropTypes.string,
  l2: PropTypes.string,
  l3: PropTypes.string,
  btnhref: PropTypes.string,
  btntxt: PropTypes.string,
  price: PropTypes.string,
};

export default Dcard;