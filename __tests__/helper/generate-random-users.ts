import {User, Users} from 'src/store/users/types';

function generateRandomUser(uid: number): User {
  const randomBananas = Math.floor(Math.random() * 100) + 1;
  const randomLastDayPlayed = `2021-09-${Math.floor(Math.random() * 30) + 1}`;
  const randomLongestStreak = Math.floor(Math.random() * 10) + 1;
  const randomName = `User ${uid}`;
  const randomStars = Math.floor(Math.random() * 5) + 1;
  const randomSubscribed = Math.random() < 0.5;

  return {
    bananas: randomBananas,
    lastDayPlayed: randomLastDayPlayed,
    longestStreak: randomLongestStreak,
    name: randomName,
    stars: randomStars,
    subscribed: randomSubscribed,
    uid: uid.toString(),
  };
}

export function generateRandomUsers(count: number) {
  const users = {} as Users;

  for (let i = 1; i <= count; i++) {
    users[i.toString()] = generateRandomUser(i);
  }

  return users;
}
