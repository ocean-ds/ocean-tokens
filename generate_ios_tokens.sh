echo "Generate tokens ios"

theo src/mobile-ios-color-tokens.yml --setup scripts/build/ios/setup.js --transform ios --format json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-ios-typography-tokens.yml --setup scripts/build/ios/setup.js --transform ios --format json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-ios-size-tokens.yml --setup scripts/build/ios/setup.js --transform ios --format json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-ios-shadow-tokens.yml --setup scripts/build/ios/setup.js --transform ios --format json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-ios-font-name-tokens.yml --setup scripts/build/ios/setup.js --transform ios --format json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-tokens.yml --setup scripts/build/ios/setup.js --transform ios --format json --dest dist/ios --resolveMetaAliases