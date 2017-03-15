/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Post from '../api/post/post.model';
import Blog from '../api/blog/blog.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if (config.seedDB) {


    Post.find({}).remove()
      .then(() => {
        Post.create([{
          title: 'Development Tools',
          content: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
          + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
          + 'Stylus, Sass, and Less.'
        }, {
          title: 'Server and Client integration',
          content: 'Built with a powerful and fun stack: MongoDB, Express, '
          + 'AngularJS, and Node.'
        }, {
          title: 'Smart Build System',
          content: 'Build system ignores `spec` files, allowing you to keep '
          + 'tests alongside code. Automatic injection of scripts and '
          + 'styles into your index.html'
        }, {
          title: 'Modular Structure',
          content: 'Best practice client and server structures allow for more '
          + 'code reusability and maximum scalability'
        }, {
          title: 'Optimized Build',
          content: 'Build process packs up your templates as a single JavaScript '
          + 'payload, minifies your scripts/css/images, and rewrites asset'
          + 'names for caching.'
        }, {
          title: 'Deployment Ready',
          content: 'Easily deploy your app to Heroku or Openshift with the heroku '
          + 'and openshift subgenerators'
        }]).then((posts) => {
          Blog.find({}).remove()
            .then(() => {
              Blog.create([
                {
                  title: 'First Blog',
                  posts: [posts[0]._id, posts[1]._id]
                },
                {
                  title: 'Second Blog',
                  posts: [posts[2]._id, posts[3]._id]
                },
                {
                  title: 'Third Blog',
                  posts: [posts[4]._id, posts[5]._id]
                }])
            });
        });
      })
      .then(() => {
        console.log('finished populating posts');
      })
      .catch(err => console.log('error populating posts', err));
  }
}
