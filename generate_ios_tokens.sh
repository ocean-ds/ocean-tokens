echo "Generate tokens ios"
#npm run build:ios-typography && npm run build:ios-color && npm run build:ios-size && npm run build:ios

theo src/mobile-ios-color-tokens.yml --setup formats/ios/ios-formats.js --transform ios --format blu.ios.json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-ios-typography-tokens.yml --setup formats/ios/ios-formats.js --transform ios --format blu.ios.json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-ios-size-tokens.yml --setup formats/ios/ios-formats.js --transform ios --format blu.ios.json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-ios-shadow-tokens.yml --setup formats/ios/ios-formats.js --transform ios --format blu.ios.json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-ios-font-name-tokens.yml --setup formats/ios/ios-formats.js --transform ios --format blu.ios.json --dest dist/ios --resolveMetaAliases &&
theo src/mobile-tokens.yml --setup formats/ios/ios-formats.js --transform ios --format blu.ios.json --dest dist/ios --resolveMetaAliases