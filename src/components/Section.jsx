import PropTypes from 'prop-types';

export default function Section(props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-yellow-200 bg-red shadow-sm dark:border-yellow-800 dark:bg-red-900">
      <div className="relative h-48">
        <img 
          src={props.image1} 
          alt={props.title}
          className="h-full w-full object-cover" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-block rounded-full bg-yellow/90 px-3 py-1 text-xs font-medium text-red-700 backdrop-blur dark:bg-red-900/90 dark:text-yellow-300">
            {props.describe}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <img src={props.img} alt="rating" className="h-4 w-4" />
          <span className="text-sm font-semibold text-white">{props.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h5 className="text-lg font-bold text-slate-900 dark:text-slate-50">{props.title}</h5>
        <p className="mt-2 text-sm text-yellow-800 dark:text-red-700">{props.text1}</p>
        <button 
          type="button" 
          className="mt-4 w-full rounded-lg bg-yellow-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
        >
          Discover More
        </button>
      </div>
    </div>
  );
}

Section.propTypes = {
  image1: PropTypes.string,
  describe: PropTypes.string,
  img: PropTypes.string,
  rating: PropTypes.string,
  title: PropTypes.string,
  text1: PropTypes.string
};
