import favicons from './extensions/favicon.ico';
import logo from './extensions/logo.png';

const config = {
  locales: [
    'es'
  ],
  head: {
    favicon: favicons,
  },
  auth: {
    logo: logo,
  },
  menu: {
    logo: logo,
  },
  notifications: {
    release: false
  },
  tutorials: false,
  theme: {
    dark: true
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
