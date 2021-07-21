const countryCodes = require('country-codes-list');

export default countryCodes.customList(
  'countryNameEn',
  '+{countryCallingCode}'
);
