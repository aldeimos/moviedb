import moment from 'moment';
const parseRuntime = (runtime) => {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`
};

const parseReleaseDate = (release_date) => {
  return moment(release_date).format('LL');
};

const parseBigInt = (big_int) => {
  return big_int.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
};

export {
  parseRuntime,
  parseReleaseDate,
  parseBigInt
}
