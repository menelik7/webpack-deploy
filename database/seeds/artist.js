import _ from 'lodash';
import { faker } from '@faker-js/faker';
import { GENRES } from '../constants';

const boolean = [true, false];
const createRandomIndex = () => {
  return Math.floor(Math.random() * boolean.length);
};

export default function Artist() {
  return {
    _id: _.uniqueId(),
    name: faker.name.fullName(),
    age: randomBetween(15, 45),
    yearsActive: randomBetween(0, 15),
    image: faker.image.avatar(),
    genre: getGenre(),
    website: faker.internet.url(),
    netWorth: randomBetween(0, 5000000),
    labelName: faker.company.name(),
    retired: boolean[createRandomIndex()],
    albums: getAlbums(),
  };
}

function getAlbums() {
  return _.times(randomBetween(0, 5), () => {
    const copiesSold = randomBetween(0, 1000000);

    return {
      title: _.capitalize(faker.random.words()),
      date: faker.date.past(),
      copiesSold,
      numberTracks: randomBetween(1, 20),
      image: getAlbumImage(),
      revenue: copiesSold * 12.99,
    };
  });
}

const currentFakerImageKeys = [
  'abstract',
  'animals',
  'avatar',
  'business',
  'cats',
  'city',
  'dataUri',
  'fashion',
  'food',
  'image',
  'imageUrl',
  'nature',
  'nightlife',
  'people',
  'sports',
  'technics',
  'transport',
];

function getAlbumImage() {
  const method = randomEntry(currentFakerImageKeys);

  return faker.image[method]();
}

function getGenre() {
  return randomEntry(GENRES);
}

function randomEntry(array) {
  return array[~~(Math.random() * array.length)];
}

function randomBetween(min, max) {
  return ~~(Math.random() * (max - min)) + min;
}
