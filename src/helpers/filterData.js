import moment from 'moment';
import { includes } from 'lodash';
import filterDeep from 'deepdash-es/filterDeep';

export default (data) => {
  const ids = ['bookingId', 'bookingTime', 'streetAddress', 'bookingPrice', 'firstName', 'lastName'];
  let values = {};
  let names = [];
  const response = [];
  filterDeep(
    data, (value, key) => {
      if (includes(ids, key)) {
        if (includes(names, key)) {
          const {
            bookingId, bookingTime, streetAddress, bookingPrice, firstName, lastName,
          } = values;
          response.push({
            bookingId: bookingId || '',
            bookingTime: moment(bookingTime).format('DD/MM/YYYY') || '',
            streetAddress: streetAddress || '',
            bookingPrice: bookingPrice || '',
            client: (firstName && lastName) ? `${firstName} ${lastName}` : '',
          });
          names = [];
          values = [];
        } else {
          names.push(key);
        }
        values = ({ [key]: value, ...values });
      }
    },
  );
  return response;
};
