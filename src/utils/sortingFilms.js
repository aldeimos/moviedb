import moment from 'moment';

const sortFilms = (films, sortMode = 'default') => {
  switch (sortMode) {
    case 'release_date': {
      const shallowCopy = [...films];
      return shallowCopy.sort((a, b) => moment(a.release_date).format('X') - moment(b.release_date).format('X'));
    }
    case 'vote_average': {
      const shallowCopy = [...films];
      return shallowCopy.sort((a, b) => a.vote_average - b.vote_average);
    }

    default: return films;
  }
};

export {
  sortFilms
}
