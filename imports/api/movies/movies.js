import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Movies = new Mongo.Collection('Movies');

Movies.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Movies.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const MoviesSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'The title of the movie.',
  },
  year: {
    type: String,
    label: 'The year the movie was released.',
  },
  rated: {
    type: String,
    label: 'The rating for the movie.',
  },
  plot: {
    type: String,
    label: 'The plot of the movie.',
  },
  poster: {
    type: String,
    label: 'The poster image for the movie.',
  },
});

Movies.attachSchema(MoviesSchema);
