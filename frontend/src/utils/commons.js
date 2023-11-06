export const colors = {
  Other: '#FFC0CB',
  Travel: '#FFA500',
  Education: '#FFD700',
  Entertainment: '#FF0000',
  Health: '#00FF00',
  Shopping: '#0000FF',
  Transport: '#800080',
  Food: '#008000',
};

export const categories = Object.keys(colors);

export const getMonthName = () => {
  const month = new Date().getMonth();
  return month;
};

export const Months = [
  'None',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Auguest',
  'September',
  'October',
  'November',
  'December',
];
