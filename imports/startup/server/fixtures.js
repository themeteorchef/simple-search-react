import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import { Movies } from '../../api/movies/movies.js';

const users = [{
  email: 'admin@admin.com',
  password: 'password',
  profile: {
    name: { first: 'Carl', last: 'Winslow' },
  },
  roles: ['admin'],
}];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles);
  }
});

const movies = [{
  title: 'Ghostbusters',
  year: '1984',
  rated: 'PG',
  plot: 'Three former parapsychology professors set up shop as a unique ghost removal service.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_SX300.jpg',
}, {
  title: 'The Matrix',
  year: '1999',
  rated: 'R',
  plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
}, {
  title: 'Whiplash',
  year: '2014',
  rated: 'R',
  plot: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg',
}, {
  title: 'Almost Famous',
  year: '2000',
  rated: 'R',
  plot: 'A high-school boy is given the chance to write a story for Rolling Stone Magazine about an up-and-coming rock band as he accompanies it on their concert tour.',
  poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzY1ZjMwMGEtYTY1ZS00ZDllLTk0ZmUtYzA3ZTA4NmYwNGNkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
}];

movies.forEach((movie) => {
  const movieExists = Movies.findOne({ title: movie.title });
  if (!movieExists) Movies.insert(movie);
});
