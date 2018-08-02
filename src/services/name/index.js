// Helper functions for title-casing strings from an array of strings
export function titleCase(...args) {
  return args
    .map(v => {
      v = v.toLowerCase();
      return v[0].toUpperCase() + v.slice(1).toLowerCase();
    })
    .join(' ');
}
