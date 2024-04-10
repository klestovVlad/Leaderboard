import {User} from 'src/store/users/types';

export function getBestUsersMatchByName(
  searchName: string,
  users: User[],
): User[] {
  const matches: {user: User; score: number}[] = [];

  users.forEach((user, index) => {
    const score = calculateMatchScore(searchName, user.name);
    matches.push({
      user: {...user, rank: index + 1, isHighlighted: true},
      score,
    });
  });

  matches.filter(({score}) => score === searchName.length);

  return matches
    .filter(({score}) => score === searchName.length)
    .slice(0, 10)
    .map(match => match.user);
}

function calculateMatchScore(searchName: string, userName: string): number {
  let score = 0;
  const searchNameLower = searchName.toLowerCase();
  const userNameLower = userName.toLowerCase();

  for (let i = 0; i < searchNameLower.length; i++) {
    if (searchNameLower[i] === userNameLower[i]) {
      score++;
    } else {
      break;
    }
  }

  return score;
}
