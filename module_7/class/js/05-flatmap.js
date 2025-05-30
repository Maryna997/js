/*
 * Метод flatMap
 */

//TODO: Зберіть усі теги (властивість tags) до окремого масива.

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

console.log(tweets);

const tags = tweets.flatMap((el, idx, arr) => {
  return el.tags;
});

console.log(tags);