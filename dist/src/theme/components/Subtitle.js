Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=require("react-native");

var _platform=require("./../variables/platform");var _platform2=_interopRequireDefault(_platform);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

function(){var variables=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_platform2.default;
var subtitleTheme={
fontSize:variables.subTitleFontSize,
fontFamily:variables.titleFontfamily,
color:variables.subtitleColor,
textAlign:"center",
paddingLeft:_reactNative.Platform.OS==="ios"?4:0,
marginLeft:_reactNative.Platform.OS==="ios"?undefined:-3};


return subtitleTheme;
};
//# sourceMappingURL=Subtitle.js.map