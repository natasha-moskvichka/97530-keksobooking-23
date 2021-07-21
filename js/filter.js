const filterForm = document.querySelector('.map__filters');
const features = filterForm.querySelectorAll('.map__checkbox');
const housingGuests = filterForm.querySelectorAll('.map__filter');

const mainFilter = {
  features: [],
  type: '',
  price: '',
  rooms: '',
  guests: '',
};

const filterProperty = function () {
  housingGuests.forEach((item) => {
    switch (item.id) {
      case 'housing-type':
        mainFilter.type = item.value;
        break;
      case 'housing-price':
        mainFilter.price = item.value;
        break;
      case 'housing-rooms':
        mainFilter.rooms = item.value;
        break;
      case 'housing-guests':
        mainFilter.guests = item.value;
        break;
      default: break;
    }
  });
  features.forEach((item) => {
    if (features.checked) {
      mainFilter.features.push(item.value);
    }
  });
  return mainFilter;
};

filterProperty();


