import { buildLegacyTheme } from 'sanity';

const props = {
  '--ascent-orange': '#f75b1e',
  '--ascent-orange-80': '#f97f4f',
  '--ascent-orange-60': '#fa9d78',
  '--ascent-blue': '#1a476c',
  '--ascent-black': '#1a1a1a',
  '--ascent-white': '#fff',
  '--ascent-red': '#db4437',
  '--ascent-yellow': '#f4b400',
  '--ascent-green': '#0f9d58',
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--ascent-black'],
  '--white': props['--ascent-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--ascent-black'],
  '--component-text-color': props['--ascent-white'],

  /* Brand */
  '--brand-primary': props['--ascent-orange'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--ascent-orange'],
  '--default-button-success-color': props['--ascent-green'],
  '--default-button-warning-color': props['--ascent-yellow'],
  '--default-button-danger-color': props['--ascent-red'],

  /* State */
  '--state-info-color': props['--ascent-orange'],
  '--state-success-color': props['--ascent-green'],
  '--state-warning-color': props['--ascent-yellow'],
  '--state-danger-color': props['--ascent-red'],

  /* Navbar */
  '--main-navigation-color': props['--ascent-black'],
  '--main-navigation-color--inverted': props['--ascent-white'],

  '--focus-color': props['--ascent-orange'],
});
