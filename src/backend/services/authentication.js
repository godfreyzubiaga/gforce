import auth from 'feathers-authentication';
import jwt from 'feathers-authentication-jwt';
import local from 'feathers-authentication-local';

function authentication() {
  return function execute() {
    const app = this;
    const before = {
      create: [
        auth.hooks.authenticate(['jwt', 'local'])
      ],
      remove: [
        auth.hooks.authenticate('jwt')
      ]
    };
    app
      .configure(auth(app.get('auth')))
      .configure(local())
      .configure(jwt());
    app.service('/authentication')
      .before(before);
  };
}

export default authentication;