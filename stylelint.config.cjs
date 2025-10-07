module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
  ],
  plugins: [
    'stylelint-order',
  ],
  ignoreFiles: [
    '**/*.vue',
  ],
  rules: {
    // Ordering properties
    'order/properties-order': [
      [
        // Positioning
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',

        // Display & Box Model
        'display',
        'flex',
        'flex-direction',
        'flex-wrap',
        'justify-content',
        'align-items',
        'align-content',
        'order',
        'float',
        'width',
        'height',
        'max-width',
        'max-height',
        'min-width',
        'min-height',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'overflow',
        'overflow-x',
        'overflow-y',

        // Typography
        'font',
        'font-family',
        'font-size',
        'font-weight',
        'font-style',
        'font-variant',
        'font-size-adjust',
        'font-stretch',
        'line-height',
        'letter-spacing',
        'text-align',
        'text-decoration',
        'text-transform',
        'color',

        // Background
        'background',
        'background-color',
        'background-image',
        'background-position',
        'background-size',
        'background-repeat',
        'background-origin',
        'background-clip',
        'background-attachment',

        // Border
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-radius',
        'box-shadow',

        // Other
        'opacity',
        'transition',
        'transform',
        'animation',
        'cursor',
        'pointer-events',
        'user-select',
        'visibility',
      ],
      { unspecified: 'bottomAlphabetical' },
    ],
    // Sorting selectors inside a block (optional)
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      {
        type: 'at-rule',
        name: 'include',
      },
      'rules',
    ],
  },
};
