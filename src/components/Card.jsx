import PropTypes from 'prop-types';
import Button from './Button';

export default function Card(props) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="relative">
        <img
          src={props.img}
          alt={props.alt}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
        {props.describe ? (
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 py-3">
            <p className="text-xs font-medium text-white">{props.describe}</p>
          </div>
        ) : null}
      </div>

      <div className="space-y-3 p-5">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{props.cardtitle}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">{props.cardtext}</p>
        </div>

        {(props.l1 || props.l2 || props.l3) && (
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            {props.l1 ? <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />{props.l1}</li> : null}
            {props.l2 ? <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />{props.l2}</li> : null}
            {props.l3 ? <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />{props.l3}</li> : null}
          </ul>
        )}

        <div className="pt-2">
          <Button href={props.btnhref} text={props.btntxt} />
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  describe: PropTypes.string,
  cardtitle: PropTypes.string,
  cardtext: PropTypes.string,
  l1: PropTypes.string,
  l2: PropTypes.string,
  l3: PropTypes.string,
  btntxt: PropTypes.string,
  btnhref: PropTypes.string,
};

Card.defaultProps = {
  img: 'https://via.placeholder.com/300x200',
  alt: '',
  cardtitle: 'Set Card Title Here',
  cardtext: 'Set Card Text Here',
  btntxt: 'Set Button Text Here',
  btnhref: '/',
};
