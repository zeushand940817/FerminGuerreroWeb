const size = {
  mobile: '378px',
  tablet: '768px',
  desktop: '1440px',
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
}

module.exports = device
