
const IS_DEV = process.env.APP_VARIANT === 'development';


export default {
    name: IS_DEV ? 'SpaceCraft (Dev)' : 'SpaceCraft',
    slug: 'SpaceCraft',
    ios: {
      bundleIdentifier: IS_DEV ? 'com.spacecraft.dev' : 'com.spacecraft',

    },
    android: {
      package: IS_DEV ? 'com.spacecraft.dev' : 'com.spacecraft',
    },
  };