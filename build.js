const StyleDictionaryPackage = require('style-dictionary');
const fs = require('fs');
const _ = require('lodash');

StyleDictionaryPackage.registerFormat({
  name: 'android/xml',
  formatter: _.template(
    fs.readFileSync(__dirname + '/templates/android-xml.template')
  )
});

function getStyleDictionaryConfig(platform) {
  return {
    source: ['src/globals/**/*.json', `src/platforms/${platform}/*.json`],
    platforms: {
      js: {
        transformGroup: 'js',
        buildPath: `dist/${platform}/`,
        files: [
          {
            destination: 'tokens.js',
            format: 'javascript/module',
            options: { showFileHeader: false }
          }
        ]
      },
      web: {
        transformGroup: 'scss',
        prefix: 'token',
        buildPath: 'dist/web/',
        files: [
          {
            destination: '_tokens.scss',
            format: 'scss/variables',
            options: { showFileHeader: false }
          }
        ]
      },
      android: {
        transformGroup: 'android',
        buildPath: 'dist/android/',
        files: [
          {
            destination: 'TokensColor.xml',
            format: 'android/xml',
            filter: {
              attributes: {
                category: 'color'
              }
            }
          },
          {
            destination: 'TokensFont.xml',
            format: 'android/xml',
            filter: {
              attributes: {
                category: 'font'
              }
            }
          }
        ]
      },
      ios: {
        transformGroup: 'ios-swift-separate',
        buildPath: 'dist/ios/',
        files: [
          {
            destination: 'TokensColor.swift',
            format: 'ios-swift/enum.swift',
            className: 'TokensColor',
            options: { showFileHeader: false },
            filter: {
              attributes: {
                category: 'color'
              }
            }
          },
          {
            destination: 'TokensFont.swift',
            format: 'ios-swift/enum.swift',
            className: 'TokensFont',
            options: { showFileHeader: false },
            filter: {
              attributes: {
                category: 'font'
              }
            }
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
