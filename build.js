const StyleDictionaryPackage = require('style-dictionary');

function getStyleDictionaryConfig(platform) {
  return {
    source: ['src/globals/**/*.json', `src/platforms/${platform}/*.json`],
    platforms: {
      js: {
        transforms: [
          'attribute/cti',
          'name/cti/constant',
          'size/rem',
          'color/hex'
        ],
        buildPath: `dist/${platform}/`,
        prefix: 'token',
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/es6',
            options: { showFileHeader: false }
          }
        ]
      },
      web: {
        transforms: [
          'attribute/cti',
          'name/cti/constant',
          'time/seconds',
          'content/icon',
          'size/rem',
          'color/css'
        ],
        prefix: 'token',
        buildPath: 'dist/web/',
        files: [
          {
            destination: 'tokens.scss',
            format: 'scss/variables',
            options: { showFileHeader: false }
          }
        ]
      },
      android: {
        transforms: [
          'attribute/cti',
          'name/cti/constant',
          'color/hex8android',
          'size/remToSp',
          'size/remToDp'
        ],
        prefix: 'token',
        buildPath: 'dist/android/',
        files: [
          {
            destination: 'tokens.colors.xml',
            format: 'android/colors',
            options: { showFileHeader: false }
          }
        ]
      },
      ios: {
        transforms: [
          'attribute/cti',
          'name/cti/constant',
          'color/UIColor',
          'content/objC/literal',
          'asset/objC/literal',
          'size/remToPt',
          'font/objC/literal'
        ],
        prefix: 'token',
        buildPath: 'dist/ios/',
        files: [
          {
            destination: 'tokens.h',
            format: 'ios/macros',
            options: { showFileHeader: false }
          }
        ]
      },
      ios: {
        transforms: [
          'attribute/cti',
          'name/cti/constant',
          'color/UIColorSwift',
          'content/swift/literal',
          'asset/swift/literal',
          'size/swift/remToCGFloat',
          'font/swift/literal'
        ],
        prefix: 'token',
        buildPath: 'dist/ios/',
        files: [
          {
            destination: 'tokens.swift',
            format: 'ios-swift/class.swift',
            className: 'DesignTokens',
            options: { showFileHeader: false }
          }
        ]
      }
    }
  };
}

console.log('Build started...');
['web', 'ios', 'android'].map(function(platform) {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${platform}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(platform)
  );

  StyleDictionary.buildPlatform('js');
  StyleDictionary.buildPlatform(platform);

  console.log('\nEnd processing');
});

console.log('\n==============================================');
console.log('\nBuild completed!');
