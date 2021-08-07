import { format, fromUnixTime, addBusinessDays } from 'date-fns';

console.log(addBusinessDays);

const formatDate = (timestamp: Maybe<string>) => {
  if (!timestamp) return 'N/A';
  return format(fromUnixTime(+timestamp / 1000), 'MMMM do y');
};

export default formatDate;
