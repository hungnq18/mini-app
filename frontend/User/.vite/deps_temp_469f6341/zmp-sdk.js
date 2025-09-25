import {
  __export
} from "./chunk-G3PMV62Z.js";

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_object_without_properties_loose.mjs.js
function e(e46, n25) {
  if (null == e46) return {};
  var r33, t40, f14 = {}, u48 = Object.keys(e46);
  for (t40 = 0; t40 < u48.length; t40++) r33 = u48[t40], n25.indexOf(r33) >= 0 || (f14[r33] = e46[r33]);
  return f14;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_object_without_properties.mjs.js
function t(t40, r33) {
  if (null == t40) return {};
  var o17, l27, n25 = e(t40, r33);
  if (Object.getOwnPropertySymbols) {
    var p46 = Object.getOwnPropertySymbols(t40);
    for (l27 = 0; l27 < p46.length; l27++) o17 = p46[l27], r33.indexOf(o17) >= 0 || Object.prototype.propertyIsEnumerable.call(t40, o17) && (n25[o17] = t40[o17]);
  }
  return n25;
}

// node_modules/zmp-sdk/apis/index.js
var apis_exports = {};
__export(apis_exports, {
  AppError: () => n5,
  CameraEvents: () => a,
  CheckoutKit: () => s29,
  CheckoutSDK: () => m50,
  EventName: () => o5,
  Events: () => o5,
  FacingMode: () => e2,
  Payment: () => a32,
  PhotoFormat: () => n,
  PhotoQuality: () => t2,
  StreamType: () => o,
  ZMACameraImp: () => v6,
  addRating: () => i38,
  authorize: () => f9,
  checkNFC: () => i44,
  checkStateBioAuthentication: () => s13,
  checkTransaction: () => u36,
  checkZaloCameraPermission: () => t36,
  chooseImage: () => c32,
  clearStorage: () => c12,
  closeApp: () => i11,
  closeLoading: () => i26,
  configAppView: () => u42,
  connectWifi: () => a22,
  createCameraContext: () => r30,
  createOrder: () => d11,
  createOrderIAP: () => u38,
  createShortcut: () => g5,
  displayAd: () => m47,
  downloadFile: () => u47,
  events: () => r29,
  favoriteApp: () => i36,
  followOA: () => p15,
  getAccessToken: () => c6,
  getAppInfo: () => i21,
  getAuthCode: () => m33,
  getBeacons: () => i10,
  getContext: () => e34,
  getContextAsync: () => i29,
  getDeviceId: () => e33,
  getDeviceIdAsync: () => i28,
  getIDToken: () => i42,
  getLocation: () => i31,
  getNetworkType: () => a12,
  getPhoneNumber: () => i23,
  getRouteParams: () => t30,
  getSetting: () => i40,
  getShareableLink: () => m28,
  getStorage: () => u11,
  getStorageInfo: () => i6,
  getSystemInfo: () => r16,
  getUserID: () => i41,
  getUserInfo: () => u13,
  getVersion: () => t17,
  getZPIToken: () => u31,
  hideKeyboard: () => i17,
  interactOA: () => f8,
  interactOa: () => f8,
  isAllowedInteractWithOA: () => p40,
  keepScreen: () => c26,
  loadAd: () => a31,
  login: () => m6,
  minimizeApp: () => s20,
  nativeStorage: () => I5,
  offConfirmToExit: () => m30,
  offKeepScreen: () => i19,
  onCallbackData: () => i32,
  onConfirmToExit: () => s18,
  onKeepScreen: () => i18,
  onNetworkStatusChange: () => s8,
  openBioAuthentication: () => p18,
  openChat: () => u14,
  openDocument: () => c39,
  openGroupList: () => i37,
  openMediaPicker: () => u30,
  openMiniApp: () => u26,
  openOutApp: () => m34,
  openPermissionSetting: () => i35,
  openPhone: () => u21,
  openPostFeed: () => u16,
  openProfile: () => m16,
  openProfilePicker: () => b5,
  openSMS: () => u22,
  openShareSheet: () => u19,
  openWebview: () => a21,
  purchase: () => u35,
  refreshAd: () => m48,
  removeStorage: () => u12,
  requestCameraPermission: () => n16,
  requestSendNotification: () => s21,
  requestUpdateZalo: () => i27,
  saveImageToGallery: () => l14,
  saveVideoToGallery: () => a18,
  scanNFC: () => l25,
  scanQRCode: () => i12,
  selectPaymentMethod: () => p32,
  sendDataToPreviousMiniApp: () => m25,
  setAccessToken: () => t32,
  setAndroidBottomNavigationBar: () => p35,
  setIOSBottomSafeArea: () => p36,
  setNavigationBarColor: () => m10,
  setNavigationBarLeftButton: () => u9,
  setNavigationBarTitle: () => l7,
  setStatusBar: () => p37,
  setStorage: () => u10,
  setupAd: () => e41,
  showCustomOAWidget: () => C4,
  showFunctionButtonWidget: () => y6,
  showOAWidget: () => g7,
  showToast: () => p19,
  startBeaconDiscovery: () => p13,
  stopBeaconDiscovery: () => i8,
  trackingManager: () => r31,
  unfollowOA: () => l11,
  vibrate: () => p25,
  viewOAQr: () => p22
});

// node_modules/zmp-sdk/apis/types/media.js
var a;
var e2;
var n;
var t2;
var o;
!function(a37) {
  a37.OnFrameCallback = "h5.event.camera.frame", a37.OnStartCallback = "h5.event.camera.start", a37.OnStopCallback = "h5.event.camera.stop";
}(a || (a = {})), function(a37) {
  a37.FRONT = "user", a37.BACK = "environment";
}(e2 || (e2 = {})), function(a37) {
  a37.WEBP = "image/webp", a37.PNG = "image/png", a37.JPEG = "image/jpeg";
}(n || (n = {})), function(a37) {
  a37.HIGH = "high", a37.NORMAL = "normal", a37.LOW = "low";
}(t2 || (t2 = {})), function(a37) {
  a37.VIDEO = "video", a37.AUDIO = "audio";
}(o || (o = {}));

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_class_call_check.mjs.js
function a2(a37, n25) {
  if (!(a37 instanceof n25)) throw new TypeError("Cannot call a class as a function");
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_instanceof.mjs.js
function n2(n25, e46) {
  return null != e46 && "undefined" != typeof Symbol && e46[Symbol.hasInstance] ? !!e46[Symbol.hasInstance](n25) : n25 instanceof e46;
}

// node_modules/zmp-sdk/apis/utils/lodash.js
var n3 = Object.prototype.toString;
var t3 = "[object Null]";
var e3 = "[object Undefined]";
function r(r33) {
  return null == r33 ? void 0 === r33 ? e3 : t3 : function(t40) {
    return n3.call(t40);
  }(r33);
}
function o2(n25) {
  return null != n25 && "object" == typeof n25;
}
var u = { isEmpty: function(n25) {
  return null == n25 || "object" == typeof n25 && 0 === Object.keys(n25).length || "string" == typeof n25 && 0 === n25.trim().length;
}, isNull: function(n25) {
  return null === n25;
}, isUndefined: function(n25) {
  return void 0 === n25;
}, isFunction: function(n25) {
  return "function" == typeof n25;
}, isObject: function(n25) {
  return null !== n25 && ("function" == typeof n25 || "object" == typeof n25);
}, isString: function(n25) {
  return null != n25 && "string" == typeof n25.valueOf();
}, isNumber: function(n25) {
  return "number" == typeof n25 || o2(n25) && "[object Number]" == r(n25);
}, isArray: function(n25) {
  return Array.isArray(n25);
}, isRegExp: function(n25) {
  return o2(n25) && "[object RegExp]" == r(n25);
}, get: function(n25, t40) {
  var e46 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r33 = function(e47) {
    return String.prototype.split.call(t40, e47).filter(Boolean).reduce(function(n26, t41) {
      return null != n26 ? n26[t41] : n26;
    }, n25);
  }, o17 = r33(/[,[\]]+?/) || r33(/[,[\].]+?/);
  return void 0 === o17 || o17 === n25 ? e46 : o17;
}, isPromise: function(n25) {
  return !!n25 && ("object" == typeof n25 || "function" == typeof n25) && "function" == typeof n25.then;
} };

// node_modules/zmp-sdk/apis/constants.js
var E;
var e4 = 1048576;
var _ = 1 * e4;
var a3 = window.zAppID;
var I = window.APP_ID;
var T = "https://zalo.me/s";
var A = "https://h5.zdn.vn/zapps";
var o3 = "h5.zdn.vn";
var O = "/zapps";
var N = { ZOAUTH: "h5.zdn.vn_zoauth", ZACC_SESSION: "h5.zdn.vn_zacc_session", JS_TOKEN: "h5.zdn.vn_zlink3rd", ZOAUTH_VRF: "h5.zdn.vn_zoauth_vrf", DEVICE_ID: "h5.zdn.vn_deviceID", CONTEXT_ID: "h5.zdn.vn_contextID", CONTEXT_TYPE: "h5.zdn.vn_contextType", UTOKEN_ZPI: "h5.zdn.vn_utoken_zpi", GTOKEN_ZPI: "h5.zdn.vn_gtoken_zpi", ZPP_ZPI: "h5.zdn.vn_zpp_zpi", ZPT_ZPI: "h5.zdn.vn_zpt_zpi" };
var i = { GET_USER_INFO: "https://graph.zalo.me/v2.0/me", GET_ACCESS_TOKEN: "https://h5.zalo.me/openapi/access_token", GET_ACCESS_TOKEN_V3: "https://oauth.zaloapp.com/v3/access_token", GET_LIST_USER_INFO: "https://graph.zalo.me/v2.0/me/friends/list", CREATE_ORDER: "https://payment-mini.zalo.me/api/order/create", GET_APP_INFO: "https://h5.zalo.me/apps/get-info", SEND_ACTION_LOG: "https://h5.zalo.me/log/async", CREATE_SHARE_LINK: "https://h5.zalo.me/openapi/create-sharelink", CHECK_INTERACT_OA: "https://h5.zalo.me/openapi/check-interact-oa", GET_AUTH_SETTING: "https://h5.zalo.me/apis/users/auth-settings" };
!function(E7) {
  E7.REQUEST = "REQUEST", E7.MODIFIED_REQUEST = "MODIFIED_REQUEST", E7.RESPONSE = "RESPONSE", E7.MODIFIED_RESPONSE = "MODIFIED_RESPONSE", E7.NOT_FOUND = "NOT_FOUND";
}(E || (E = {}));
var S;
var R;
var t4 = { SUCCESS: 0, UNKNOWN_ERROR: -2e3, BAD_REQUEST: -1400, INTERNAL_SERVER_ERROR: -1500, UNAUTHORIZED: -1401, FORBIDDEN: -1403, CLIENT_NOT_SUPPORT: -1404, TIME_OUT: -1408, FAIL_LIMIT: -1409, DUPLICATE_REQUEST: -1410, DECODE_FAILED: -2001, USER_DENIED: -2002, USER_CANCEL: -2003, MEDIA_PICKER_FAIL: -2004, SAVE_IMAGE_FAIL: -2005, SAVE_VIDEO_FAIL: -2006, SAVE_FILE_FAIL: -2007, DEVICE_NOT_SUPPORT: -600, SCAN_TIMEOUT: -601, SERVICE_NOT_READY: -602, UNREADABLE: -603, INVALID_MRZ: -604, PROCESSING: -605, CANCEL: -606, MPDS_ACTION_INVALID: -3e3, MPDS_SOURCE_INVALID: -3005, MPDS_APPID_INVALID: -3006, INVALID_URL_FORMAT: -700, UNSUPPORTED_FILE_TYPE: -701, DOWNLOAD_FAIL: -702, OPEN_DOCUMENT_FAIL: -703 };
var s = { SUCCESS: "Success", UNKNOWN_ERROR: "Unknown error. Please try again later.", FAIL_LIMIT: "Request limit exceeded. Please try again later.", DUPLICATE_REQUEST: "Duplicate request. Please try again later.", TIME_OUT: "Request timeout. Please try again later.", LOGIN_REQUIRED: "Please login (https://miniapp.zalo.me/docs/api/login) before to call this api", LOGIN_FAILED: "Login failed", NOT_PERMISSION: "You don't have permission to call this api", CLIENT_NOT_SUPPORT: "This API is not supported in this version of Zalo", DECODE_FAILED: "Can not decode id. Please check your params again.", INVALID_PARAM: "Invalid parameter", USER_DENIED: "User denied", USER_CANCEL: "User cancel", NEED_USER_AUTH: "User Authentication Required. Please grant User Authentication permission before requesting User Permission", MEDIA_PICKER_FAIL: "Unable to pick media", SAVE_IMAGE_FAIL: "Unable to save image", SAVE_VIDEO_FAIL: "Unable to save video", ANDROID_ONLY: "This API only works on android device", IOS_ONLY: "This API only works on iOS device", LFS_REACH_STORAGE_LIMIT: "Your max 5MB of local storage data is reached", DEVICE_STORAGE_FULL: "Your device run out of storage", INVALID_FILE_PATH: "File cannot be found. Please check your param again.", FILE_DOWNLOADING: "Please wait... We're still download the file.", NO_INTERNET: "No Internet connection. Please check your network settings.", DOWNLOAD_FAIL: "Download failed. Please check your network or file path again.", SAVE_FILE_FAIL: "Unable to save file", DEVICE_NOT_SUPPORT: "This device does not support NFC", SERVICE_NOT_READY: "NFC service is not ready. Please check in your setting", UNREADABLE: "NFC tag is unreadable", INVALID_MRZ: "Invalid MRZ data. Please try again later.", PROCESSING: "Processing NFC tag. Please wait a moment.", CANCEL: "User cancel", SCAN_TIMEOUT: "NFC scan timeout. Please try again later.", MPDS_ACTION_INVALID: "Action name from input data does not match declared API actions", MPDS_SOURCE_INVALID: "This API not called from Mini App", MPDS_APPID_INVALID: "AppId from input data does not match the currently opened AppId", INVALID_URL_FORMAT: "Download failed. Please check your URL again.", UNSUPPORTED_FILE_TYPE: "Unsupported file type", OPEN_DOCUMENT_FAIL: "Open document failed" };
var D = { SUCCESS: { code: t4.SUCCESS, message: s.SUCCESS }, UNKNOWN_ERROR: { code: t4.UNKNOWN_ERROR, message: s.UNKNOWN_ERROR }, UNAUTHORIZED: { code: t4.UNAUTHORIZED, message: s.LOGIN_REQUIRED }, FORBIDDEN: { code: t4.FORBIDDEN, message: s.NOT_PERMISSION }, CLIENT_NOT_SUPPORT: { code: t4.CLIENT_NOT_SUPPORT, message: s.CLIENT_NOT_SUPPORT }, DECODE_FAILED: { code: t4.DECODE_FAILED, message: s.DECODE_FAILED }, TIME_OUT: { code: t4.TIME_OUT, message: s.TIME_OUT }, USER_DENIED: { code: t4.USER_DENIED, message: s.USER_DENIED }, USER_CANCEL: { code: t4.USER_CANCEL, message: s.USER_CANCEL }, DUPLICATE_REQUEST: { code: t4.DUPLICATE_REQUEST, message: s.DUPLICATE_REQUEST }, DEVICE_NOT_SUPPORT: { code: t4.DEVICE_NOT_SUPPORT, message: s.DEVICE_NOT_SUPPORT }, SERVICE_NOT_READY: { code: t4.SERVICE_NOT_READY, message: s.SERVICE_NOT_READY }, UNREADABLE: { code: t4.UNREADABLE, message: s.UNREADABLE }, INVALID_MRZ: { code: t4.INVALID_MRZ, message: s.INVALID_MRZ }, PROCESSING: { code: t4.PROCESSING, message: s.PROCESSING }, CANCEL: { code: t4.CANCEL, message: s.CANCEL }, SCAN_TIMEOUT: { code: t4.SCAN_TIMEOUT, message: s.SCAN_TIMEOUT }, MPDS_ACTION_INVALID: { code: t4.MPDS_ACTION_INVALID, message: s.MPDS_ACTION_INVALID }, MPDS_SOURCE_INVALID: { code: t4.MPDS_SOURCE_INVALID, message: s.MPDS_SOURCE_INVALID }, MPDS_APPID_INVALID: { code: t4.MPDS_APPID_INVALID, message: s.MPDS_APPID_INVALID } };
var r2 = { addRating: { limit: 1 }, authorize: {}, isAllowedInteractWithOA: {}, favoriteApp: {}, followOA: {}, getLocation: {}, getPhoneNumber: {}, getShareableLink: {}, getSetting: {}, getAppInfo: {}, getUserInfo: {}, interactOA: {}, openProfilePicker: {}, openShareSheet: {}, unfollowOA: {}, checkTransaction: { limit: 5 }, createOrder: { limit: 5 }, createOrderIAP: { limit: 5 }, selectPaymentMethod: {}, requestSendNotification: {} };
var P = { GET_DOWNLOADED_STICKER: { haveCallback: true }, OPEN_SHARE_STICKER: {}, OPEN_PROFILE: { requireAccessToken: true }, OPEN_FEED_DETAIL: {}, OPEN_FRIEND_RADA: {}, OPEN_INAPP: {}, OPEN_OUTAPP: { requireAccessToken: true }, OPEN_PAGE: {}, OPEN_PHOTODETAIL: {}, OPEN_GALARY: {}, OPEN_GAMECENTER: {}, OPEN_GAMENEWS: {}, OPEN_TAB_CONTACT: {}, OPEN_TAB_SOCIAL: {}, OPEN_FRIENDSUGGEST: {}, OPEN_GROUPLIST: {}, OPEN_NEARBY: {}, OPEN_ROOM: {}, OPEN_STICKERSTORE: {}, OPEN_CREATECHAT: {}, COPY_LINK_CATESTICKER: {}, REQUEST_BUY_STICKER: {}, OPEN_CHAT: { requireAccessToken: true }, OPEN_TAB_CHAT: {}, OPEN_CHATGROUP: {}, OPEN_ADDFRIEND: {}, OPEN_TAB_MORE: {}, OPEN_POSTFEED: { requireAccessToken: true }, OPEN_LOGINDEVICES: {}, OPEN_SENDSTICKER: {}, REPORT_ABUSE: { haveCallback: true }, FOLLOW_OA: { haveCallback: true, requireAccessToken: true, errorList: { android: { "-400": { mapTo: D.DUPLICATE_REQUEST } }, iOS: { "-400": { mapTo: D.DUPLICATE_REQUEST } } } }, UNFOLLOW_OA: { haveCallback: true, requireAccessToken: true, errorList: { android: { "-400": { mapTo: D.DUPLICATE_REQUEST } }, iOS: { "-400": { mapTo: D.DUPLICATE_REQUEST } } } }, OPEN_GAMEDETAIL: {}, OPEN_SHARESHEET: { haveCallback: true, requireAccessToken: true, errorList: { android: { "-101": { mapTo: D.CLIENT_NOT_SUPPORT } }, iOS: { "-101": { mapTo: D.CLIENT_NOT_SUPPORT } } } }, REQUEST_PERMISSION_CAMERA: { errorList: { android: { "-2": { mapTo: D.USER_DENIED } }, iOS: { "-2": { mapTo: D.USER_DENIED } } } }, CHANGE_TITLE_HEADER: { skipJump: true }, WEBVIEW_CLEARCACHE: {}, WEBVIEW_CONFIRMCACHE: {}, WEBVIEW_ISVISIBLE: {}, WEBVIEW_NETWORKTYPE: { skipJump: true }, CHANGE_BUTTON_HEADER: {}, CREATE_OPTIONS_MENU: { skipJump: true, haveCallback: true }, CREATE_SHORTCUT: { requireAccessToken: true }, CHANGE_ACTIONBAR_LEFTBUTTON_TYPE: { skipJump: true, haveCallback: true }, WINDOW_CLOSE: { skipJump: true, haveCallback: true }, WEBVIEW_CHECKRESERROR: {}, IAP_REQUESTPAYMENT: { haveCallback: true }, ZBROWSER_GETSTATS: {}, ZBROWSER_JSBRIDGE: { skipJump: true, haveCallback: true }, PROMPT_AUTHENTICATION: {}, CHANGE_ACTIONBAR_COLOR: { skipJump: true }, PROMPT_AUTHENTICATION_CHECK_STATE: {}, OPEN_APPSTORE: {}, GET_LOCATION: { haveCallback: true, errorList: { android: { "-1": { mapTo: D.USER_DENIED }, "-400": { mapTo: D.DUPLICATE_REQUEST } }, iOS: { "-1": { mapTo: D.USER_DENIED }, "-400": { mapTo: D.DUPLICATE_REQUEST } } } }, QUERY_LOCATION_HIDE: { haveCallback: true }, SHOW_TOAST: { haveCallback: true, timeout: 2 }, OPEN_APP: {}, HIDE_KEYBOARD: {}, OPEN_PHONE: {}, OPEN_QR: {}, OPEN_SMS: { errorList: { iOS: { "-9": { mapTo: D.UNKNOWN_ERROR }, "-10": { mapTo: D.USER_CANCEL } } } }, VIEW_MYQR: { haveCallback: true, timeout: true, requireAccessToken: true }, KEEP_SCREEN: { haveCallback: true, timeout: 2 }, CHANGE_AUTOROTATE: { skipJump: true }, CHECK_APP_INSTALLED: {}, QUERY_SHOW: {}, QUERY_HIDE: {}, OPEN_INAPPRW: {}, ZALORUN_GETTRACKINGSTATUS: { haveCallback: true }, ZALORUN_SETTRACKINGSTATUS: { haveCallback: true }, ZALORUN_GETDAYSTEP: { haveCallback: true }, ZALORUN_FORCESUBMITDATA: { haveCallback: true }, ZALORUN_SETWEIGHT: { haveCallback: true }, OPEN_PROFILE_EXT: {}, DOWNLOAD_CATE: { haveCallback: true }, JUMP_LOGIN: { skipJump: true, whiteList: true }, OPEN_ADTIMA_ADS_INTERSTITIAL: {}, OPEN_ADTIMA_ADS: {}, GET_ADIDCLIENT: {}, SCAN_IBEACON: {}, SAVE_VIDEO_GALLERY: { versionLive: { iOS: 628 }, errorList: { android: { "-101": { mapTo: { code: t4.SAVE_VIDEO_FAIL, message: s.SAVE_VIDEO_FAIL }, needMoreDetail: true }, "-102": { mapTo: { code: t4.SAVE_VIDEO_FAIL, message: s.SAVE_VIDEO_FAIL }, needMoreDetail: true } }, iOS: { "-10": { mapTo: { code: t4.SAVE_VIDEO_FAIL, message: s.SAVE_VIDEO_FAIL }, needMoreDetail: true } } } }, INTERACTIVE_VIBRATION: {}, SAVE_IMAGE_GALLERY: { versionLive: { iOS: 408 }, errorList: { android: { "-101": { mapTo: { code: t4.SAVE_IMAGE_FAIL, message: s.SAVE_IMAGE_FAIL }, needMoreDetail: true }, "-102": { mapTo: { code: t4.SAVE_IMAGE_FAIL, message: s.SAVE_IMAGE_FAIL }, needMoreDetail: true } }, iOS: { "-10": { mapTo: { code: t4.SAVE_IMAGE_FAIL, message: s.SAVE_IMAGE_FAIL }, needMoreDetail: true } } } }, OPEN_MP: { versionLive: { iOS: 402 } }, CHANGE_ACTIONBAR: { haveCallback: true, timeout: 2, versionLive: { iOS: 402 }, skipJump: true }, ZBROWSER_MPDS: { haveCallback: true, timeout: 2, versionLive: { iOS: 402 }, errorList: { android: { "-100": { mapTo: D.MPDS_ACTION_INVALID }, "-101": { mapTo: D.UNKNOWN_ERROR }, "-105": { mapTo: D.MPDS_SOURCE_INVALID }, "-106": { mapTo: D.MPDS_APPID_INVALID } }, iOS: { "-10": { mapTo: D.MPDS_ACTION_INVALID }, "-101": { mapTo: D.MPDS_APPID_INVALID }, "-102": { mapTo: D.UNKNOWN_ERROR } } } }, ZBROWSER_MPDS_SYNC: { versionLive: { iOS: 402 }, errorList: { android: { "-100": { mapTo: D.MPDS_ACTION_INVALID }, "-101": { mapTo: D.UNKNOWN_ERROR }, "-105": { mapTo: D.MPDS_SOURCE_INVALID }, "-106": { mapTo: D.MPDS_APPID_INVALID } }, iOS: { "-10": { mapTo: D.MPDS_ACTION_INVALID }, "-101": { mapTo: D.MPDS_APPID_INVALID }, "-102": { mapTo: D.UNKNOWN_ERROR } } } }, WEBVIEW_SET_RESULT: { versionLive: { iOS: 416 } }, MP_GET_NUMBER: { versionLive: { iOS: 416 }, errorList: { android: { "-1": { mapTo: D.USER_DENIED }, "-101": { mapTo: D.USER_DENIED }, "-400": { mapTo: D.DUPLICATE_REQUEST } }, iOS: { "-1": { mapTo: D.USER_DENIED }, "-10": { mapTo: D.USER_DENIED }, "-400": { mapTo: D.DUPLICATE_REQUEST } } } }, MP_OPEN_PROFILE_PICKER: { requireAccessToken: true, versionLive: { iOS: 432 }, errorList: { android: { "-101": { mapTo: D.USER_CANCEL } }, iOS: { "-101": { mapTo: D.USER_CANCEL } } } }, GET_SUPPORTED_ACTIONS: { whiteList: true }, MP_JOIN_WIFI: { haveCallback: true, timeout: true, versionLive: { android: 0, iOS: 0 }, havePermission: false, whiteList: false }, PICK_MEDIA: { requireAccessToken: true, versionLive: { iOS: 440 }, errorList: { android: { "-101": { mapTo: D.USER_CANCEL }, 999: { mapTo: { code: t4.MEDIA_PICKER_FAIL, message: s.MEDIA_PICKER_FAIL }, needMoreDetail: true } }, iOS: { "-10": { mapTo: { code: t4.MEDIA_PICKER_FAIL, message: s.MEDIA_PICKER_FAIL } } } } }, MP_CLOSE_LOADINGVIEW: { skipJump: true }, CHANGE_BOTTOMBAR: { haveCallback: true, timeout: 2, skipJump: true }, MA_MENU_MINIMIZE: { skipJump: false, versionLive: { iOS: 520 } }, MA_MENU_PERMISSION: { skipJump: false, versionLive: { iOS: 520 } }, MA_MENU_FAVORITES: { skipJump: false, versionLive: { iOS: 520 } }, MP_SEND_NOTIFICATION: { skipJump: false, versionLive: { iOS: 530 }, errorList: { android: { "-1": { mapTo: D.USER_DENIED }, "-400": { mapTo: D.DUPLICATE_REQUEST } }, iOS: { "-1": { mapTo: D.USER_DENIED }, "-400": { mapTo: D.DUPLICATE_REQUEST } } } }, MP_ADD_RATING: { skipJump: false }, MP_ADD_MYFAVORITES: { skipJump: false }, MP_INTERACT_OA: { skipJump: false, errorList: { android: { "-400": { mapTo: D.DUPLICATE_REQUEST } }, iOS: { "-400": { mapTo: D.DUPLICATE_REQUEST } } } }, MP_USER_AUTHORIZE: { skipJump: false, errorList: { android: { "-400": { mapTo: D.DUPLICATE_REQUEST } }, iOS: { "-400": { mapTo: D.DUPLICATE_REQUEST } } } }, MP_SELECT_PAYMENT_METHOD: { skipJump: false }, CHECK_NFC: { skipJump: false, versionLive: { iOS: 626 }, errorList: { all: { "-1": { mapTo: D.UNKNOWN_ERROR }, "-600": { mapTo: D.DEVICE_NOT_SUPPORT }, "-602": { mapTo: D.SERVICE_NOT_READY } } } }, SCAN_NFC: { skipJump: false, haveCallback: true, timeout: 65, errorList: { all: { "-1": { mapTo: D.UNKNOWN_ERROR }, "-600": { mapTo: D.DEVICE_NOT_SUPPORT }, "-601": { mapTo: D.SCAN_TIMEOUT }, "-602": { mapTo: D.SERVICE_NOT_READY }, "-603": { mapTo: D.UNREADABLE }, "-604": { mapTo: D.INVALID_MRZ }, "-605": { mapTo: D.PROCESSING }, "-606": { mapTo: D.CANCEL } } } }, MP_CONFIRM_REQUEST_PAYMENT: { skipJump: false }, SAVE_FILE: { versionLive: { iOS: 628 }, skipJump: false, errorList: { android: { "-101": { mapTo: { code: t4.SAVE_FILE_FAIL, message: s.SAVE_FILE_FAIL }, needMoreDetail: true }, "-102": { mapTo: { code: t4.SAVE_FILE_FAIL, message: s.SAVE_FILE_FAIL }, needMoreDetail: true } }, iOS: { "-10": { mapTo: { code: t4.SAVE_FILE_FAIL, message: s.SAVE_FILE_FAIL }, needMoreDetail: true } } } }, MP_APP_LIFECYCLE_TRACKING: { skipJump: false }, OPEN_DOCUMENT: { skipJump: false, errorList: { all: { "-10": { mapTo: { code: t4.INVALID_URL_FORMAT, message: s.INVALID_URL_FORMAT } }, "-700": { mapTo: { code: t4.INVALID_URL_FORMAT, message: s.INVALID_URL_FORMAT } }, "-701": { mapTo: { code: t4.UNSUPPORTED_FILE_TYPE, message: s.UNSUPPORTED_FILE_TYPE } }, "-702": { mapTo: { code: t4.DOWNLOAD_FAIL, message: s.DOWNLOAD_FAIL } }, "-703": { mapTo: { code: t4.OPEN_DOCUMENT_FAIL, message: s.OPEN_DOCUMENT_FAIL } } } } } };
var n4 = { android: { "-4": D.DECODE_FAILED, "-5": D.CLIENT_NOT_SUPPORT, "-14": D.TIME_OUT }, iOS: { "-9": D.DECODE_FAILED, "-5": D.CLIENT_NOT_SUPPORT, "-14": D.TIME_OUT } };
var L = { android: 12100615, iOS: 460, wp: 0, unknown: 0 };
var C = { android: 12100571, iOS: 400, wp: 0, unknown: 0 };
var p = 5 * e4;
var U = { CREATE_ORDER: "https://payment-mini.zalo.me/api/order/create-v2", CREATE_IAP_ORDER: "https://payment-mini.zalo.me/api/order/iap-create", GET_TRANSACTION: "https://payment-mini.zalo.me/api/transaction", GET_ORDER_STATUS: "https://payment-mini.zalo.me/api/transaction/get-status", PURCHASE: "https://payment-mini.zalo.me/api/order/purchase" };
var m = "https://payment-mini.zalo.me";
var c = { UNKNOW: "UNKNOW", DEFERRED: "DEFERRED", IMMEDIATE_AND_CHARGE_FULL_PRICE: "IMMEDIATE_AND_CHARGE_FULL_PRICE" };
var d = { SHOW_BACK: 0, HIDE_BACK: 3, SHOW_HOME: 1, HIDE_HOME: 0 };
var l = 5;
var M = 6;
var h = { LEFT: 0, CENTER: 1 };
var u2 = "#1843EF";
var F = h.LEFT;
var V = { "-12101": "Invalid params", "-12102": "Session expire", "-12103": "Not permission", "-12104": "Not Authorize", "-12105": "Unknown exception", "-12106": "Cannot create order", "-12107": "Transaction not found", "-12108": "Cannot update order", "-12109": "Cannot decode param", "-12110": "Version not support", "-12111": "Receipt expire", "-12112": "Product not found", "-12113": "Subscription other GW", "-12114": "Product already subcription", "-12115": "Not exist", "-12116": "Already exist", "-12117": "Not allow", "-12118": "Not permit", "-12119": "Internal error", "-2": "Unable to pay", "-6": "Unable to register", "-7": "Registered account", "-832": "Purchased by another account", "-833": "Register for another account", "-834": "Unable to register", "-2010": "System is maintaining", "-3999": "Not in Vietnam", "-12129": "Purchased by another account", 123: "An error has occurred" };
var v = ["scope.userInfo", "scope.userLocation", "scope.userPhonenumber"];
!function(E7) {
  E7.DEV_TRACKING = "devTracking";
}(S || (S = {})), function(E7) {
  E7[E7.APP_INITIALIZING = 95] = "APP_INITIALIZING", E7[E7.APP_READY = 96] = "APP_READY";
}(R || (R = {}));
var k = "checkoutKitWidget-ifCKW";
var g = "https://h5.zalo.me";
var G = { CHECKOUT_KIT: "https://h5.zalo.me/widgets/checkoutkit_widget.html", FUNCTION_BUTTON: "https://h5.zalo.me/widgets/function_button_widget.html", OA: "https://h5.zalo.me/widgets/oa_widget.html", CUSTOM_OA: "https://h5.zalo.me/widgets/oa_widget_custom.html" };

// node_modules/zmp-sdk/apis/utils/errorHandler.js
var n5 = function() {
  function s31(e47, o17, i46, n25) {
    a2(this, s31), this.code = e47, this.message = o17, this.api = i46, this.detail = n25;
  }
  var e46 = s31.prototype;
  return e46.toString = function() {
    return "api: ".concat(String(this.api), "; code: ").concat(this.code, "; message: ").concat(JSON.stringify(this.message));
  }, e46.toJSON = function() {
    return { code: this.code, message: this.message, api: this.api, detail: this.detail };
  }, s31;
}();
var r3 = function(t40, r33) {
  return n2(t40, n5) ? function(t41, s31) {
    return t41.api = s31, t41.toJSON();
  }(t40, r33) : function(t41, r34) {
    return n2(t41, Error) ? new n5(t4.UNKNOWN_ERROR, t41.message, r34).toJSON() : u.isEmpty(null == t41 ? void 0 : t41.message) || u.isEmpty(null == t41 ? void 0 : t41.code) ? new n5(t4.UNKNOWN_ERROR, s.UNKNOWN_ERROR, r34, t41).toJSON() : new n5(t41.code, t41.message, r34, t41.detail).toJSON();
  }(t40, r33);
};

// node_modules/zmp-sdk/apis/package.json.js
var r4 = "2.48.0";

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_array_like_to_array.mjs.js
function n6(n25, r33) {
  (null == r33 || r33 > n25.length) && (r33 = n25.length);
  for (var e46 = 0, t40 = new Array(r33); e46 < r33; e46++) t40[e46] = n25[e46];
  return t40;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_array_without_holes.mjs.js
function a4(a37) {
  if (Array.isArray(a37)) return n6(a37);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_iterable_to_array.mjs.js
function r5(r33) {
  if ("undefined" != typeof Symbol && null != r33[Symbol.iterator] || null != r33["@@iterator"]) return Array.from(r33);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_non_iterable_spread.mjs.js
function e5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_unsupported_iterable_to_array.mjs.js
function t5(t40, e46) {
  if (t40) {
    if ("string" == typeof t40) return n6(t40, e46);
    var o17 = Object.prototype.toString.call(t40).slice(8, -1);
    return "Object" === o17 && t40.constructor && (o17 = t40.constructor.name), "Map" === o17 || "Set" === o17 ? Array.from(o17) : "Arguments" === o17 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o17) ? n6(t40, e46) : void 0;
  }
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_to_consumable_array.mjs.js
function a5(a37) {
  return a4(a37) || r5(a37) || t5(a37) || e5();
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_async_to_generator.mjs.js
function n7(n25, t40, r33, e46, o17, i46, u48) {
  try {
    var a37 = n25[i46](u48), c40 = a37.value;
  } catch (n26) {
    return void r33(n26);
  }
  a37.done ? t40(c40) : Promise.resolve(c40).then(e46, o17);
}
function t6(t40) {
  return function() {
    var r33 = this, e46 = arguments;
    return new Promise(function(o17, i46) {
      var u48 = t40.apply(r33, e46);
      function a37(t41) {
        n7(u48, o17, i46, a37, c40, "next", t41);
      }
      function c40(t41) {
        n7(u48, o17, i46, a37, c40, "throw", t41);
      }
      a37(void 0);
    });
  };
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_array_with_holes.mjs.js
function r6(r33) {
  if (Array.isArray(r33)) return r33;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_non_iterable_rest.mjs.js
function t7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_sliced_to_array.mjs.js
function e6(e46, m51) {
  return r6(e46) || r5(e46) || t5(e46, m51) || t7();
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_type_of.mjs.js
function o4(o17) {
  return o17 && o17.constructor === Symbol ? "symbol" : typeof o17;
}

// node_modules/zmp-sdk/apis/utils/debug.js
function n8(n25) {
  return "function" == typeof window.Debug ? window.Debug(n25) : function() {
    for (var n26 = arguments.length, e46 = new Array(n26), o17 = 0; o17 < n26; o17++) e46[o17] = arguments[o17];
  };
}

// node_modules/zmp-sdk/apis/types/enum.js
var e7;
var n9;
var o5;
var a6;
var i2;
var t8;
var c2;
var l2;
var u3;
var r7;
var d2;
var p2;
var m2;
var s2;
var f;
var h2;
var _2;
var w;
var E2;
!function(e46) {
  e46.none = "none", e46.wifi = "wifi", e46.cellular = "cellular", e46.unknown = "unknown";
}(e7 || (e7 = {})), function(e46) {
  e46.wp = "wp", e46.android = "android", e46.iOS = "iOS", e46.unknown = "unknown";
}(n9 || (n9 = {})), function(e46) {
  e46.AppPaused = "h5.event.paused", e46.AppResumed = "h5.event.resumed", e46.NetworkChanged = "h5.event.connection.changed", e46.OnDataCallback = "h5.event.webview.result", e46.WebviewClosed = "h5.event.webview.close", e46.OpenApp = "h5.event.open.mp", e46.AppClose = "h5.event.action.close", e46.PaymentCallback = "payment.callback", e46.PaymentResult = "action.payment.result", e46.PaymentDone = "action.payment.done", e46.PaymentClose = "action.payment.close", e46.DownloadProgress = "h5.event.webview.download.progress";
}(o5 || (o5 = {})), function(e46) {
  e46.DOING = "doing", e46.DONE = "done";
}(a6 || (a6 = {})), function(e46) {
  e46[e46.user = 1] = "user", e46[e46.oa = 0] = "oa", e46[e46.aliasOA = 2] = "aliasOA";
}(i2 || (i2 = {})), function(e46) {
  e46[e46.user = 1] = "user", e46[e46.oa = 0] = "oa";
}(t8 || (t8 = {})), function(e46) {
  e46[e46.image = 1] = "image", e46[e46.multi_image = 2] = "multi_image", e46[e46.link = 4] = "link", e46[e46.profile = 5] = "profile";
}(c2 || (c2 = {})), function(e46) {
  e46[e46.cccd = 1] = "cccd";
}(l2 || (l2 = {})), function(e46) {
  e46[e46.image = 1] = "image", e46[e46.gif = 11] = "gif", e46[e46.video = 12] = "video", e46[e46.link = 4] = "link", e46[e46.oa = 5] = "oa", e46[e46.zmp = 20] = "zmp", e46[e46.multi_image = 21] = "multi_image", e46[e46.zmp_deep_link = 4] = "zmp_deep_link", e46[e46.text = 22] = "text";
}(u3 || (u3 = {})), function(e46) {
  e46[e46.auto = 1] = "auto", e46[e46.portrait = 2] = "portrait", e46[e46.landscape = 3] = "landscape";
}(r7 || (r7 = {})), function(e46) {
  e46[e46.oneShot = 0] = "oneShot";
}(d2 || (d2 = {})), function(e46) {
  e46[e46.zcamera = 3] = "zcamera", e46[e46.zcamera_photo = 1] = "zcamera_photo", e46[e46.zcamera_video = 2] = "zcamera_video", e46[e46.zcamera_scan = 7] = "zcamera_scan", e46[e46.photo = 4] = "photo", e46[e46.video = 5] = "video", e46[e46.file = 6] = "file";
}(p2 || (p2 = {})), function(e46) {
  e46.SUBSCRIPTION = "SUBSCRIPTION", e46.ONETIME = "ONETIME";
}(m2 || (m2 = {})), function(e46) {
  e46[e46.UNKNOW = 0] = "UNKNOW", e46[e46.DEFERRED = 1] = "DEFERRED", e46[e46.IMMEDIATE_AND_CHARGE_FULL_PRICE = 2] = "IMMEDIATE_AND_CHARGE_FULL_PRICE";
}(s2 || (s2 = {})), function(e46) {
  e46[e46.normal = 1] = "normal", e46[e46.hidden = 0] = "hidden", e46[e46.transparent = 2] = "transparent";
}(f || (f = {})), function(e46) {
  e46[e46.show = 1] = "show", e46[e46.hide = 0] = "hide";
}(h2 || (h2 = {})), function(e46) {
  e46[e46.show = 1] = "show", e46[e46.hide = 0] = "hide";
}(_2 || (_2 = {})), function(e46) {
  e46[e46.left = 0] = "left", e46[e46.center = 1] = "center";
}(w || (w = {})), function(e46) {
  e46.TOOL_DEL_FRIEND = "tool_del_friend";
}(E2 || (E2 = {}));

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_create_class.mjs.js
function e8(e46, r33) {
  for (var n25 = 0; n25 < r33.length; n25++) {
    var t40 = r33[n25];
    t40.enumerable = t40.enumerable || false, t40.configurable = true, "value" in t40 && (t40.writable = true), Object.defineProperty(e46, t40.key, t40);
  }
}
function r8(r33, n25, t40) {
  return n25 && e8(r33.prototype, n25), t40 && e8(r33, t40), r33;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_define_property.mjs.js
function e9(e46, r33, n25) {
  return r33 in e46 ? Object.defineProperty(e46, r33, { value: n25, enumerable: true, configurable: true, writable: true }) : e46[r33] = n25, e46;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_object_spread.mjs.js
function t9(t40) {
  for (var r33 = 1; r33 < arguments.length; r33++) {
    var n25 = null != arguments[r33] ? arguments[r33] : {}, o17 = Object.keys(n25);
    "function" == typeof Object.getOwnPropertySymbols && (o17 = o17.concat(Object.getOwnPropertySymbols(n25).filter(function(e46) {
      return Object.getOwnPropertyDescriptor(n25, e46).enumerable;
    }))), o17.forEach(function(r34) {
      e9(t40, r34, n25[r34]);
    });
  }
  return t40;
}

// node_modules/zmp-sdk/apis/common/logger.js
function e10(n25) {
  e10.on && e10.engine(n25);
}
e10.on = false, e10.engine = function(e46) {
  var n25 = e46.name, o17 = e46.type, t40 = e46.state, i46 = e46.request, r33 = e46.response, s31 = e46.stage;
  console[o17]([n25, s31, t40, i46, r33].filter(Boolean).map(function(e47) {
    return "object" == typeof e47 ? JSON.stringify(e47) : e47;
  }).join("; "));
};

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_get_prototype_of.mjs.js
function t10(e46) {
  return t10 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t40) {
    return t40.__proto__ || Object.getPrototypeOf(t40);
  }, t10(e46);
}
function e11(e46) {
  return t10(e46);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_super_prop_base.mjs.js
function o6(o17, r33) {
  for (; !Object.prototype.hasOwnProperty.call(o17, r33) && null !== (o17 = e11(o17)); ) ;
  return o17;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_get.mjs.js
function t11(r33, n25, f14) {
  return t11 = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t40, r34, n26) {
    var f15 = o6(t40, r34);
    if (f15) {
      var o17 = Object.getOwnPropertyDescriptor(f15, r34);
      return o17.get ? o17.get.call(n26 || t40) : o17.value;
    }
  }, t11(r33, n25, f14);
}
function r9(e46, r33, n25) {
  return t11(e46, r33, n25);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_set_prototype_of.mjs.js
function t12(n25, r33) {
  return t12 = Object.setPrototypeOf || function(t40, n26) {
    return t40.__proto__ = n26, t40;
  }, t12(n25, r33);
}
function n10(n25, r33) {
  return t12(n25, r33);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_inherits.mjs.js
function e12(e46, o17) {
  if ("function" != typeof o17 && null !== o17) throw new TypeError("Super expression must either be null or a function");
  e46.prototype = Object.create(o17 && o17.prototype, { constructor: { value: e46, writable: true, configurable: true } }), o17 && n10(e46, o17);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_is_native_reflect_construct.mjs.js
function t13() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ("function" == typeof Proxy) return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t40) {
    return false;
  }
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_assert_this_initialized.mjs.js
function e13(e46) {
  if (void 0 === e46) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e46;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_possible_constructor_return.mjs.js
function i3(i46, e46) {
  return !e46 || "object" !== o4(e46) && "function" != typeof e46 ? e13(i46) : e46;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_create_super.mjs.js
function s3(s31) {
  var e46 = t13();
  return function() {
    var t40, c40 = e11(s31);
    if (e46) {
      var i46 = e11(this).constructor;
      t40 = Reflect.construct(c40, arguments, i46);
    } else t40 = c40.apply(this, arguments);
    return i3(this, t40);
  };
}

// node_modules/zmp-sdk/apis/_virtual/_commonjsHelpers.js
function r10(r33, t40) {
  return r33(t40 = { exports: {} }, t40.exports), t40.exports;
}

// node_modules/zmp-sdk/apis/external/eventemitter3/index.js
var t14 = r10(function(e46) {
  var t40 = Object.prototype.hasOwnProperty, n25 = "~";
  function r33() {
  }
  function o17(e47, t41, n26) {
    this.fn = e47, this.context = t41, this.once = n26 || false;
  }
  function s31(e47, t41, r34, s32, i47) {
    if ("function" != typeof r34) throw new TypeError("The listener must be a function");
    var c41 = new o17(r34, s32 || e47, i47), f14 = n25 ? n25 + t41 : t41;
    return e47._events[f14] ? e47._events[f14].fn ? e47._events[f14] = [e47._events[f14], c41] : e47._events[f14].push(c41) : (e47._events[f14] = c41, e47._eventsCount++), e47;
  }
  function i46(e47, t41) {
    0 == --e47._eventsCount ? e47._events = new r33() : delete e47._events[t41];
  }
  function c40() {
    this._events = new r33(), this._eventsCount = 0;
  }
  Object.create && (r33.prototype = /* @__PURE__ */ Object.create(null), new r33().__proto__ || (n25 = false)), c40.prototype.eventNames = function() {
    var e47, r34, o18 = [];
    if (0 === this._eventsCount) return o18;
    for (r34 in e47 = this._events) t40.call(e47, r34) && o18.push(n25 ? r34.slice(1) : r34);
    return Object.getOwnPropertySymbols ? o18.concat(Object.getOwnPropertySymbols(e47)) : o18;
  }, c40.prototype.listeners = function(e47) {
    var t41 = n25 ? n25 + e47 : e47, r34 = this._events[t41];
    if (!r34) return [];
    if (r34.fn) return [r34.fn];
    for (var o18 = 0, s32 = r34.length, i47 = new Array(s32); o18 < s32; o18++) i47[o18] = r34[o18].fn;
    return i47;
  }, c40.prototype.listenerCount = function(e47) {
    var t41 = n25 ? n25 + e47 : e47, r34 = this._events[t41];
    return r34 ? r34.fn ? 1 : r34.length : 0;
  }, c40.prototype.emit = function(e47, t41, r34, o18, s32, i47) {
    var c41 = n25 ? n25 + e47 : e47;
    if (!this._events[c41]) return false;
    var f14, a37, u48 = this._events[c41], l27 = arguments.length;
    if (u48.fn) {
      switch (u48.once && this.removeListener(e47, u48.fn, void 0, true), l27) {
        case 1:
          return u48.fn.call(u48.context), true;
        case 2:
          return u48.fn.call(u48.context, t41), true;
        case 3:
          return u48.fn.call(u48.context, t41, r34), true;
        case 4:
          return u48.fn.call(u48.context, t41, r34, o18), true;
        case 5:
          return u48.fn.call(u48.context, t41, r34, o18, s32), true;
        case 6:
          return u48.fn.call(u48.context, t41, r34, o18, s32, i47), true;
      }
      for (a37 = 1, f14 = new Array(l27 - 1); a37 < l27; a37++) f14[a37 - 1] = arguments[a37];
      u48.fn.apply(u48.context, f14);
    } else {
      var v8, p46 = u48.length;
      for (a37 = 0; a37 < p46; a37++) switch (u48[a37].once && this.removeListener(e47, u48[a37].fn, void 0, true), l27) {
        case 1:
          u48[a37].fn.call(u48[a37].context);
          break;
        case 2:
          u48[a37].fn.call(u48[a37].context, t41);
          break;
        case 3:
          u48[a37].fn.call(u48[a37].context, t41, r34);
          break;
        case 4:
          u48[a37].fn.call(u48[a37].context, t41, r34, o18);
          break;
        default:
          if (!f14) for (v8 = 1, f14 = new Array(l27 - 1); v8 < l27; v8++) f14[v8 - 1] = arguments[v8];
          u48[a37].fn.apply(u48[a37].context, f14);
      }
    }
    return true;
  }, c40.prototype.on = function(e47, t41, n26) {
    return s31(this, e47, t41, n26, false);
  }, c40.prototype.once = function(e47, t41, n26) {
    return s31(this, e47, t41, n26, true);
  }, c40.prototype.removeListener = function(e47, t41, r34, o18) {
    var s32 = n25 ? n25 + e47 : e47;
    if (!this._events[s32]) return this;
    if (!t41) return i46(this, s32), this;
    var c41 = this._events[s32];
    if (c41.fn) c41.fn !== t41 || o18 && !c41.once || r34 && c41.context !== r34 || i46(this, s32);
    else {
      for (var f14 = 0, a37 = [], u48 = c41.length; f14 < u48; f14++) (c41[f14].fn !== t41 || o18 && !c41[f14].once || r34 && c41[f14].context !== r34) && a37.push(c41[f14]);
      a37.length ? this._events[s32] = 1 === a37.length ? a37[0] : a37 : i46(this, s32);
    }
    return this;
  }, c40.prototype.removeAllListeners = function(e47) {
    var t41;
    return e47 ? (t41 = n25 ? n25 + e47 : e47, this._events[t41] && i46(this, t41)) : (this._events = new r33(), this._eventsCount = 0), this;
  }, c40.prototype.off = c40.prototype.removeListener, c40.prototype.addListener = c40.prototype.on, c40.prefixed = n25, c40.EventEmitter = c40, e46.exports = c40;
});
var n11 = t14;

// node_modules/zmp-sdk/apis/common/apis/general/payment/utils.js
var r11 = { enablePaymentDone: false };
function a7(r33) {
  var a37 = new URL(r33, window.location.origin), e46 = a37.pathname.split("/")[3].toUpperCase().replace(/-/g, "_"), d18 = {}, t40 = a37.searchParams.get("orderId"), n25 = a37.searchParams.get("zmpOrderId"), s31 = a37.searchParams.get("appTransID") || a37.searchParams.get("apptransid");
  switch (e46) {
    case "MOMO":
    case "MOMO_SANDBOX":
      d18.orderId = n25, d18.transId = t40;
      break;
    default:
      d18.orderId = n25 || t40, d18.transId = s31;
  }
  return d18;
}
function e14(r33) {
  var a37 = r33.data;
  return { orderId: a37.zmpOrderId || a37.orderId, transId: a37.appTransID || a37.apptransid || a37.transId };
}

// node_modules/zmp-sdk/apis/common/eventEmitter.js
var f2 = "ACTION_CALLBACK";
var h3 = function(o17) {
  e12(i46, o17);
  var s31 = s3(i46);
  function i46() {
    var t40;
    return a2(this, i46), (t40 = s31.apply(this, arguments)).debug = n8("zmp:event-emitter"), t40;
  }
  var l27 = i46.prototype;
  return l27.h5ConfirmHandleEvent = function(e46, t40, n25) {
    ZaloJavaScriptInterface.jsH5EventCallback(e46, t40, n25 || "");
  }, l27.on = function(e46, a37, r33) {
    var o18 = this;
    if (e46 === f2 || e46 === o5.PaymentCallback) return r9(e11(i46.prototype), "on", this).call(this, e46, a37, r33);
    this.debug("register ".concat(String(e46), ": ").concat(r33));
    return r9(e11(i46.prototype), "on", this).call(this, e46, function(t40, n25) {
      o18.h5ConfirmHandleEvent(t40, e46, r33), a37(n25);
    }, r33);
  }, l27.once = function(e46, a37, r33) {
    var o18 = this;
    if (e46 === f2) return r9(e11(i46.prototype), "once", this).call(this, e46, a37, r33);
    this.debug("register once ".concat(String(e46), ": ").concat(r33));
    return r9(e11(i46.prototype), "once", this).call(this, e46, function(t40, n25) {
      o18.h5ConfirmHandleEvent(t40, e46, r33), a37(n25);
    }, r33);
  }, i46.getInstance = function() {
    return i46.instance || (i46.instance = new i46()), i46.instance;
  }, i46;
}(n11);
function _3(e46) {
  h3.getInstance().on(f2, e46);
}
function g2(e46) {
  h3.getInstance().emit(f2, e46);
}
window.onNativeMessage = function(e46, t40) {
  return function(n25) {
    g2({ serialId: e46, actionName: t40, result: n25 });
  };
}, window.zaloJSV2 = { zalo_h5_event_handler: function(e46, t40, n25) {
  var a37 = n8("zmp:zalo_h5_event_handler");
  a37("eventId: ".concat(e46, ", eventName: ").concat(t40, ", eventData: ").concat(n25));
  var r33 = d3(n25);
  a37("stringToData", r33);
  var o17 = function(e47, t41) {
    if (!t41 || "string" == typeof t41) return t41;
    try {
      if (e47 === o5.OpenApp) {
        var n26 = t41.url, a38 = new URL(n26), r34 = a38.pathname.split("/zapps/".concat(I))[1];
        return { path: "".concat(r34 || "/").concat(a38.search) };
      }
      return t41;
    } catch (e48) {
      return t41;
    }
  }(t40, r33), f14 = function(e47, t41, n26, a38) {
    switch (true) {
      case ("string" == typeof n26 || null === n26):
        return [{ eventName: e47, eventId: t41, data: n26 }];
      case (e47 === o5.OpenApp && (null == a38 ? void 0 : a38.enablePaymentDone)):
        var r34 = a7(n26.path);
        return [{ eventName: o5.PaymentDone, eventId: t41, data: r34 }];
      case e47 === o5.OnDataCallback:
        if (["PAY_BY_BANK", "PAY_BY_CUSTOM_METHOD"].includes(null == n26 ? void 0 : n26.eventType)) return [{ eventName: o5.OnDataCallback, eventId: t41, data: n26 }, { eventName: o5.PaymentDone, eventId: t41, data: e14(n26) }];
        break;
      default:
        return [{ eventName: e47, eventId: t41, data: n26 }];
    }
  }(t40, e46, o17, r11);
  null == f14 || f14.forEach(function(e47) {
    h3.getInstance().emit(e47.eventName, e47.eventId, e47.data);
    var t41 = document.getElementById(k);
    t41 && k2(t41, "appEvent", { eventName: e47.eventName, eventId: e47.eventId, data: e47.data });
  });
} }, window.zaloNative2JS = { nativeCall: function(e46, t40, n25) {
  h3.getInstance().emit(o5.PaymentCallback, e46, t40, n25);
} };

// node_modules/zmp-sdk/apis/utils/query-string.js
function n12(e46) {
  var n25 = [];
  for (var o17 in e46) if (e46.hasOwnProperty(o17)) {
    var r33 = e46[o17];
    if (void 0 === r33) return;
    if (null === r33) return void n25.push(o17);
    n25.push(encodeURIComponent(o17) + "=" + encodeURIComponent(r33));
  }
  return n25.join("&");
}
var o7 = { encode: n12, decode: function(e46, n25) {
  var o17 = {};
  if ("" === e46) return o17;
  for (var r33 = e46.split("&"), t40 = 0; t40 < r33.length; t40++) {
    var i46 = r33[t40].split("=", 2), p46 = decodeURIComponent(i46[0]);
    if (n25 && Object.prototype.hasOwnProperty.call(o17, p46)) throw new URIError("Duplicate key: " + p46);
    o17[p46] = 2 === i46.length ? decodeURIComponent(i46[1]) : null;
  }
  return o17;
}, appendToUrl: function(e46, o17) {
  return e46 + (-1 !== e46.indexOf("?") ? "&" : "?") + ("string" == typeof o17 ? o17 : n12(o17));
}, getParameterByName: function(e46, n25) {
  n25 || (n25 = window.location.href), e46 = e46.replace(/[\[\]]/g, "\\$&");
  var o17 = new RegExp("[?&]" + e46 + "(=([^&#]*)|&|#|$)").exec(n25);
  return o17 ? o17[2] ? decodeURIComponent(o17[2].replace(/\+/g, " ")) : "" : null;
}, getParamsAsObject: function(e46) {
  var n25 = {};
  return e46 ? (e46.split("&").map(function(e47) {
    var o17 = e47.split("=");
    o17 && 2 == o17.length && (n25[o17[0]] = decodeURIComponent(o17[1].replace(/\+/g, " ")));
  }), n25) : n25;
}, toQueryString: function(n25) {
  if (!n25) return "";
  if ("object" != (void 0 === n25 || void 0 === n25 ? "undefined" : o4(n25))) return n25;
  var o17 = Object.keys(n25), r33 = [];
  return o17.map(function(o18) {
    var t40 = n25[o18], i46 = [o18, t40 = "object" == (void 0 === t40 || void 0 === t40 ? "undefined" : o4(t40)) ? JSON.stringify(t40) : encodeURIComponent(t40)].join("=");
    r33.push(i46);
  }), r33.join("&");
} };

// node_modules/zmp-sdk/apis/utils/request.js
var t15 = {};
var n13 = function(e46, n25, r33) {
  var o17 = n25 || "default";
  return function() {
    return (o17 in t15 ? t15[o17](e46, r33) : e46).apply(this, arguments);
  };
};
n13.setWrapper = function(e46) {
  t15[arguments.length <= 1 || void 0 === arguments[1] ? "default" : arguments[1]] = e46;
};
var r12 = { error: { code: 1, error_subcode: 1357046, message: "Received Invalid JSON reply.", type: "http" } };
function o8(e46) {
  try {
    return null === e46 ? r12 : JSON.parse(e46);
  } catch (e47) {
    return r12;
  }
}
var u4 = { execute: function(t40, r33, u48, s31) {
  u48.suppress_http_code = 1;
  var a37 = o7.encode(u48);
  "post" != r33 && (t40 = o7.appendToUrl(t40, a37), a37 = "");
  var i46 = function(e46, t41) {
    if (!self.XMLHttpRequest) return null;
    var r34 = new XMLHttpRequest(), o17 = function() {
    };
    if (!("withCredentials" in r34)) return null;
    r34.open(e46, t41, true), r34.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var u49 = { send: function(e47) {
      r34.send(e47);
    } }, s32 = n13(function() {
      s32 = o17, "onload" in u49 && u49.onload(r34);
    }, "entry", "XMLHttpRequest:load"), a38 = n13(function() {
      a38 = o17, "onerror" in u49 && u49.onerror(r34);
    }, "entry", "XMLHttpRequest:error");
    return r34.onload = function() {
      s32();
    }, r34.onerror = function() {
      a38();
    }, r34.onreadystatechange = function() {
      4 == r34.readyState && (200 == r34.status ? s32() : a38());
    }, u49;
  }(r33, t40);
  return !!i46 && (i46.onload = function(e46) {
    s31(o8(e46.responseText));
  }, i46.onerror = function(e46) {
    e46.responseText ? s31(o8(e46.responseText)) : s31({ error: { code: 1, error_subcode: 1357045, message: "unknown error (empty response)", status: e46.status, type: "http" } });
  }, i46.send(a37), true);
} };

// node_modules/zmp-sdk/apis/external/tslib/tslib.es6.js
function e15(e46, t40) {
  var r33, n25, o17, l27, i46 = { label: 0, sent: function() {
    if (1 & o17[0]) throw o17[1];
    return o17[1];
  }, trys: [], ops: [] };
  return l27 = { next: a37(0), throw: a37(1), return: a37(2) }, "function" == typeof Symbol && (l27[Symbol.iterator] = function() {
    return this;
  }), l27;
  function a37(a38) {
    return function(u48) {
      return function(a39) {
        if (r33) throw new TypeError("Generator is already executing.");
        for (; l27 && (l27 = 0, a39[0] && (i46 = 0)), i46; ) try {
          if (r33 = 1, n25 && (o17 = 2 & a39[0] ? n25.return : a39[0] ? n25.throw || ((o17 = n25.return) && o17.call(n25), 0) : n25.next) && !(o17 = o17.call(n25, a39[1])).done) return o17;
          switch (n25 = 0, o17 && (a39 = [2 & a39[0], o17.value]), a39[0]) {
            case 0:
            case 1:
              o17 = a39;
              break;
            case 4:
              return i46.label++, { value: a39[1], done: false };
            case 5:
              i46.label++, n25 = a39[1], a39 = [0];
              continue;
            case 7:
              a39 = i46.ops.pop(), i46.trys.pop();
              continue;
            default:
              if (!(o17 = i46.trys, (o17 = o17.length > 0 && o17[o17.length - 1]) || 6 !== a39[0] && 2 !== a39[0])) {
                i46 = 0;
                continue;
              }
              if (3 === a39[0] && (!o17 || a39[1] > o17[0] && a39[1] < o17[3])) {
                i46.label = a39[1];
                break;
              }
              if (6 === a39[0] && i46.label < o17[1]) {
                i46.label = o17[1], o17 = a39;
                break;
              }
              if (o17 && i46.label < o17[2]) {
                i46.label = o17[2], i46.ops.push(a39);
                break;
              }
              o17[2] && i46.ops.pop(), i46.trys.pop();
              continue;
          }
          a39 = t40.call(e46, i46);
        } catch (e47) {
          a39 = [6, e47], n25 = 0;
        } finally {
          r33 = o17 = 0;
        }
        if (5 & a39[0]) throw a39[1];
        return { value: a39[0] ? a39[1] : void 0, done: true };
      }([a38, u48]);
    };
  }
}
function t16(e46) {
  var t40 = "function" == typeof Symbol && Symbol.iterator, r33 = t40 && e46[t40], n25 = 0;
  if (r33) return r33.call(e46);
  if (e46 && "number" == typeof e46.length) return { next: function() {
    return e46 && n25 >= e46.length && (e46 = void 0), { value: e46 && e46[n25++], done: !e46 };
  } };
  throw new TypeError(t40 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

// node_modules/zmp-sdk/apis/utils/silent.js
function o9(r33) {
  return function() {
    for (var n25 = arguments.length, o17 = new Array(n25), s31 = 0; s31 < n25; s31++) o17[s31] = arguments[s31];
    try {
      return r33.apply(void 0, a5(o17));
    } catch (r34) {
      return "undefined" != typeof console && console.error && console.error(r34), null;
    }
  };
}
o9.async = function(o17) {
  return t6(function() {
    var r33, s31, t40, l27, c40 = arguments;
    return e15(this, function(n25) {
      switch (n25.label) {
        case 0:
          for (r33 = c40.length, s31 = new Array(r33), t40 = 0; t40 < r33; t40++) s31[t40] = c40[t40];
          n25.label = 1;
        case 1:
          return n25.trys.push([1, 3, , 4]), [4, o17.apply(void 0, a5(s31))];
        case 2:
          return [2, n25.sent()];
        case 3:
          return l27 = n25.sent(), "undefined" != typeof console && console.error && console.error(l27), [2, null];
        case 4:
          return [2];
      }
    });
  });
};

// node_modules/zmp-sdk/apis/appEnv/getEnv.js
var e16 = function(i46) {
  return i46.isAndroid ? n9.android : i46.isIOS ? n9.iOS : n9.unknown;
};
function r13(i46) {
  var o17 = i46.split("zalo")[1];
  return o17 && o17.replace(" ", "").split("/")[1] || "";
}
function s4() {
  var n25 = function() {
    var n26 = o9(function() {
      return window.navigator.userAgent.toLowerCase();
    })();
    if (n26) {
      var s31, a37 = function(i46) {
        return { isAndroid: /android/i.test(i46) && !/iemobile/.test(i46), isIOS: /iphone|ios|ipad|ipod/.test(i46) && !/iemobile/.test(i46), isMobile: /android|iphone|ios|ipad|ipod|iemobile/.test(i46), isZalo: /zalo/.test(i46) };
      }(n26);
      return { appEnv: (s31 = new URL(window.location.href).searchParams.get("env"), { isMp: window.location.hostname.includes(o3) && ("TESTING_LOCAL" == s31 || window.location.pathname.startsWith(O)), isMpWeb: window.location.hostname.includes("localhost") }), platform: a37, platformName: e16(a37), zaloVersion: r13(n26).trim() };
    }
  }();
  if (n25) return n25;
}

// node_modules/zmp-sdk/apis/common/utils.js
var s5;
var u5 = (s5 = t6(function(r33, n25, a37) {
  var s31, u48, d18, c40;
  return e15(this, function(i46) {
    switch (i46.label) {
      case 0:
        return s31 = { appId: r33, versionStatus: n25 }, u.isUndefined(a37) || (s31.currentVersion = a37), u48 = o7.appendToUrl(i.GET_APP_INFO, s31), [4, fetch(u48, { credentials: "include" })];
      case 1:
        return (d18 = i46.sent()).ok ? [4, d18.json()] : [3, 3];
      case 2:
        if ((c40 = i46.sent()).err < 0 || !c40.data) throw new Error(c40);
        return [2, { name: c40.data.name, version: c40.data.version, description: c40.data.description, appUrl: c40.data.appUrl, qrCodeUrl: c40.data.qrCodeUrl, logoUrl: c40.data.logoUrl, cateID: c40.data.cateType }];
      case 3:
        throw new Error("Can't get app info");
    }
  });
}), function(r33, t40, o17) {
  return s5.apply(this, arguments);
});
function d4(r33) {
  try {
    var t40 = r33.map(function(r34) {
      return { action: r34.action, error: r34.error, message: r34.message, data: r34.data };
    });
    u4.execute(i.SEND_ACTION_LOG, "post", { appId: window.APP_ID, data: JSON.stringify(t40) }, function() {
    });
  } catch (r34) {
  }
}
var c3 = function(r33) {
  return r33.replace(/[A-Z]/g, function(r34) {
    return "_".concat(r34.toLowerCase());
  });
};
var p3 = function() {
  var r33;
  return "android" === ((null === (r33 = s4()) || void 0 === r33 ? void 0 : r33.platformName) || "").toLowerCase();
};
var l3 = function() {
  var r33;
  return "ios" === ((null === (r33 = s4()) || void 0 === r33 ? void 0 : r33.platformName) || "").toLowerCase();
};
function f3(r33) {
  var t40 = String(r33);
  try {
    if (/^\d{9}$/.test(t40) && "0" === t40[5]) return Number(t40.slice(0, 5) + t40.slice(6));
  } catch (r34) {
  }
  return Number(t40);
}
var m3 = function() {
  var r33, t40 = 0;
  if (window.zaloVersionCode) return f3(window.zaloVersionCode);
  var o17 = Number((null === (r33 = s4()) || void 0 === r33 ? void 0 : r33.zaloVersion) || "0");
  return o17 >= 24112e3 ? t40 = o17 : p3() ? t40 = o17 % 1e4 : l3() && (t40 = o17), f3(t40);
};
function v2(r33, t40) {
  if (window.isAPISupport && "function" == typeof window.isAPISupport) return window.isAPISupport(r33, t40);
  var o17 = m3();
  return p3() ? o17 >= r33 : !!l3() && o17 >= t40;
}

// node_modules/zmp-sdk/apis/common/apis/general/getSetting.js
var u6;
var c4 = (u6 = t6(function(e46) {
  var r33;
  return e15(this, function(n25) {
    switch (n25.label) {
      case 0:
        return r33 = { headers: { "Content-Type": "application/x-www-form-urlencoded", authorization: "Bearer ".concat(e46) } }, [4, fetch(i.GET_AUTH_SETTING, t9({ method: "GET" }, r33))];
      case 1:
        return [4, n25.sent().json()];
      case 2:
        return [2, n25.sent()];
    }
  });
}), function(e46) {
  return u6.apply(this, arguments);
});
var m4 = t6(function() {
  return e15(this, function(t40) {
    return [2, new Promise((s31 = t6(function(e46, t41) {
      var s32, u48, m51, l27;
      return e15(this, function(a37) {
        switch (a37.label) {
          case 0:
            return a37.trys.push([0, 3, , 4]), [4, w2.jumpAndGetToken()];
          case 1:
            return a37.sent(), (u48 = null === (s32 = w2.miniProgramConfig) || void 0 === s32 ? void 0 : s32.jwt) || t41(new n5(t4.UNAUTHORIZED, s.LOGIN_REQUIRED, "getSetting")), [4, c4(u48)];
          case 2:
            return (m51 = a37.sent()) && 0 === m51.err ? e46({ authSetting: m51.data }) : t41(new n5(m51.err, m51.msg, "getSetting")), [3, 4];
          case 3:
            return l27 = a37.sent(), t41(l27), [3, 4];
          case 4:
            return [2];
        }
      });
    }), function(e46, t41) {
      return s31.apply(this, arguments);
    }))];
    var s31;
  });
});

// node_modules/zmp-sdk/apis/common/call/zaloNative.js
var I2;
var b;
var T2;
var M2;
var j;
var w4;
var E3 = (T2 = s4(), M2 = {}, j = h3.getInstance(), w4 = [], _3(function(o17) {
  var e46 = o17.serialId, r33 = g3(o17.result), t40 = w3(null == r33 ? void 0 : r33.action), n25 = u.isEmpty(null == r33 ? void 0 : r33.error_code) ? 0 : null == r33 ? void 0 : r33.error_code, l27 = null == r33 ? void 0 : r33.error_message, c40 = (null == r33 ? void 0 : r33.data) || r33;
  if (t40 && 0 === n25) {
    var u48 = JSON.parse(null == r33 ? void 0 : r33.data);
    n25 = u.isEmpty(null == u48 ? void 0 : u48.error_code) ? 0 : null == u48 ? void 0 : u48.error_code, l27 = null == u48 ? void 0 : u48.error_message, c40 = (null == u48 ? void 0 : u48.data) || u48;
  }
  var d18 = { error_code: n25, error_message: l27, data: c40, action: (null == r33 ? void 0 : r33.action) || o17.actionName };
  if (e46 && M2[e46]) {
    var v8 = M2[e46], m51 = v8.callback, p46 = v8.timeout, f14 = v8.isMultiCallback, _10 = v8.options, g9 = v8.downloadListener;
    !function(o18, e47) {
      var r34 = e47 || {}, t41 = r34.success, n26 = r34.fail;
      0 === o18.error_code ? u.isFunction(t41) && t41(o18) : u.isFunction(n26) && n26(o18);
    }(d18, m51), !f14 && delete M2[e46], p46 && clearTimeout(p46);
    var I6 = { action: null == d18 ? void 0 : d18.action, error: null == d18 ? void 0 : d18.error_code, message: null == d18 ? void 0 : d18.error_message, data: {} };
    try {
      if ("action.open.inapp" === d18.action || "action.open.outapp" === d18.action) {
        var b8 = new URL(null == _10 ? void 0 : _10.url), T4 = "".concat(b8.protocol, "//").concat(b8.host).concat(b8.pathname);
        I6.data = { url: T4 };
      }
      if ("action.follow.oa" === d18.action || "action.unfollow.oa" === d18.action) {
        var E7 = null == _10 ? void 0 : _10.uid;
        I6.data = { uid: E7 };
      }
      if ("action.open.chat" === d18.action) {
        var N4 = null == _10 ? void 0 : _10.uId, S5 = null == _10 ? void 0 : _10.type;
        I6.data = { uid: N4, openChatType: S5 };
      }
      (null == _10 ? void 0 : _10.onProgress) && g9 && j.off(o5.DownloadProgress, g9);
    } catch (o18) {
    }
    w4.push(I6);
  }
}), j.on(o5.AppPaused, function() {
  if (w4.length > 0) {
    var o17 = w4;
    w4 = [], d4(o17);
  }
}), I2 ? clearInterval(I2) : I2 = setInterval(function() {
  if (w4.length > 0) {
    var o17 = w4;
    w4 = [], d4(o17);
  }
}, 5e3), true, b = t6(function(o17, t40, n25, i46) {
  var p46, _10, I6, b8, w7, E7, N4, S5, k5, y7, O4, P3, U3, C5, A5, J3, L4, R3, D4, Z2, F4, H2, q2, x3, z2, B3;
  return e15(this, function(g9) {
    switch (g9.label) {
      case 0:
        return _10 = Math.floor(1e6 * Math.random()), I6 = "".concat(o17, "_").concat(_10), b8 = N2(o17), (null == i46 ? void 0 : i46.actionName) && i46.actionName.length > 0 && (b8 = null == i46 ? void 0 : i46.actionName), w7 = (null == i46 ? void 0 : i46.isMultiCallback) || false, E7 = false !== (null == i46 ? void 0 : i46.timeout) && ((null == i46 ? void 0 : i46.timeout) || true), N4 = (null == i46 ? void 0 : i46.haveCallback) || false, S5 = (null == i46 ? void 0 : i46.skipJump) || false, k5 = (null == i46 ? void 0 : i46.requireAccessToken) || false, y7 = _4(b8), t40 && n25 && (M2[I6] = { options: t40, callback: n25, isMultiCallback: w7 }, E7 && N4 && (M2[I6].timeout = setTimeout(function() {
          var a37 = { serialId: I6, result: { error_code: t4.TIME_OUT, error_message: s.TIME_OUT, data: { timeout: E7 }, action: o17 } };
          return g2(a37), null;
        }, true === E7 ? 8e3 : 1e3 * E7))), y7 ? [4, m4()] : [3, 2];
      case 1:
        if (false === (null == (P3 = g9.sent()) || null === (O4 = P3.authSetting) || void 0 === O4 ? void 0 : O4["scope.userInfo"])) return C5 = { serialId: I6, result: { error_code: t4.UNAUTHORIZED, error_message: s.NEED_USER_AUTH, data: { isMobile: null == T2 || null === (U3 = T2.platform) || void 0 === U3 ? void 0 : U3.isMobile }, action: o17 } }, g2(C5), [2];
        g9.label = 2;
      case 2:
        return A5 = w3(b8), !(null == T2 || null === (p46 = T2.platform) || void 0 === p46 ? void 0 : p46.isMobile) || !o17 || u.isUndefined(ZaloJavaScriptInterface) || T2.platform.isIOS && !m5(o17) || A5 && false === A5.isSupported ? (L4 = { serialId: I6, result: { error_code: t4.CLIENT_NOT_SUPPORT, error_message: s.CLIENT_NOT_SUPPORT, data: { isMobile: null == T2 || null === (J3 = T2.platform) || void 0 === J3 ? void 0 : J3.isMobile }, action: o17 } }, g2(L4), [2]) : (R3 = l4(t40), S5 ? [3, 4] : [4, w2.getJSAccessToken()]);
      case 3:
        return Z2 = g9.sent(), [3, 5];
      case 4:
        Z2 = "", g9.label = 5;
      case 5:
        D4 = Z2, g9.label = 6;
      case 6:
        return g9.trys.push([6, 10, , 11]), S5 || !k5 ? [3, 8] : [4, w2.getAccessToken()];
      case 7:
        return H2 = g9.sent(), [3, 9];
      case 8:
        H2 = "", g9.label = 9;
      case 9:
        return F4 = H2, [3, 11];
      case 10:
        return q2 = g9.sent(), x3 = { serialId: I6, result: { error_code: null == q2 ? void 0 : q2.code, error_message: null == q2 ? void 0 : q2.message, action: o17 } }, g2(x3), [2];
      case 11:
        try {
          t40 && (null == t40 ? void 0 : t40.onProgress) && (z2 = function(o18) {
            !function(o19, e46) {
              var r33 = o19.progress;
              e46 && e46(r33);
            }(o18, null == t40 ? void 0 : t40.onProgress);
          }, M2[I6].downloadListener = z2, j.on(o5.DownloadProgress, z2));
        } catch (o18) {
        }
        return B3 = T2.platform.isIOS ? window.onNativeMessage(I6, b8) : 'window.onNativeMessage("'.concat(I6, '", "').concat(b8, '")'), [2, ZaloJavaScriptInterface.jsCall(D4, b8, F4, R3, B3)];
    }
  });
}), function(o17, e46, r33, a37) {
  return b.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/utils/response.js
var d5 = { success: function(o17, n25) {
  return { code: t4.SUCCESS, message: n25 || s.SUCCESS, data: o17 || {} };
}, error: { failLimit: function() {
  return new n5(t4.FAIL_LIMIT, s.FAIL_LIMIT);
}, badRequest: function(r33) {
  return new n5(t4.BAD_REQUEST, r33);
}, loginFailed: function(o17) {
  return new n5(t4.UNAUTHORIZED, "".concat(s.LOGIN_FAILED, ": ").concat(o17));
}, loginRequired: function() {
  return new n5(t4.UNAUTHORIZED, s.LOGIN_REQUIRED);
}, cannotGetShareInfo: function() {
  return new n5(t4.INTERNAL_SERVER_ERROR, "Can not get app info to share");
}, createIAPOrderFailed: function(e46) {
  var n25 = Object.keys(V).find(function(r33) {
    return r33 === e46.toString();
  });
  return new n5(e46, n25 || s.UNKNOWN_ERROR);
}, clientNotSupport: function() {
  return new n5(t4.CLIENT_NOT_SUPPORT, s.CLIENT_NOT_SUPPORT);
} } };
var l5 = function(r33) {
  var o17, d18, l27, f14 = null === (o17 = s4()) || void 0 === o17 ? void 0 : o17.platformName, R3 = A2(r33.action), E7 = P[R3], N4 = (null == E7 ? void 0 : E7.skipJump) || false, _10 = (null == E7 ? void 0 : E7.errorList) || {};
  if ("JUMP_LOGIN" === R3) return new n5(t4.UNKNOWN_ERROR, "Can not get auth code: ".concat(r33.error_message));
  if (w2.jumpStatus !== a6.DONE && !N4) return new n5(D.UNAUTHORIZED.code, D.UNAUTHORIZED.message);
  if ("permission required!" === String(r33.error_message).toLowerCase() || "no permission!" === String(r33.error_message).toLowerCase()) return new n5(D.FORBIDDEN.code, D.FORBIDDEN.message);
  if (f14 && (null === (d18 = n4[f14]) || void 0 === d18 ? void 0 : d18[r33.error_code])) return new n5(n4[f14][r33.error_code].code, n4[f14][r33.error_code].message);
  var p46 = null == _10 || null === (l27 = _10[f14]) || void 0 === l27 ? void 0 : l27[String(r33.error_code)];
  if (p46) {
    var v8, I6, O4, g9 = null === (v8 = p46.mapTo) || void 0 === v8 ? void 0 : v8.message;
    if (null == p46 ? void 0 : p46.needMoreDetail) g9 = "".concat(null == p46 || null === (O4 = p46.mapTo) || void 0 === O4 ? void 0 : O4.message, ": ").concat(r33.error_message);
    return new n5(null === (I6 = p46.mapTo) || void 0 === I6 ? void 0 : I6.code, g9);
  }
  return new n5(r33.error_code, r33.error_message);
};

// node_modules/zmp-sdk/apis/common/call/index.js
var a8 = function(a37, f14, l27, m51) {
  var u48 = function(s31, e46) {
    function i46(i47) {
      return function(a38) {
        var f15 = u.isEmpty(e46) ? void 0 : e46[i47];
        if (f15) return e10({ stage: E.RESPONSE, type: "log", state: i47, name: s31, response: a38 }), f15("fail" === i47 ? l5(a38) : null == a38 ? void 0 : a38.data);
      };
    }
    return u.isUndefined(s31) && (s31 = ""), Object.assign({}, { success: i46("success"), fail: i46("fail") });
  }(a37, l27), c40 = P[a37], p46 = (null == m51 ? void 0 : m51.delay) || 0;
  setTimeout(function() {
    E3(a37, f14, u48, t9({}, m51, c40));
  }, p46);
};

// node_modules/zmp-sdk/apis/common/apis/general/authorize.js
var i4;
var r14 = (i4 = t6(function(s31) {
  return e15(this, function(e46) {
    return [2, new Promise(function(e47, i46) {
      a8("MP_USER_AUTHORIZE", { scopes: s31, forceUpdate: true }, { success: function(s32) {
        u.isEmpty(s32) || e47(s32);
      }, fail: function(s32) {
        i46(s32);
      } }, { isMultiCallback: false, timeout: false });
    })];
  });
}), function(s31) {
  return i4.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/common/token.js
var A3 = function() {
  function A5() {
    a2(this, A5), this._jumpStatus = void 0, this.WAITING_QUEUE = [], this.getAccessTokenCount = 0, this._accessToken = "", this._jsAccessToken = "", this.refreshToken = "", this._cookies = [], this.accessTokenExpiresIn = 0, this.prevGetAccessTokenTimestamp = (/* @__PURE__ */ new Date()).getTime(), this.manualSetAccessToken = false, this._miniProgramConfig = {}, this.retryLimitMap = {};
  }
  var w7 = A5.prototype;
  return w7.initRetryLimit = function(e46) {
    var n25 = r2[e46], t40 = { lastCall: (/* @__PURE__ */ new Date()).getTime(), limit: n25 && n25.limit ? n25.limit : 3, retry: 0 };
    return this.retryLimitMap[e46] = t40, t40;
  }, w7.resetRetryLimit = function(e46) {
    this.retryLimitMap[e46].lastCall = (/* @__PURE__ */ new Date()).getTime(), this.retryLimitMap[e46].retry = 0;
  }, w7.getRetryLimit = function(e46) {
    var n25 = this.retryLimitMap[e46];
    return n25 && n25.lastCall && n25.retry || (n25 = this.initRetryLimit(e46)), n25;
  }, w7.increaseRetryLimit = function(e46) {
    this.retryLimitMap[e46].retry++;
  }, w7.jump = function() {
    var n25 = this;
    return t6(function() {
      return e15(this, function(e46) {
        return [2, new Promise(function(e47, t40) {
          n25._jumpStatus ? n25._jumpStatus === a6.DONE ? e47(a6.DONE) : e47(a6.DOING) : (n25._jumpStatus = a6.DOING, e10({ stage: E.REQUEST, type: "log", name: "jump" }), E3("JUMP_LOGIN", {}, { success: function(t41) {
            var s31 = t41.data;
            n25._miniProgramConfig = (null == s31 ? void 0 : s31.miniProgramConfig) || {};
            var r33 = (null == s31 ? void 0 : s31.cookiesOAuthLogins) || [], i46 = r33.find(function(e48) {
              return e48.name === N.JS_TOKEN;
            });
            i46 && (n25._jsAccessToken = i46.value, window.ZJSBridge.setJSToken && window.ZJSBridge.setJSToken(i46.value)), n25._cookies = r33;
            var c40 = n25._cookies.find(function(e48) {
              return e48.name === N.ZOAUTH;
            });
            (null == c40 ? void 0 : c40.value) || d4([{ action: "action.jump.login", error: -102, message: "no zoauth", data: {} }]), e47(a6.DONE);
          }, fail: function(e48) {
            d4([{ action: "action.jump.login", error: -101, message: e48.message || "jump error", data: {} }]), t40(e48);
          } }, { skipJump: true }));
        })];
      });
    })();
  }, w7.loginZaloV3 = function(n25, t40, s31) {
    var r33 = this;
    return t6(function() {
      var o17;
      return e15(this, function(c40) {
        switch (c40.label) {
          case 0:
            return o17 = "".concat(i.GET_ACCESS_TOKEN_V3, "?app_id=").concat(t40, "&redirect_uri=").concat(A, "/").concat(n25, "/&code=").concat(s31, "&isSDK=true"), [4, fetch(o17).then((a37 = t6(function(e46) {
              var n26, t41, s32;
              return e15(this, function(o18) {
                switch (o18.label) {
                  case 0:
                    return [4, e46.json()];
                  case 1:
                    return n26 = o18.sent(), t41 = null == n26 ? void 0 : n26.access_token, r33._accessToken = t41, s32 = 1e3 * parseInt(n26.expires_in), r33.accessTokenExpiresIn = s32, r33.prevGetAccessTokenTimestamp = (/* @__PURE__ */ new Date()).getTime(), window.ZJSBridge.setZAccSession && window.ZJSBridge.setZAccSession(r33._accessToken || ""), [2, t41];
                }
              });
            }), function(e46) {
              return a37.apply(this, arguments);
            }))];
          case 1:
            return [2, c40.sent()];
        }
        var a37;
      });
    })();
  }, w7.loginZaloV4 = function(n25) {
    var t40 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o17 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", c40 = this;
    return t6(function() {
      var a37, u48;
      return e15(this, function(l27) {
        switch (l27.label) {
          case 0:
            return (a37 = new URLSearchParams()).append("app_id", n25), a37.append("code", t40), a37.append("code_verifier", o17), u.isNull(c40.refreshToken) || 0 === c40.refreshToken.length ? a37.append("grant_type", "authorization_code") : (a37.append("grant_type", "refresh_token"), a37.append("refresh_token", c40.refreshToken || "")), u48 = { headers: { "Content-Type": "application/x-www-form-urlencoded" } }, [4, fetch(i.GET_ACCESS_TOKEN, t9({ method: "POST", body: a37 }, u48)).then((m51 = t6(function(e46) {
              var n26, t41, s31, r33;
              return e15(this, function(o18) {
                switch (o18.label) {
                  case 0:
                    return [4, e46.json()];
                  case 1:
                    return n26 = o18.sent(), t41 = (null == n26 ? void 0 : n26.access_token) || "", s31 = (null == n26 ? void 0 : n26.refresh_token) || "", c40.refreshToken = s31, c40._accessToken = t41, r33 = 1e3 * parseInt(null == n26 ? void 0 : n26.expires_in), c40.accessTokenExpiresIn = r33, c40.prevGetAccessTokenTimestamp = (/* @__PURE__ */ new Date()).getTime(), window.ZJSBridge.setZAccSession && window.ZJSBridge.setZAccSession(t41), [2, t41];
                }
              });
            }), function(e46) {
              return m51.apply(this, arguments);
            }))];
          case 1:
            return [2, l27.sent()];
        }
        var m51;
      });
    })();
  }, w7.getAccessToken = function() {
    var n25 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t40 = this;
    return t6(function() {
      var s31, r33, i46, u48, l27, m51, p46, f14, g9;
      function T4() {
        return _10.apply(this, arguments);
      }
      function _10() {
        return (_10 = t6(function() {
          return e15(this, function(e46) {
            switch (e46.label) {
              case 0:
                return [4, new Promise(function(e47) {
                  var n26 = setInterval(function() {
                    (r33.getAccessTokenCount <= 1 || r33._accessToken) && (e47("done"), clearInterval(n26));
                  }, 200);
                })];
              case 1:
                return [2, e46.sent()];
            }
          });
        })).apply(this, arguments);
      }
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            return s31 = (/* @__PURE__ */ new Date()).getTime() - t40.prevGetAccessTokenTimestamp, (r33 = t40).getAccessTokenCount++, t40.getAccessTokenCount > 1 ? [4, T4()] : [3, 2];
          case 1:
            e46.sent(), e46.label = 2;
          case 2:
            return t40.manualSetAccessToken ? (r33.getAccessTokenCount--, [2, Promise.resolve(t40._accessToken)]) : n25 ? [4, t40.verifyUserAuthorized()] : [3, 4];
          case 3:
            return u48 = e46.sent(), [3, 5];
          case 4:
            u48 = true, e46.label = 5;
          case 5:
            return i46 = u48, t40._accessToken.length > 0 && s31 < t40.accessTokenExpiresIn && i46 ? (r33.getAccessTokenCount--, [2, Promise.resolve(t40._accessToken)]) : (t40.accessToken = "", [4, t40.jumpAndGetToken(N.ZOAUTH)]);
          case 6:
            return l27 = e46.sent(), [4, t40.jumpAndGetToken(N.ZOAUTH_VRF)];
          case 7:
            if (m51 = e46.sent(), p46 = "zmp.getaccesstoken.fail", !i46) throw r33.getAccessTokenCount--, d4([{ action: p46, error: -104, message: "no user auth", data: {} }]), d5.error.loginFailed("User Authentication Required");
            if (!l27) return [3, 15];
            e46.label = 8;
          case 8:
            return e46.trys.push([8, 13, , 14]), m51 ? [4, t40.loginZaloV4(I, l27, m51)] : [3, 10];
          case 9:
            return f14 = e46.sent(), [3, 12];
          case 10:
            return [4, t40.loginZaloV3(I, a3, l27)];
          case 11:
            f14 = e46.sent(), e46.label = 12;
          case 12:
            return [3, 14];
          case 13:
            return g9 = e46.sent(), f14 = "", console.log("Can not get access token", g9), d4([{ action: p46, error: -103, message: String(g9) || "Can not get access token", data: {} }]), [3, 14];
          case 14:
            return r33.getAccessTokenCount--, f14 ? [2, Promise.resolve(t40._accessToken)] : (d4([{ action: p46, error: -101, message: "no accessToken", data: {} }]), [2, Promise.reject(d5.error.loginFailed("Can't get accessToken. Please try again later."))]);
          case 15:
            throw r33.getAccessTokenCount--, d4([{ action: p46, error: -102, message: "no oauth", data: {} }]), d5.error.loginFailed("Zalo app has not been activated");
        }
      });
    })();
  }, w7.verifyUserAuthorized = function() {
    var n25 = this;
    return t6(function() {
      var e46, t40, s31, r33, o17, i46;
      return e15(this, function(c40) {
        switch (c40.label) {
          case 0:
            return t40 = true, [4, n25.jumpAndGetToken()];
          case 1:
            if (c40.sent(), false !== (null === (e46 = n25._miniProgramConfig) || void 0 === e46 ? void 0 : e46.userAuthorized)) return [3, 7];
            c40.label = 2;
          case 2:
            return c40.trys.push([2, 6, , 7]), (s31 = w3("action.mp.user.authorize")) && s31.isSupported ? [4, m4()] : [3, 5];
          case 3:
            return false !== (null == (o17 = c40.sent()) || null === (r33 = o17.authSetting) || void 0 === r33 ? void 0 : r33["scope.userInfo"]) ? [3, 5] : [4, r14()];
          case 4:
            i46 = c40.sent(), t40 = (null == i46 ? void 0 : i46["scope.userInfo"]) || false, c40.label = 5;
          case 5:
            return [3, 7];
          case 6:
            return c40.sent(), t40 = false, [3, 7];
          case 7:
            return [2, t40];
        }
      });
    })();
  }, w7.setAccessToken = function(e46) {
    this.manualSetAccessToken = true, this._accessToken = e46, window.ZJSBridge.setZAccSession && window.ZJSBridge.setZAccSession(e46);
  }, w7.getJSAccessToken = function() {
    var n25 = this;
    return t6(function() {
      var e46;
      return e15(this, function(t40) {
        switch (t40.label) {
          case 0:
            return n25._jsAccessToken.length > 0 ? [2, Promise.resolve(n25._jsAccessToken)] : [4, n25.jumpAndGetToken(N.JS_TOKEN)];
          case 1:
            return e46 = t40.sent(), [2, Promise.resolve(e46)];
        }
      });
    })();
  }, w7.getSync = function(e46) {
    var n25;
    return null === (n25 = this._cookies.find(function(n26) {
      return n26.name === e46;
    })) || void 0 === n25 ? void 0 : n25.value;
  }, w7.jumpAndGetToken = function(n25) {
    var t40, s31 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o17 = this;
    return new Promise((t40 = t6(function(e46) {
      var t41, i46, c40, a37;
      return e15(this, function(u48) {
        switch (u48.label) {
          case 0:
            return !s31 && o17._cookies.length > 0 ? u.isString(n25) ? (t41 = o17._cookies.find(function(e47) {
              return e47.name === n25;
            }), [2, e46(null == t41 ? void 0 : t41.value)]) : [2, e46("")] : (s31 && o17._jumpStatus === a6.DONE && (o17._jumpStatus = void 0), i46 = { name: n25, cb: function(n26) {
              return e46(n26);
            } }, [4, o17.jump()]);
          case 1:
            return (c40 = u48.sent()) === a6.DONE ? (o17._jumpStatus = c40, o17.WAITING_QUEUE.length && (o17.WAITING_QUEUE.forEach(function(e47) {
              var n26 = o17._cookies.find(function(n27) {
                return n27.name === e47.name;
              });
              e47.cb(null == n26 ? void 0 : n26.value);
            }), o17.WAITING_QUEUE = []), a37 = o17._cookies.find(function(e47) {
              return e47.name === i46.name;
            }), i46.cb(null == a37 ? void 0 : a37.value)) : o17.WAITING_QUEUE.push(i46), [2];
        }
      });
    }), function(e46) {
      return t40.apply(this, arguments);
    }));
  }, A5.getInstance = function() {
    return A5.instance || (A5.instance = new A5()), A5.instance;
  }, r8(A5, [{ key: "jumpStatus", get: function() {
    return this._jumpStatus;
  } }, { key: "accessToken", set: function(e46) {
    this._accessToken = e46, window.ZJSBridge.setZAccSession && window.ZJSBridge.setZAccSession(e46);
  } }, { key: "miniProgramConfig", get: function() {
    return this._miniProgramConfig;
  } }]), A5;
}();
var w2 = A3.getInstance();

// node_modules/zmp-sdk/apis/utils/common.js
var p4 = n8("zmp:utils:common");
var l4 = function(n25) {
  if (u.isObject(JSON) && JSON.stringify) return JSON.stringify(n25);
  if (void 0 === n25) return "undefined";
  if (null === n25) return "null";
  try {
    if ("string" == typeof n25 || null !== n25.constructor.toString().match(/string/i)) return '"' + n25.replace(/"/g, '\\"') + '"';
  } catch (n26) {
    console.log(n26);
  }
  var r33;
  if (null !== Object.prototype.toString.call(n25).match(/array/i)) {
    r33 = [];
    for (var t40 = n25.length, e46 = 0; e46 < t40; e46++) r33.push(l4(n25[e46]));
    return "[" + r33.join(",") + "]";
  }
  if ("object" == typeof n25) {
    for (var o17 in r33 = [], n25) r33.push('"' + o17 + '":' + l4(n25[o17]));
    return "{" + r33.join(",") + "}";
  }
  return n25.toString();
};
var m5 = function(n25) {
  var r33 = P[n25], t40 = m3(), e46 = r33 && "object" == typeof r33 && "versionLive" in r33 && r33.versionLive && "iOS" in r33.versionLive ? r33.versionLive.iOS : 0;
  return !!(Array.isArray(window.ignoreCheckSupport) && window.ignoreCheckSupport.length > 0 && window.ignoreCheckSupport.includes(n25)) || t40 >= e46;
};
var d3 = function(n25) {
  try {
    if (n25) {
      p4(n25);
      var r33 = n25.replace(/\\/g, "").replace(/&#39;/g, "'");
      try {
        r33 = decodeURIComponent(atob(n25));
      } catch (n26) {
      }
      var e46 = JSON.parse(r33);
      return p4("formattedValue", r33, e46, void 0 === e46 ? "undefined" : o4(e46)), e46;
    }
    return null;
  } catch (r34) {
    return p4("parse json error:", r34), n25;
  }
};
var g3 = function(n25) {
  if (u.isObject(JSON) && JSON.parse && u.isString(n25)) {
    var r33 = n25.replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\x00/g, "");
    return JSON.parse(r33, function(n26, r34) {
      return r34;
    });
  }
  return u.isObject(n25) ? n25 : new Function("return " + n25)();
};
var h4 = function(n25) {
  for (var r33 = document.getElementsByTagName("meta"), t40 = 0; t40 < r33.length; t40++) if (r33[t40].getAttribute("name") === n25 || r33[t40].getAttribute("property") === n25) return r33[t40].getAttribute("content");
  return "";
};
var v3 = function(n25) {
  return btoa(encodeURIComponent(JSON.stringify(n25)));
};
var y = function(n25, r33) {
  var t40, e46 = 0;
  for (t40 in n25) {
    var o17 = t40.split("_")[0];
    n25.hasOwnProperty(t40) && (r33 && o17 !== r33 || (e46 += 2 * (n25[t40].length + t40.length)));
  }
  return e46;
};
function j2(n25) {
  return n25.map(function(n26, r33) {
    var t40 = n26.path.length > 0 ? n26.path.map(function(n27, r34) {
      return r34 > 0 ? "[".concat(n27, "]") : n27;
    }).join("") : "arg";
    return "Error ".concat(r33 + 1, ": Code: ").concat(n26.code, " ~ Path: ").concat(t40, " ~ Message: ").concat(n26.message);
  }).join(" | ");
}
var S2;
var b2 = function(n25) {
  return n25 === f.hidden ? "hidden" : n25 === f.transparent ? "transparent" : "normal";
};
var O2 = function(n25) {
  return "hidden" === n25 ? f.hidden : "transparent" === n25 ? f.transparent : f.normal;
};
var w3 = function(n25) {
  if (void 0 !== n25) {
    var r33 = w2.miniProgramConfig;
    return ((null == r33 ? void 0 : r33.dynamicApis) || []).find(function(r34) {
      return r34.action === n25 && false === r34.clientHandle;
    });
  }
};
var _4 = function(n25) {
  if (void 0 === n25) return false;
  var r33 = w2.miniProgramConfig;
  return ((null == r33 ? void 0 : r33.requiredAuthenList) || []).indexOf(n25) >= 0;
};
var C2 = (S2 = t6(function() {
  return e15(this, function(r33) {
    return [2, new Promise(function() {
      var r34 = t6(function(n25, r35) {
        var t40;
        return e15(this, function(r36) {
          switch (r36.label) {
            case 0:
              return r36.trys.push([0, 2, , 3]), [4, w2.jumpAndGetToken()];
            case 1:
              return r36.sent(), t40 = w2.miniProgramConfig, n25(true === (null == t40 ? void 0 : t40.canUseAccessTokenByDefault)), [3, 3];
            case 2:
              return r36.sent(), n25(false), [3, 3];
            case 3:
              return [2];
          }
        });
      });
      return function(n25, t40) {
        return r34.apply(this, arguments);
      };
    }())];
  });
}), function() {
  return S2.apply(this, arguments);
});
var A2 = function(n25) {
  return n25.replace("action.", "").replace(/\./g, "_").toUpperCase();
};
var N2 = function(n25) {
  return n25.startsWith("action.") ? n25 : "action.".concat(n25.replace(/\_/g, ".").toLowerCase());
};
var J = function(n25, t40, e46) {
  "string" == typeof e46 && e46.length > 0 ? n25.set(t40, e46) : "object" != typeof e46 || Array.isArray(e46) || Object.entries(e46).forEach(function(e47) {
    var o17 = e6(e47, 2), i46 = o17[0], a37 = o17[1];
    null != a37 && "" !== a37 && n25.set("".concat(t40).concat(i46), String(a37));
  });
};
var k2 = function(n25, r33, t40) {
  var o17;
  null === (o17 = n25.contentWindow) || void 0 === o17 || o17.postMessage({ type: r33, payload: t40 }, g);
};
function L2(n25) {
  var r33 = new TextEncoder().encode(n25), t40 = Array.from(r33).map(function(n26) {
    return String.fromCharCode(n26);
  }).join("");
  return btoa(t40);
}

// node_modules/zmp-sdk/apis/utils/decorator.js
function a9(a37, l27, m51, u48) {
  var c40, f14;
  !function(r33, i46) {
    if (r2[r33]) {
      var o17 = w2.getRetryLimit(r33);
      o17.lastCall && (/* @__PURE__ */ new Date()).getTime() - o17.lastCall > 1e3 && w2.resetRetryLimit(r33);
      var a38 = o17.limit || 3;
      if (o17.retry && o17.retry >= a38) throw r3(d5.error.failLimit(), r33);
      w2.increaseRetryLimit(r33);
    }
  }(a37);
  var v8 = Array.isArray(m51) && m51.length > 0 && (null === (c40 = m51[0]) || void 0 === c40 ? void 0 : c40.success), d18 = Array.isArray(m51) && m51.length > 0 && (null === (f14 = m51[0]) || void 0 === f14 ? void 0 : f14.fail);
  try {
    var h13 = m51;
    l27.length > 0 && l27.forEach(function(r33, o17) {
      var s31 = r33.safeParse(m51[o17]);
      if (!s31.success) {
        var n25, l28 = null === (n25 = s31.error) || void 0 === n25 ? void 0 : n25.issues, u49 = j2(l28), c41 = d5.error.badRequest(u49);
        throw c41.detail = l28, r3(c41, a37);
      }
      h13.push(s31.data);
    });
    var p46 = u48.apply(void 0, a5(h13));
    return u.isPromise(p46) ? new Promise(function(r33, i46) {
      p46.then(function(i47) {
        if (!u.isNull(v8) && u.isFunction(v8)) return v8(i47);
        r33(p46);
      }).catch(function(r34) {
        var e46 = r3(r34, a37);
        if (!u.isNull(d18) && u.isFunction(d18)) return d18(e46);
        i46(e46);
      });
    }) : p46;
  } catch (r33) {
    if (!u.isNull(d18) && u.isFunction(d18)) return d18(r33);
    throw r3(r33, a37);
  }
}

// node_modules/zmp-sdk/apis/apis/getVersion.js
function t17() {
  return a9("getVersion", [], [], function() {
    return r4;
  });
}

// node_modules/zmp-sdk/apis/appEnv/index.js
var e17;
var o10 = (null === (e17 = s4()) || void 0 === e17 ? void 0 : e17.appEnv) || {};

// node_modules/zmp-sdk/apis/common/notFound.js
var o11 = function(o17, t40) {
  var a37, s31 = { error: -1404, errorMessage: "".concat(o17, " is not found") };
  null == t40 || null === (a37 = t40.fail) || void 0 === a37 || a37.call(t40, s31), e10({ stage: E.NOT_FOUND, type: "error", name: o17, request: t40, state: "fail", response: s31 });
};

// node_modules/zmp-sdk/apis/apis/login.js
function m6(o17) {
  return c5.apply(this, arguments);
}
function c5() {
  return (c5 = t6(function(m51) {
    return e15(this, function(c40) {
      return [2, a9("login", [], [m51], t6(function() {
        return e15(this, function(o17) {
          switch (o17.label) {
            case 0:
              return o10.isMp ? [4, w2.jumpAndGetToken(N.ZOAUTH)] : [3, 2];
            case 1:
              return o17.sent(), [2, "Success"];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve("")] : [2, Promise.reject(o11("login", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/getAccessToken.js
function c6(e46) {
  return m7.apply(this, arguments);
}
function m7() {
  return (m7 = t6(function(c40) {
    return e15(this, function(m51) {
      return [2, a9("getAccessToken", [], [c40], t6(function() {
        var e46;
        return e15(this, function(t40) {
          switch (t40.label) {
            case 0:
              return o10.isMp ? [4, C2()] : [3, 3];
            case 1:
              return e46 = !t40.sent(), [4, w2.getAccessToken(e46)];
            case 2:
              return [2, t40.sent() || ""];
            case 3:
              return o10.isMpWeb ? [2, Promise.resolve("")] : [2, Promise.reject(o11("getAccessToken", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getSystemInfo.js
function r15() {
  var r33;
  return { version: h4("version-id") || "", apiVersion: r4, zaloVersion: String(m3()), platform: (null === (r33 = s4()) || void 0 === r33 ? void 0 : r33.platformName) || "", language: navigator.language, zaloLanguage: window.zLanguage || "vi", zaloTheme: window.zTheme || "light" };
}

// node_modules/zmp-sdk/apis/apis/getSystemInfo.js
function r16() {
  return a9("getSystemInfo", [], [], function() {
    return r15();
  });
}

// node_modules/zmp-sdk/apis/external/zod/lib/index.mjs.js
var e18;
!function(e46) {
  e46.assertEqual = (e47) => e47, e46.assertIs = function(e47) {
  }, e46.assertNever = function(e47) {
    throw new Error();
  }, e46.arrayToEnum = (e47) => {
    const t40 = {};
    for (const a37 of e47) t40[a37] = a37;
    return t40;
  }, e46.getValidEnumValues = (t40) => {
    const a37 = e46.objectKeys(t40).filter((e47) => "number" != typeof t40[t40[e47]]), s31 = {};
    for (const e47 of a37) s31[e47] = t40[e47];
    return e46.objectValues(s31);
  }, e46.objectValues = (t40) => e46.objectKeys(t40).map(function(e47) {
    return t40[e47];
  }), e46.objectKeys = "function" == typeof Object.keys ? (e47) => Object.keys(e47) : (e47) => {
    const t40 = [];
    for (const a37 in e47) Object.prototype.hasOwnProperty.call(e47, a37) && t40.push(a37);
    return t40;
  }, e46.find = (e47, t40) => {
    for (const a37 of e47) if (t40(a37)) return a37;
  }, e46.isInteger = "function" == typeof Number.isInteger ? (e47) => Number.isInteger(e47) : (e47) => "number" == typeof e47 && isFinite(e47) && Math.floor(e47) === e47, e46.joinValues = function(e47, t40 = " | ") {
    return e47.map((e48) => "string" == typeof e48 ? `'${e48}'` : e48).join(t40);
  }, e46.jsonStringifyReplacer = (e47, t40) => "bigint" == typeof t40 ? t40.toString() : t40;
}(e18 || (e18 = {}));
var t18 = e18.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
var a10 = (e46) => {
  switch (typeof e46) {
    case "undefined":
      return t18.undefined;
    case "string":
      return t18.string;
    case "number":
      return isNaN(e46) ? t18.nan : t18.number;
    case "boolean":
      return t18.boolean;
    case "function":
      return t18.function;
    case "bigint":
      return t18.bigint;
    case "symbol":
      return t18.symbol;
    case "object":
      return Array.isArray(e46) ? t18.array : null === e46 ? t18.null : e46.then && "function" == typeof e46.then && e46.catch && "function" == typeof e46.catch ? t18.promise : "undefined" != typeof Map && e46 instanceof Map ? t18.map : "undefined" != typeof Set && e46 instanceof Set ? t18.set : "undefined" != typeof Date && e46 instanceof Date ? t18.date : t18.object;
    default:
      return t18.unknown;
  }
};
var s6 = e18.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
var r17 = (e46) => JSON.stringify(e46, null, 2).replace(/"([^"]+)":/g, "$1:");
var n14 = class extends Error {
  constructor(e46) {
    super(), this.issues = [], this.addIssue = (e47) => {
      this.issues = [...this.issues, e47];
    }, this.addIssues = (e47 = []) => {
      this.issues = [...this.issues, ...e47];
    };
    const t40 = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t40) : this.__proto__ = t40, this.name = "ZodError", this.issues = e46;
  }
  get errors() {
    return this.issues;
  }
  format(e46) {
    const t40 = e46 || function(e47) {
      return e47.message;
    }, a37 = { _errors: [] }, s31 = (e47) => {
      for (const r33 of e47.issues) if ("invalid_union" === r33.code) r33.unionErrors.map(s31);
      else if ("invalid_return_type" === r33.code) s31(r33.returnTypeError);
      else if ("invalid_arguments" === r33.code) s31(r33.argumentsError);
      else if (0 === r33.path.length) a37._errors.push(t40(r33));
      else {
        let e48 = a37, s32 = 0;
        for (; s32 < r33.path.length; ) {
          const a38 = r33.path[s32];
          s32 === r33.path.length - 1 ? (e48[a38] = e48[a38] || { _errors: [] }, e48[a38]._errors.push(t40(r33))) : e48[a38] = e48[a38] || { _errors: [] }, e48 = e48[a38], s32++;
        }
      }
    };
    return s31(this), a37;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, e18.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return 0 === this.issues.length;
  }
  flatten(e46 = (e47) => e47.message) {
    const t40 = {}, a37 = [];
    for (const s31 of this.issues) s31.path.length > 0 ? (t40[s31.path[0]] = t40[s31.path[0]] || [], t40[s31.path[0]].push(e46(s31))) : a37.push(e46(s31));
    return { formErrors: a37, fieldErrors: t40 };
  }
  get formErrors() {
    return this.flatten();
  }
};
n14.create = (e46) => new n14(e46);
var i5 = (a37, r33) => {
  let n25;
  switch (a37.code) {
    case s6.invalid_type:
      n25 = a37.received === t18.undefined ? "Required" : `Expected ${a37.expected}, received ${a37.received}`;
      break;
    case s6.invalid_literal:
      n25 = `Invalid literal value, expected ${JSON.stringify(a37.expected, e18.jsonStringifyReplacer)}`;
      break;
    case s6.unrecognized_keys:
      n25 = `Unrecognized key(s) in object: ${e18.joinValues(a37.keys, ", ")}`;
      break;
    case s6.invalid_union:
      n25 = "Invalid input";
      break;
    case s6.invalid_union_discriminator:
      n25 = `Invalid discriminator value. Expected ${e18.joinValues(a37.options)}`;
      break;
    case s6.invalid_enum_value:
      n25 = `Invalid enum value. Expected ${e18.joinValues(a37.options)}, received '${a37.received}'`;
      break;
    case s6.invalid_arguments:
      n25 = "Invalid function arguments";
      break;
    case s6.invalid_return_type:
      n25 = "Invalid function return type";
      break;
    case s6.invalid_date:
      n25 = "Invalid date";
      break;
    case s6.invalid_string:
      "object" == typeof a37.validation ? "startsWith" in a37.validation ? n25 = `Invalid input: must start with "${a37.validation.startsWith}"` : "endsWith" in a37.validation ? n25 = `Invalid input: must end with "${a37.validation.endsWith}"` : e18.assertNever(a37.validation) : n25 = "regex" !== a37.validation ? `Invalid ${a37.validation}` : "Invalid";
      break;
    case s6.too_small:
      n25 = "array" === a37.type ? `Array must contain ${a37.exact ? "exactly" : a37.inclusive ? "at least" : "more than"} ${a37.minimum} element(s)` : "string" === a37.type ? `String must contain ${a37.exact ? "exactly" : a37.inclusive ? "at least" : "over"} ${a37.minimum} character(s)` : "number" === a37.type ? `Number must be ${a37.exact ? "exactly equal to " : a37.inclusive ? "greater than or equal to " : "greater than "}${a37.minimum}` : "date" === a37.type ? `Date must be ${a37.exact ? "exactly equal to " : a37.inclusive ? "greater than or equal to " : "greater than "}${new Date(a37.minimum)}` : "Invalid input";
      break;
    case s6.too_big:
      n25 = "array" === a37.type ? `Array must contain ${a37.exact ? "exactly" : a37.inclusive ? "at most" : "less than"} ${a37.maximum} element(s)` : "string" === a37.type ? `String must contain ${a37.exact ? "exactly" : a37.inclusive ? "at most" : "under"} ${a37.maximum} character(s)` : "number" === a37.type ? `Number must be ${a37.exact ? "exactly" : a37.inclusive ? "less than or equal to" : "less than"} ${a37.maximum}` : "date" === a37.type ? `Date must be ${a37.exact ? "exactly" : a37.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(a37.maximum)}` : "Invalid input";
      break;
    case s6.custom:
      n25 = "Invalid input";
      break;
    case s6.invalid_intersection_types:
      n25 = "Intersection results could not be merged";
      break;
    case s6.not_multiple_of:
      n25 = `Number must be a multiple of ${a37.multipleOf}`;
      break;
    case s6.not_finite:
      n25 = "Number must be finite";
      break;
    default:
      n25 = r33.defaultError, e18.assertNever(a37);
  }
  return { message: n25 };
};
var o12 = i5;
function d6(e46) {
  o12 = e46;
}
function c7() {
  return o12;
}
var u7 = (e46) => {
  const { data: t40, path: a37, errorMaps: s31, issueData: r33 } = e46, n25 = [...a37, ...r33.path || []], i46 = { ...r33, path: n25 };
  let o17 = "";
  const d18 = s31.filter((e47) => !!e47).slice().reverse();
  for (const e47 of d18) o17 = e47(i46, { data: t40, defaultError: o17 }).message;
  return { ...r33, path: n25, message: r33.message || o17 };
};
var l6 = [];
function p5(e46, t40) {
  const a37 = u7({ issueData: t40, data: e46.data, path: e46.path, errorMaps: [e46.common.contextualErrorMap, e46.schemaErrorMap, c7(), i5].filter((e47) => !!e47) });
  e46.common.issues.push(a37);
}
var h5 = class _h {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    "valid" === this.value && (this.value = "dirty");
  }
  abort() {
    "aborted" !== this.value && (this.value = "aborted");
  }
  static mergeArray(e46, t40) {
    const a37 = [];
    for (const s31 of t40) {
      if ("aborted" === s31.status) return m8;
      "dirty" === s31.status && e46.dirty(), a37.push(s31.value);
    }
    return { status: e46.value, value: a37 };
  }
  static async mergeObjectAsync(e46, t40) {
    const a37 = [];
    for (const e47 of t40) a37.push({ key: await e47.key, value: await e47.value });
    return _h.mergeObjectSync(e46, a37);
  }
  static mergeObjectSync(e46, t40) {
    const a37 = {};
    for (const s31 of t40) {
      const { key: t41, value: r33 } = s31;
      if ("aborted" === t41.status) return m8;
      if ("aborted" === r33.status) return m8;
      "dirty" === t41.status && e46.dirty(), "dirty" === r33.status && e46.dirty(), (void 0 !== r33.value || s31.alwaysSet) && (a37[t41.value] = r33.value);
    }
    return { status: e46.value, value: a37 };
  }
};
var m8 = Object.freeze({ status: "aborted" });
var f4 = (e46) => ({ status: "dirty", value: e46 });
var y2 = (e46) => ({ status: "valid", value: e46 });
var _5 = (e46) => "aborted" === e46.status;
var v4 = (e46) => "dirty" === e46.status;
var g4 = (e46) => "valid" === e46.status;
var x = (e46) => "undefined" != typeof Promise && e46 instanceof Promise;
var b3;
!function(e46) {
  e46.errToObj = (e47) => "string" == typeof e47 ? { message: e47 } : e47 || {}, e46.toString = (e47) => "string" == typeof e47 ? e47 : null == e47 ? void 0 : e47.message;
}(b3 || (b3 = {}));
var k3 = class {
  constructor(e46, t40, a37, s31) {
    this.parent = e46, this.data = t40, this._path = a37, this._key = s31;
  }
  get path() {
    return this._path.concat(this._key);
  }
};
var w5 = (e46, t40) => {
  if (g4(t40)) return { success: true, data: t40.value };
  if (!e46.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, error: new n14(e46.common.issues) };
};
function Z(e46) {
  if (!e46) return {};
  const { errorMap: t40, invalid_type_error: a37, required_error: s31, description: r33 } = e46;
  if (t40 && (a37 || s31)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (t40) return { errorMap: t40, description: r33 };
  return { errorMap: (e47, t41) => "invalid_type" !== e47.code ? { message: t41.defaultError } : void 0 === t41.data ? { message: null != s31 ? s31 : t41.defaultError } : { message: null != a37 ? a37 : t41.defaultError }, description: r33 };
}
var T3 = class {
  constructor(e46) {
    this.spa = this.safeParseAsync, this._def = e46, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(e46) {
    return a10(e46.data);
  }
  _getOrReturnCtx(e46, t40) {
    return t40 || { common: e46.parent.common, data: e46.data, parsedType: a10(e46.data), schemaErrorMap: this._def.errorMap, path: e46.path, parent: e46.parent };
  }
  _processInputParams(e46) {
    return { status: new h5(), ctx: { common: e46.parent.common, data: e46.data, parsedType: a10(e46.data), schemaErrorMap: this._def.errorMap, path: e46.path, parent: e46.parent } };
  }
  _parseSync(e46) {
    const t40 = this._parse(e46);
    if (x(t40)) throw new Error("Synchronous parse encountered promise.");
    return t40;
  }
  _parseAsync(e46) {
    const t40 = this._parse(e46);
    return Promise.resolve(t40);
  }
  parse(e46, t40) {
    const a37 = this.safeParse(e46, t40);
    if (a37.success) return a37.data;
    throw a37.error;
  }
  safeParse(e46, t40) {
    var s31;
    const r33 = { common: { issues: [], async: null !== (s31 = null == t40 ? void 0 : t40.async) && void 0 !== s31 && s31, contextualErrorMap: null == t40 ? void 0 : t40.errorMap }, path: (null == t40 ? void 0 : t40.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e46, parsedType: a10(e46) }, n25 = this._parseSync({ data: e46, path: r33.path, parent: r33 });
    return w5(r33, n25);
  }
  async parseAsync(e46, t40) {
    const a37 = await this.safeParseAsync(e46, t40);
    if (a37.success) return a37.data;
    throw a37.error;
  }
  async safeParseAsync(e46, t40) {
    const s31 = { common: { issues: [], contextualErrorMap: null == t40 ? void 0 : t40.errorMap, async: true }, path: (null == t40 ? void 0 : t40.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e46, parsedType: a10(e46) }, r33 = this._parse({ data: e46, path: s31.path, parent: s31 }), n25 = await (x(r33) ? r33 : Promise.resolve(r33));
    return w5(s31, n25);
  }
  refine(e46, t40) {
    const a37 = (e47) => "string" == typeof t40 || void 0 === t40 ? { message: t40 } : "function" == typeof t40 ? t40(e47) : t40;
    return this._refinement((t41, r33) => {
      const n25 = e46(t41), i46 = () => r33.addIssue({ code: s6.custom, ...a37(t41) });
      return "undefined" != typeof Promise && n25 instanceof Promise ? n25.then((e47) => !!e47 || (i46(), false)) : !!n25 || (i46(), false);
    });
  }
  refinement(e46, t40) {
    return this._refinement((a37, s31) => !!e46(a37) || (s31.addIssue("function" == typeof t40 ? t40(a37, s31) : t40), false));
  }
  _refinement(e46) {
    return new ce({ schema: this, typeName: xe.ZodEffects, effect: { type: "refinement", refinement: e46 } });
  }
  superRefine(e46) {
    return this._refinement(e46);
  }
  optional() {
    return ue.create(this, this._def);
  }
  nullable() {
    return le.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return K.create(this, this._def);
  }
  promise() {
    return de.create(this, this._def);
  }
  or(e46) {
    return F2.create([this, e46], this._def);
  }
  and(e46) {
    return G2.create(this, e46, this._def);
  }
  transform(e46) {
    return new ce({ ...Z(this._def), schema: this, typeName: xe.ZodEffects, effect: { type: "transform", transform: e46 } });
  }
  default(e46) {
    const t40 = "function" == typeof e46 ? e46 : () => e46;
    return new pe({ ...Z(this._def), innerType: this, defaultValue: t40, typeName: xe.ZodDefault });
  }
  brand() {
    return new ye({ typeName: xe.ZodBranded, type: this, ...Z(this._def) });
  }
  catch(e46) {
    const t40 = "function" == typeof e46 ? e46 : () => e46;
    return new he({ ...Z(this._def), innerType: this, catchValue: t40, typeName: xe.ZodCatch });
  }
  describe(e46) {
    return new (0, this.constructor)({ ...this._def, description: e46 });
  }
  pipe(e46) {
    return _e.create(this, e46);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var N3 = /^c[^\s-]{8,}$/i;
var O3 = /^[a-z][a-z0-9]*$/;
var S3 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var E4 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/;
var j3 = class _j extends T3 {
  constructor() {
    super(...arguments), this._regex = (e46, t40, a37) => this.refinement((t41) => e46.test(t41), { validation: t40, code: s6.invalid_string, ...b3.errToObj(a37) }), this.nonempty = (e46) => this.min(1, b3.errToObj(e46)), this.trim = () => new _j({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  _parse(a37) {
    this._def.coerce && (a37.data = String(a37.data));
    if (this._getType(a37) !== t18.string) {
      const e46 = this._getOrReturnCtx(a37);
      return p5(e46, { code: s6.invalid_type, expected: t18.string, received: e46.parsedType }), m8;
    }
    const r33 = new h5();
    let n25;
    for (const t40 of this._def.checks) if ("min" === t40.kind) a37.data.length < t40.value && (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { code: s6.too_small, minimum: t40.value, type: "string", inclusive: true, exact: false, message: t40.message }), r33.dirty());
    else if ("max" === t40.kind) a37.data.length > t40.value && (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { code: s6.too_big, maximum: t40.value, type: "string", inclusive: true, exact: false, message: t40.message }), r33.dirty());
    else if ("length" === t40.kind) {
      const e46 = a37.data.length > t40.value, i47 = a37.data.length < t40.value;
      (e46 || i47) && (n25 = this._getOrReturnCtx(a37, n25), e46 ? p5(n25, { code: s6.too_big, maximum: t40.value, type: "string", inclusive: true, exact: true, message: t40.message }) : i47 && p5(n25, { code: s6.too_small, minimum: t40.value, type: "string", inclusive: true, exact: true, message: t40.message }), r33.dirty());
    } else if ("email" === t40.kind) E4.test(a37.data) || (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { validation: "email", code: s6.invalid_string, message: t40.message }), r33.dirty());
    else if ("uuid" === t40.kind) S3.test(a37.data) || (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { validation: "uuid", code: s6.invalid_string, message: t40.message }), r33.dirty());
    else if ("cuid" === t40.kind) N3.test(a37.data) || (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { validation: "cuid", code: s6.invalid_string, message: t40.message }), r33.dirty());
    else if ("cuid2" === t40.kind) O3.test(a37.data) || (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { validation: "cuid2", code: s6.invalid_string, message: t40.message }), r33.dirty());
    else if ("url" === t40.kind) try {
      new URL(a37.data);
    } catch (e46) {
      n25 = this._getOrReturnCtx(a37, n25), p5(n25, { validation: "url", code: s6.invalid_string, message: t40.message }), r33.dirty();
    }
    else if ("regex" === t40.kind) {
      t40.regex.lastIndex = 0;
      t40.regex.test(a37.data) || (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { validation: "regex", code: s6.invalid_string, message: t40.message }), r33.dirty());
    } else if ("trim" === t40.kind) a37.data = a37.data.trim();
    else if ("startsWith" === t40.kind) a37.data.startsWith(t40.value) || (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { code: s6.invalid_string, validation: { startsWith: t40.value }, message: t40.message }), r33.dirty());
    else if ("endsWith" === t40.kind) a37.data.endsWith(t40.value) || (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { code: s6.invalid_string, validation: { endsWith: t40.value }, message: t40.message }), r33.dirty());
    else if ("datetime" === t40.kind) {
      ((i46 = t40).precision ? i46.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i46.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i46.precision}}Z$`) : 0 === i46.precision ? i46.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : i46.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(a37.data) || (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { code: s6.invalid_string, validation: "datetime", message: t40.message }), r33.dirty());
    } else e18.assertNever(t40);
    var i46;
    return { status: r33.value, value: a37.data };
  }
  _addCheck(e46) {
    return new _j({ ...this._def, checks: [...this._def.checks, e46] });
  }
  email(e46) {
    return this._addCheck({ kind: "email", ...b3.errToObj(e46) });
  }
  url(e46) {
    return this._addCheck({ kind: "url", ...b3.errToObj(e46) });
  }
  uuid(e46) {
    return this._addCheck({ kind: "uuid", ...b3.errToObj(e46) });
  }
  cuid(e46) {
    return this._addCheck({ kind: "cuid", ...b3.errToObj(e46) });
  }
  cuid2(e46) {
    return this._addCheck({ kind: "cuid2", ...b3.errToObj(e46) });
  }
  datetime(e46) {
    var t40;
    return "string" == typeof e46 ? this._addCheck({ kind: "datetime", precision: null, offset: false, message: e46 }) : this._addCheck({ kind: "datetime", precision: void 0 === (null == e46 ? void 0 : e46.precision) ? null : null == e46 ? void 0 : e46.precision, offset: null !== (t40 = null == e46 ? void 0 : e46.offset) && void 0 !== t40 && t40, ...b3.errToObj(null == e46 ? void 0 : e46.message) });
  }
  regex(e46, t40) {
    return this._addCheck({ kind: "regex", regex: e46, ...b3.errToObj(t40) });
  }
  startsWith(e46, t40) {
    return this._addCheck({ kind: "startsWith", value: e46, ...b3.errToObj(t40) });
  }
  endsWith(e46, t40) {
    return this._addCheck({ kind: "endsWith", value: e46, ...b3.errToObj(t40) });
  }
  min(e46, t40) {
    return this._addCheck({ kind: "min", value: e46, ...b3.errToObj(t40) });
  }
  max(e46, t40) {
    return this._addCheck({ kind: "max", value: e46, ...b3.errToObj(t40) });
  }
  length(e46, t40) {
    return this._addCheck({ kind: "length", value: e46, ...b3.errToObj(t40) });
  }
  get isDatetime() {
    return !!this._def.checks.find((e46) => "datetime" === e46.kind);
  }
  get isEmail() {
    return !!this._def.checks.find((e46) => "email" === e46.kind);
  }
  get isURL() {
    return !!this._def.checks.find((e46) => "url" === e46.kind);
  }
  get isUUID() {
    return !!this._def.checks.find((e46) => "uuid" === e46.kind);
  }
  get isCUID() {
    return !!this._def.checks.find((e46) => "cuid" === e46.kind);
  }
  get isCUID2() {
    return !!this._def.checks.find((e46) => "cuid2" === e46.kind);
  }
  get minLength() {
    let e46 = null;
    for (const t40 of this._def.checks) "min" === t40.kind && (null === e46 || t40.value > e46) && (e46 = t40.value);
    return e46;
  }
  get maxLength() {
    let e46 = null;
    for (const t40 of this._def.checks) "max" === t40.kind && (null === e46 || t40.value < e46) && (e46 = t40.value);
    return e46;
  }
};
function C3(e46, t40) {
  const a37 = (e46.toString().split(".")[1] || "").length, s31 = (t40.toString().split(".")[1] || "").length, r33 = a37 > s31 ? a37 : s31;
  return parseInt(e46.toFixed(r33).replace(".", "")) % parseInt(t40.toFixed(r33).replace(".", "")) / Math.pow(10, r33);
}
j3.create = (e46) => {
  var t40;
  return new j3({ checks: [], typeName: xe.ZodString, coerce: null !== (t40 = null == e46 ? void 0 : e46.coerce) && void 0 !== t40 && t40, ...Z(e46) });
};
var I3 = class _I extends T3 {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(a37) {
    this._def.coerce && (a37.data = Number(a37.data));
    if (this._getType(a37) !== t18.number) {
      const e46 = this._getOrReturnCtx(a37);
      return p5(e46, { code: s6.invalid_type, expected: t18.number, received: e46.parsedType }), m8;
    }
    let r33;
    const n25 = new h5();
    for (const t40 of this._def.checks) if ("int" === t40.kind) e18.isInteger(a37.data) || (r33 = this._getOrReturnCtx(a37, r33), p5(r33, { code: s6.invalid_type, expected: "integer", received: "float", message: t40.message }), n25.dirty());
    else if ("min" === t40.kind) {
      (t40.inclusive ? a37.data < t40.value : a37.data <= t40.value) && (r33 = this._getOrReturnCtx(a37, r33), p5(r33, { code: s6.too_small, minimum: t40.value, type: "number", inclusive: t40.inclusive, exact: false, message: t40.message }), n25.dirty());
    } else if ("max" === t40.kind) {
      (t40.inclusive ? a37.data > t40.value : a37.data >= t40.value) && (r33 = this._getOrReturnCtx(a37, r33), p5(r33, { code: s6.too_big, maximum: t40.value, type: "number", inclusive: t40.inclusive, exact: false, message: t40.message }), n25.dirty());
    } else "multipleOf" === t40.kind ? 0 !== C3(a37.data, t40.value) && (r33 = this._getOrReturnCtx(a37, r33), p5(r33, { code: s6.not_multiple_of, multipleOf: t40.value, message: t40.message }), n25.dirty()) : "finite" === t40.kind ? Number.isFinite(a37.data) || (r33 = this._getOrReturnCtx(a37, r33), p5(r33, { code: s6.not_finite, message: t40.message }), n25.dirty()) : e18.assertNever(t40);
    return { status: n25.value, value: a37.data };
  }
  gte(e46, t40) {
    return this.setLimit("min", e46, true, b3.toString(t40));
  }
  gt(e46, t40) {
    return this.setLimit("min", e46, false, b3.toString(t40));
  }
  lte(e46, t40) {
    return this.setLimit("max", e46, true, b3.toString(t40));
  }
  lt(e46, t40) {
    return this.setLimit("max", e46, false, b3.toString(t40));
  }
  setLimit(e46, t40, a37, s31) {
    return new _I({ ...this._def, checks: [...this._def.checks, { kind: e46, value: t40, inclusive: a37, message: b3.toString(s31) }] });
  }
  _addCheck(e46) {
    return new _I({ ...this._def, checks: [...this._def.checks, e46] });
  }
  int(e46) {
    return this._addCheck({ kind: "int", message: b3.toString(e46) });
  }
  positive(e46) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: b3.toString(e46) });
  }
  negative(e46) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: b3.toString(e46) });
  }
  nonpositive(e46) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: b3.toString(e46) });
  }
  nonnegative(e46) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: b3.toString(e46) });
  }
  multipleOf(e46, t40) {
    return this._addCheck({ kind: "multipleOf", value: e46, message: b3.toString(t40) });
  }
  finite(e46) {
    return this._addCheck({ kind: "finite", message: b3.toString(e46) });
  }
  get minValue() {
    let e46 = null;
    for (const t40 of this._def.checks) "min" === t40.kind && (null === e46 || t40.value > e46) && (e46 = t40.value);
    return e46;
  }
  get maxValue() {
    let e46 = null;
    for (const t40 of this._def.checks) "max" === t40.kind && (null === e46 || t40.value < e46) && (e46 = t40.value);
    return e46;
  }
  get isInt() {
    return !!this._def.checks.find((t40) => "int" === t40.kind || "multipleOf" === t40.kind && e18.isInteger(t40.value));
  }
  get isFinite() {
    let e46 = null, t40 = null;
    for (const a37 of this._def.checks) {
      if ("finite" === a37.kind || "int" === a37.kind || "multipleOf" === a37.kind) return true;
      "min" === a37.kind ? (null === t40 || a37.value > t40) && (t40 = a37.value) : "max" === a37.kind && (null === e46 || a37.value < e46) && (e46 = a37.value);
    }
    return Number.isFinite(t40) && Number.isFinite(e46);
  }
};
I3.create = (e46) => new I3({ checks: [], typeName: xe.ZodNumber, coerce: (null == e46 ? void 0 : e46.coerce) || false, ...Z(e46) });
var P2 = class extends T3 {
  _parse(e46) {
    this._def.coerce && (e46.data = BigInt(e46.data));
    if (this._getType(e46) !== t18.bigint) {
      const a37 = this._getOrReturnCtx(e46);
      return p5(a37, { code: s6.invalid_type, expected: t18.bigint, received: a37.parsedType }), m8;
    }
    return y2(e46.data);
  }
};
P2.create = (e46) => {
  var t40;
  return new P2({ typeName: xe.ZodBigInt, coerce: null !== (t40 = null == e46 ? void 0 : e46.coerce) && void 0 !== t40 && t40, ...Z(e46) });
};
var R2 = class extends T3 {
  _parse(e46) {
    this._def.coerce && (e46.data = Boolean(e46.data));
    if (this._getType(e46) !== t18.boolean) {
      const a37 = this._getOrReturnCtx(e46);
      return p5(a37, { code: s6.invalid_type, expected: t18.boolean, received: a37.parsedType }), m8;
    }
    return y2(e46.data);
  }
};
R2.create = (e46) => new R2({ typeName: xe.ZodBoolean, coerce: (null == e46 ? void 0 : e46.coerce) || false, ...Z(e46) });
var A4 = class _A extends T3 {
  _parse(a37) {
    this._def.coerce && (a37.data = new Date(a37.data));
    if (this._getType(a37) !== t18.date) {
      const e46 = this._getOrReturnCtx(a37);
      return p5(e46, { code: s6.invalid_type, expected: t18.date, received: e46.parsedType }), m8;
    }
    if (isNaN(a37.data.getTime())) {
      return p5(this._getOrReturnCtx(a37), { code: s6.invalid_date }), m8;
    }
    const r33 = new h5();
    let n25;
    for (const t40 of this._def.checks) "min" === t40.kind ? a37.data.getTime() < t40.value && (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { code: s6.too_small, message: t40.message, inclusive: true, exact: false, minimum: t40.value, type: "date" }), r33.dirty()) : "max" === t40.kind ? a37.data.getTime() > t40.value && (n25 = this._getOrReturnCtx(a37, n25), p5(n25, { code: s6.too_big, message: t40.message, inclusive: true, exact: false, maximum: t40.value, type: "date" }), r33.dirty()) : e18.assertNever(t40);
    return { status: r33.value, value: new Date(a37.data.getTime()) };
  }
  _addCheck(e46) {
    return new _A({ ...this._def, checks: [...this._def.checks, e46] });
  }
  min(e46, t40) {
    return this._addCheck({ kind: "min", value: e46.getTime(), message: b3.toString(t40) });
  }
  max(e46, t40) {
    return this._addCheck({ kind: "max", value: e46.getTime(), message: b3.toString(t40) });
  }
  get minDate() {
    let e46 = null;
    for (const t40 of this._def.checks) "min" === t40.kind && (null === e46 || t40.value > e46) && (e46 = t40.value);
    return null != e46 ? new Date(e46) : null;
  }
  get maxDate() {
    let e46 = null;
    for (const t40 of this._def.checks) "max" === t40.kind && (null === e46 || t40.value < e46) && (e46 = t40.value);
    return null != e46 ? new Date(e46) : null;
  }
};
A4.create = (e46) => new A4({ checks: [], coerce: (null == e46 ? void 0 : e46.coerce) || false, typeName: xe.ZodDate, ...Z(e46) });
var M3 = class extends T3 {
  _parse(e46) {
    if (this._getType(e46) !== t18.symbol) {
      const a37 = this._getOrReturnCtx(e46);
      return p5(a37, { code: s6.invalid_type, expected: t18.symbol, received: a37.parsedType }), m8;
    }
    return y2(e46.data);
  }
};
M3.create = (e46) => new M3({ typeName: xe.ZodSymbol, ...Z(e46) });
var $ = class extends T3 {
  _parse(e46) {
    if (this._getType(e46) !== t18.undefined) {
      const a37 = this._getOrReturnCtx(e46);
      return p5(a37, { code: s6.invalid_type, expected: t18.undefined, received: a37.parsedType }), m8;
    }
    return y2(e46.data);
  }
};
$.create = (e46) => new $({ typeName: xe.ZodUndefined, ...Z(e46) });
var D2 = class extends T3 {
  _parse(e46) {
    if (this._getType(e46) !== t18.null) {
      const a37 = this._getOrReturnCtx(e46);
      return p5(a37, { code: s6.invalid_type, expected: t18.null, received: a37.parsedType }), m8;
    }
    return y2(e46.data);
  }
};
D2.create = (e46) => new D2({ typeName: xe.ZodNull, ...Z(e46) });
var L3 = class extends T3 {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e46) {
    return y2(e46.data);
  }
};
L3.create = (e46) => new L3({ typeName: xe.ZodAny, ...Z(e46) });
var z = class extends T3 {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e46) {
    return y2(e46.data);
  }
};
z.create = (e46) => new z({ typeName: xe.ZodUnknown, ...Z(e46) });
var V2 = class extends T3 {
  _parse(e46) {
    const a37 = this._getOrReturnCtx(e46);
    return p5(a37, { code: s6.invalid_type, expected: t18.never, received: a37.parsedType }), m8;
  }
};
V2.create = (e46) => new V2({ typeName: xe.ZodNever, ...Z(e46) });
var U2 = class extends T3 {
  _parse(e46) {
    if (this._getType(e46) !== t18.undefined) {
      const a37 = this._getOrReturnCtx(e46);
      return p5(a37, { code: s6.invalid_type, expected: t18.void, received: a37.parsedType }), m8;
    }
    return y2(e46.data);
  }
};
U2.create = (e46) => new U2({ typeName: xe.ZodVoid, ...Z(e46) });
var K = class _K extends T3 {
  _parse(e46) {
    const { ctx: a37, status: r33 } = this._processInputParams(e46), n25 = this._def;
    if (a37.parsedType !== t18.array) return p5(a37, { code: s6.invalid_type, expected: t18.array, received: a37.parsedType }), m8;
    if (null !== n25.exactLength) {
      const e47 = a37.data.length > n25.exactLength.value, t40 = a37.data.length < n25.exactLength.value;
      (e47 || t40) && (p5(a37, { code: e47 ? s6.too_big : s6.too_small, minimum: t40 ? n25.exactLength.value : void 0, maximum: e47 ? n25.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: n25.exactLength.message }), r33.dirty());
    }
    if (null !== n25.minLength && a37.data.length < n25.minLength.value && (p5(a37, { code: s6.too_small, minimum: n25.minLength.value, type: "array", inclusive: true, exact: false, message: n25.minLength.message }), r33.dirty()), null !== n25.maxLength && a37.data.length > n25.maxLength.value && (p5(a37, { code: s6.too_big, maximum: n25.maxLength.value, type: "array", inclusive: true, exact: false, message: n25.maxLength.message }), r33.dirty()), a37.common.async) return Promise.all([...a37.data].map((e47, t40) => n25.type._parseAsync(new k3(a37, e47, a37.path, t40)))).then((e47) => h5.mergeArray(r33, e47));
    const i46 = [...a37.data].map((e47, t40) => n25.type._parseSync(new k3(a37, e47, a37.path, t40)));
    return h5.mergeArray(r33, i46);
  }
  get element() {
    return this._def.type;
  }
  min(e46, t40) {
    return new _K({ ...this._def, minLength: { value: e46, message: b3.toString(t40) } });
  }
  max(e46, t40) {
    return new _K({ ...this._def, maxLength: { value: e46, message: b3.toString(t40) } });
  }
  length(e46, t40) {
    return new _K({ ...this._def, exactLength: { value: e46, message: b3.toString(t40) } });
  }
  nonempty(e46) {
    return this.min(1, e46);
  }
};
var W;
function B(e46) {
  if (e46 instanceof q) {
    const t40 = {};
    for (const a37 in e46.shape) {
      const s31 = e46.shape[a37];
      t40[a37] = ue.create(B(s31));
    }
    return new q({ ...e46._def, shape: () => t40 });
  }
  return e46 instanceof K ? K.create(B(e46.element)) : e46 instanceof ue ? ue.create(B(e46.unwrap())) : e46 instanceof le ? le.create(B(e46.unwrap())) : e46 instanceof Q ? Q.create(e46.items.map((e47) => B(e47))) : e46;
}
K.create = (e46, t40) => new K({ type: e46, minLength: null, maxLength: null, exactLength: null, typeName: xe.ZodArray, ...Z(t40) }), function(e46) {
  e46.mergeShapes = (e47, t40) => ({ ...e47, ...t40 });
}(W || (W = {}));
var q = class _q extends T3 {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (null !== this._cached) return this._cached;
    const t40 = this._def.shape(), a37 = e18.objectKeys(t40);
    return this._cached = { shape: t40, keys: a37 };
  }
  _parse(e46) {
    if (this._getType(e46) !== t18.object) {
      const a38 = this._getOrReturnCtx(e46);
      return p5(a38, { code: s6.invalid_type, expected: t18.object, received: a38.parsedType }), m8;
    }
    const { status: a37, ctx: r33 } = this._processInputParams(e46), { shape: n25, keys: i46 } = this._getCached(), o17 = [];
    if (!(this._def.catchall instanceof V2 && "strip" === this._def.unknownKeys)) for (const e47 in r33.data) i46.includes(e47) || o17.push(e47);
    const d18 = [];
    for (const e47 of i46) {
      const t40 = n25[e47], a38 = r33.data[e47];
      d18.push({ key: { status: "valid", value: e47 }, value: t40._parse(new k3(r33, a38, r33.path, e47)), alwaysSet: e47 in r33.data });
    }
    if (this._def.catchall instanceof V2) {
      const e47 = this._def.unknownKeys;
      if ("passthrough" === e47) for (const e48 of o17) d18.push({ key: { status: "valid", value: e48 }, value: { status: "valid", value: r33.data[e48] } });
      else if ("strict" === e47) o17.length > 0 && (p5(r33, { code: s6.unrecognized_keys, keys: o17 }), a37.dirty());
      else if ("strip" !== e47) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const e47 = this._def.catchall;
      for (const t40 of o17) {
        const a38 = r33.data[t40];
        d18.push({ key: { status: "valid", value: t40 }, value: e47._parse(new k3(r33, a38, r33.path, t40)), alwaysSet: t40 in r33.data });
      }
    }
    return r33.common.async ? Promise.resolve().then(async () => {
      const e47 = [];
      for (const t40 of d18) {
        const a38 = await t40.key;
        e47.push({ key: a38, value: await t40.value, alwaysSet: t40.alwaysSet });
      }
      return e47;
    }).then((e47) => h5.mergeObjectSync(a37, e47)) : h5.mergeObjectSync(a37, d18);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e46) {
    return new _q({ ...this._def, unknownKeys: "strict", ...void 0 !== e46 ? { errorMap: (t40, a37) => {
      var s31, r33, n25, i46;
      const o17 = null !== (n25 = null === (r33 = (s31 = this._def).errorMap) || void 0 === r33 ? void 0 : r33.call(s31, t40, a37).message) && void 0 !== n25 ? n25 : a37.defaultError;
      return "unrecognized_keys" === t40.code ? { message: null !== (i46 = b3.errToObj(e46).message) && void 0 !== i46 ? i46 : o17 } : { message: o17 };
    } } : {} });
  }
  strip() {
    return new _q({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new _q({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e46) {
    return new _q({ ...this._def, shape: () => ({ ...this._def.shape(), ...e46 }) });
  }
  merge(e46) {
    return new _q({ unknownKeys: e46._def.unknownKeys, catchall: e46._def.catchall, shape: () => W.mergeShapes(this._def.shape(), e46._def.shape()), typeName: xe.ZodObject });
  }
  setKey(e46, t40) {
    return this.augment({ [e46]: t40 });
  }
  catchall(e46) {
    return new _q({ ...this._def, catchall: e46 });
  }
  pick(t40) {
    const a37 = {};
    return e18.objectKeys(t40).forEach((e46) => {
      t40[e46] && this.shape[e46] && (a37[e46] = this.shape[e46]);
    }), new _q({ ...this._def, shape: () => a37 });
  }
  omit(t40) {
    const a37 = {};
    return e18.objectKeys(this.shape).forEach((e46) => {
      t40[e46] || (a37[e46] = this.shape[e46]);
    }), new _q({ ...this._def, shape: () => a37 });
  }
  deepPartial() {
    return B(this);
  }
  partial(t40) {
    const a37 = {};
    return e18.objectKeys(this.shape).forEach((e46) => {
      const s31 = this.shape[e46];
      t40 && !t40[e46] ? a37[e46] = s31 : a37[e46] = s31.optional();
    }), new _q({ ...this._def, shape: () => a37 });
  }
  required(t40) {
    const a37 = {};
    return e18.objectKeys(this.shape).forEach((e46) => {
      if (t40 && !t40[e46]) a37[e46] = this.shape[e46];
      else {
        let t41 = this.shape[e46];
        for (; t41 instanceof ue; ) t41 = t41._def.innerType;
        a37[e46] = t41;
      }
    }), new _q({ ...this._def, shape: () => a37 });
  }
  keyof() {
    return ne(e18.objectKeys(this.shape));
  }
};
q.create = (e46, t40) => new q({ shape: () => e46, unknownKeys: "strip", catchall: V2.create(), typeName: xe.ZodObject, ...Z(t40) }), q.strictCreate = (e46, t40) => new q({ shape: () => e46, unknownKeys: "strict", catchall: V2.create(), typeName: xe.ZodObject, ...Z(t40) }), q.lazycreate = (e46, t40) => new q({ shape: e46, unknownKeys: "strip", catchall: V2.create(), typeName: xe.ZodObject, ...Z(t40) });
var F2 = class extends T3 {
  _parse(e46) {
    const { ctx: t40 } = this._processInputParams(e46), a37 = this._def.options;
    if (t40.common.async) return Promise.all(a37.map(async (e47) => {
      const a38 = { ...t40, common: { ...t40.common, issues: [] }, parent: null };
      return { result: await e47._parseAsync({ data: t40.data, path: t40.path, parent: a38 }), ctx: a38 };
    })).then(function(e47) {
      for (const t41 of e47) if ("valid" === t41.result.status) return t41.result;
      for (const a39 of e47) if ("dirty" === a39.result.status) return t40.common.issues.push(...a39.ctx.common.issues), a39.result;
      const a38 = e47.map((e48) => new n14(e48.ctx.common.issues));
      return p5(t40, { code: s6.invalid_union, unionErrors: a38 }), m8;
    });
    {
      let e47;
      const r33 = [];
      for (const s31 of a37) {
        const a38 = { ...t40, common: { ...t40.common, issues: [] }, parent: null }, n25 = s31._parseSync({ data: t40.data, path: t40.path, parent: a38 });
        if ("valid" === n25.status) return n25;
        "dirty" !== n25.status || e47 || (e47 = { result: n25, ctx: a38 }), a38.common.issues.length && r33.push(a38.common.issues);
      }
      if (e47) return t40.common.issues.push(...e47.ctx.common.issues), e47.result;
      const i46 = r33.map((e48) => new n14(e48));
      return p5(t40, { code: s6.invalid_union, unionErrors: i46 }), m8;
    }
  }
  get options() {
    return this._def.options;
  }
};
F2.create = (e46, t40) => new F2({ options: e46, typeName: xe.ZodUnion, ...Z(t40) });
var J2 = (e46) => e46 instanceof se ? J2(e46.schema) : e46 instanceof ce ? J2(e46.innerType()) : e46 instanceof re ? [e46.value] : e46 instanceof ie ? e46.options : e46 instanceof oe ? Object.keys(e46.enum) : e46 instanceof pe ? J2(e46._def.innerType) : e46 instanceof $ ? [void 0] : e46 instanceof D2 ? [null] : null;
var Y = class _Y extends T3 {
  _parse(e46) {
    const { ctx: a37 } = this._processInputParams(e46);
    if (a37.parsedType !== t18.object) return p5(a37, { code: s6.invalid_type, expected: t18.object, received: a37.parsedType }), m8;
    const r33 = this.discriminator, n25 = a37.data[r33], i46 = this.optionsMap.get(n25);
    return i46 ? a37.common.async ? i46._parseAsync({ data: a37.data, path: a37.path, parent: a37 }) : i46._parseSync({ data: a37.data, path: a37.path, parent: a37 }) : (p5(a37, { code: s6.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [r33] }), m8);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e46, t40, a37) {
    const s31 = /* @__PURE__ */ new Map();
    for (const a38 of t40) {
      const t41 = J2(a38.shape[e46]);
      if (!t41) throw new Error(`A discriminator value for key \`${e46}\` could not be extracted from all schema options`);
      for (const r33 of t41) {
        if (s31.has(r33)) throw new Error(`Discriminator property ${String(e46)} has duplicate value ${String(r33)}`);
        s31.set(r33, a38);
      }
    }
    return new _Y({ typeName: xe.ZodDiscriminatedUnion, discriminator: e46, options: t40, optionsMap: s31, ...Z(a37) });
  }
};
function H(s31, r33) {
  const n25 = a10(s31), i46 = a10(r33);
  if (s31 === r33) return { valid: true, data: s31 };
  if (n25 === t18.object && i46 === t18.object) {
    const t40 = e18.objectKeys(r33), a37 = e18.objectKeys(s31).filter((e46) => -1 !== t40.indexOf(e46)), n26 = { ...s31, ...r33 };
    for (const e46 of a37) {
      const t41 = H(s31[e46], r33[e46]);
      if (!t41.valid) return { valid: false };
      n26[e46] = t41.data;
    }
    return { valid: true, data: n26 };
  }
  if (n25 === t18.array && i46 === t18.array) {
    if (s31.length !== r33.length) return { valid: false };
    const e46 = [];
    for (let t40 = 0; t40 < s31.length; t40++) {
      const a37 = H(s31[t40], r33[t40]);
      if (!a37.valid) return { valid: false };
      e46.push(a37.data);
    }
    return { valid: true, data: e46 };
  }
  return n25 === t18.date && i46 === t18.date && +s31 == +r33 ? { valid: true, data: s31 } : { valid: false };
}
var G2 = class extends T3 {
  _parse(e46) {
    const { status: t40, ctx: a37 } = this._processInputParams(e46), r33 = (e47, r34) => {
      if (_5(e47) || _5(r34)) return m8;
      const n25 = H(e47.value, r34.value);
      return n25.valid ? ((v4(e47) || v4(r34)) && t40.dirty(), { status: t40.value, value: n25.data }) : (p5(a37, { code: s6.invalid_intersection_types }), m8);
    };
    return a37.common.async ? Promise.all([this._def.left._parseAsync({ data: a37.data, path: a37.path, parent: a37 }), this._def.right._parseAsync({ data: a37.data, path: a37.path, parent: a37 })]).then(([e47, t41]) => r33(e47, t41)) : r33(this._def.left._parseSync({ data: a37.data, path: a37.path, parent: a37 }), this._def.right._parseSync({ data: a37.data, path: a37.path, parent: a37 }));
  }
};
G2.create = (e46, t40, a37) => new G2({ left: e46, right: t40, typeName: xe.ZodIntersection, ...Z(a37) });
var Q = class _Q extends T3 {
  _parse(e46) {
    const { status: a37, ctx: r33 } = this._processInputParams(e46);
    if (r33.parsedType !== t18.array) return p5(r33, { code: s6.invalid_type, expected: t18.array, received: r33.parsedType }), m8;
    if (r33.data.length < this._def.items.length) return p5(r33, { code: s6.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), m8;
    !this._def.rest && r33.data.length > this._def.items.length && (p5(r33, { code: s6.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), a37.dirty());
    const n25 = [...r33.data].map((e47, t40) => {
      const a38 = this._def.items[t40] || this._def.rest;
      return a38 ? a38._parse(new k3(r33, e47, r33.path, t40)) : null;
    }).filter((e47) => !!e47);
    return r33.common.async ? Promise.all(n25).then((e47) => h5.mergeArray(a37, e47)) : h5.mergeArray(a37, n25);
  }
  get items() {
    return this._def.items;
  }
  rest(e46) {
    return new _Q({ ...this._def, rest: e46 });
  }
};
Q.create = (e46, t40) => {
  if (!Array.isArray(e46)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Q({ items: e46, typeName: xe.ZodTuple, rest: null, ...Z(t40) });
};
var X = class _X extends T3 {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e46) {
    const { status: a37, ctx: r33 } = this._processInputParams(e46);
    if (r33.parsedType !== t18.object) return p5(r33, { code: s6.invalid_type, expected: t18.object, received: r33.parsedType }), m8;
    const n25 = [], i46 = this._def.keyType, o17 = this._def.valueType;
    for (const e47 in r33.data) n25.push({ key: i46._parse(new k3(r33, e47, r33.path, e47)), value: o17._parse(new k3(r33, r33.data[e47], r33.path, e47)) });
    return r33.common.async ? h5.mergeObjectAsync(a37, n25) : h5.mergeObjectSync(a37, n25);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e46, t40, a37) {
    return new _X(t40 instanceof T3 ? { keyType: e46, valueType: t40, typeName: xe.ZodRecord, ...Z(a37) } : { keyType: j3.create(), valueType: e46, typeName: xe.ZodRecord, ...Z(t40) });
  }
};
var ee = class extends T3 {
  _parse(e46) {
    const { status: a37, ctx: r33 } = this._processInputParams(e46);
    if (r33.parsedType !== t18.map) return p5(r33, { code: s6.invalid_type, expected: t18.map, received: r33.parsedType }), m8;
    const n25 = this._def.keyType, i46 = this._def.valueType, o17 = [...r33.data.entries()].map(([e47, t40], a38) => ({ key: n25._parse(new k3(r33, e47, r33.path, [a38, "key"])), value: i46._parse(new k3(r33, t40, r33.path, [a38, "value"])) }));
    if (r33.common.async) {
      const e47 = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const t40 of o17) {
          const s31 = await t40.key, r34 = await t40.value;
          if ("aborted" === s31.status || "aborted" === r34.status) return m8;
          "dirty" !== s31.status && "dirty" !== r34.status || a37.dirty(), e47.set(s31.value, r34.value);
        }
        return { status: a37.value, value: e47 };
      });
    }
    {
      const e47 = /* @__PURE__ */ new Map();
      for (const t40 of o17) {
        const s31 = t40.key, r34 = t40.value;
        if ("aborted" === s31.status || "aborted" === r34.status) return m8;
        "dirty" !== s31.status && "dirty" !== r34.status || a37.dirty(), e47.set(s31.value, r34.value);
      }
      return { status: a37.value, value: e47 };
    }
  }
};
ee.create = (e46, t40, a37) => new ee({ valueType: t40, keyType: e46, typeName: xe.ZodMap, ...Z(a37) });
var te = class _te extends T3 {
  _parse(e46) {
    const { status: a37, ctx: r33 } = this._processInputParams(e46);
    if (r33.parsedType !== t18.set) return p5(r33, { code: s6.invalid_type, expected: t18.set, received: r33.parsedType }), m8;
    const n25 = this._def;
    null !== n25.minSize && r33.data.size < n25.minSize.value && (p5(r33, { code: s6.too_small, minimum: n25.minSize.value, type: "set", inclusive: true, exact: false, message: n25.minSize.message }), a37.dirty()), null !== n25.maxSize && r33.data.size > n25.maxSize.value && (p5(r33, { code: s6.too_big, maximum: n25.maxSize.value, type: "set", inclusive: true, exact: false, message: n25.maxSize.message }), a37.dirty());
    const i46 = this._def.valueType;
    function o17(e47) {
      const t40 = /* @__PURE__ */ new Set();
      for (const s31 of e47) {
        if ("aborted" === s31.status) return m8;
        "dirty" === s31.status && a37.dirty(), t40.add(s31.value);
      }
      return { status: a37.value, value: t40 };
    }
    const d18 = [...r33.data.values()].map((e47, t40) => i46._parse(new k3(r33, e47, r33.path, t40)));
    return r33.common.async ? Promise.all(d18).then((e47) => o17(e47)) : o17(d18);
  }
  min(e46, t40) {
    return new _te({ ...this._def, minSize: { value: e46, message: b3.toString(t40) } });
  }
  max(e46, t40) {
    return new _te({ ...this._def, maxSize: { value: e46, message: b3.toString(t40) } });
  }
  size(e46, t40) {
    return this.min(e46, t40).max(e46, t40);
  }
  nonempty(e46) {
    return this.min(1, e46);
  }
};
te.create = (e46, t40) => new te({ valueType: e46, minSize: null, maxSize: null, typeName: xe.ZodSet, ...Z(t40) });
var ae = class _ae extends T3 {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e46) {
    const { ctx: a37 } = this._processInputParams(e46);
    if (a37.parsedType !== t18.function) return p5(a37, { code: s6.invalid_type, expected: t18.function, received: a37.parsedType }), m8;
    function r33(e47, t40) {
      return u7({ data: e47, path: a37.path, errorMaps: [a37.common.contextualErrorMap, a37.schemaErrorMap, c7(), i5].filter((e48) => !!e48), issueData: { code: s6.invalid_arguments, argumentsError: t40 } });
    }
    function o17(e47, t40) {
      return u7({ data: e47, path: a37.path, errorMaps: [a37.common.contextualErrorMap, a37.schemaErrorMap, c7(), i5].filter((e48) => !!e48), issueData: { code: s6.invalid_return_type, returnTypeError: t40 } });
    }
    const d18 = { errorMap: a37.common.contextualErrorMap }, l27 = a37.data;
    return this._def.returns instanceof de ? y2(async (...e47) => {
      const t40 = new n14([]), a38 = await this._def.args.parseAsync(e47, d18).catch((a39) => {
        throw t40.addIssue(r33(e47, a39)), t40;
      }), s31 = await l27(...a38);
      return await this._def.returns._def.type.parseAsync(s31, d18).catch((e48) => {
        throw t40.addIssue(o17(s31, e48)), t40;
      });
    }) : y2((...e47) => {
      const t40 = this._def.args.safeParse(e47, d18);
      if (!t40.success) throw new n14([r33(e47, t40.error)]);
      const a38 = l27(...t40.data), s31 = this._def.returns.safeParse(a38, d18);
      if (!s31.success) throw new n14([o17(a38, s31.error)]);
      return s31.data;
    });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e46) {
    return new _ae({ ...this._def, args: Q.create(e46).rest(z.create()) });
  }
  returns(e46) {
    return new _ae({ ...this._def, returns: e46 });
  }
  implement(e46) {
    return this.parse(e46);
  }
  strictImplement(e46) {
    return this.parse(e46);
  }
  static create(e46, t40, a37) {
    return new _ae({ args: e46 || Q.create([]).rest(z.create()), returns: t40 || z.create(), typeName: xe.ZodFunction, ...Z(a37) });
  }
};
var se = class extends T3 {
  get schema() {
    return this._def.getter();
  }
  _parse(e46) {
    const { ctx: t40 } = this._processInputParams(e46);
    return this._def.getter()._parse({ data: t40.data, path: t40.path, parent: t40 });
  }
};
se.create = (e46, t40) => new se({ getter: e46, typeName: xe.ZodLazy, ...Z(t40) });
var re = class extends T3 {
  _parse(e46) {
    if (e46.data !== this._def.value) {
      const t40 = this._getOrReturnCtx(e46);
      return p5(t40, { received: t40.data, code: s6.invalid_literal, expected: this._def.value }), m8;
    }
    return { status: "valid", value: e46.data };
  }
  get value() {
    return this._def.value;
  }
};
function ne(e46, t40) {
  return new ie({ values: e46, typeName: xe.ZodEnum, ...Z(t40) });
}
re.create = (e46, t40) => new re({ value: e46, typeName: xe.ZodLiteral, ...Z(t40) });
var ie = class _ie extends T3 {
  _parse(t40) {
    if ("string" != typeof t40.data) {
      const a37 = this._getOrReturnCtx(t40), r33 = this._def.values;
      return p5(a37, { expected: e18.joinValues(r33), received: a37.parsedType, code: s6.invalid_type }), m8;
    }
    if (-1 === this._def.values.indexOf(t40.data)) {
      const e46 = this._getOrReturnCtx(t40), a37 = this._def.values;
      return p5(e46, { received: e46.data, code: s6.invalid_enum_value, options: a37 }), m8;
    }
    return y2(t40.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e46 = {};
    for (const t40 of this._def.values) e46[t40] = t40;
    return e46;
  }
  get Values() {
    const e46 = {};
    for (const t40 of this._def.values) e46[t40] = t40;
    return e46;
  }
  get Enum() {
    const e46 = {};
    for (const t40 of this._def.values) e46[t40] = t40;
    return e46;
  }
  extract(e46) {
    return _ie.create(e46);
  }
  exclude(e46) {
    return _ie.create(this.options.filter((t40) => !e46.includes(t40)));
  }
};
ie.create = ne;
var oe = class extends T3 {
  _parse(a37) {
    const r33 = e18.getValidEnumValues(this._def.values), n25 = this._getOrReturnCtx(a37);
    if (n25.parsedType !== t18.string && n25.parsedType !== t18.number) {
      const t40 = e18.objectValues(r33);
      return p5(n25, { expected: e18.joinValues(t40), received: n25.parsedType, code: s6.invalid_type }), m8;
    }
    if (-1 === r33.indexOf(a37.data)) {
      const t40 = e18.objectValues(r33);
      return p5(n25, { received: n25.data, code: s6.invalid_enum_value, options: t40 }), m8;
    }
    return y2(a37.data);
  }
  get enum() {
    return this._def.values;
  }
};
oe.create = (e46, t40) => new oe({ values: e46, typeName: xe.ZodNativeEnum, ...Z(t40) });
var de = class extends T3 {
  unwrap() {
    return this._def.type;
  }
  _parse(e46) {
    const { ctx: a37 } = this._processInputParams(e46);
    if (a37.parsedType !== t18.promise && false === a37.common.async) return p5(a37, { code: s6.invalid_type, expected: t18.promise, received: a37.parsedType }), m8;
    const r33 = a37.parsedType === t18.promise ? a37.data : Promise.resolve(a37.data);
    return y2(r33.then((e47) => this._def.type.parseAsync(e47, { path: a37.path, errorMap: a37.common.contextualErrorMap })));
  }
};
de.create = (e46, t40) => new de({ type: e46, typeName: xe.ZodPromise, ...Z(t40) });
var ce = class extends T3 {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === xe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t40) {
    const { status: a37, ctx: s31 } = this._processInputParams(t40), r33 = this._def.effect || null;
    if ("preprocess" === r33.type) {
      const e46 = r33.transform(s31.data);
      return s31.common.async ? Promise.resolve(e46).then((e47) => this._def.schema._parseAsync({ data: e47, path: s31.path, parent: s31 })) : this._def.schema._parseSync({ data: e46, path: s31.path, parent: s31 });
    }
    const n25 = { addIssue: (e46) => {
      p5(s31, e46), e46.fatal ? a37.abort() : a37.dirty();
    }, get path() {
      return s31.path;
    } };
    if (n25.addIssue = n25.addIssue.bind(n25), "refinement" === r33.type) {
      const e46 = (e47) => {
        const t41 = r33.refinement(e47, n25);
        if (s31.common.async) return Promise.resolve(t41);
        if (t41 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return e47;
      };
      if (false === s31.common.async) {
        const t41 = this._def.schema._parseSync({ data: s31.data, path: s31.path, parent: s31 });
        return "aborted" === t41.status ? m8 : ("dirty" === t41.status && a37.dirty(), e46(t41.value), { status: a37.value, value: t41.value });
      }
      return this._def.schema._parseAsync({ data: s31.data, path: s31.path, parent: s31 }).then((t41) => "aborted" === t41.status ? m8 : ("dirty" === t41.status && a37.dirty(), e46(t41.value).then(() => ({ status: a37.value, value: t41.value }))));
    }
    if ("transform" === r33.type) {
      if (false === s31.common.async) {
        const e46 = this._def.schema._parseSync({ data: s31.data, path: s31.path, parent: s31 });
        if (!g4(e46)) return e46;
        const t41 = r33.transform(e46.value, n25);
        if (t41 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: a37.value, value: t41 };
      }
      return this._def.schema._parseAsync({ data: s31.data, path: s31.path, parent: s31 }).then((e46) => g4(e46) ? Promise.resolve(r33.transform(e46.value, n25)).then((e47) => ({ status: a37.value, value: e47 })) : e46);
    }
    e18.assertNever(r33);
  }
};
ce.create = (e46, t40, a37) => new ce({ schema: e46, typeName: xe.ZodEffects, effect: t40, ...Z(a37) }), ce.createWithPreprocess = (e46, t40, a37) => new ce({ schema: t40, effect: { type: "preprocess", transform: e46 }, typeName: xe.ZodEffects, ...Z(a37) });
var ue = class extends T3 {
  _parse(e46) {
    return this._getType(e46) === t18.undefined ? y2(void 0) : this._def.innerType._parse(e46);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ue.create = (e46, t40) => new ue({ innerType: e46, typeName: xe.ZodOptional, ...Z(t40) });
var le = class extends T3 {
  _parse(e46) {
    return this._getType(e46) === t18.null ? y2(null) : this._def.innerType._parse(e46);
  }
  unwrap() {
    return this._def.innerType;
  }
};
le.create = (e46, t40) => new le({ innerType: e46, typeName: xe.ZodNullable, ...Z(t40) });
var pe = class extends T3 {
  _parse(e46) {
    const { ctx: a37 } = this._processInputParams(e46);
    let s31 = a37.data;
    return a37.parsedType === t18.undefined && (s31 = this._def.defaultValue()), this._def.innerType._parse({ data: s31, path: a37.path, parent: a37 });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
pe.create = (e46, t40) => new pe({ innerType: e46, typeName: xe.ZodDefault, defaultValue: "function" == typeof t40.default ? t40.default : () => t40.default, ...Z(t40) });
var he = class extends T3 {
  _parse(e46) {
    const { ctx: t40 } = this._processInputParams(e46), a37 = this._def.innerType._parse({ data: t40.data, path: t40.path, parent: { ...t40, common: { ...t40.common, issues: [] } } });
    return x(a37) ? a37.then((e47) => ({ status: "valid", value: "valid" === e47.status ? e47.value : this._def.catchValue() })) : { status: "valid", value: "valid" === a37.status ? a37.value : this._def.catchValue() };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
he.create = (e46, t40) => new he({ innerType: e46, typeName: xe.ZodCatch, catchValue: "function" == typeof t40.catch ? t40.catch : () => t40.catch, ...Z(t40) });
var me = class extends T3 {
  _parse(e46) {
    if (this._getType(e46) !== t18.nan) {
      const a37 = this._getOrReturnCtx(e46);
      return p5(a37, { code: s6.invalid_type, expected: t18.nan, received: a37.parsedType }), m8;
    }
    return { status: "valid", value: e46.data };
  }
};
me.create = (e46) => new me({ typeName: xe.ZodNaN, ...Z(e46) });
var fe = Symbol("zod_brand");
var ye = class extends T3 {
  _parse(e46) {
    const { ctx: t40 } = this._processInputParams(e46), a37 = t40.data;
    return this._def.type._parse({ data: a37, path: t40.path, parent: t40 });
  }
  unwrap() {
    return this._def.type;
  }
};
var _e = class __e extends T3 {
  _parse(e46) {
    const { status: t40, ctx: a37 } = this._processInputParams(e46);
    if (a37.common.async) {
      return (async () => {
        const e47 = await this._def.in._parseAsync({ data: a37.data, path: a37.path, parent: a37 });
        return "aborted" === e47.status ? m8 : "dirty" === e47.status ? (t40.dirty(), f4(e47.value)) : this._def.out._parseAsync({ data: e47.value, path: a37.path, parent: a37 });
      })();
    }
    {
      const e47 = this._def.in._parseSync({ data: a37.data, path: a37.path, parent: a37 });
      return "aborted" === e47.status ? m8 : "dirty" === e47.status ? (t40.dirty(), { status: "dirty", value: e47.value }) : this._def.out._parseSync({ data: e47.value, path: a37.path, parent: a37 });
    }
  }
  static create(e46, t40) {
    return new __e({ in: e46, out: t40, typeName: xe.ZodPipeline });
  }
};
var ve = (e46, t40 = {}, a37) => e46 ? L3.create().superRefine((s31, r33) => {
  if (!e46(s31)) {
    const e47 = "function" == typeof t40 ? t40(s31) : t40, n25 = "string" == typeof e47 ? { message: e47 } : e47;
    r33.addIssue({ code: "custom", ...n25, fatal: a37 });
  }
}) : L3.create();
var ge = { object: q.lazycreate };
var xe;
!function(e46) {
  e46.ZodString = "ZodString", e46.ZodNumber = "ZodNumber", e46.ZodNaN = "ZodNaN", e46.ZodBigInt = "ZodBigInt", e46.ZodBoolean = "ZodBoolean", e46.ZodDate = "ZodDate", e46.ZodSymbol = "ZodSymbol", e46.ZodUndefined = "ZodUndefined", e46.ZodNull = "ZodNull", e46.ZodAny = "ZodAny", e46.ZodUnknown = "ZodUnknown", e46.ZodNever = "ZodNever", e46.ZodVoid = "ZodVoid", e46.ZodArray = "ZodArray", e46.ZodObject = "ZodObject", e46.ZodUnion = "ZodUnion", e46.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e46.ZodIntersection = "ZodIntersection", e46.ZodTuple = "ZodTuple", e46.ZodRecord = "ZodRecord", e46.ZodMap = "ZodMap", e46.ZodSet = "ZodSet", e46.ZodFunction = "ZodFunction", e46.ZodLazy = "ZodLazy", e46.ZodLiteral = "ZodLiteral", e46.ZodEnum = "ZodEnum", e46.ZodEffects = "ZodEffects", e46.ZodNativeEnum = "ZodNativeEnum", e46.ZodOptional = "ZodOptional", e46.ZodNullable = "ZodNullable", e46.ZodDefault = "ZodDefault", e46.ZodCatch = "ZodCatch", e46.ZodPromise = "ZodPromise", e46.ZodBranded = "ZodBranded", e46.ZodPipeline = "ZodPipeline";
}(xe || (xe = {}));
var be = (e46, t40 = { message: `Input not instance of ${e46.name}` }) => ve((t41) => t41 instanceof e46, t40, true);
var ke = j3.create;
var we = I3.create;
var Ze = me.create;
var Te = P2.create;
var Ne = R2.create;
var Oe = A4.create;
var Se = M3.create;
var Ee = $.create;
var je = D2.create;
var Ce = L3.create;
var Ie = z.create;
var Pe = V2.create;
var Re = U2.create;
var Ae = K.create;
var Me = q.create;
var $e = q.strictCreate;
var De = F2.create;
var Le = Y.create;
var ze = G2.create;
var Ve = Q.create;
var Ue = X.create;
var Ke = ee.create;
var We = te.create;
var Be = ae.create;
var qe = se.create;
var Fe = re.create;
var Je = ie.create;
var Ye = oe.create;
var He = de.create;
var Ge = ce.create;
var Qe = ue.create;
var Xe = le.create;
var et = ce.createWithPreprocess;
var tt = _e.create;
var at = () => ke().optional();
var st = () => we().optional();
var rt = () => Ne().optional();
var nt = { string: (e46) => j3.create({ ...e46, coerce: true }), number: (e46) => I3.create({ ...e46, coerce: true }), boolean: (e46) => R2.create({ ...e46, coerce: true }), bigint: (e46) => P2.create({ ...e46, coerce: true }), date: (e46) => A4.create({ ...e46, coerce: true }) };
var it = m8;
var ot = Object.freeze({ __proto__: null, defaultErrorMap: i5, setErrorMap: d6, getErrorMap: c7, makeIssue: u7, EMPTY_PATH: l6, addIssueToContext: p5, ParseStatus: h5, INVALID: m8, DIRTY: f4, OK: y2, isAborted: _5, isDirty: v4, isValid: g4, isAsync: x, get util() {
  return e18;
}, ZodParsedType: t18, getParsedType: a10, ZodType: T3, ZodString: j3, ZodNumber: I3, ZodBigInt: P2, ZodBoolean: R2, ZodDate: A4, ZodSymbol: M3, ZodUndefined: $, ZodNull: D2, ZodAny: L3, ZodUnknown: z, ZodNever: V2, ZodVoid: U2, ZodArray: K, get objectUtil() {
  return W;
}, ZodObject: q, ZodUnion: F2, ZodDiscriminatedUnion: Y, ZodIntersection: G2, ZodTuple: Q, ZodRecord: X, ZodMap: ee, ZodSet: te, ZodFunction: ae, ZodLazy: se, ZodLiteral: re, ZodEnum: ie, ZodNativeEnum: oe, ZodPromise: de, ZodEffects: ce, ZodTransformer: ce, ZodOptional: ue, ZodNullable: le, ZodDefault: pe, ZodCatch: he, ZodNaN: me, BRAND: fe, ZodBranded: ye, ZodPipeline: _e, custom: ve, Schema: T3, ZodSchema: T3, late: ge, get ZodFirstPartyTypeKind() {
  return xe;
}, coerce: nt, any: Ce, array: Ae, bigint: Te, boolean: Ne, date: Oe, discriminatedUnion: Le, effect: Ge, enum: Je, function: Be, instanceof: be, intersection: ze, lazy: qe, literal: Fe, map: Ke, nan: Ze, nativeEnum: Ye, never: Pe, null: je, nullable: Xe, number: we, object: Me, oboolean: rt, onumber: st, optional: Qe, ostring: at, pipeline: tt, preprocess: et, promise: He, record: Ue, set: We, strictObject: $e, string: ke, symbol: Se, transformer: Ge, tuple: Ve, undefined: Ee, union: De, unknown: Ie, void: Re, NEVER: it, ZodIssueCode: s6, quotelessJson: r17, ZodError: n14 });

// node_modules/zmp-sdk/apis/common/apis/general/view.js
var B2 = function() {
  function B3() {
    var i46, o17, n25, r33, v8, p46, h13, m51, g9, C5, T4, _11, y7, E7, O4, w7, I6, H2, S5, b8, N4, x3, j9, D4, R3, P3, M5;
    a2(this, B3), this.initConfig = window.APP_CONFIG;
    var G3 = u.isString(null === (i46 = this.initConfig) || void 0 === i46 || null === (o17 = i46.app) || void 0 === o17 ? void 0 : o17.headerColor) && (null === (n25 = this.initConfig) || void 0 === n25 || null === (r33 = n25.app) || void 0 === r33 || null === (v8 = r33.headerColor) || void 0 === v8 ? void 0 : v8.length) > 0 ? l : M;
    this.hideIOSSafeAreaBottom = !!(null === (p46 = this.initConfig) || void 0 === p46 || null === (h13 = p46.app) || void 0 === h13 ? void 0 : h13.hideIOSSafeAreaBottom), this.hideAndroidBottomNavigationBar = !!(null === (m51 = this.initConfig) || void 0 === m51 || null === (g9 = m51.app) || void 0 === g9 ? void 0 : g9.hideAndroidBottomNavigationBar);
    var L4, K2, U3 = "none" === (null === (C5 = this.initConfig) || void 0 === C5 || null === (T4 = C5.app) || void 0 === T4 ? void 0 : T4.leftButton) || "home" === (null === (_11 = this.initConfig) || void 0 === _11 || null === (y7 = _11.app) || void 0 === y7 ? void 0 : y7.leftButton) ? d.HIDE_BACK : d.SHOW_BACK, W2 = "home" === (null === (E7 = this.initConfig) || void 0 === E7 || null === (O4 = E7.app) || void 0 === O4 ? void 0 : O4.leftButton) || "both" === (null === (w7 = this.initConfig) || void 0 === w7 || null === (I6 = w7.app) || void 0 === I6 ? void 0 : I6.leftButton) ? d.SHOW_HOME : d.HIDE_HOME, k5 = new URL(location.href), F4 = O2(null === (H2 = this.initConfig) || void 0 === H2 || null === (S5 = H2.app) || void 0 === S5 ? void 0 : S5.statusBar);
    "boolean" == typeof (null === (b8 = this.initConfig) || void 0 === b8 || null === (N4 = b8.app) || void 0 === N4 ? void 0 : N4.actionBarHidden) && (G3 = (null === (L4 = this.initConfig) || void 0 === L4 || null === (K2 = L4.app) || void 0 === K2 ? void 0 : K2.actionBarHidden) ? M : l);
    this.config = { actionbarType: G3, buttonType: U3, statusbarType: F4, dataConfig: { backgroundColor: (null === (x3 = this.initConfig) || void 0 === x3 || null === (j9 = x3.app) || void 0 === j9 ? void 0 : j9.headerColor) || u2, textColor: (null === (D4 = this.initConfig) || void 0 === D4 || null === (R3 = D4.app) || void 0 === R3 ? void 0 : R3.textColor) || "", textAlign: (null === (P3 = this.initConfig) || void 0 === P3 || null === (M5 = P3.app) || void 0 === M5 ? void 0 : M5.textAlign) || F, viewInLeftType: U3, confirmToExit: 1 }, homeConfig: { enable: W2, url: "".concat(A, "/").concat(I, "/").concat(k5.search) } };
  }
  var _10 = B3.prototype;
  return _10.setNavigationBarTitle = function(t40) {
    return t6(function() {
      return e15(this, function(i46) {
        return [2, new Promise(function(i47, o17) {
          a8("CHANGE_TITLE_HEADER", { title: t40 }, { success: function() {
            i47(), document.title = t40;
          }, fail: function(i48) {
            o17(i48);
          } }, { timeout: false });
        })];
      });
    })();
  }, _10.setNavigationBarLeftButton = function(t40) {
    var e46 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.config.dataConfig.confirmToExit, a37 = this;
    return t6(function() {
      var i46, l27;
      return e15(this, function(s31) {
        return void 0 === (void 0 === t40 ? "undefined" : o4(t40)) && null === (void 0 === t40 ? "undefined" : o4(t40)) || (i46 = "none" === t40 || "home" === t40 ? d.HIDE_BACK : d.SHOW_BACK, l27 = "home" === t40 || "both" === t40 ? d.SHOW_HOME : d.HIDE_HOME, a37.config.buttonType = i46, a37.config.dataConfig.viewInLeftType = i46, a37.config.homeConfig.enable = l27), a37.config.dataConfig.confirmToExit = e46, [2, new Promise(function(i47, t41) {
          a8("CHANGE_ACTIONBAR_LEFTBUTTON_TYPE", t9({}, a37.config), { success: function() {
            i47();
          }, fail: function(i48) {
            t41(i48);
          } }, { timeout: false });
        })];
      });
    })();
  }, _10.setAndroidBottomNavigationBar = function() {
    var t40 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o17 = this;
    return t6(function() {
      var i46, n25, e46;
      return e15(this, function(a37) {
        return n25 = t40 ? h2.hide : h2.show, e46 = null === (i46 = s4()) || void 0 === i46 ? void 0 : i46.platform, [2, new Promise(function(i47, a38) {
          if (!(null == e46 ? void 0 : e46.isAndroid)) return i47();
          a8("CHANGE_BOTTOMBAR", { bottombarType: n25 }, { success: function() {
            o17.hideAndroidBottomNavigationBar = !!t40, window.ANDROID_BOTTOM_NAVIGATION_BAR_HIDDEN = !!t40, i47();
          }, fail: function(i48) {
            a38(i48);
          } }, { timeout: false });
        })];
      });
    })();
  }, _10.setIOSBottomSafeArea = function() {
    var t40 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o17 = this;
    return t6(function() {
      var i46, n25, e46;
      return e15(this, function(a37) {
        return n25 = t40 ? _2.hide : _2.show, e46 = null === (i46 = s4()) || void 0 === i46 ? void 0 : i46.platform, [2, new Promise(function(i47, a38) {
          if (!(null == e46 ? void 0 : e46.isIOS)) return i47();
          a8("CHANGE_BOTTOMBAR", { bottombarType: n25 }, { success: function() {
            o17.hideIOSSafeAreaBottom = !!t40, window.IOS_BOTTOM_SAFE_AREA_HIDDEN = !!t40, i47();
          }, fail: function(i48) {
            a38(i48);
          } }, { timeout: false, delay: 200 });
        })];
      });
    })();
  }, _10.configHeader = function(t40) {
    var n25 = this;
    return t6(function() {
      var i46;
      return e15(this, function(s31) {
        return i46 = n25.config, u.isString(t40.headerColor) && (i46.dataConfig.backgroundColor = t40.headerColor), u.isString(t40.headerTextColor) && (i46.dataConfig.textColor = t40.headerTextColor), u.isString(t40.textAlign) && ("left" === t40.textAlign ? i46.dataConfig.textAlign = w.left : "center" === t40.textAlign && (i46.dataConfig.textAlign = w.center)), true === t40.hideActionBar ? i46.actionbarType = M : false === t40.hideActionBar && (i46.actionbarType = l), "normal" === t40.statusBarType ? i46.statusbarType = f.normal : "hidden" === t40.statusBarType ? i46.statusbarType = f.hidden : "transparent" === t40.statusBarType && (i46.statusbarType = f.transparent), [2, new Promise(function(e46, l27) {
          a8("CHANGE_ACTIONBAR", t9({}, i46), { success: function() {
            var r33;
            n25.config = t9({}, i46);
            var l28 = null === (r33 = s4()) || void 0 === r33 ? void 0 : r33.platform;
            window.STATUS_BAR_TYPE = b2(n25.config.statusbarType), window.ACTION_BAR_HIDDEN = n25.config.actionbarType === M;
            var s32 = null === document || void 0 === document ? void 0 : document.querySelector(":root");
            if (null == l28 ? void 0 : l28.isAndroid) {
              var d18 = 0;
              if (("hidden" === t40.statusBarType || "transparent" === t40.statusBarType) && t40.hideActionBar) {
                var u48 = window.ANDROID_STATUS_BAR_HEIGHT;
                isNaN(u48) && (u48 = Math.round(ZaloJavaScriptInterface.getStatusBarHeight() / window.devicePixelRatio)), d18 = u48;
              }
              d18 ? null == s32 || s32.style.setProperty("--zaui-safe-area-inset-top", "".concat(d18, "px")) : null == s32 || s32.style.setProperty("--zaui-safe-area-inset-top", "env(safe-area-inset-top, 0px)");
            }
            e46();
          }, fail: function(i47) {
            l27(i47);
          } }, { timeout: false });
        })];
      });
    })();
  }, B3.getInstance = function() {
    return B3.instance || (B3.instance = new B3()), B3.instance;
  }, B3;
}().getInstance();

// node_modules/zmp-sdk/apis/apis/setNavigationBarTitle.js
var m9 = [Me({ title: ke() }).optional()];
function l7(t40) {
  return p6.apply(this, arguments);
}
function p6() {
  return p6 = t6(function(r33) {
    return e15(this, function(e46) {
      return [2, a9("setNavigationBarTitle", m9, [r33], (l27 = t6(function(t40) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? [4, B2.setNavigationBarTitle(t40.title)] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("setNavigationBarTitle", {}))];
          }
        });
      }), function(t40) {
        return l27.apply(this, arguments);
      }))];
      var l27;
    });
  }), p6.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/setNavigationBarColor.js
var c8 = [Me({ color: ke(), textColor: ot.enum(["black", "white"]).optional(), statusBarColor: ke().optional() }).optional()];
function m10(o17) {
  return u8.apply(this, arguments);
}
function u8() {
  return u8 = t6(function(r33) {
    return e15(this, function(t40) {
      return [2, a9("setNavigationBarColor", c8, [r33], (e46 = t6(function(o17) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? [4, B2.configHeader({ hideActionBar: !(o17.color.length > 0), headerTextColor: o17.textColor, headerColor: o17.color.length > 0 ? o17.color : o17.statusBarColor })] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("setNavigationBarColor", {}))];
          }
        });
      }), function(o17) {
        return e46.apply(this, arguments);
      }))];
      var e46;
    });
  }), u8.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/setNavigationBarLeftButton.js
var m11 = [Me({ type: ot.enum(["none", "back", "home", "both"]) }).optional()];
function u9(t40) {
  return p7.apply(this, arguments);
}
function p7() {
  return p7 = t6(function(o17) {
    return e15(this, function(e46) {
      return [2, a9("setNavigationBarLeftButton", m11, [o17], (u48 = t6(function(t40) {
        return e15(this, function(o18) {
          switch (o18.label) {
            case 0:
              return o10.isMp ? [4, B2.setNavigationBarLeftButton(t40.type)] : [3, 2];
            case 1:
              return [2, o18.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("setNavigationBarLeftButton", {}))];
          }
        });
      }), function(t40) {
        return u48.apply(this, arguments);
      }))];
      var u48;
    });
  }), p7.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_class_extract_field_descriptor.mjs.js
function t19(t40, e46, n25) {
  if (!e46.has(t40)) throw new TypeError("attempted to " + n25 + " private field on non-instance");
  return e46.get(t40);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_class_apply_descriptor_get.mjs.js
function e19(e46, t40) {
  return t40.get ? t40.get.call(e46) : t40.value;
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_class_private_field_get.mjs.js
function s7(s31, e46) {
  var o17 = t19(s31, e46, "get");
  return e19(s31, o17);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_check_private_redeclaration.mjs.js
function e20(e46, t40) {
  if (t40.has(e46)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_class_private_field_init.mjs.js
function t20(t40, r33, a37) {
  e20(t40, r33), r33.set(t40, a37);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_class_apply_descriptor_set.mjs.js
function e21(e46, t40, a37) {
  if (t40.set) t40.set.call(e46, a37);
  else {
    if (!t40.writable) throw new TypeError("attempted to set read only private field");
    t40.value = a37;
  }
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_class_private_field_set.mjs.js
function t21(t40, e46, o17) {
  var _10 = t19(t40, e46, "set");
  return e21(t40, _10, o17), o17;
}

// node_modules/zmp-sdk/apis/common/apis/general/storage/storage.js
var r18 = function() {
  function r33() {
    a2(this, r33);
  }
  var t40 = r33.prototype;
  return t40.getSynchronize = function(e46) {
    return /* @__PURE__ */ new Map();
  }, t40.setSynchronize = function(e46) {
    return { errorKeys: [] };
  }, t40.getInfoSynchronize = function() {
    return { currentSize: 0, limitSize: 0 };
  }, t40.removeSynchronize = function(e46) {
    return { errorKeys: [] };
  }, t40.clearSynchronize = function() {
  }, t40.getItem = function(e46) {
    return this.getSynchronize([e46]).get(e46) || null;
  }, t40.setItem = function(e46, r34) {
    if (this.setSynchronize(e9({}, e46, r34)).errorKeys.length > 0) throw new Error("Failed to set item: ".concat(e46));
  }, t40.removeItem = function(e46) {
    this.removeSynchronize([e46]);
  }, t40.clear = function() {
    this.clearSynchronize();
  }, t40.getStorageInfo = function() {
    return this.getInfoSynchronize();
  }, r33;
}();

// node_modules/zmp-sdk/apis/common/apis/general/storage/localStorage.js
var p8 = /* @__PURE__ */ new WeakMap();
var _6 = /* @__PURE__ */ new WeakMap();
var d7 = /* @__PURE__ */ new WeakMap();
var y3 = function(u48) {
  e12(v8, u48);
  var y7 = s3(v8);
  function v8(t40) {
    var s31;
    return a2(this, v8), s31 = y7.call(this), t20(e13(s31), p8, { writable: true, value: localStorage }), t20(e13(s31), _6, { writable: true, value: void 0 }), t20(e13(s31), d7, { writable: true, value: void 0 }), t21(e13(s31), d7, { keys: /* @__PURE__ */ new Set(), currentSize: 0, limitSize: p }), t21(e13(s31), _6, t40), s31.findAllCurrentDataByApp(t40), s31;
  }
  var j9 = v8.prototype;
  return j9.findAllCurrentDataByApp = function(e46) {
    try {
      var t40;
      for (t40 in s7(this, p8)) {
        if (e46) {
          if (t40.split("_")[0] !== e46) continue;
        }
        s7(this, d7).keys.add(t40);
      }
    } catch (e47) {
    }
  }, j9.get = function(e46) {
    var t40 = this, r33 = /* @__PURE__ */ new Map();
    return e46.forEach(function(e47) {
      r33.set(e47, t40.getSync(e47));
    }), Promise.resolve(r33);
  }, j9.getSync = function(e46) {
    return s7(this, _6) && (e46 = "".concat(s7(this, _6), "_").concat(e46)), s7(this, d7).keys.has(e46) ? s7(this, p8).getItem(e46) : null;
  }, j9.set = function(e46) {
    var r33 = this;
    return t6(function() {
      return e15(this, function(t40) {
        return Object.entries(e46).forEach(function(e47) {
          var t41 = e6(e47, 2), s31 = t41[0], n25 = t41[1];
          r33.setSync(s31, n25.replace(/\\"/g, '"'));
        }), [2, Promise.resolve({ errorKeys: [] })];
      });
    })();
  }, j9.setSync = function(e46, t40) {
    s7(this, _6) && (e46 = "".concat(s7(this, _6), "_").concat(e46)), s7(this, p8).setItem(e46, t40), s7(this, d7).keys.add(e46);
  }, j9.getInfo = function() {
    var e46 = this;
    return t6(function() {
      return e15(this, function(t40) {
        return [2, Promise.resolve(e46.getInfoSync())];
      });
    })();
  }, j9.getInfoSync = function() {
    var e46 = y(s7(this, p8), s7(this, _6));
    return { currentSize: u.isNumber(e46) ? Number((e46 / 1024).toFixed(2)) : 0, limitSize: Number((p / 1024).toFixed(2)) };
  }, j9.remove = function(e46) {
    var r33 = this;
    return t6(function() {
      return e15(this, function(t40) {
        return e46.forEach(function(e47) {
          r33.removeSync(e47);
        }), [2, Promise.resolve({ errorKeys: [] })];
      });
    })();
  }, j9.removeSync = function(e46) {
    s7(this, _6) && (e46 = "".concat(s7(this, _6), "_").concat(e46)), s7(this, d7).keys.has(e46) && (s7(this, p8).removeItem(e46), s7(this, d7).keys.delete(e46));
  }, j9.clearAsync = function() {
    var e46 = this;
    return t6(function() {
      return e15(this, function(t40) {
        return [2, Promise.resolve(e46.clearSync())];
      });
    })();
  }, j9.clearSync = function() {
    var e46 = this;
    s7(this, d7).keys.forEach(function(t40) {
      s7(e46, _6) && t40.indexOf(s7(e46, _6)) < 0 || (s7(e46, p8).removeItem(t40), s7(e46, d7).keys.delete(t40));
    });
  }, j9.setSynchronize = function(e46) {
    var t40 = this;
    return Object.entries(e46).forEach(function(e47) {
      var r33 = e6(e47, 2), s31 = r33[0], n25 = r33[1];
      t40.setSync(s31, n25);
    }), { errorKeys: [] };
  }, j9.getSynchronize = function(e46) {
    var t40 = this, r33 = /* @__PURE__ */ new Map();
    return e46.forEach(function(e47) {
      r33.set(e47, t40.getSync(e47));
    }), r33;
  }, j9.getInfoSynchronize = function() {
    return this.getInfoSync();
  }, j9.clearSynchronize = function() {
    this.clearSync();
  }, v8;
}(r18);

// node_modules/zmp-sdk/apis/common/apis/general/storage/nativeStorage.js
var l8 = /* @__PURE__ */ new WeakMap();
var f5 = /* @__PURE__ */ new WeakMap();
var h6 = function(d18) {
  e12(v8, d18);
  var h13 = s3(v8);
  function v8(e46) {
    var r33;
    return a2(this, v8), r33 = h13.call(this), t20(e13(r33), l8, { writable: true, value: void 0 }), t20(e13(r33), f5, { writable: true, value: void 0 }), t21(e13(r33), f5, { keys: /* @__PURE__ */ new Set(), currentSize: 0, limitSize: p }), t21(e13(r33), l8, e46), r33;
  }
  var y7 = v8.prototype;
  return y7.get = function(s31) {
    var t40 = this;
    return t6(function() {
      return e15(this, function(e46) {
        return [2, new Promise(function(e47, a37) {
          a8("ZBROWSER_MPDS", { mpds_action: "mpds.get", mpds_data: { keys: s31 }, appId: s7(t40, l8) }, { success: function(s32) {
            var t41 = /* @__PURE__ */ new Map();
            s32 && s32.mpds_data && s32.mpds_data.map && (t41 = new Map(Object.entries(s32.mpds_data.map))), e47(t41);
          }, fail: function(s32) {
            a37(s32);
          } }, { isMultiCallback: false });
        })];
      });
    })();
  }, y7.getSynchronize = function(s31) {
    var e46 = { mpds_action: "mpds.get", mpds_data: { keys: s31 }, appId: s7(this, l8) }, t40 = /* @__PURE__ */ new Map(), a37 = this.handleResult(e46);
    return a37 && a37.mpds_data && a37.mpds_data.map && (t40 = new Map(Object.entries(a37.mpds_data.map))), t40;
  }, y7.set = function(s31) {
    var t40 = this;
    return t6(function() {
      return e15(this, function(e46) {
        return [2, new Promise(function(e47, a37) {
          a8("ZBROWSER_MPDS", { mpds_action: "mpds.set", mpds_data: { map: s31 }, appId: s7(t40, l8) }, { success: function(s32) {
            var t41 = [];
            s32 && s32.mpds_data && s32.mpds_data.error_keys && (t41 = s32.mpds_data.error_keys), e47({ errorKeys: t41 });
          }, fail: function(s32) {
            a37(s32);
          } }, { isMultiCallback: false });
        })];
      });
    })();
  }, y7.setSynchronize = function(s31) {
    var e46 = { mpds_action: "mpds.set", mpds_data: { map: s31 }, appId: s7(this, l8) }, t40 = [], a37 = this.handleResult(e46);
    return a37 && a37.mpds_data && a37.mpds_data.error_keys && (t40 = a37.mpds_data.error_keys), { errorKeys: t40 };
  }, y7.getInfo = function() {
    var s31 = this;
    return t6(function() {
      return e15(this, function(e46) {
        return [2, new Promise(function(e47, t40) {
          a8("ZBROWSER_MPDS", { mpds_action: "mpds.get.size", mpds_data: {}, appId: s7(s31, l8) }, { success: function(s32) {
            var t41 = 0;
            s32 && s32.mpds_data && s32.mpds_data.size && (t41 = s32.mpds_data.size), e47({ currentSize: u.isNumber(t41) ? Number(Number(t41) / 1024) : 0, limitSize: Number(p / 1024) });
          }, fail: function(s32) {
            t40(s32);
          } }, { isMultiCallback: false });
        })];
      });
    })();
  }, y7.getInfoSynchronize = function() {
    var s31 = { mpds_action: "mpds.get.size", mpds_data: {}, appId: s7(this, l8) }, e46 = 0, t40 = this.handleResult(s31);
    return t40 && t40.mpds_data && t40.mpds_data.size && (e46 = t40.mpds_data.size), { currentSize: u.isNumber(e46) ? Number(Number(e46) / 1024) : 0, limitSize: Number(p / 1024) };
  }, y7.remove = function(s31) {
    var t40 = this;
    return t6(function() {
      return e15(this, function(e46) {
        return [2, new Promise(function(e47, a37) {
          a8("ZBROWSER_MPDS", { mpds_action: "mpds.remove.key", mpds_data: { keys: s31 }, appId: s7(t40, l8) }, { success: function(s32) {
            var t41 = [];
            s32 && s32.mpds_data && s32.mpds_data.error_keys && (t41 = s32.mpds_data.error_keys), e47({ errorKeys: t41 });
          }, fail: function(s32) {
            a37(s32);
          } }, { isMultiCallback: false });
        })];
      });
    })();
  }, y7.removeSynchronize = function(s31) {
    var e46 = { mpds_action: "mpds.remove.key", mpds_data: { keys: s31 }, appId: s7(this, l8) }, t40 = [], a37 = this.handleResult(e46);
    return a37 && a37.mpds_data && a37.mpds_data.error_keys && (t40 = a37.mpds_data.error_keys), { errorKeys: t40 };
  }, y7.clearAsync = function() {
    var s31 = this;
    return t6(function() {
      return e15(this, function(e46) {
        return [2, new Promise(function(e47, t40) {
          a8("ZBROWSER_MPDS", { mpds_action: "mpds.clear.appData", mpds_data: {}, appId: s7(s31, l8) }, { success: function() {
            e47();
          }, fail: function(s32) {
            t40(s32);
          } }, { isMultiCallback: false });
        })];
      });
    })();
  }, y7.clearSynchronize = function() {
    var s31 = { mpds_action: "mpds.clear.appData", mpds_data: {}, appId: s7(this, l8) };
    this.handleResult(s31);
  }, y7.handleResult = function(s31) {
    var e46 = null;
    try {
      var t40 = ZaloJavaScriptInterface.processActionMPDS(JSON.stringify(s31));
      if (t40 = JSON.parse(t40)) {
        if (0 === t40.error_code) return t40.data;
        e46 = l5(t40).toJSON();
      }
    } catch (s32) {
      e46 = s32;
    } finally {
      if (null !== e46) throw e46;
    }
    return {};
  }, v8;
}(r18);

// node_modules/zmp-sdk/apis/common/apis/general/storage/index.js
var j4;
var w6;
var I4 = function() {
  function t40() {
    a2(this, t40);
  }
  var n25 = t40.prototype;
  return n25.getDataFromStorage = function(t41) {
    var r33 = this;
    return t6(function() {
      var e46, n26;
      return e15(this, function(s31) {
        switch (s31.label) {
          case 0:
            return [4, r33.getInstance().get(t41)];
          case 1:
            return e46 = s31.sent(), n26 = {}, e46.forEach(function(t42, e47) {
              n26[e47] = d3(t42);
            }), [2, n26];
        }
      });
    })();
  }, n25.getItem = function(t41) {
    return this.getInstance().getItem(t41);
  }, n25.putDataToStorage = function(t41) {
    var r33 = this;
    return t6(function() {
      var e46, n26;
      return e15(this, function(s31) {
        switch (s31.label) {
          case 0:
            return e46 = r33.getInstance(), n26 = {}, Object.entries(t41).forEach(function(t42) {
              var e47 = e6(t42, 2), r34 = e47[0], s32 = e47[1];
              u.isUndefined(s32) || u.isNull(s32) || (n26[r34] = v3(s32));
            }), [4, e46.set(n26)];
          case 1:
            return [2, s31.sent()];
        }
      });
    })();
  }, n25.setItem = function(t41, e46) {
    return this.getInstance().setItem(t41, e46);
  }, n25.removeDataFromStorage = function(t41) {
    var r33 = this;
    return t6(function() {
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            return [4, r33.getInstance().remove(t41)];
          case 1:
            return [2, e46.sent()];
        }
      });
    })();
  }, n25.removeItem = function(t41) {
    this.getInstance().removeItem(t41);
  }, n25.clearStorage = function() {
    var t41 = this;
    return t6(function() {
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            return [4, t41.getInstance().clearAsync()];
          case 1:
            return e46.sent(), [2];
        }
      });
    })();
  }, n25.clearStorageSync = function() {
    this.getInstance().clear();
  }, n25.getStorageInfo = function() {
    var t41 = this;
    return t6(function() {
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            return [4, t41.getInstance().getInfo()];
          case 1:
            return [2, e46.sent()];
        }
      });
    })();
  }, n25.getStorageInfoSync = function() {
    return this.getInstance().getStorageInfo();
  }, t40;
}();
var S4 = /* @__PURE__ */ new WeakMap();
var b4 = function(e46) {
  e12(u48, e46);
  var c40 = s3(u48);
  function u48(e47) {
    var n25;
    return a2(this, u48), n25 = c40.call(this), t20(e13(n25), S4, { writable: true, value: void 0 }), t21(e13(n25), S4, e47), n25;
  }
  return u48.prototype.getInstance = function() {
    return new y3(s7(this, S4));
  }, u48;
}(I4);
var y4 = /* @__PURE__ */ new WeakMap();
var E5 = function(e46) {
  e12(u48, e46);
  var c40 = s3(u48);
  function u48(e47) {
    var n25;
    return a2(this, u48), n25 = c40.call(this), t20(e13(n25), y4, { writable: true, value: void 0 }), t21(e13(n25), y4, e47), n25;
  }
  return u48.prototype.getInstance = function() {
    return new h6(s7(this, y4));
  }, u48;
}(I4);
var k4 = new b4(I);
var D3 = m3();
var M4 = (null === (j4 = s4()) || void 0 === j4 ? void 0 : j4.platformName) || "unknown";
D3 > 0 && D3 >= C[M4] && (null === (w6 = s4()) || void 0 === w6 ? void 0 : w6.appEnv.isMp) && (k4 = new E5(I));
var F3 = k4;

// node_modules/zmp-sdk/apis/apis/setStorage.js
var p9 = [Me({ data: ot.record(ke(), ot.any()) }).optional()];
function u10(t40) {
  return c9.apply(this, arguments);
}
function c9() {
  return c9 = t6(function(r33) {
    return e15(this, function(o17) {
      return [2, a9("setStorage", p9, [r33], (e46 = t6(function(t40) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp || o10.isMpWeb ? [4, F3.putDataToStorage(t40.data)] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return [2, Promise.reject(o11("setStorage", {}))];
          }
        });
      }), function(t40) {
        return e46.apply(this, arguments);
      }))];
      var e46;
    });
  }), c9.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/getStorage.js
var p10 = [Me({ keys: ot.array(ke()) }).optional()];
function u11(r33) {
  return c10.apply(this, arguments);
}
function c10() {
  return c10 = t6(function(t40) {
    return e15(this, function(o17) {
      return [2, a9("getStorage", p10, [t40], (e46 = t6(function(r33) {
        return e15(this, function(t41) {
          switch (t41.label) {
            case 0:
              return o10.isMp || o10.isMpWeb ? [4, F3.getDataFromStorage(r33.keys)] : [3, 2];
            case 1:
              return [2, t41.sent()];
            case 2:
              return [2, Promise.reject(o11("getStorage", {}))];
          }
        });
      }), function(r33) {
        return e46.apply(this, arguments);
      }))];
      var e46;
    });
  }), c10.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/getStorageInfo.js
function i6(r33) {
  return m12.apply(this, arguments);
}
function m12() {
  return (m12 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("getStorageInfo", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp || o10.isMpWeb ? [4, F3.getStorageInfo()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return [2, Promise.reject(o11("getStorageInfo", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/removeStorage.js
var p11 = [Me({ keys: ot.array(ke()) }).optional()];
function u12(r33) {
  return c11.apply(this, arguments);
}
function c11() {
  return c11 = t6(function(o17) {
    return e15(this, function(e46) {
      return [2, a9("removeStorage", p11, [o17], (t40 = t6(function(r33) {
        return e15(this, function(o18) {
          switch (o18.label) {
            case 0:
              return o10.isMp || o10.isMpWeb ? [4, F3.removeDataFromStorage(r33.keys)] : [3, 2];
            case 1:
              return [2, o18.sent()];
            case 2:
              return [2, Promise.reject(o11("removeStorage", {}))];
          }
        });
      }), function(r33) {
        return t40.apply(this, arguments);
      }))];
      var t40;
    });
  }), c11.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/clearStorage.js
var m13 = [Me({ prefix: ke().optional() }).optional()];
function c12(r33) {
  return p12.apply(this, arguments);
}
function p12() {
  return (p12 = t6(function(o17) {
    return e15(this, function(e46) {
      return [2, a9("clearStorage", m13, [o17], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp || o10.isMpWeb ? [4, F3.clearStorage()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return [2, Promise.reject(o11("clearStorage", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getUserInfo.js
var a11;
var c13 = (a11 = t6(function(a37, c40) {
  var u48, d18, m51, f14;
  return e15(this, function(v8) {
    switch (v8.label) {
      case 0:
        return (d18 = c40) ? [3, 2] : [4, C2()];
      case 1:
        d18 = !v8.sent(), v8.label = 2;
      case 2:
        return u48 = d18, [4, w2.getAccessToken(u48)];
      case 3:
        return m51 = v8.sent(), f14 = "id,name,user_id_by_oa,is_sensitive", f14 = a37 ? "".concat(f14, ",picture.type(").concat(a37, ")") : "".concat(f14, ",picture"), [4, fetch("".concat(i.GET_USER_INFO, "?fields=").concat(f14, "&miniapp_id=").concat(I), { headers: { access_token: m51 || "" } }).then(function() {
          var n25 = t6(function(e46) {
            var n26, t40, r33, i46, a38, c41;
            return e15(this, function(l27) {
              switch (l27.label) {
                case 0:
                  return [4, e46.json()];
                case 1:
                  if (r33 = l27.sent(), void 0 !== (i46 = null == r33 ? void 0 : r33.error) && i46 < 0) throw a38 = (null == r33 ? void 0 : r33.message) || s.UNKNOWN_ERROR, new n5(i46, a38);
                  return c41 = null == r33 ? void 0 : r33.user_id_by_oa, [2, { id: null == r33 ? void 0 : r33.id, name: (null == r33 ? void 0 : r33.name) || "", avatar: (null == r33 || null === (n26 = r33.picture) || void 0 === n26 || null === (t40 = n26.data) || void 0 === t40 ? void 0 : t40.url) || "", idByOA: c41, followedOA: !!(null == r33 ? void 0 : r33.is_follower), isSensitive: null == r33 ? void 0 : r33.is_sensitive }];
              }
            });
          });
          return function(e46) {
            return n25.apply(this, arguments);
          };
        }())];
      case 4:
        return [2, v8.sent()];
    }
  });
}), function(e46, n25) {
  return a11.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/getUserInfo.js
var m14 = [Me({ avatarType: ot.enum(["small", "normal", "large"]).optional(), autoRequestPermission: ot.boolean().default(false).optional() }).optional()];
function u13(e46) {
  return l9.apply(this, arguments);
}
function l9() {
  return l9 = t6(function(r33) {
    return e15(this, function(o17) {
      return [2, a9("getUserInfo", m14, [r33], (u48 = t6(function(e46) {
        var r34, o18, s31;
        return e15(this, function(i46) {
          switch (i46.label) {
            case 0:
              if (!o10.isMp) return [3, 4];
              r34 = null == e46 ? void 0 : e46.avatarType, o18 = null == e46 ? void 0 : e46.autoRequestPermission, i46.label = 1;
            case 1:
              return i46.trys.push([1, 3, , 4]), [4, c13(r34, o18)];
            case 2:
              return [2, { userInfo: i46.sent() }];
            case 3:
              return s31 = i46.sent(), [2, Promise.reject(s31)];
            case 4:
              return o10.isMpWeb ? [2, Promise.resolve({ userInfo: { id: "3368637342326461234", name: "User Name", avatar: "https://h5.zdn.vn/static/images/avatar.png" } })] : [2, Promise.reject(o11("getUserInfo", {}))];
          }
        });
      }), function(e46) {
        return u48.apply(this, arguments);
      }))];
      var u48;
    });
  }), l9.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getNetworkType.js
var t22 = function(e46) {
  return { NONE: e46 ? -2 : 0, WIFI: e46 ? 0 : 1, "2G": 2, "3G": e46 ? 15 : 2, "4G": e46 ? 13 : 2 };
};
var i7 = t6(function() {
  return e15(this, function(e46) {
    return [2, new Promise(function(e47, o17) {
      a8("WEBVIEW_NETWORKTYPE", { url: window.location.href, featureId: "" }, { success: function(n25) {
        var o18, i46, a37, u48 = n25.network, c40 = (null === (o18 = s4()) || void 0 === o18 || null === (i46 = o18.platform) || void 0 === i46 ? void 0 : i46.isAndroid) || false;
        switch (u48) {
          case t22(c40).NONE:
            a37 = e7.none;
            break;
          case t22(c40).WIFI:
            a37 = e7.wifi;
            break;
          case t22(c40)["2G"]:
          case t22(c40)["3G"]:
          case t22(c40)["4G"]:
            a37 = e7.cellular;
            break;
          default:
            a37 = e7.unknown;
        }
        e47(a37);
      }, fail: function(e48) {
        o17(e48);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/getNetworkType.js
function a12(e46) {
  return c14.apply(this, arguments);
}
function c14() {
  return (c14 = t6(function(a37) {
    return e15(this, function(c40) {
      return [2, a9("getNetworkType", [], [a37], t6(function() {
        var e46, t40;
        return e15(this, function(i46) {
          switch (i46.label) {
            case 0:
              return o10.isMp ? [4, i7()] : [3, 2];
            case 1:
              return [2, { networkType: i46.sent() }];
            case 2:
              if (o10.isMpWeb) {
                switch (e46 = navigator.connection || navigator.mozConnection || navigator.webkitConnection, e46.effectiveType) {
                  case "none":
                    t40 = e7.none;
                    break;
                  case "4g":
                    t40 = e7.wifi;
                    break;
                  case "3g":
                  case "2g":
                    t40 = e7.cellular;
                    break;
                  default:
                    t40 = e7.unknown;
                }
                return [2, Promise.resolve({ networkType: t40 })];
              }
              return [2, Promise.reject(o11("getNetworkType", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/onNetworkStatusChange.js
function o13(o17) {
  h3.getInstance().on(o5.NetworkChanged, function(t40) {
    var n25 = null == t40 ? void 0 : t40.state;
    i7().then(function(t41) {
      o17({ isConnected: "CONNECTED" === n25, networkType: t41 });
    });
  });
}

// node_modules/zmp-sdk/apis/apis/onNetworkStatusChange.js
var a13 = [ot.function().args(Me({ isConnected: ot.boolean(), networkType: ot.enum(["none", "wifi", "cellular", "unknown"]) })).returns(ot.void())];
function s8(n25) {
  return a9("onNetworkStatusChange", a13, [n25], function(n26) {
    var e46 = n26;
    if (o10.isMp) o13(e46);
    else if (o10.isMpWeb) {
      var t40 = navigator.connection || navigator.mozConnection || navigator.webkitConnection, a37 = t40.effectiveType;
      t40.addEventListener("change", function() {
        var n27;
        switch (a37) {
          case "none":
            n27 = e7.none;
            break;
          case "4g":
            n27 = e7.wifi;
            break;
          case "3g":
          case "2g":
            n27 = e7.cellular;
            break;
          default:
            n27 = e7.unknown;
        }
        e46({ isConnected: true, networkType: n27 });
      });
    }
  });
}

// node_modules/zmp-sdk/apis/common/apis/general/startBeaconDiscovery.js
var t23;
var c15 = (t23 = t6(function(n25) {
  var t40, c40, r33, a37, l27, u48;
  return e15(this, function(s31) {
    return u48 = { subaction: 0, scanning_type: u.isNumber(null == n25 ? void 0 : n25.scanningType) ? n25.scanningType : 0, data: { scan_from_source: u.isString(null == n25 ? void 0 : n25.scanFromSource) ? n25.scanFromSource : "", expire: u.isNumber(null == n25 ? void 0 : n25.expire) ? n25.expire : 3e3, monitor_interval: u.isNumber(null == n25 ? void 0 : n25.monitorInterval) ? n25.monitorInterval : 60, domain: u.isString(null == n25 ? void 0 : n25.domain) ? n25.domain : "", scan_config: { scan_time: u.isNumber(null == n25 || null === (t40 = n25.scanConfig) || void 0 === t40 ? void 0 : t40.scanTime) ? n25.scanConfig.scanTime : 15e3, time_between_scan: u.isNumber(null == n25 || null === (c40 = n25.scanConfig) || void 0 === c40 ? void 0 : c40.timeBetweenScan) ? n25.scanConfig.timeBetweenScan : 1e4, beacon_timeout: u.isNumber(null == n25 || null === (r33 = n25.scanConfig) || void 0 === r33 ? void 0 : r33.beaconTimeout) ? n25.scanConfig.beaconTimeout : 3e4, delayCheckConnectedTimeout: u.isNumber(null == n25 || null === (a37 = n25.scanConfig) || void 0 === a37 ? void 0 : a37.delayCheckConnectedTimeout) ? n25.scanConfig.delayCheckConnectedTimeout : 5e3, beaconConnectedTimeout: u.isNumber(null == n25 || null === (l27 = n25.scanConfig) || void 0 === l27 ? void 0 : l27.beaconConnectedTimeout) ? n25.scanConfig.beaconConnectedTimeout : 6e5 }, items: Array.isArray(null == n25 ? void 0 : n25.items) ? null == n25 ? void 0 : n25.items : [] } }, [2, new Promise(function(n26, i46) {
      a8("SCAN_IBEACON", t9({}, u48), { success: function() {
        n26(true);
      }, fail: function(n27) {
        i46(n27);
      } }, {});
    })];
  });
}), function(n25) {
  return t23.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/startBeaconDiscovery.js
var m15 = [Me({ scanningType: ot.number().refine(function(o17) {
  return [0, 1].includes(o17);
}, { message: "The type must be either 0 or 1" }).default(0).optional(), expire: ot.number().optional(), monitorInterval: ot.number().optional(), domain: ot.string().optional(), scanConfig: Me({ scanTime: ot.number().optional(), timeBetweenScan: ot.number().optional(), beaconTimeout: ot.number().optional(), delayCheckConnectedTimeout: ot.number().optional(), beaconConnectedTimeout: ot.number().optional() }).optional(), items: ot.array(Me({ id: ot.string().optional(), distance: ot.number().optional(), monitor: Me({ enable: ot.boolean().optional(), movingRange: ot.number().optional() }).optional() })).optional(), scanFromSource: ot.string().optional() }).optional()];
function p13(o17) {
  return c16.apply(this, arguments);
}
function c16() {
  return (c16 = t6(function(n25) {
    return e15(this, function(e46) {
      return [2, a9("startBeaconDiscovery", m15, [n25], t6(function() {
        return e15(this, function(o17) {
          switch (o17.label) {
            case 0:
              return o10.isMp ? [4, c15(n25)] : [3, 2];
            case 1:
              return [2, o17.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve(true)] : [2, Promise.reject(o11("startBeaconDiscovery", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/stopBeaconDiscovery.js
var t24 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, n25) {
      a8("SCAN_IBEACON", { subaction: 2 }, { success: function() {
        o18(true);
      }, fail: function(o19) {
        n25(o19);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/stopBeaconDiscovery.js
function i8(o17) {
  return c17.apply(this, arguments);
}
function c17() {
  return (c17 = t6(function(i46) {
    return e15(this, function(c40) {
      return [2, a9("stopBeaconDiscovery", [], [i46], t6(function() {
        return e15(this, function(o17) {
          switch (o17.label) {
            case 0:
              return o10.isMp ? [4, t24()] : [3, 2];
            case 1:
              return [2, o17.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve(true)] : [2, Promise.reject(o11("stopBeaconDiscovery", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getBeacons.js
var i9 = t6(function() {
  return e15(this, function(s31) {
    return [2, new Promise(function(s32, o17) {
      a8("SCAN_IBEACON", { subaction: 1 }, { success: function(r33) {
        var o18 = { beacons: [] };
        Array.isArray(r33) && r33.forEach(function(s33) {
          var r34 = { uuid: s33.uuid, major: s33.major, minor: s33.minor, distance: s33.distance, rssi: s33.rssi };
          o18.beacons.push(r34);
        }), s32(o18);
      }, fail: function(s33) {
        o17(s33);
      } }, { isMultiCallback: true });
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/getBeacons.js
function i10(e46) {
  return c18.apply(this, arguments);
}
function c18() {
  return (c18 = t6(function(i46) {
    return e15(this, function(c40) {
      return [2, a9("getBeacons", [], [i46], t6(function() {
        return e15(this, function(e46) {
          switch (e46.label) {
            case 0:
              return o10.isMp ? [4, i9()] : [3, 2];
            case 1:
              return [2, e46.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ beacons: [] })] : [2, Promise.reject(o11("getBeacons", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/closeApp.js
var e22 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, n25) {
      a8("WINDOW_CLOSE", {}, { success: function(s31) {
        o18(s31);
      }, fail: function(o19) {
        n25(o19);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/closeApp.js
function i11(r33) {
  return p14.apply(this, arguments);
}
function p14() {
  return (p14 = t6(function(i46) {
    return e15(this, function(p46) {
      return [2, a9("closeApp", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, e22()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("closeApp", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/scanQRCode.js
var e23 = t6(function() {
  return e15(this, function(n25) {
    return [2, new Promise(function(n26, o17) {
      a8("OPEN_QR", { skipOpenLink: true }, { success: function(s31) {
        n26(s31);
      }, fail: function(n27) {
        o17(n27);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/scanQRCode.js
function i12(o17) {
  return c19.apply(this, arguments);
}
function c19() {
  return (c19 = t6(function(i46) {
    return e15(this, function(c40) {
      return [2, a9("scanQRCode", [], [i46], t6(function() {
        return e15(this, function(o17) {
          switch (o17.label) {
            case 0:
              return o10.isMp ? [4, e23()] : [3, 2];
            case 1:
              return [2, o17.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ content: "" })] : [2, Promise.reject(o11("scanQRCode", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openProfile.js
var e24;
var i13 = (e24 = t6(function(o17, e46, i46, u48) {
  return e15(this, function(n25) {
    return [2, new Promise(function(n26, c40) {
      a8("OPEN_PROFILE", { uId: o17, type: i2[e46], zapp: a3, sourceId: i46, sourceIndex: u48 }, { success: function() {
        n26();
      }, fail: function(o18) {
        c40(o18);
      } }, {});
    })];
  });
}), function(o17, s31, t40, n25) {
  return e24.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openProfile.js
var a14 = [Me({ id: ke(), type: ot.enum(["user", "oa", "aliasOA"]), sourceId: ot.any().optional(), sourceIndex: ot.any().optional() }).optional()];
function m16(o17) {
  return c20.apply(this, arguments);
}
function c20() {
  return c20 = t6(function(r33) {
    return e15(this, function(e46) {
      return [2, a9("openProfile", a14, [r33], (n25 = t6(function(o17) {
        var r34, e47, n26, i46;
        return e15(this, function(u48) {
          switch (u48.label) {
            case 0:
              return o10.isMp ? (r34 = o17.id, e47 = o17.type, n26 = o17.sourceId, i46 = o17.sourceIndex, [4, i13(r34, e47, n26, i46)]) : [3, 2];
            case 1:
              return [2, u48.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openProfile", {}))];
          }
        });
      }), function(o17) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), c20.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openChat.js
var r19;
var i14 = (r19 = t6(function(o17, r33) {
  var i46, u48, m51, c40 = arguments;
  return e15(this, function(s31) {
    return i46 = c40.length > 2 && void 0 !== c40[2] ? c40[2] : "", u48 = c40.length > 3 ? c40[3] : void 0, m51 = c40.length > 4 ? c40[4] : void 0, [2, new Promise(function(s32, c41) {
      a8("OPEN_CHAT", { uId: o17, type: t8[r33], msg: i46, zapp: a3, sourceId: u48, sourceIndex: m51 }, { success: function() {
        s32();
      }, fail: function(o18) {
        c41(o18);
      } }, {});
    })];
  });
}), function(o17, t40) {
  return r19.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openChat.js
var m17 = [Me({ id: ke(), type: ot.enum(["user", "oa"]), sourceId: ot.any().optional(), sourceIndex: ot.any().optional(), message: ke().optional() }).optional()];
function u14(o17) {
  return c21.apply(this, arguments);
}
function c21() {
  return c21 = t6(function(e46) {
    return e15(this, function(r33) {
      return [2, a9("openChat", m17, [e46], (n25 = t6(function(o17) {
        var e47, r34, n26, i46, m51;
        return e15(this, function(p46) {
          switch (p46.label) {
            case 0:
              return o10.isMp ? (e47 = o17.id, r34 = o17.type, n26 = o17.message, i46 = o17.sourceId, m51 = o17.sourceIndex, [4, i14(e47, r34, n26, i46, m51)]) : [3, 2];
            case 1:
              return [2, p46.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openChat", {}))];
          }
        });
      }), function(o17) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), c21.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/external/@swc/helpers/src/_object_spread_props.mjs.js
function e25(e46, t40) {
  return t40 = null != t40 ? t40 : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e46, Object.getOwnPropertyDescriptors(t40)) : function(e47, t41) {
    var r33 = Object.keys(e47);
    if (Object.getOwnPropertySymbols) {
      var n25 = Object.getOwnPropertySymbols(e47);
      t41 && (n25 = n25.filter(function(t42) {
        return Object.getOwnPropertyDescriptor(e47, t42).enumerable;
      })), r33.push.apply(r33, n25);
    }
    return r33;
  }(Object(t40)).forEach(function(r33) {
    Object.defineProperty(e46, r33, Object.getOwnPropertyDescriptor(t40, r33));
  }), e46;
}

// node_modules/zmp-sdk/apis/common/apis/general/openPostFeed.js
var n15;
var u15 = (n15 = t6(function(o17, n25) {
  var u48, a37;
  return e15(this, function(r33) {
    switch (u48 = {}, a37 = o17, o17) {
      case "image":
        (null == n25 ? void 0 : n25.imageUrls) ? (a37 = "multi_image", u48 = { photoUrl: null == n25 ? void 0 : n25.imageUrls }) : u48 = { photoUrl: null == n25 ? void 0 : n25.imageUrl };
        break;
      case "link":
        u48 = { link: null == n25 ? void 0 : n25.link, title: null == n25 ? void 0 : n25.title, thumb: null == n25 ? void 0 : n25.thumb, description: null == n25 ? void 0 : n25.description };
        break;
      case "profile":
        u48 = { avt: null == n25 ? void 0 : n25.avatar, uid: null == n25 ? void 0 : n25.id, dpn: null == n25 ? void 0 : n25.displayName };
    }
    return [2, new Promise(function(o18, r34) {
      a8("OPEN_POSTFEED", e25(t9({ type: c2[a37] }, u48), { zapp: a3 }), { success: function(s31) {
        o18({ status: null == s31 ? void 0 : s31.status, shareType: null == s31 ? void 0 : s31.share_type, numberOfUser: null == s31 ? void 0 : s31.uid_to_size });
      }, fail: function(o19) {
        r34(o19);
      } }, {});
    })];
  });
}), function(o17, s31) {
  return n15.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openPostFeed.js
var m18 = [ot.union([Me({ type: ot.enum(["image"]), data: Me({ imageUrl: ke().url().optional(), imageUrls: ot.array(ke().url()).optional() }) }), Me({ type: ot.enum(["link"]), data: Me({ link: ke().url(), title: ke().max(100).optional(), thumb: ke().url().optional(), description: ke().max(400).default("").optional() }) }), Me({ type: ot.enum(["profile"]), data: Me({ id: ke().optional() }) })])];
function u16(e46) {
  return l10.apply(this, arguments);
}
function l10() {
  return l10 = t6(function(t40) {
    return e15(this, function(o17) {
      return [2, a9("openPostFeed", m18, [t40], (r33 = t6(function(e46) {
        var t41, o18;
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? (t41 = e46.type, o18 = e46.data, [4, u15(t41, o18)]) : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ status: 1, shareType: 0, numberOfUser: 0 })] : [2, Promise.reject(o11("openPostFeed", {}))];
          }
        });
      }), function(e46) {
        return r33.apply(this, arguments);
      }))];
      var r33;
    });
  }), l10.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/followOA.js
var r20;
var e26 = (r20 = t6(function(o17) {
  return e15(this, function(s31) {
    return [2, new Promise(function(s32, r33) {
      a8("FOLLOW_OA", { uid: o17, showDialogConfirm: true, forceUpdate: true, zapp: a3 }, { success: function(o18) {
        s32(o18);
      }, fail: function(o18) {
        r33(o18);
      } }, { timeout: false });
    })];
  });
}), function(o17) {
  return r20.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/followOA.js
var a15 = [Me({ id: ke(), showDialogConfirm: ot.boolean().optional() }).optional()];
function p15(o17) {
  return u17.apply(this, arguments);
}
function u17() {
  return u17 = t6(function(r33) {
    return e15(this, function(t40) {
      return [2, a9("followOA", a15, [r33], (n25 = t6(function(o17) {
        var r34;
        return e15(this, function(t41) {
          switch (t41.label) {
            case 0:
              return o10.isMp ? (r34 = o17.id, [4, e26(r34)]) : [3, 2];
            case 1:
              return [2, t41.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("followOA", {}))];
          }
        });
      }), function(o17) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), u17.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/unfollowOA.js
var r21;
var e27 = (r21 = t6(function(o17) {
  return e15(this, function(s31) {
    return [2, new Promise(function(s32, r33) {
      a8("UNFOLLOW_OA", { uid: o17, forceUpdate: true, zapp: a3 }, { success: function() {
        s32();
      }, fail: function(o18) {
        r33(o18);
      } }, {});
    })];
  });
}), function(o17) {
  return r21.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/unfollowOA.js
var u18 = [Me({ id: ke() }).optional()];
function l11(o17) {
  return p16.apply(this, arguments);
}
function p16() {
  return p16 = t6(function(r33) {
    return e15(this, function(n25) {
      return [2, a9("unfollowOA", u18, [r33], (l27 = t6(function(o17) {
        var r34;
        return e15(this, function(n26) {
          switch (n26.label) {
            case 0:
              return o10.isMp ? (r34 = o17.id, [4, e27(r34)]) : [3, 2];
            case 1:
              return [2, n26.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("unfollowOA", {}))];
          }
        });
      }), function(o17) {
        return l27.apply(this, arguments);
      }))];
      var l27;
    });
  }), p16.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getZMPShareInfo.js
var d8;
var i15 = (d8 = t6(function(e46, d18, i46, p46, h13, l27) {
  var m51, u48, w7, _10, f14, P3, j9, v8;
  return e15(this, function(c40) {
    switch (c40.label) {
      case 0:
        return w7 = new URL(location.href), _10 = new URLSearchParams(), f14 = "".concat(w7.pathname.replace(O, "")).concat(w7.search), l27 && (f14 = "/".concat(e46).concat("/" === l27[0] ? "" : "/").concat(l27)), !(P3 = new URL("".concat(T).concat(f14))).searchParams.has("env") && (null === (m51 = window.APP_ENV) || void 0 === m51 ? void 0 : m51.length) > 0 && P3.searchParams.set("env", window.APP_ENV), !P3.searchParams.has("version") && (null === (u48 = window.APP_VERSION) || void 0 === u48 ? void 0 : u48.length) > 0 && P3.searchParams.set("version", window.APP_VERSION), _10.append("title", i46), _10.append("description", p46 || ""), _10.append("thumbnail", h13 || ""), _10.append("url", P3.href), _10.append("accessToken", d18 || ""), j9 = { headers: { "Content-Type": "application/x-www-form-urlencoded" } }, [4, fetch(i.CREATE_SHARE_LINK, t9({ method: "POST", body: _10 }, j9))];
      case 1:
        return [4, c40.sent().json()];
      case 2:
        if (!(v8 = c40.sent()) || 0 !== v8.err) throw d5.error.cannotGetShareInfo();
        return P3.search = "".concat(P3.search, "&zshareId=").concat(v8.data.shareId), [2, e25(t9({}, v8.data), { shareableLink: P3.href })];
    }
  });
}), function(e46, r33, s31, a37, n25, o17) {
  return d8.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/common/apis/general/openShareSheet.js
var p17;
var h7 = (p17 = t6(function(e46, p46) {
  var h13, v8, f14, g9, _10, j9, U3, w7, b8, I6, k5;
  return e15(this, function(d18) {
    switch (d18.label) {
      case 0:
        switch (h13 = {}, v8 = e46, e46) {
          case "text":
            return [3, 1];
          case "image":
            return [3, 2];
          case "gif":
            return [3, 3];
          case "video":
            return [3, 4];
          case "link":
            return [3, 5];
          case "oa":
            return [3, 6];
          case "zmp":
            return [3, 7];
          case "zmp_deep_link":
            return [3, 10];
        }
        return [3, 13];
      case 1:
        return h13 = { text: null == p46 ? void 0 : p46.text, desc: (null == p46 ? void 0 : p46.desc) || (null == p46 ? void 0 : p46.description), autoParseLink: (null == p46 ? void 0 : p46.autoParseLink) ? 1 : 0 }, [3, 14];
      case 2:
        return _10 = [], j9 = m3(), U3 = (null === (g9 = s4()) || void 0 === g9 ? void 0 : g9.platformName) || "unknown", Number(j9) >= L[U3] && (v8 = "multi_image"), Array.isArray(null == p46 ? void 0 : p46.imageUrls) && (null == p46 ? void 0 : p46.imageUrls.length) > 0 ? _10 = null == p46 ? void 0 : p46.imageUrls : _10.push(null == p46 ? void 0 : p46.imageUrl), h13 = { photoUrls: _10, photoUrl: null == p46 ? void 0 : p46.imageUrl, caption: null == p46 ? void 0 : p46.caption }, [3, 14];
      case 3:
        return h13 = { photoUrl: null == p46 ? void 0 : p46.imageUrl, gifUrl: null == p46 ? void 0 : p46.gifUrl, width: null == p46 ? void 0 : p46.width, height: null == p46 ? void 0 : p46.height }, [3, 14];
      case 4:
        return h13 = { videoThumb: null == p46 ? void 0 : p46.videoThumb, videoUrl: null == p46 ? void 0 : p46.videoUrl, width: null == p46 ? void 0 : p46.width, height: null == p46 ? void 0 : p46.height }, [3, 14];
      case 5:
        return h13 = { link: null == p46 ? void 0 : p46.link, chatOnly: (null == p46 ? void 0 : p46.chatOnly) ? 1 : 0 }, [3, 14];
      case 6:
        return h13 = { uid: null == p46 ? void 0 : p46.id }, [3, 14];
      case 7:
      case 10:
        return [4, w2.getAccessToken()];
      case 8:
      case 11:
        return f14 = d18.sent(), [4, i15(I, f14 || "", (null == p46 ? void 0 : p46.title) || "", (null == p46 ? void 0 : p46.description) || "", (null == p46 ? void 0 : p46.thumbnail) || "", null == p46 ? void 0 : p46.path)];
      case 9:
        return w7 = d18.sent(), h13 = { data: { ZInstantAPIInfo: { url: "".concat(w7.zinstantApi), zinstantdata_id: "templateId=".concat(w7.ztemplateId, "&appId=").concat(I, "&shareId=").concat(w7.shareId) }, previewMsgText: { msg: { en: "Zalo Mini Program", vi: "Chương trình nhỏ" } }, enableReactions: 1 } }, [3, 14];
      case 12:
        return b8 = d18.sent().shareableLink, I6 = new URL(b8), k5 = I6.searchParams.getAll("zshareId"), I6.searchParams.delete("zshareId"), k5.length > 0 && I6.searchParams.append("zshareId", k5[0]), h13 = { link: I6.href, chatOnly: 0 }, [3, 14];
      case 13:
        return [3, 14];
      case 14:
        return [2, new Promise(function(e47, i46) {
          a8("OPEN_SHARESHEET", e25(t9({ type: u3[v8] }, h13), { zapp: a3 }), { success: function(r33) {
            e47({ status: null == r33 ? void 0 : r33.status, shareType: null == r33 ? void 0 : r33.share_type, numberOfUser: null == r33 ? void 0 : r33.uid_to_size });
          }, fail: function(e48) {
            i46(e48);
          } }, { timeout: false });
        })];
    }
  });
}), function(e46, r33) {
  return p17.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openShareSheet.js
var s9 = [ot.union([Me({ type: ot.enum(["text"]), data: Me({ text: ke(), description: ke().default("").optional(), autoParseLink: ot.boolean().default(false).optional() }) }), Me({ type: ot.enum(["image"]), data: Me({ imageUrl: ke().url().optional(), imageUrls: ot.array(ke().url()).max(10).optional() }) }), Me({ type: ot.enum(["link"]), data: Me({ link: ke().url(), chatOnly: ot.boolean().optional() }) }), Me({ type: ot.enum(["oa"]), data: Me({ id: ke() }) }), Me({ type: ot.enum(["gif"]), data: Me({ gifUrl: ke().url(), imageUrl: ke().url().optional(), width: we().min(0).optional(), height: we().min(0).optional() }) }), Me({ type: ot.enum(["video"]), data: Me({ videoThumb: ke().url(), videoUrl: ke().url(), width: we().min(0).optional(), height: we().min(0).optional() }) }), Me({ type: ot.enum(["zmp", "zmp_deep_link"]), data: Me({ title: ke().max(100), thumbnail: ke().url(), path: ke().optional(), description: ke().max(400).default("").optional() }) })])];
function u19(e46) {
  return d9.apply(this, arguments);
}
function d9() {
  return d9 = t6(function(t40) {
    return e15(this, function(o17) {
      return [2, a9("openShareSheet", s9, [t40], (n25 = t6(function(e46) {
        var t41, o18;
        return e15(this, function(n26) {
          switch (n26.label) {
            case 0:
              return o10.isMp ? (t41 = e46.type, o18 = e46.data, [4, h7(t41, o18)]) : [3, 2];
            case 1:
              return [2, n26.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ status: 2, shareType: 0, numberOfUser: 0 })] : [2, Promise.reject(o11("openShareSheet", {}))];
          }
        });
      }), function(e46) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), d9.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/requestCameraPermission.js
var s10 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, r33) {
      a8("REQUEST_PERMISSION_CAMERA", {}, { success: function(e46) {
        var r34, s31;
        (null === (r34 = s4()) || void 0 === r34 || null === (s31 = r34.platform) || void 0 === s31 ? void 0 : s31.isAndroid) ? o18({ userAllow: void 0 === e46.error_code || (null == e46 ? void 0 : e46.error_code) >= 0, message: void 0 === e46.error_code ? "User allowed" : null == e46 ? void 0 : e46.error_message }) : o18({ userAllow: (null == e46 ? void 0 : e46.error_code) >= 0, message: null == e46 ? void 0 : e46.error_message });
      }, fail: function(e46) {
        var s31, i46;
        (null === (s31 = s4()) || void 0 === s31 || null === (i46 = s31.platform) || void 0 === i46 ? void 0 : i46.isAndroid) && "number" == typeof (null == e46 ? void 0 : e46.code) ? o18({ userAllow: (null == e46 ? void 0 : e46.code) >= 0, message: null == e46 ? void 0 : e46.message }) : r33(e46);
      } }, { isMultiCallback: true });
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/requestCameraPermission.js
function n16(r33) {
  return o14.apply(this, arguments);
}
function o14() {
  return (o14 = t6(function(n25) {
    return e15(this, function(o17) {
      return [2, a9("requestCameraPermission", [], [n25], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return [4, s10()];
            case 1:
              return [2, r33.sent()];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/createAndroidShortcut.js
var r22;
var s11 = (r22 = t6(function(n25, r33, s31) {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, e46) {
      a8("CREATE_SHORTCUT", { url: n25, title: r33, iconUrl: s31 }, { success: function(n26) {
        o18(n26);
      }, fail: function(n26) {
        e46(n26);
      } }, {});
    })];
  });
}), function(n25, t40, o17) {
  return r22.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/common/apis/general/getAppInfo.js
var n17 = t6(function() {
  var s31, n25, i46, m51 = arguments;
  return e15(this, function(e46) {
    switch (e46.label) {
      case 0:
        return s31 = m51.length > 0 && void 0 !== m51[0] ? m51[0] : I, n25 = m51.length > 1 && void 0 !== m51[1] ? m51[1] : 0, i46 = r15(), [4, u5(s31, n25, i46.version)];
      case 1:
        return [2, e46.sent()];
    }
  });
});

// node_modules/zmp-sdk/apis/common/apis/general/openOutApp.js
var s12;
var t25 = (s12 = t6(function(n25) {
  return e15(this, function(r33) {
    return [2, new Promise(function(r34, s31) {
      a8("OPEN_OUTAPP", { url: n25 }, { success: function() {
        r34();
      }, fail: function(n26) {
        s31(n26);
      } }, {});
    })];
  });
}), function(n25) {
  return s12.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/createShortcut.js
var h8 = [Me({ params: ot.record(ke(), ke()).optional() }).optional()];
function g5(o17) {
  return v5.apply(this, arguments);
}
function v5() {
  return v5 = t6(function(t40) {
    return e15(this, function(r33) {
      return [2, a9("createShortcut", h8, [t40], (e46 = t6(function(o17) {
        var t41, r34, e47, m51, h13, g9, v8, _10;
        return e15(this, function(f14) {
          switch (f14.label) {
            case 0:
              return o10.isMp ? [4, n17(I, 0)] : [3, 6];
            case 1:
              return e47 = f14.sent(), m51 = null === (t41 = s4()) || void 0 === t41 || null === (r34 = t41.platform) || void 0 === r34 ? void 0 : r34.isIOS, h13 = e47.logoUrl || h4("og:image:url") || "", g9 = e47.name || document.title, (v8 = (null == o17 ? void 0 : o17.params) ? new URLSearchParams(null == o17 ? void 0 : o17.params) : new URLSearchParams()).append("utm_source", "zalo-shortcut"), v8.append("utm_medium", "default"), v8.append("utm_campaign", "default"), m51 ? (v8.append("appId", I), v8.append("appName", g9), v8.append("appIcon", h13), _10 = "https://mini.zalo.me/shortcut.html?".concat(v8.toString()), [4, t25(encodeURI(_10))]) : [3, 3];
            case 2:
              return f14.sent(), [3, 5];
            case 3:
              return [4, s11("".concat(T, "/").concat(I, "/?").concat(v8.toString()), g9, h13)];
            case 4:
              f14.sent(), f14.label = 5;
            case 5:
              return [2, d5.success()];
            case 6:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("createShortcut", {}))];
          }
        });
      }), function(o17) {
        return e46.apply(this, arguments);
      }))];
      var e46;
    });
  }), v5.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openBioAuthentication.js
var i16;
var l12 = (i16 = t6(function(e46, i46, l27) {
  return e15(this, function(n25) {
    return [2, new Promise(function(n26, r33) {
      a8("PROMPT_AUTHENTICATION", { secret_data: e46, app_id: a3, ui: { title: null == i46 ? void 0 : i46.title, sub_title: null == i46 ? void 0 : i46.subTitle, negative_text: null == i46 ? void 0 : i46.negativeButtonText }, require_fingerprint: l27 ? 1 : 0 }, { success: function(e47) {
        var o17, t40, i47, l28;
        n26({ code: null == e47 ? void 0 : e47.error_code, message: null == e47 ? void 0 : e47.error_message, data: { domain: null == e47 || null === (o17 = e47.data) || void 0 === o17 ? void 0 : o17.domain, code: null == e47 || null === (t40 = e47.data) || void 0 === t40 ? void 0 : t40.error_code, message: null == e47 || null === (i47 = e47.data) || void 0 === i47 ? void 0 : i47.error_message, payToken: null == e47 || null === (l28 = e47.data) || void 0 === l28 ? void 0 : l28.pay_token } });
      }, fail: function(e47) {
        r33(e47);
      } }, {});
    })];
  });
}), function(e46, o17, t40) {
  return i16.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openBioAuthentication.js
var c22 = [Me({ secretData: ke(), ui: Me({ title: ke().default("Xác thực").optional(), subTitle: ke().default("Sử dụng sinh trắc học của bạn để xác thực").optional(), negativeButtonText: ke().default("Đóng").optional() }).optional(), requireFingerprint: Ne().default(true).optional() }).optional()];
function p18(t40) {
  return l13.apply(this, arguments);
}
function l13() {
  return l13 = t6(function(e46) {
    return e15(this, function(o17) {
      return [2, a9("openBioAuthentication", c22, [e46], (n25 = t6(function(t40) {
        var e47, o18, n26;
        return e15(this, function(s31) {
          switch (s31.label) {
            case 0:
              return o10.isMp ? (e47 = t40.secretData, o18 = t40.ui, n26 = t40.requireFingerprint, [4, l12(e47, o18, n26)]) : [3, 2];
            case 1:
              return [2, s31.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ code: 0, message: "OK", data: { domain: "", code: 0, message: "", payToken: "" } })] : [2, Promise.reject(o11("openBioAuthentication", {}))];
          }
        });
      }), function(t40) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), l13.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/checkStateBioAuthentication.js
var e28 = t6(function() {
  return e15(this, function(t40) {
    return [2, new Promise(function(t41, n25) {
      a8("PROMPT_AUTHENTICATION_CHECK_STATE", {}, { success: function(o17) {
        t41(null == o17 ? void 0 : o17.bio_state);
      }, fail: function(t42) {
        n25(t42);
      } }, { actionName: "action.prompt.authentication.check_state" });
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/checkStateBioAuthentication.js
function s13(t40) {
  return c23.apply(this, arguments);
}
function c23() {
  return (c23 = t6(function(s31) {
    return e15(this, function(c40) {
      return [2, a9("checkStateBioAuthentication", [], [s31], t6(function() {
        return e15(this, function(t40) {
          switch (t40.label) {
            case 0:
              return o10.isMp ? [4, e28()] : [3, 2];
            case 1:
              return [2, { bioState: t40.sent() }];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ bioState: "" })] : [2, Promise.reject(o11("checkStateBioAuthentication", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/showToast.js
var s14;
var r23 = (s14 = t6(function(t40) {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, s31) {
      a8("SHOW_TOAST", { toast: t40 }, { success: function() {
        o18();
      }, fail: function(t41) {
        s31(t41);
      } }, {});
    })];
  });
}), function(t40) {
  return s14.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/showToast.js
var a16 = [Me({ message: ke() }).optional()];
function p19(o17) {
  return u20.apply(this, arguments);
}
function u20() {
  return u20 = t6(function(s31) {
    return e15(this, function(r33) {
      return [2, a9("showToast", a16, [s31], (p46 = t6(function(o17) {
        return e15(this, function(s32) {
          switch (s32.label) {
            case 0:
              return o10.isMp ? [4, r23(o17.message)] : [3, 2];
            case 1:
              return [2, s32.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("showToast", {}))];
          }
        });
      }), function(o17) {
        return p46.apply(this, arguments);
      }))];
      var p46;
    });
  }), u20.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/hideKeyboard.js
var e29 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, n25) {
      a8("HIDE_KEYBOARD", {}, { success: function() {
        o18();
      }, fail: function(o19) {
        n25(o19);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/hideKeyboard.js
function i17(r33) {
  return m19.apply(this, arguments);
}
function m19() {
  return (m19 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("hideKeyboard", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, e29()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("hideKeyboard", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openPhone.js
var s15;
var t26 = (s15 = t6(function(n25) {
  return e15(this, function(e46) {
    return [2, new Promise(function(e47, s31) {
      a8("OPEN_PHONE", { phoneNum: n25, phoneCode: n25 }, { success: function() {
        e47();
      }, fail: function(n26) {
        s31(n26);
      } }, {});
    })];
  });
}), function(n25) {
  return s15.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openPhone.js
var p20 = [Me({ phoneNumber: ke() })];
function u21(o17) {
  return c24.apply(this, arguments);
}
function c24() {
  return c24 = t6(function(e46) {
    return e15(this, function(r33) {
      return [2, a9("openPhone", p20, [e46], (u48 = t6(function(o17) {
        return e15(this, function(e47) {
          switch (e47.label) {
            case 0:
              return o10.isMp ? [4, t26(o17.phoneNumber)] : [3, 2];
            case 1:
              return [2, e47.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openPhone", {}))];
          }
        });
      }), function(o17) {
        return u48.apply(this, arguments);
      }))];
      var u48;
    });
  }), c24.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openSMS.js
var e30;
var s16 = (e30 = t6(function(n25, e46) {
  return e15(this, function(t40) {
    return [2, new Promise(function(t41, s31) {
      a8("OPEN_SMS", { content: e46, phoneCode: n25 }, { success: function() {
        t41();
      }, fail: function(n26) {
        s31(n26);
      } }, {});
    })];
  });
}), function(n25, o17) {
  return e30.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openSMS.js
var p21 = [Me({ content: ke(), phoneNumber: ke() })];
function u22(o17) {
  return c25.apply(this, arguments);
}
function c25() {
  return c25 = t6(function(r33) {
    return e15(this, function(e46) {
      return [2, a9("openSMS", p21, [r33], (u48 = t6(function(o17) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? [4, s16(o17.phoneNumber, o17.content)] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openSMS", {}))];
          }
        });
      }), function(o17) {
        return u48.apply(this, arguments);
      }))];
      var u48;
    });
  }), c25.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/viewOAQr.js
var r24;
var e31 = (r24 = t6(function(t40) {
  var r33, e46 = arguments;
  return e15(this, function(s31) {
    return r33 = e46.length > 1 && void 0 !== e46[1] ? e46[1] : "", [2, new Promise(function(s32, e47) {
      a8("VIEW_MYQR", { dpn: r33, uid: t40, zapp: a3 }, { success: function() {
        s32();
      }, fail: function(t41) {
        e47(t41);
      } }, { timeout: false });
    })];
  });
}), function(t40) {
  return r24.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/viewOAQr.js
var a17 = [Me({ id: ke(), displayName: ke().default("").optional() })];
function p22(r33) {
  return u23.apply(this, arguments);
}
function u23() {
  return u23 = t6(function(e46) {
    return e15(this, function(o17) {
      return [2, a9("viewOAQr", a17, [e46], (p46 = t6(function(r33) {
        return e15(this, function(e47) {
          switch (e47.label) {
            case 0:
              return o10.isMp ? [4, e31(r33.id, r33.displayName)] : [3, 2];
            case 1:
              return [2, e47.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("viewOAQr", {}))];
          }
        });
      }), function(r33) {
        return p46.apply(this, arguments);
      }))];
      var p46;
    });
  }), u23.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/keepScreen.js
var s17;
var t27 = (s17 = t6(function(n25) {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, s31) {
      a8("KEEP_SCREEN", { data: { keep_screen_on: n25 ? 1 : 0 } }, { success: function() {
        o18();
      }, fail: function(n26) {
        s31(n26);
      } }, {});
    })];
  });
}), function(n25) {
  return s17.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/keepScreen.js
var p23 = [Me({ keepScreenOn: Ne() })];
function c26(e46) {
  return u24.apply(this, arguments);
}
function u24() {
  return u24 = t6(function(r33) {
    return e15(this, function(n25) {
      return [2, a9("keepScreen", p23, [r33], (c40 = t6(function(e46) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? [4, t27(e46.keepScreenOn)] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("keepScreen", {}))];
          }
        });
      }), function(e46) {
        return c40.apply(this, arguments);
      }))];
      var c40;
    });
  }), u24.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/onKeepScreen.js
function i18(e46) {
  return m20.apply(this, arguments);
}
function m20() {
  return (m20 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("onKeepScreen", [], [i46], t6(function() {
        return e15(this, function(e46) {
          switch (e46.label) {
            case 0:
              return o10.isMp ? [4, t27(true)] : [3, 2];
            case 1:
              return [2, e46.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("onKeepScreen", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/offKeepScreen.js
function i19(e46) {
  return m21.apply(this, arguments);
}
function m21() {
  return (m21 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("offKeepScreen", [], [i46], t6(function() {
        return e15(this, function(e46) {
          switch (e46.label) {
            case 0:
              return o10.isMp ? [4, t27(false)] : [3, 2];
            case 1:
              return [2, e46.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("offKeepScreen", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/saveImageToGallery.js
var n18;
var i20 = (n18 = t6(function(s31, n25, i46) {
  var m51;
  return e15(this, function(t40) {
    return m51 = {}, s31 ? m51 = { imageBase64Data: s31 } : n25 && (m51 = { imageUrl: n25 }), [2, new Promise(function(s32, t41) {
      a8("SAVE_IMAGE_GALLERY", e25(t9({}, m51), { onProgress: i46 }), { success: function() {
        s32();
      }, fail: function(s33) {
        t41(s33);
      } }, {});
    })];
  });
}), function(s31, e46, r33) {
  return n18.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/saveImageToGallery.js
var m22 = [Me({ imageBase64Data: ke().optional(), imageUrl: ke().url().optional() }).optional()];
function l14(e46) {
  return p24.apply(this, arguments);
}
function p24() {
  return p24 = t6(function(r33) {
    return e15(this, function(o17) {
      return [2, a9("saveImageToGallery", m22, [r33], (l27 = t6(function(e46) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? [4, i20(e46.imageBase64Data, e46.imageUrl, e46.onProgress)] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("saveImageToGallery", {}))];
          }
        });
      }), function(e46) {
        return l27.apply(this, arguments);
      }))];
      var l27;
    });
  }), p24.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/saveVideoToGallery.js
var n19;
var t28 = (n19 = t6(function(s31, n25) {
  var t40;
  return e15(this, function(e46) {
    return t40 = { videoUrl: s31, onProgress: n25 }, [2, new Promise(function(s32, e47) {
      a8("SAVE_VIDEO_GALLERY", t9({}, t40), { success: function() {
        s32();
      }, fail: function(s33) {
        e47(s33);
      } }, {});
    })];
  });
}), function(s31, o17) {
  return n19.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/saveVideoToGallery.js
var m23 = [Me({ videoUrl: ke().url() }).optional()];
function a18(o17) {
  return u25.apply(this, arguments);
}
function u25() {
  return u25 = t6(function(r33) {
    return e15(this, function(e46) {
      return [2, a9("saveVideoToGallery", m23, [r33], (a37 = t6(function(o17) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? [4, t28(o17.videoUrl, o17.onProgress)] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("saveVideoToGallery", {}))];
          }
        });
      }), function(o17) {
        return a37.apply(this, arguments);
      }))];
      var a37;
    });
  }), u25.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openMiniApp.js
var a19;
var c27 = (a19 = t6(function(r33) {
  var a37, c40, i46, p46, l27, m51, f14 = arguments;
  return e15(this, function(o17) {
    switch (o17.label) {
      case 0:
        a37 = f14.length > 1 && void 0 !== f14[1] ? f14[1] : "/", c40 = f14.length > 2 && void 0 !== f14[2] ? f14[2] : {}, o17.label = 1;
      case 1:
        return o17.trys.push([1, 3, , 4]), [4, n17(r33, 0)];
      case 2:
        return i46 = o17.sent(), [3, 4];
      case 3:
        return o17.sent(), [3, 4];
      case 4:
        p46 = { appId: r33 }, i46 && (p46.appName = i46.name, p46.appAvtUrl = i46.logoUrl), l27 = "".concat(A, "/").concat(r33).concat(a37);
        try {
          m51 = new URL(l27), Object.entries(c40).forEach(function(r34) {
            var t40 = e6(r34, 2), s31 = t40[0], n25 = t40[1];
            m51.searchParams.append(s31, String(n25));
          }), l27 = m51.href;
        } catch (r34) {
        }
        return [2, new Promise(function(r34, e46) {
          a8("OPEN_MP", { mpUrl: l27, mpInfo: p46 }, { success: function() {
            r34();
          }, fail: function(r35) {
            e46(r35);
          } }, {});
        })];
    }
  });
}), function(r33) {
  return a19.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openMiniApp.js
var m24 = [Me({ appId: ke(), path: ke().optional(), params: ot.record(ke(), ke()).optional() })];
function u26(o17) {
  return c28.apply(this, arguments);
}
function c28() {
  return c28 = t6(function(r33) {
    return e15(this, function(n25) {
      return [2, a9("openMiniApp", m24, [r33], (t40 = t6(function(o17) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? [4, c27(o17.appId, o17.path, o17.params)] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openMiniApp", {}))];
          }
        });
      }), function(o17) {
        return t40.apply(this, arguments);
      }))];
      var t40;
    });
  }), c28.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/vibrate.js
var r25 = t6(function() {
  var e46, r33, s31 = arguments;
  return e15(this, function(t40) {
    return e46 = s31.length > 0 && void 0 !== s31[0] ? s31[0] : "oneShot", r33 = s31.length > 1 ? s31[1] : void 0, [2, new Promise(function(t41, s32) {
      a8("INTERACTIVE_VIBRATION", { type: d2[e46], vibrate_time: r33 }, { success: function() {
        t41();
      }, fail: function(e47) {
        s32(e47);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/vibrate.js
var u27 = [Me({ type: ot.enum(["oneShot"]).default("oneShot").optional(), milliseconds: we().optional() })];
function p25(o17) {
  return a20.apply(this, arguments);
}
function a20() {
  return a20 = t6(function(e46) {
    return e15(this, function(r33) {
      return [2, a9("vibrate", u27, [e46], (t40 = t6(function(o17) {
        return e15(this, function(e47) {
          switch (e47.label) {
            case 0:
              return o10.isMp ? [4, r25(null == o17 ? void 0 : o17.type, null == o17 ? void 0 : o17.milliseconds)] : [3, 2];
            case 1:
              return [2, e47.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("vibrate", {}))];
          }
        });
      }), function(o17) {
        return t40.apply(this, arguments);
      }))];
      var t40;
    });
  }), a20.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openWebview.js
var l15;
var r26 = (l15 = t6(function(t40, l27) {
  var r33, i46, u48, a37;
  return e15(this, function(n25) {
    return r33 = new URL(t40), i46 = r33.href.includes("vnpay"), u48 = r33.searchParams.get("typeInapp"), a37 = u.isEmpty(l27) ? void 0 : { modal_style: (null == l27 ? void 0 : l27.style) ? c3(null == l27 ? void 0 : l27.style) : "bottom_sheet", left_button: (null == l27 ? void 0 : l27.leftButton) ? c3(null == l27 ? void 0 : l27.leftButton) : "back" }, !i46 && u.isEmpty(u48) && r33.searchParams.set("typeInapp", "1"), [2, new Promise(function(t41, e46) {
      a8("OPEN_INAPP", { url: r33.href, style: a37 }, { success: function() {
        t41();
      }, fail: function(t42) {
        e46(t42);
      } }, {});
    })];
  });
}), function(t40, s31) {
  return l15.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openWebview.js
var p26 = [Me({ url: ke(), config: Me({ style: ot.enum(["bottomSheet", "normal"]).default("bottomSheet").optional(), leftButton: ot.enum(["back", "none"]).default("back").optional() }).optional() })];
function a21(o17) {
  return l16.apply(this, arguments);
}
function l16() {
  return l16 = t6(function(e46) {
    return e15(this, function(t40) {
      return [2, a9("openWebview", p26, [e46], (n25 = t6(function(o17) {
        return e15(this, function(e47) {
          switch (e47.label) {
            case 0:
              return o10.isMp ? [4, r26(o17.url, o17.config)] : [3, 2];
            case 1:
              return [2, e47.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openWebview", {}))];
          }
        });
      }), function(o17) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), l16.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getRouteParams.js
function t29() {
  var t40 = {}, a37 = window.location.href;
  try {
    var e46 = new URL(a37).searchParams.toString();
    e46 && (t40 = o7.getParamsAsObject(e46));
  } catch (r33) {
    throw new Error("Invalid URL");
  }
  return t40;
}

// node_modules/zmp-sdk/apis/apis/getRouteParams.js
function t30() {
  return a9("getRouteParams", [], [], function() {
    return t29();
  });
}

// node_modules/zmp-sdk/apis/apis/getAppInfo.js
function i21(r33) {
  return p27.apply(this, arguments);
}
function p27() {
  return (p27 = t6(function(i46) {
    return e15(this, function(p46) {
      return [2, a9("getAppInfo", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, n17()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ description: "", name: "", version: "", appUrl: "", qrCodeUrl: "" })] : [2, Promise.reject(o11("getAppInfo", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/sendDataToPreviousMiniApp.js
var r27;
var e32 = (r27 = t6(function(o17) {
  return e15(this, function(n25) {
    return [2, new Promise(function(n26, r33) {
      a8("WEBVIEW_SET_RESULT", { result: v3(o17) }, { success: function() {
        n26();
      }, fail: function(o18) {
        r33(o18);
      } }, {});
    })];
  });
}), function(o17) {
  return r27.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/sendDataToPreviousMiniApp.js
var p28 = [Me({ data: ot.any() })];
function m25(o17) {
  return u28.apply(this, arguments);
}
function u28() {
  return u28 = t6(function(r33) {
    return e15(this, function(e46) {
      return [2, a9("sendDataToPreviousMiniApp", p28, [r33], (m51 = t6(function(o17) {
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return o10.isMp ? [4, e32(o17.data)] : [3, 2];
            case 1:
              return [2, r34.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("sendDataToPreviousMiniApp", {}))];
          }
        });
      }), function(o17) {
        return m51.apply(this, arguments);
      }))];
      var m51;
    });
  }), u28.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getPhoneNumber.js
var i22 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, t40) {
      var i46, s31;
      a8("MP_GET_NUMBER", { forceUpdate: true }, { success: function(r33) {
        var e46 = {};
        if (null == r33 ? void 0 : r33.token) return e46.token = null == r33 ? void 0 : r33.token, o18(e46);
        t40(d5.error.clientNotSupport());
      }, fail: function(o19) {
        t40(o19);
      } }, { delay: (null === (i46 = s4()) || void 0 === i46 || null === (s31 = i46.platform) || void 0 === s31 ? void 0 : s31.isIOS) ? 400 : 0 });
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/getPhoneNumber.js
function i23(e46) {
  return m26.apply(this, arguments);
}
function m26() {
  return (m26 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("getPhoneNumber", [], [i46], t6(function() {
        return e15(this, function(e46) {
          switch (e46.label) {
            case 0:
              return o10.isMp ? [4, i22()] : [3, 2];
            case 1:
              return [2, e46.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ number: "" })] : [2, Promise.reject(o11("getPhoneNumber", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openProfilePicker.js
var m27 = t6(function() {
  var r33, m51, a37, l27 = arguments;
  return e15(this, function(i46) {
    return r33 = l27.length > 0 && void 0 !== l27[0] ? l27[0] : 1, m51 = l27.length > 1 ? l27[1] : void 0, a37 = l27.length > 2 ? l27[2] : void 0, [2, new Promise(function(i47, l28) {
      a8("MP_OPEN_PROFILE_PICKER", t9({}, m51 === E2.TOOL_DEL_FRIEND ? { maxProfile: r33, src: m51, uids: a37, zapp: a3, appId: I } : { maxProfile: r33 }), { success: function(r34) {
        Array.isArray(r34) ? i47(r34.map(function(r35) {
          return r35.id;
        })) : i47([]);
      }, fail: function(r34) {
        l28(r34);
      } }, { isMultiCallback: true });
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/openProfilePicker.js
var _7 = [Me({ maxProfile: we().optional().default(1), src: ot.enum([E2.TOOL_DEL_FRIEND]).optional(), uids: Ae(ke()).optional() }).superRefine(function(e46, r33) {
  var o17 = e46.src, s31 = e46.maxProfile;
  o17 === E2.TOOL_DEL_FRIEND ? s31 < 1 && r33.addIssue({ code: "custom", path: ["maxProfile"], message: "maxProfile must be at least 1 when src is 'tool_del_friend'" }) : (s31 < 1 || s31 > 10) && r33.addIssue({ code: "custom", path: ["maxProfile"], message: "maxProfile must be between 1 and 10" });
})];
function b5(e46) {
  return j5.apply(this, arguments);
}
function j5() {
  return j5 = t6(function(o17) {
    return e15(this, function(s31) {
      return [2, a9("openProfilePicker", _7, [o17], (n25 = t6(function(e46) {
        var o18, s32, n26, t40, a37, u48, h13, _10, b8, j9, y7, g9;
        return e15(this, function(P3) {
          switch (P3.label) {
            case 0:
              return o10.isMp ? [4, m27(null == e46 ? void 0 : e46.maxProfile, null == e46 ? void 0 : e46.src, null == e46 ? void 0 : e46.uids)] : [3, 12];
            case 1:
              return o18 = P3.sent(), s32 = function(e47, r33) {
                return Array.from({ length: Math.ceil(e47.length / r33) }, function(o19, s33) {
                  return e47.slice(s33 * r33, s33 * r33 + r33);
                });
              }, o18.length > 0 ? [4, w2.getAccessToken()] : [3, 11];
            case 2:
              n26 = P3.sent(), t40 = s32(o18, 20), a37 = [], u48 = true, h13 = false, _10 = void 0, P3.label = 3;
            case 3:
              P3.trys.push([3, 8, 9, 10]), b8 = function() {
                var e47, o19, s33, t41, i46, l27, u49;
                return e15(this, function(d18) {
                  switch (d18.label) {
                    case 0:
                      e47 = y7.value, d18.label = 1;
                    case 1:
                      return d18.trys.push([1, 4, , 5]), [4, fetch(i.GET_LIST_USER_INFO, { method: "POST", headers: { "Content-Type": "application/json", access_token: n26 || "" }, body: JSON.stringify({ fields: "id,name,picture", user_ids: e47 }) })];
                    case 2:
                      return [4, d18.sent().json()];
                    case 3:
                      if (0 !== (o19 = d18.sent()).error || !o19.data) throw new Error(o19.message);
                      return t41 = e47.map(function(e48) {
                        var r33, s34, n27, t42, a38, i47, l28, u50, m51, d19, p46;
                        return { id: (null === (r33 = o19.data[e48]) || void 0 === r33 || null === (s34 = r33.user_info) || void 0 === s34 ? void 0 : s34.user_id_by_app) || "", profile: { name: null === (n27 = o19.data[e48]) || void 0 === n27 || null === (t42 = n27.user_info) || void 0 === t42 ? void 0 : t42.name, avatar: null === (a38 = o19.data[e48]) || void 0 === a38 || null === (i47 = a38.user_info) || void 0 === i47 || null === (l28 = i47.picture) || void 0 === l28 || null === (u50 = l28.data) || void 0 === u50 ? void 0 : u50.url }, code: 0 !== (null === (m51 = o19.data[e48]) || void 0 === m51 ? void 0 : m51.error) ? -1 : 0, message: "Get profile: ".concat(u.isUndefined(null === (d19 = o19.data[e48]) || void 0 === d19 ? void 0 : d19.message) ? "Unknown error" : null === (p46 = o19.data[e48]) || void 0 === p46 ? void 0 : p46.message) };
                      }), (s33 = a37).push.apply(s33, a5(t41)), [3, 5];
                    case 4:
                      return i46 = d18.sent(), u49 = e47.map(function(e48) {
                        return { id: e48, profile: { name: "", avatar: "" }, code: -1, message: "Can't get profile: ".concat(i46.message) };
                      }), (l27 = a37).push.apply(l27, a5(u49)), [3, 5];
                    case 5:
                      return [2];
                  }
                });
              }, j9 = t40[Symbol.iterator](), P3.label = 4;
            case 4:
              return (u48 = (y7 = j9.next()).done) ? [3, 7] : [5, t16(b8())];
            case 5:
              P3.sent(), P3.label = 6;
            case 6:
              return u48 = true, [3, 4];
            case 7:
              return [3, 10];
            case 8:
              return g9 = P3.sent(), h13 = true, _10 = g9, [3, 10];
            case 9:
              try {
                u48 || null == j9.return || j9.return();
              } finally {
                if (h13) throw _10;
              }
              return [7];
            case 10:
              return [2, { users: a37 }];
            case 11:
              return [2, { users: [] }];
            case 12:
              return o10.isMpWeb ? [2, Promise.resolve({ users: [] })] : [2, Promise.reject(o11("openProfilePicker", {}))];
          }
        });
      }), function(e46) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), j5.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/connectWifi.js
var t31;
var i24 = (t31 = t6(function(s31, t40, i46) {
  var e46;
  return e15(this, function(r33) {
    return e46 = t40 && u.isString(t40) && t40.length > 0 ? "wpa_wpa2" : "open", [2, new Promise(function(o17, r34) {
      a8("MP_JOIN_WIFI", { ssid: s31, securityType: e46, password: t40, hiddenSsid: i46 }, { success: function(s32) {
        o17(s32);
      }, fail: function(s32) {
        r34(s32);
      } }, {});
    })];
  });
}), function(s31, n25, o17) {
  return t31.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/connectWifi.js
var p29 = [Me({ SSID: ke(), password: ke().optional(), hiddenSSID: Ne().optional() })];
function a22(o17) {
  return u29.apply(this, arguments);
}
function u29() {
  return u29 = t6(function(n25) {
    return e15(this, function(r33) {
      return [2, a9("connectWifi", p29, [n25], (t40 = t6(function(o17) {
        return e15(this, function(n26) {
          switch (n26.label) {
            case 0:
              return o10.isMp ? [4, i24(o17.SSID, o17.password, o17.hiddenSSID)] : [3, 2];
            case 1:
              return [2, n26.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("connectWifi", {}))];
          }
        });
      }), function(o17) {
        return t40.apply(this, arguments);
      }))];
      var t40;
    });
  }), u29.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openMediaPicker.js
var i25;
var l17 = (i25 = t6(function(e46, i46, l27, m51, u48, a37) {
  var c40, p46;
  return e15(this, function(r33) {
    return c40 = { type: 0, url: i46, max_size: l27 || _ }, p46 = { enable: 1, aspect_ratio: "1:1" }, [2, new Promise(function(o17, r34) {
      a8("PICK_MEDIA", { media_type: p2[e46], edit_view: t9({}, p46, m51), silent_request: u48, upload: c40, max_select_items: a37 }, { success: function(e47) {
        o17(null == e47 ? void 0 : e47.result_content);
      }, fail: function(e47) {
        r34(e47);
      } }, { isMultiCallback: true });
    })];
  });
}), function(e46, s31, t40, o17, r33, n25) {
  return i25.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openMediaPicker.js
var c29 = [Me({ type: ot.enum(["video", "photo", "file", "zcamera", "zcamera_photo", "zcamera_video", "zcamera_scan"]), serverUploadUrl: ke().url(), maxItemSize: we().min(0).optional(), editView: Me({ enable: Ne().optional(), aspectRatio: ke().regex(/^\d+:\d+$/).optional() }).optional(), silentRequest: Ne().optional(), maxSelectItem: we().min(1).optional() })];
function u30(e46) {
  return f6.apply(this, arguments);
}
function f6() {
  return f6 = t6(function(o17) {
    return e15(this, function(t40) {
      return [2, a9("openMediaPicker", c29, [o17], (i46 = t6(function(e46) {
        var o18, t41, i47, r33, n25, l27;
        return e15(this, function(d18) {
          switch (d18.label) {
            case 0:
              return o10.isMp ? (r33 = {}, u.isUndefined(null === (o18 = e46.editView) || void 0 === o18 ? void 0 : o18.enable) || (null === (t41 = e46.editView) || void 0 === t41 ? void 0 : t41.enable) ? r33.enable = 1 : r33.enable = 0, r33.aspect_ratio = null === (i47 = e46.editView) || void 0 === i47 ? void 0 : i47.aspectRatio, n25 = true === e46.silentRequest ? 1 : 0, l27 = e46.maxSelectItem, [4, l17(e46.type, e46.serverUploadUrl, e46.maxItemSize, r33, n25, l27)]) : [3, 2];
            case 1:
              return [2, { data: d18.sent() }];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ data: "" })] : [2, Promise.reject(o11("openMediaPicker", {}))];
          }
        });
      }), function(e46) {
        return i46.apply(this, arguments);
      }))];
      var i46;
    });
  }), f6.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/getShareableLink.js
var a23 = [Me({ title: ke().max(100), description: ke().max(400).default(""), thumbnail: ke().url().optional(), path: ke().optional() })];
function m28(t40) {
  return l18.apply(this, arguments);
}
function l18() {
  return l18 = t6(function(e46) {
    return e15(this, function(r33) {
      return [2, a9("getShareableLink", a23, [e46], (m51 = t6(function(t40) {
        var e47;
        return e15(this, function(r34) {
          switch (r34.label) {
            case 0:
              return [4, w2.getAccessToken()];
            case 1:
              return e47 = r34.sent(), [4, i15(window.APP_ID, e47 || "", t40.title, t40.description, t40.thumbnail, t40.path)];
            case 2:
              return [2, r34.sent().shareableLink];
          }
        });
      }), function(t40) {
        return m51.apply(this, arguments);
      }))];
      var m51;
    });
  }), l18.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/closeLoading.js
var o15;
var r28 = (o15 = t6(function(e46) {
  return e15(this, function(t40) {
    return [2, new Promise(function(t41, o17) {
      a8("MP_CLOSE_LOADINGVIEW", { at: (/* @__PURE__ */ new Date()).getTime(), when: e46, url: location.href }, { success: function(e47) {
        t41(e47);
      }, fail: function(e47) {
        o17(e47);
      } }, {});
    })];
  });
}), function(e46) {
  return o15.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/closeLoading.js
function i26(o17) {
  return c30.apply(this, arguments);
}
function c30() {
  return (c30 = t6(function(i46) {
    return e15(this, function(c40) {
      return [2, a9("closeLoading", [], [i46], t6(function() {
        return e15(this, function(o17) {
          switch (o17.label) {
            case 0:
              return o10.isMp ? [4, r28("user action")] : [3, 2];
            case 1:
              return [2, o17.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("closeLoading", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/requestUpdateZalo.js
function i27(o17) {
  return a24.apply(this, arguments);
}
function a24() {
  return (a24 = t6(function(i46) {
    return e15(this, function(a37) {
      return [2, a9("requestUpdateZalo", [], [i46], t6(function() {
        var o17, e46, i47;
        return e15(this, function(n25) {
          switch (n25.label) {
            case 0:
              return o10.isMp ? (i47 = (null === (o17 = s4()) || void 0 === o17 || null === (e46 = o17.platform) || void 0 === e46 ? void 0 : e46.isIOS) ? "https://apps.apple.com/vn/app/zalo/id579523206" : "https://play.google.com/store/apps/details?id=com.zing.zalo", [4, t25(i47)]) : [3, 2];
            case 1:
              return [2, n25.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("requestUpdateZalo", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/events.js
var r29 = h3.getInstance();
r29.addListener = function(e46, n25, m51) {
  var o17 = e46;
  return r29.addListener(o5[o17], n25, m51);
};

// node_modules/zmp-sdk/apis/apis/onConfirmToExit.js
var m29 = [ot.function()];
function s18(o17) {
  return a9("onConfirmToExit", m29, [o17], function(o18) {
    var n25 = o18;
    o10.isMp && (r29.on(o5.AppClose, n25, '{"handle_h5": 1}'), B2.setNavigationBarLeftButton(void 0, 2));
  });
}

// node_modules/zmp-sdk/apis/apis/offConfirmToExit.js
function m30() {
  return a9("offConfirmToExit", [], [], function() {
    o10.isMp && (r29.off(o5.AppClose), B2.setNavigationBarLeftButton(void 0, 0));
  });
}

// node_modules/zmp-sdk/apis/apis/getDeviceId.js
function e33() {
  return a9("getDeviceId", [], [], function() {
    return o10.isMp && w2.getSync(N.DEVICE_ID) || "";
  });
}

// node_modules/zmp-sdk/apis/apis/getDeviceIdAsync.js
function i28(t40) {
  return m31.apply(this, arguments);
}
function m31() {
  return (m31 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("getDeviceIdAsync", [], [i46], t6(function() {
        return e15(this, function(t40) {
          switch (t40.label) {
            case 0:
              return o10.isMp ? [4, w2.jumpAndGetToken(N.DEVICE_ID)] : [3, 2];
            case 1:
              return [2, t40.sent() || ""];
            case 2:
              return [2, Promise.resolve("")];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/getContext.js
function e34() {
  return a9("getContext", [], [], function() {
    if (o10.isMp) {
      var o17 = w2.getSync(N.CONTEXT_ID) || "";
      return { type: w2.getSync(N.CONTEXT_TYPE) || "", id: o17 };
    }
    return { type: "", id: "" };
  });
}

// node_modules/zmp-sdk/apis/apis/getContextAsync.js
function i29(t40) {
  return m32.apply(this, arguments);
}
function m32() {
  return (m32 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("getContextAsync", [], [i46], t6(function() {
        var t40;
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, w2.jumpAndGetToken(N.CONTEXT_ID)] : [3, 3];
            case 1:
              return t40 = r33.sent() || "", [4, w2.jumpAndGetToken(N.CONTEXT_TYPE)];
            case 2:
              return [2, { type: r33.sent() || "", id: t40 }];
            case 3:
              return [2, Promise.resolve({ type: "", id: "" })];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/getAuthCode.js
function m33(e46) {
  return a25.apply(this, arguments);
}
function a25() {
  return (a25 = t6(function(m51) {
    return e15(this, function(a37) {
      return [2, a9("getAuthCode", [], [m51], t6(function() {
        var e46, t40;
        return e15(this, function(u48) {
          switch (u48.label) {
            case 0:
              return o10.isMp ? [4, w2.jumpAndGetToken(N.ZOAUTH, true)] : [3, 4];
            case 1:
              return e46 = u48.sent() || "", [4, w2.jumpAndGetToken(N.ZOAUTH_VRF)];
            case 2:
              return t40 = u48.sent() || "", [4, w2.verifyUserAuthorized()];
            case 3:
              if (u48.sent()) return [2, { authCode: e46, authCodeVerify: t40 }];
              throw d4([{ action: "getAuthCode", error: -104, message: "no user auth", data: {} }]), d5.error.loginFailed("User Authentication Required");
            case 4:
              return [2, Promise.resolve({ authCode: "", authCodeVerify: "" })];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/getZPIToken.js
function u31(t40) {
  return p30.apply(this, arguments);
}
function p30() {
  return (p30 = t6(function(u48) {
    return e15(this, function(p46) {
      return [2, a9("getZPIToken", [], [u48], t6(function() {
        var t40, n25, u49, p47;
        return e15(this, function(s31) {
          switch (s31.label) {
            case 0:
              return o10.isMp ? [4, w2.jumpAndGetToken(N.UTOKEN_ZPI)] : [3, 5];
            case 1:
              return t40 = s31.sent() || "", [4, w2.jumpAndGetToken(N.GTOKEN_ZPI)];
            case 2:
              return n25 = s31.sent() || "", [4, w2.jumpAndGetToken(N.ZPP_ZPI)];
            case 3:
              return u49 = s31.sent() || "", [4, w2.jumpAndGetToken(N.ZPT_ZPI)];
            case 4:
              return p47 = s31.sent() || "", [2, { utoken: t40, gtoken: n25, zpp: u49, zpt: p47 }];
            case 5:
              return [2, Promise.resolve({ utoken: "", gtoken: "", zpp: "", zpt: "" })];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/setAccessToken.js
var e35 = [ke()];
function t32(o17) {
  return a9("setAccessToken", e35, [o17], function(o18) {
    var r33 = o18;
    w2.setAccessToken(r33);
  });
}

// node_modules/zmp-sdk/apis/apis/openOutApp.js
var u32 = [Me({ url: ke().url() })];
function m34(r33) {
  return c31.apply(this, arguments);
}
function c31() {
  return c31 = t6(function(o17) {
    return e15(this, function(t40) {
      return [2, a9("openOutApp", u32, [o17], (m51 = t6(function(r33) {
        return e15(this, function(o18) {
          switch (o18.label) {
            case 0:
              return o10.isMp ? [4, t25(r33.url)] : [3, 2];
            case 1:
              return [2, o18.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openOutApp", {}))];
          }
        });
      }), function(r33) {
        return m51.apply(this, arguments);
      }))];
      var m51;
    });
  }), c31.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/chooseImage.js
var i30 = [Me({ count: we().min(1).optional().default(1), sourceType: ot.array(ot.enum(["album", "camera"])).max(2).default(["album", "camera"]).optional(), cameraType: ot.enum(["back", "front"]).default("front").optional() })];
function c32(e46) {
  return u33.apply(this, arguments);
}
function u33() {
  return u33 = t6(function(t40) {
    return e15(this, function(n25) {
      return [2, a9("chooseImage", i30, [t40], (o17 = t6(function(e46) {
        var t41, n26, o18, a37;
        return e15(this, function(r33) {
          return t41 = e46.sourceType || ["album", "camera"], n26 = e46.cameraType || "front", o18 = e46.count || 1, (a37 = document.createElement("input")).type = "file", a37.multiple = o18 > 1, a37.accept = "image/*", a37.style.display = "none", 1 === t41.length && t41.includes("camera") && (a37.accept = "front" === n26 ? "zcamera/photo-frontfacing" : "zcamera/photo-backfacing", a37.capture = "front" === n26 ? "user" : "environment"), [2, new Promise(function(e47, t42) {
            a37.addEventListener("change", function(n27) {
              var a38, r34 = (null == n27 || null === (a38 = n27.target) || void 0 === a38 ? void 0 : a38.files) || [];
              if (r34.length > o18) t42(new Error("You are only allowed to choose a maximum of ".concat(o18, " images at a time")));
              else {
                var i46 = { filePaths: [], tempFiles: [] };
                Array.from(r34).forEach(function(e48) {
                  i46.filePaths.push(URL.createObjectURL(e48)), i46.tempFiles.push({ path: URL.createObjectURL(e48), size: e48.size });
                }), e47(i46);
              }
            }), document.body.appendChild(a37), a37.click();
          })];
        });
      }), function(e46) {
        return o17.apply(this, arguments);
      }))];
      var o17;
    });
  }), u33.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getLocation.js
var n20 = t6(function() {
  var o17, n25, i46 = arguments;
  return e15(this, function(r33) {
    return o17 = i46.length > 0 && void 0 !== i46[0] && i46[0], n25 = i46.length > 1 && void 0 !== i46[1] ? i46[1] : "Cho phép Zalo truy cập vào vị trí của thiết bị này?", [2, new Promise(function(r34, i47) {
      a8("GET_LOCATION", { silent_request: o17, permission_description: n25, forceUpdate: true }, { success: function(o18) {
        var t40 = {};
        if (null == o18 ? void 0 : o18.token) return t40.token = null == o18 ? void 0 : o18.token, r34(t40);
        i47(d5.error.clientNotSupport());
      }, fail: function(o18) {
        i47(o18);
      } }, { isMultiCallback: true, timeout: false });
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/getLocation.js
function i31(o17) {
  return m35.apply(this, arguments);
}
function m35() {
  return (m35 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("getLocation", [], [i46], t6(function() {
        return e15(this, function(o17) {
          switch (o17.label) {
            case 0:
              return o10.isMp ? [4, n20()] : [3, 2];
            case 1:
              return [2, o17.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ token: "" })] : [2, Promise.reject(o11("getLocation", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/onCallbackData.js
function a26(a37) {
  h3.getInstance().on(o5.OnDataCallback, function(t40) {
    a37({ data: t40 });
  });
}

// node_modules/zmp-sdk/apis/apis/onCallbackData.js
var t33 = [ot.function().args(Me({ data: ot.any() })).returns(ot.void())];
function i32(o17) {
  return a9("onCallbackData", t33, [o17], function() {
    a26(o17);
  });
}

// node_modules/zmp-sdk/apis/common/apis/general/payment/checkTransaction.js
var i33;
var d10 = (i33 = t6(function(r33) {
  var i46, d18, p46, c40, u48, g9, j9, f14, l27, h13, b8, y7;
  return e15(this, function(m51) {
    switch (m51.label) {
      case 0:
        return r33 || (r33 = t29()), "object" == typeof r33 && ((p46 = r33.zmpOrderId || r33.orderId) || (d18 = r33.appTransID || r33.apptransid || r33.transId)), "string" == typeof r33 && (c40 = o7.getParameterByName("orderId", r33), u48 = o7.getParameterByName("appTransID", r33) || o7.getParameterByName("apptransid", r33), d18 = c40 || u48), g9 = { headers: { authorization: "Bearer " } }, [4, w2.jumpAndGetToken()];
      case 1:
        return m51.sent(), j9 = null === (i46 = w2.miniProgramConfig) || void 0 === i46 ? void 0 : i46.jwt, g9.headers.authorization = "Bearer ".concat(j9), f14 = new URL(U.GET_TRANSACTION), l27 = { orderId: p46 || "", transId: d18 || "" }, f14.search = new URLSearchParams(l27).toString(), [4, fetch(f14.toString(), g9)];
      case 2:
        return [4, m51.sent().json()];
      case 3:
        if (!(h13 = m51.sent()).data) throw d5.error.badRequest(h13.msg);
        return b8 = h13.data || {}, y7 = { err: h13.err, msg: h13.msg }, 0 !== Object.keys(b8).length && b8.constructor === Object && Object.assign(y7, t9({ msg: b8.resultMessage }, b8)), [2, y7];
    }
  });
}), function(r33) {
  return i33.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/common/apis/general/payment/createOrder.js
var y5;
var g6 = (y5 = t6(function(y7, g9, w7, b8, I6, C5, _10) {
  var P3, v8, R3, O4, S5, T4, N4, k5, A5, D4, E7, U3, z2, J3, x3, q2, B3, L4, V3, W2, G3;
  return e15(this, function(F4) {
    switch (F4.label) {
      case 0:
        P3 = I, (v8 = new URLSearchParams()).append("amount", y7.toString()), v8.append("item", encodeURIComponent(JSON.stringify(g9))), v8.append("mac", b8), w7 && v8.append("desc", encodeURIComponent(w7)), I6 && (R3 = I6, "object" == typeof I6 && (R3 = JSON.stringify(I6)), v8.append("extradata", encodeURIComponent(R3))), C5 && (O4 = C5, "object" == typeof C5 && (O4 = JSON.stringify(C5)), v8.append("payload", encodeURIComponent(O4))), _10 && ("string" == typeof _10 ? (v8.append("method", _10), v8.append("isCustom", "false")) : "object" == typeof _10 && (v8.append("method", _10.id), v8.append("isCustom", JSON.stringify(_10.isCustom)))), S5 = { headers: { "Content-Type": "application/x-www-form-urlencoded", authorization: "Bearer " } }, F4.label = 1;
      case 1:
        return F4.trys.push([1, 6, , 7]), [4, w2.jumpAndGetToken()];
      case 2:
        return F4.sent(), N4 = null === (T4 = w2.miniProgramConfig) || void 0 === T4 ? void 0 : T4.jwt, S5.headers.authorization = "Bearer ".concat(N4), [4, fetch(U.CREATE_ORDER, e25(t9({ method: "POST" }, S5), { body: v8 }))];
      case 3:
        return [4, F4.sent().json()];
      case 4:
        if (!(k5 = F4.sent()).data || 0 !== k5.err) throw d5.error.badRequest(k5.msg);
        return A5 = k5.data.id, D4 = k5.data.jwt, E7 = k5.data.messageToken || "", U3 = window.APP_VERSION, z2 = window.APP_ENV, J3 = { miniAppId: P3, orderId: A5 }, x3 = k5.data.method, q2 = k5.data.isCustom, D4 && (J3.token = D4), U3 && (J3.version = U3), z2 && (J3.env = z2), x3 && (J3.method = x3), q2 && (J3.isCustom = q2), B3 = o7.encode(J3), L4 = new URL("?".concat(B3), m).toString(), V3 = m3(), W2 = p3() && V3 < 742 ? "normal" : "bottomSheet", r11.enablePaymentDone = h3.getInstance().eventNames().includes(o5.PaymentDone), [4, r26(L4, { style: W2 }).then(function() {
          var o17 = false;
          h3.getInstance().once(o5.WebviewClosed, function() {
            setTimeout(t6(function() {
              var e46;
              return e15(this, function(r33) {
                switch (r33.label) {
                  case 0:
                    return o17 ? [3, 2] : (h3.getInstance().emit(o5.PaymentDone, A5, { orderId: A5 }), [4, d10({ zmpOrderId: A5 })]);
                  case 1:
                    (e46 = r33.sent()).err >= 0 && !e46.isCustom && h3.getInstance().emit(o5.PaymentClose, e46.err, e25(t9({}, e46), { zmpOrderId: A5 })), r33.label = 2;
                  case 2:
                    return [2];
                }
              });
            }), 500);
          }), h3.getInstance().once(o5.OpenApp, function() {
            o17 = true;
          }), h3.getInstance().once(o5.PaymentDone, function() {
            o17 = true, r11.enablePaymentDone = false;
          });
        })];
      case 5:
        return F4.sent(), [2, { orderId: A5, messageToken: E7 }];
      case 6:
        throw G3 = F4.sent(), console.log("Internal error"), G3;
      case 7:
        return [2];
    }
  });
}), function(e46, t40, n25, o17, r33, s31, a37) {
  return y5.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/payment/createOrder.js
var u34 = [Me({ amount: ot.union([ke(), we()]), item: ot.array(ot.record(ke(), ot.any())), desc: ot.string(), mac: ot.string(), extradata: ot.any().optional(), payload: ot.any().optional(), method: ot.union([ot.string(), ot.object({ id: ot.string(), isCustom: ot.boolean() })]).optional() })];
function d11(r33) {
  return p31.apply(this, arguments);
}
function p31() {
  return p31 = t6(function(e46) {
    return e15(this, function(o17) {
      return [2, a9("createOrder", u34, [e46], (t40 = t6(function(r33) {
        return e15(this, function(e47) {
          switch (e47.label) {
            case 0:
              return o10.isMp ? [4, g6(r33.amount, r33.item, r33.desc, r33.mac, r33.extradata, r33.payload, r33.method)] : [3, 2];
            case 1:
              return [2, e47.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ orderId: "", messageToken: "" })] : [2, Promise.reject(o11("createOrder", {}))];
          }
        });
      }), function(r33) {
        return t40.apply(this, arguments);
      }))];
      var t40;
    });
  }), p31.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/showPaymentConfirm.js
var e36 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, n25) {
      a8("MP_CONFIRM_REQUEST_PAYMENT", {}, { success: function() {
        o18();
      }, fail: function(o19) {
        n25(o19);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/common/apis/general/payment/purchase.js
var m36;
var i34 = (m36 = t6(function(e46, m51, i46, c40, p46) {
  var l27, u48, h13, f14, j9, w7, _10, g9, b8, y7, C5;
  return e15(this, function(d18) {
    switch (d18.label) {
      case 0:
        (l27 = new URLSearchParams()).append("amount", e46.toString()), m51 && l27.append("desc", encodeURIComponent(m51)), i46 && l27.append("method", i46), c40 && l27.append("transId", c40), p46 && l27.append("mac", p46), u48 = { headers: { "Content-Type": "application/x-www-form-urlencoded", authorization: "Bearer " } }, d18.label = 1;
      case 1:
        return d18.trys.push([1, 9, , 10]), [4, w2.jumpAndGetToken()];
      case 2:
        if (d18.sent(), j9 = null === (h13 = w2.miniProgramConfig) || void 0 === h13 ? void 0 : h13.jwt, u48.headers.authorization = "Bearer ".concat(j9), !(null === (f14 = w2.miniProgramConfig) || void 0 === f14 ? void 0 : f14.showConfirmToPayment)) return [3, 6];
        d18.label = 3;
      case 3:
        return d18.trys.push([3, 5, , 6]), [4, e36()];
      case 4:
        return d18.sent(), [3, 6];
      case 5:
        throw w7 = d18.sent(), console.error("Failed:", w7), w7;
      case 6:
        return [4, fetch(U.PURCHASE, e25(t9({ method: "POST" }, u48), { body: l27 }))];
      case 7:
        return [4, d18.sent().json()];
      case 8:
        if (!(_10 = d18.sent()).data || 0 !== _10.err) throw d5.error.badRequest(_10.msg);
        return g9 = _10.data.id, b8 = _10.data.messageToken || "", y7 = _10.data.transId || "", [2, { orderId: g9, messageToken: b8, transId: y7 }];
      case 9:
        throw C5 = d18.sent(), console.log("Internal error"), C5;
      case 10:
        return [2];
    }
  });
}), function(e46, r33, o17, s31, t40) {
  return m36.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/payment/purchase.js
var a27 = [Me({ amount: ot.union([ot.string(), ot.number()]), desc: ot.string(), method: ot.string(), transId: ot.string().optional(), mac: ot.string().optional() })];
function u35(r33) {
  return c33.apply(this, arguments);
}
function c33() {
  return c33 = t6(function(n25) {
    return e15(this, function(o17) {
      return [2, a9("purchase", a27, [n25], (u48 = t6(function(r33) {
        return e15(this, function(n26) {
          switch (n26.label) {
            case 0:
              return o10.isMp ? [4, i34(r33.amount, r33.desc, r33.method, null == r33 ? void 0 : r33.transId, null == r33 ? void 0 : r33.mac)] : [3, 2];
            case 1:
              return [2, n26.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ orderId: "", messageToken: "", transId: "" })] : [2, Promise.reject(o11("purchase", {}))];
          }
        });
      }), function(r33) {
        return u48.apply(this, arguments);
      }))];
      var u48;
    });
  }), c33.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/payment/selectPaymentMethod.js
var s19;
var t34 = (s19 = t6(function(n25, s31) {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, t40) {
      var r33 = n25 && (null == n25 ? void 0 : n25.length) > 0;
      a8("MP_SELECT_PAYMENT_METHOD", { isBinding: r33, channels: n25, selectedMethod: s31, forceUpdate: true }, { success: function(n26) {
        console.log(n26), o18(n26);
      }, fail: function(n26) {
        t40(n26);
      } }, {});
    })];
  });
}), function(n25, e46) {
  return s19.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/payment/selectPaymentMethod.js
var l19 = [Me({ channels: Ae(Me({ method: ke(), subMethod: ke().optional(), subInfo: ke().optional() })).optional(), selectedMethod: Me({ method: ke(), subMethod: ke().optional() }).optional() }).optional()];
function p32(e46) {
  return c34.apply(this, arguments);
}
function c34() {
  return c34 = t6(function(o17) {
    return e15(this, function(t40) {
      return [2, a9("selectPaymentMethod", l19, [o17], (n25 = t6(function(e46) {
        var o18, t41;
        return e15(this, function(n26) {
          switch (n26.label) {
            case 0:
              return o10.isMp ? (o18 = e46.channels, t41 = e46.selectedMethod, [4, t34(o18, t41)]) : [3, 2];
            case 1:
              return [2, n26.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ method: "" })] : [2, Promise.reject(o11("selectPaymentMethod", {}))];
          }
        });
      }), function(e46) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), c34.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/payment/checkTransaction.js
var m37 = [Me({ data: ot.union([ke(), ot.record(ke(), ke().nullish())]) })];
function u36(r33) {
  return p33.apply(this, arguments);
}
function p33() {
  return p33 = t6(function(t40) {
    return e15(this, function(e46) {
      return [2, a9("checkTransaction", m37, [t40], (n25 = t6(function(r33) {
        return e15(this, function(t41) {
          switch (t41.label) {
            case 0:
              return o10.isMp ? [4, d10(r33.data)] : [3, 2];
            case 1:
              return [2, t41.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ msg: "Success", orderId: "", resultCode: 1, transTime: (/* @__PURE__ */ new Date()).getTime().toString(), createdAt: (/* @__PURE__ */ new Date()).getTime().toString(), transId: "" })] : [2, Promise.reject(o11("checkTransaction", {}))];
          }
        });
      }), function(r33) {
        return n25.apply(this, arguments);
      }))];
      var n25;
    });
  }), p33.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/payment/createOrderIAP.js
var u37;
var f7 = (u37 = t6(function(e46, u48, f14, _10, E7, h13) {
  var j9, I6, R3, A5, v8, w7, P3, T4, D4, y7, C5, b8, S5, g9, M5;
  return e15(this, function(l27) {
    switch (l27.label) {
      case 0:
        v8 = I, (w7 = new URLSearchParams()).append("payType", u48 || m2.SUBSCRIPTION), P3 = s2.UNKNOW, f14 === c.IMMEDIATE_AND_CHARGE_FULL_PRICE && (P3 = s2.IMMEDIATE_AND_CHARGE_FULL_PRICE), f14 === c.DEFERRED && (P3 = s2.DEFERRED), w7.append("utm", E7 || "default"), w7.append("merchantTransId", h13 || ""), w7.append("prorationMode", P3.toString()), w7.append("appId", v8), _10 && w7.append("method", _10), T4 = "", (null === (j9 = s4()) || void 0 === j9 || null === (I6 = j9.platform) || void 0 === I6 ? void 0 : I6.isIOS) ? T4 = "ios" : (null === (R3 = s4()) || void 0 === R3 || null === (A5 = R3.platform) || void 0 === A5 ? void 0 : A5.isAndroid) && (T4 = "android"), w7.append("os", T4), w7.append("productId", e46), D4 = { headers: { "Content-Type": "application/x-www-form-urlencoded", authorization: "Bearer " } }, l27.label = 1;
      case 1:
        return l27.trys.push([1, 5, , 6]), [4, w2.jumpAndGetToken()];
      case 2:
        return l27.sent(), C5 = null === (y7 = w2.miniProgramConfig) || void 0 === y7 ? void 0 : y7.jwt, D4.headers.authorization = "Bearer ".concat(C5), [4, fetch(U.CREATE_IAP_ORDER, e25(t9({ method: "POST" }, D4), { body: w7 }))];
      case 3:
        return [4, l27.sent().json()];
      case 4:
        if (!(b8 = l27.sent()).data || !b8.data.store || 0 !== b8.err) throw d5.error.createIAPOrderFailed(b8.err);
        return S5 = b8.data.store, g9 = b8.data.orderId, [2, new Promise(function(e47, o17) {
          a8("IAP_REQUESTPAYMENT", t9({}, S5), { success: function() {
            e47({ orderId: g9 });
          }, fail: function(e48) {
            o17(e48);
          } });
        })];
      case 5:
        throw M5 = l27.sent(), console.log("Internal error"), M5;
      case 6:
        return [2];
    }
  });
}), function(e46, r33, o17, t40, n25, s31) {
  return u37.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/payment/createOrderIAP.js
var p34 = [Me({ productId: ke(), payType: ot.enum(["ONETIME", "SUBSCRIPTION"]).optional(), prorationMode: ot.enum(["DEFERRED", "IMMEDIATE_AND_CHARGE_FULL_PRICE"]).default("DEFERRED").optional(), utm: ke().optional(), method: ot.enum(["IAP", "IAP_SANDBOX"]).optional(), merchantTransId: ke().optional() })];
function u38(r33) {
  return d12.apply(this, arguments);
}
function d12() {
  return d12 = t6(function(o17) {
    return e15(this, function(e46) {
      return [2, a9("createOrderIAP", p34, [o17], (t40 = t6(function(r33) {
        return e15(this, function(o18) {
          switch (o18.label) {
            case 0:
              return o10.isMp ? [4, f7(r33.productId, r33.payType, r33.prorationMode, r33.method, r33.utm, r33.merchantTransId)] : [3, 2];
            case 1:
              return [2, o18.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ orderId: "" })] : [2, Promise.reject(o11("createOrderIAP", {}))];
          }
        });
      }), function(r33) {
        return t40.apply(this, arguments);
      }))];
      var t40;
    });
  }), d12.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/setAndroidBottomNavigationBar.js
var m38 = [Me({ hide: Ne().default(false).optional() }).optional()];
function p35(o17) {
  return u39.apply(this, arguments);
}
function u39() {
  return u39 = t6(function(t40) {
    return e15(this, function(r33) {
      return [2, a9("setAndroidBottomNavigationBar", m38, [t40], (p46 = t6(function(o17) {
        return e15(this, function(t41) {
          switch (t41.label) {
            case 0:
              return o10.isMp ? [4, B2.setAndroidBottomNavigationBar(o17.hide)] : [3, 2];
            case 1:
              return [2, t41.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("setAndroidBottomNavigationBar", {}))];
          }
        });
      }), function(o17) {
        return p46.apply(this, arguments);
      }))];
      var p46;
    });
  }), u39.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/setIOSBottomSafeArea.js
var a28 = [Me({ hide: Ne().default(false).optional() }).optional()];
function p36(o17) {
  return u40.apply(this, arguments);
}
function u40() {
  return u40 = t6(function(e46) {
    return e15(this, function(t40) {
      return [2, a9("setIOSBottomSafeArea", a28, [e46], (p46 = t6(function(o17) {
        return e15(this, function(e47) {
          switch (e47.label) {
            case 0:
              return o10.isMp ? [4, B2.setIOSBottomSafeArea(o17.hide)] : [3, 2];
            case 1:
              return [2, e47.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("setIOSBottomSafeArea", {}))];
          }
        });
      }), function(o17) {
        return p46.apply(this, arguments);
      }))];
      var p46;
    });
  }), u40.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/setStatusBar.js
var m39 = [Me({ type: ot.enum(["normal", "hidden", "transparent"]).default("normal").optional(), color: ot.string().optional() }).optional()];
function p37(r33) {
  return u41.apply(this, arguments);
}
function u41() {
  return u41 = t6(function(o17) {
    return e15(this, function(t40) {
      return [2, a9("setStatusBar", m39, [o17], (p46 = t6(function(r33) {
        return e15(this, function(o18) {
          switch (o18.label) {
            case 0:
              return o10.isMp ? [4, B2.configHeader({ statusBarType: r33.type, headerColor: r33.color })] : [3, 2];
            case 1:
              return [2, o18.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("setStatusBar", {}))];
          }
        });
      }), function(r33) {
        return p46.apply(this, arguments);
      }))];
      var p46;
    });
  }), u41.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/configAppView.js
var d13 = [Me({ headerTextColor: ot.enum(["black", "white"]).optional(), headerColor: ot.string().optional(), actionBar: Me({ hide: ot.boolean().optional(), title: ot.string().optional(), leftButton: ot.enum(["back", "none"]).optional(), textAlign: ot.enum(["left", "center"]).default("left").optional() }).optional(), statusBarType: ot.enum(["normal", "hidden", "transparent"]).optional(), hideAndroidBottomNavigationBar: ot.boolean().optional(), hideIOSSafeAreaBottom: ot.boolean().optional() })];
function u42(o17) {
  return c35.apply(this, arguments);
}
function c35() {
  return c35 = t6(function(t40) {
    return e15(this, function(n25) {
      return [2, a9("configAppView", d13, [t40], (u48 = t6(function(o17) {
        var t41, n26, r33, d18, u49, c40, p46;
        return e15(this, function(s31) {
          switch (s31.label) {
            case 0:
              return o10.isMp ? u.isUndefined(null === (t41 = o17.actionBar) || void 0 === t41 ? void 0 : t41.leftButton) ? [3, 2] : [4, B2.setNavigationBarLeftButton(null === (c40 = o17.actionBar) || void 0 === c40 ? void 0 : c40.leftButton)] : [3, 13];
            case 1:
              s31.sent(), s31.label = 2;
            case 2:
              return u.isUndefined(null === (n26 = o17.actionBar) || void 0 === n26 ? void 0 : n26.title) || !(null === (r33 = o17.actionBar) || void 0 === r33 ? void 0 : r33.title) ? [3, 4] : [4, B2.setNavigationBarTitle(null === (p46 = o17.actionBar) || void 0 === p46 ? void 0 : p46.title)];
            case 3:
              s31.sent(), s31.label = 4;
            case 4:
              return [4, B2.configHeader({ hideActionBar: null === (d18 = o17.actionBar) || void 0 === d18 ? void 0 : d18.hide, statusBarType: o17.statusBarType, headerTextColor: o17.headerTextColor, headerColor: o17.headerColor, textAlign: null === (u49 = o17.actionBar) || void 0 === u49 ? void 0 : u49.textAlign })];
            case 5:
              s31.sent(), s31.label = 6;
            case 6:
              return s31.trys.push([6, 11, , 12]), "boolean" != typeof o17.hideAndroidBottomNavigationBar ? [3, 8] : [4, B2.setAndroidBottomNavigationBar(o17.hideAndroidBottomNavigationBar)];
            case 7:
              s31.sent(), s31.label = 8;
            case 8:
              return "boolean" != typeof o17.hideIOSSafeAreaBottom ? [3, 10] : [4, B2.setIOSBottomSafeArea(o17.hideIOSSafeAreaBottom)];
            case 9:
              s31.sent(), s31.label = 10;
            case 10:
              return [3, 12];
            case 11:
              return s31.sent(), [3, 12];
            case 12:
              return [2];
            case 13:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("configAppView", {}))];
          }
        });
      }), function(o17) {
        return u48.apply(this, arguments);
      }))];
      var u48;
    });
  }), c35.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/minimizeApp.js
var e37 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, n25) {
      a8("MA_MENU_MINIMIZE", {}, { success: function(s31) {
        o18(s31);
      }, fail: function(o19) {
        n25(o19);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/minimizeApp.js
function s20(r33) {
  return m40.apply(this, arguments);
}
function m40() {
  return (m40 = t6(function(s31) {
    return e15(this, function(m51) {
      return [2, a9("minimizeApp", [], [s31], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, e37()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("minimizeApp", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openPermissionSetting.js
var e38 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, n25) {
      a8("MA_MENU_PERMISSION", {}, { success: function(s31) {
        o18(s31);
      }, fail: function(o19) {
        n25(o19);
      } }, {}), o18();
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/openPermissionSetting.js
function i35(e46) {
  return m41.apply(this, arguments);
}
function m41() {
  return (m41 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("openPermissionSetting", [], [i46], t6(function() {
        return e15(this, function(e46) {
          switch (e46.label) {
            case 0:
              return o10.isMp ? [4, e38()] : [3, 2];
            case 1:
              return [2, e46.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openPermissionSetting", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/favoriteApp.js
var n21 = t6(function() {
  return e15(this, function(e46) {
    return [2, new Promise(function(e47, s31) {
      a8("MP_ADD_MYFAVORITES", { timestamp: (/* @__PURE__ */ new Date()).getTime() }, { success: function(t40) {
        e47(t40);
      }, fail: function(e48) {
        s31(e48);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/favoriteApp.js
function i36(r33) {
  return p38.apply(this, arguments);
}
function p38() {
  return (p38 = t6(function(i46) {
    return e15(this, function(p46) {
      return [2, a9("favoriteApp", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, n21()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("favoriteApp", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/openGroupList.js
var e39 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, n25) {
      a8("OPEN_GROUPLIST", {}, { success: function(s31) {
        o18(s31);
      }, fail: function(o19) {
        n25(o19);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/openGroupList.js
function i37(r33) {
  return p39.apply(this, arguments);
}
function p39() {
  return (p39 = t6(function(i46) {
    return e15(this, function(p46) {
      return [2, a9("openGroupList", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, e39()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openGroupList", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/requestSendNotification.js
var t35 = t6(function() {
  var e46;
  return e15(this, function(n25) {
    switch (n25.label) {
      case 0:
        return [4, w2.getAccessToken()];
      case 1:
        return e46 = n25.sent(), [2, new Promise(function(o17, n26) {
          a8("MP_SEND_NOTIFICATION", { accessToken: e46 }, { success: function(e47) {
            o17(e47);
          }, fail: function(e47) {
            n26(e47);
          } }, { delay: 500 });
        })];
    }
  });
});

// node_modules/zmp-sdk/apis/apis/requestSendNotification.js
function s21(t40) {
  return m42.apply(this, arguments);
}
function m42() {
  return (m42 = t6(function(s31) {
    return e15(this, function(m51) {
      return [2, a9("requestSendNotification", [], [s31], t6(function() {
        return e15(this, function(t40) {
          switch (t40.label) {
            case 0:
              return o10.isMp ? [4, t35()] : [3, 2];
            case 1:
              return [2, t40.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("requestSendNotification", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/addRating.js
var e40 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, n25) {
      a8("MP_ADD_RATING", {}, { success: function(s31) {
        o18(s31);
      }, fail: function(o19) {
        n25(o19);
      } }, {});
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/addRating.js
function i38(r33) {
  return m43.apply(this, arguments);
}
function m43() {
  return (m43 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("addRating", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, e40()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({})] : [2, Promise.reject(o11("addRating", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/interactOA.js
var o16;
var a29;
var c36 = (o16 = t6(function(e46, t40, o17) {
  var a37, c40;
  return e15(this, function(s31) {
    switch (s31.label) {
      case 0:
        return (a37 = new URLSearchParams()).append("appId", t40), a37.append("accessToken", o17), a37.append("oaId", e46), c40 = { headers: { "Content-Type": "application/x-www-form-urlencoded" } }, [4, fetch(i.CHECK_INTERACT_OA, t9({ method: "POST", body: a37 }, c40))];
      case 1:
        return [4, s31.sent().json()];
      case 2:
        return [2, s31.sent()];
    }
  });
}), function(e46, n25, t40) {
  return o16.apply(this, arguments);
});
var i39 = (a29 = t6(function(e46) {
  return e15(this, function(n25) {
    return [2, new Promise(function(n26, r33) {
      a8("MP_INTERACT_OA", { oaId: e46, forceUpdate: true }, { success: function(e47) {
        n26(e47);
      }, fail: function(e47) {
        r33(e47);
      } }, {});
    })];
  });
}), function(e46) {
  return a29.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/interactOA.js
var l20 = [Me({ oaId: ke() })];
function f8(r33) {
  return d14.apply(this, arguments);
}
function d14() {
  return d14 = t6(function(t40) {
    return e15(this, function(o17) {
      return [2, a9("interactOA", l20, [t40], (f14 = t6(function(r33) {
        var t41, o18, n25;
        return e15(this, function(p46) {
          switch (p46.label) {
            case 0:
              return o10.isMp ? (t41 = r33.oaId, [4, w2.getAccessToken()]) : [3, 5];
            case 1:
              return !(o18 = p46.sent()) || u.isEmpty(o18) ? [3, 3] : [4, c36(t41, I, o18)];
            case 2:
              if (0 === (null == (n25 = p46.sent()) ? void 0 : n25.err)) return [2, Promise.resolve({})];
              p46.label = 3;
            case 3:
              return [4, i39(t41)];
            case 4:
              return [2, p46.sent()];
            case 5:
              return o10.isMpWeb ? [2, Promise.resolve({})] : [2, Promise.reject(o11("interactOA", {}))];
          }
        });
      }), function(r33) {
        return f14.apply(this, arguments);
      }))];
      var f14;
    });
  }), d14.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/checkIsAllowedInteractWithOA.js
var l21 = [Me({ oaId: ke() })];
function p40(r33) {
  return d15.apply(this, arguments);
}
function d15() {
  return d15 = t6(function(t40) {
    return e15(this, function(o17) {
      return [2, a9("isAllowedInteractWithOA", l21, [t40], (p46 = t6(function(r33) {
        var t41, o18, n25;
        return e15(this, function(u48) {
          switch (u48.label) {
            case 0:
              return o10.isMp ? (t41 = r33.oaId, [4, w2.getAccessToken()]) : [3, 4];
            case 1:
              return !(o18 = u48.sent()) || u.isEmpty(o18) ? [3, 3] : [4, c36(t41, I, o18)];
            case 2:
              return n25 = u48.sent(), [2, Promise.resolve({ status: 0 === (null == n25 ? void 0 : n25.err) })];
            case 3:
              return [2, Promise.resolve({ status: false })];
            case 4:
              return o10.isMpWeb ? [2, Promise.resolve({ status: false })] : [2, Promise.reject(o11("IsAllowedInteractWithOA", {}))];
          }
        });
      }), function(r33) {
        return p46.apply(this, arguments);
      }))];
      var p46;
    });
  }), d15.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/getSetting.js
function i40(t40) {
  return m44.apply(this, arguments);
}
function m44() {
  return (m44 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("getSetting", [], [i46], t6(function() {
        return e15(this, function(t40) {
          switch (t40.label) {
            case 0:
              return o10.isMp ? [4, m4()] : [3, 2];
            case 1:
              return [2, t40.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({ authSetting: {} })] : [2, Promise.reject(o11("getSetting", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/authorize.js
var c37 = ot.enum(v);
var l22 = [Me({ scopes: ot.array(c37).max(2).optional() }).optional()];
function f9(o17) {
  return j6.apply(this, arguments);
}
function j6() {
  return j6 = t6(function(n25) {
    return e15(this, function(i46) {
      return [2, a9("authorize", l22, [n25], (u48 = t6(function(o17) {
        var e46;
        return e15(this, function(n26) {
          switch (n26.label) {
            case 0:
              return o10.isMp ? (e46 = null == o17 ? void 0 : o17.scopes, v2(724, 573) ? [4, r14(null != e46 ? e46 : void 0)] : [3, 2]) : [3, 3];
            case 1:
              return [2, n26.sent()];
            case 2:
              return [2, Promise.reject(d5.error.clientNotSupport())];
            case 3:
              return o10.isMpWeb ? [2, Promise.resolve({})] : [2, Promise.reject(o11("authorize", {}))];
          }
        });
      }), function(o17) {
        return u48.apply(this, arguments);
      }))];
      var u48;
    });
  }), j6.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/checkZaloCameraPermission.js
var s22 = t6(function() {
  return e15(this, function(s31) {
    return [2, new Promise((o17 = t6(function(r33, s32) {
      var o18;
      return e15(this, function(n25) {
        switch (n25.label) {
          case 0:
            return u.isUndefined(ZaloJavaScriptInterface) || "function" != typeof ZaloJavaScriptInterface.checkCameraPermission ? [3, 2] : [4, ZaloJavaScriptInterface.checkCameraPermission()];
          case 1:
            return o18 = n25.sent(), [2, r33({ userAllow: "grant" === o18 })];
          case 2:
            return s32(d5.error.clientNotSupport()), [2];
        }
      });
    }), function(r33, e46) {
      return o17.apply(this, arguments);
    }))];
    var o17;
  });
});

// node_modules/zmp-sdk/apis/apis/checkZaloCameraPermission.js
function t36(t40) {
  return a9("checkZaloCameraPermission", [], [t40], t6(function() {
    return e15(this, function(r33) {
      switch (r33.label) {
        case 0:
          return [4, s22()];
        case 1:
          return [2, r33.sent()];
      }
    });
  }));
}

// node_modules/zmp-sdk/apis/common/apis/general/getUserID.js
var t37 = t6(function() {
  return e15(this, function(t40) {
    return [2, new Promise((s31 = t6(function(r33, t41) {
      var s32, o17, i46;
      return e15(this, function(n25) {
        switch (n25.label) {
          case 0:
            return n25.trys.push([0, 2, , 3]), [4, w2.jumpAndGetToken()];
          case 1:
            return n25.sent(), o17 = null === (s32 = w2.miniProgramConfig) || void 0 === s32 ? void 0 : s32.userId, r33(o17), [3, 3];
          case 2:
            return i46 = n25.sent(), t41(i46), [3, 3];
          case 3:
            return [2];
        }
      });
    }), function(r33, e46) {
      return s31.apply(this, arguments);
    }))];
    var s31;
  });
});

// node_modules/zmp-sdk/apis/apis/getUserID.js
function i41(r33) {
  return m45.apply(this, arguments);
}
function m45() {
  return (m45 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("getUserID", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, t37()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve(void 0)] : [2, Promise.reject(o11("getUserID", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/getIDToken.js
var t38 = t6(function() {
  return e15(this, function(t40) {
    return [2, new Promise((s31 = t6(function(r33, t41) {
      var s32, o17, i46;
      return e15(this, function(n25) {
        switch (n25.label) {
          case 0:
            return n25.trys.push([0, 2, , 3]), [4, w2.jumpAndGetToken()];
          case 1:
            return n25.sent(), o17 = null === (s32 = w2.miniProgramConfig) || void 0 === s32 ? void 0 : s32.idToken, r33(o17), [3, 3];
          case 2:
            return i46 = n25.sent(), t41(i46), [3, 3];
          case 3:
            return [2];
        }
      });
    }), function(r33, e46) {
      return s31.apply(this, arguments);
    }))];
    var s31;
  });
});

// node_modules/zmp-sdk/apis/apis/getIDToken.js
function i42(e46) {
  return m46.apply(this, arguments);
}
function m46() {
  return (m46 = t6(function(i46) {
    return e15(this, function(m51) {
      return [2, a9("getIDToken", [], [i46], t6(function() {
        return e15(this, function(e46) {
          switch (e46.label) {
            case 0:
              return o10.isMp ? [4, t38()] : [3, 2];
            case 1:
              return [2, e46.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve(void 0)] : [2, Promise.reject(o11("getIDToken", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/media/zmaCamera.js
var l23 = { format: n.JPEG, quality: t2.NORMAL, mirrored: false, useVideoSourceSize: false };
var h9 = { width: 1024, height: 768, facingMode: e2.FRONT, mirrored: false, audio: false, video: true };
var v6 = function() {
  function o17(e46) {
    var n25, r33, c40, d18, u48, l27 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, v9 = this;
    a2(this, o17), this._videoEnabled = true, this._audioEnabled = null, this.tick = function() {
      if (v9.haveVideoStream() && v9._userRequestFrameCallback) {
        var e47 = v9.getCanvas();
        if (v9.drawFrame(), e47) {
          var t40 = { data: e47.toDataURL(n.PNG), width: e47.width, height: e47.height };
          h3.getInstance().emit(a.OnFrameCallback, 0, t40), requestAnimationFrame(v9.tick);
        }
      }
    }, this._videoElement = e46, this._mediaConstraints = null != l27 ? l27 : null, this._facingMode = null !== (n25 = null == l27 ? void 0 : l27.facingMode) && void 0 !== n25 ? n25 : h9.facingMode, this._cameraList = [], this._stream = null, this._selectedDeviceId = null !== (r33 = null == l27 ? void 0 : l27.deviceId) && void 0 !== r33 ? r33 : "", this._canvasElement = null, this._ctx = null, this._hasUserMedia = false, this._mirror = null !== (c40 = null == l27 ? void 0 : l27.mirrored) && void 0 !== c40 ? c40 : h9.mirrored, this._userRequestFrameCallback = false, this._audioEnabled = null !== (d18 = null == l27 ? void 0 : l27.audio) && void 0 !== d18 ? d18 : h9.audio, this._videoEnabled = null !== (u48 = null == l27 ? void 0 : l27.video) && void 0 !== u48 ? u48 : h9.video;
  }
  var v8 = o17.prototype;
  return v8.on = function(e46, t40) {
    h3.getInstance().on(e46, function(e47) {
      t40(e47);
    }), e46 === a.OnFrameCallback && (this._userRequestFrameCallback = true, this.tick());
  }, v8.off = function(e46) {
    h3.getInstance().off(e46), e46 === a.OnFrameCallback && (this._userRequestFrameCallback = false);
  }, v8.getQualityNumber = function(e46) {
    switch (e46) {
      case "high":
        return 0.9;
      case "normal":
      default:
        return 0.6;
      case "low":
        return 0.2;
    }
  }, v8.getFacingMode = function() {
    return this._facingMode;
  }, v8.getCameraList = function() {
    return this._cameraList;
  }, v8.getCameraCount = function() {
    return this._cameraList.length;
  }, v8.getSelectedDeviceId = function() {
    return this._selectedDeviceId;
  }, v8.setDeviceId = function(t40) {
    var i46 = this;
    return t6(function() {
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            return i46._selectedDeviceId = t40, i46._hasUserMedia ? [4, i46.stream()] : [3, 2];
          case 1:
            e46.sent(), e46.label = 2;
          case 2:
            return [2];
        }
      });
    })();
  }, v8.getVideoInputs = function(e46) {
    var t40 = this;
    return this._cameraList = [], e46.forEach(function(e47) {
      "videoinput" === e47.kind && t40._cameraList.push(e47);
    }), this._cameraList;
  }, v8.updateMediaConstraints = function(t40) {
    var i46 = this;
    return t6(function() {
      var e46, a37, r33, s31, o18, c40;
      return e15(this, function(d18) {
        switch (d18.label) {
          case 0:
            return u.isEmpty(t40) ? [2] : JSON.stringify(t40) !== JSON.stringify(i46._mediaConstraints) ? (i46._mediaConstraints = t40, i46._facingMode = null !== (e46 = null == t40 ? void 0 : t40.facingMode) && void 0 !== e46 ? e46 : i46._facingMode, i46._selectedDeviceId = null !== (a37 = null == t40 ? void 0 : t40.deviceId) && void 0 !== a37 ? a37 : i46._selectedDeviceId, i46._mirror = null !== (r33 = null == t40 ? void 0 : t40.mirrored) && void 0 !== r33 ? r33 : i46._mirror, i46._audioEnabled = null !== (s31 = null == t40 ? void 0 : t40.audio) && void 0 !== s31 ? s31 : i46._audioEnabled, i46._videoEnabled = null !== (o18 = null == t40 ? void 0 : t40.video) && void 0 !== o18 ? o18 : i46._videoEnabled, i46._selectedDeviceId = null !== (c40 = null == t40 ? void 0 : t40.deviceId) && void 0 !== c40 ? c40 : i46._selectedDeviceId, i46._hasUserMedia ? [4, i46.stream()] : [3, 2]) : [2];
          case 1:
            d18.sent(), d18.label = 2;
          case 2:
            return [2];
        }
      });
    })();
  }, v8.getCurrentMediaConstraints = function() {
    var e46 = this._mediaConstraints, t40 = {};
    this._videoElement.width = (null == e46 ? void 0 : e46.width) || this._videoElement.width || h9.width, this._videoElement.height = (null == e46 ? void 0 : e46.height) || this._videoElement.height || h9.height;
    var i46 = false !== this._videoEnabled, n25 = false !== this._audioEnabled;
    return i46 && ("" == this._selectedDeviceId && null !== this._facingMode ? t40.facingMode = this._facingMode : t40.deviceId = { exact: this._selectedDeviceId }, t40.width = { exact: this._videoElement.width }, t40.height = { exact: this._videoElement.height }), { video: !!i46 && t40, audio: n25 };
  }, v8.selectCamera = function() {
    var e46 = true, t40 = false, i46 = void 0;
    try {
      for (var n25, a37 = this._cameraList[Symbol.iterator](); !(e46 = (n25 = a37.next()).done); e46 = true) {
        var s31 = n25.value;
        if (this._facingMode == e2.FRONT && s31.label.toLowerCase().includes("front") || this._facingMode == e2.BACK && s31.label.toLowerCase().includes("back")) {
          this._selectedDeviceId = s31.deviceId;
          break;
        }
      }
    } catch (e47) {
      t40 = true, i46 = e47;
    } finally {
      try {
        e46 || null == a37.return || a37.return();
      } finally {
        if (t40) throw i46;
      }
    }
  }, v8.flip = function() {
    var t40 = this;
    return t6(function() {
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            return t40._facingMode = t40._facingMode == e2.FRONT ? e2.BACK : e2.FRONT, t40._videoElement.style.transform = "", t40.selectCamera(), t40._hasUserMedia ? [4, t40.stream()] : [3, 2];
          case 1:
            e46.sent(), e46.label = 2;
          case 2:
            return [2];
        }
      });
    })();
  }, v8.start = function() {
    var t40 = this;
    return t6(function() {
      var n25, r33;
      return e15(this, function(s31) {
        return n25 = h3.getInstance(), r33 = function(e46) {
          try {
            t40._hasUserMedia && t40.stop();
          } catch (e47) {
          }
        }, n25.off(o5.AppPaused, r33), n25.on(o5.AppPaused, r33), [2, new Promise((o18 = t6(function(e46, n26) {
          var r34;
          return e15(this, function(s32) {
            switch (s32.label) {
              case 0:
                return s32.trys.push([0, 2, , 3]), [4, t40.stream()];
              case 1:
                return s32.sent(), h3.getInstance().emit(a.OnStartCallback, 0), e46(t40._selectedDeviceId), [3, 3];
              case 2:
                return r34 = s32.sent(), n26(r34), [3, 3];
              case 3:
                return [2];
            }
          });
        }), function(e46, t41) {
          return o18.apply(this, arguments);
        }))];
        var o18;
      });
    })();
  }, v8.info = function() {
    var t40 = this;
    return t6(function() {
      return e15(this, function(e46) {
        return [2, new Promise(function(e47, i46) {
          navigator.mediaDevices.enumerateDevices().then(function(i47) {
            t40.getVideoInputs(i47), e47(t40._cameraList);
          }).catch(function(e48) {
            i46(e48);
          });
        })];
      });
    })();
  }, v8.stream = function() {
    var t40 = this;
    return t6(function() {
      return e15(this, function(i46) {
        return [2, new Promise(function(i47, n25) {
          try {
            t40._stop();
            var a37 = t40.getCurrentMediaConstraints();
            if (false === a37.video && !a37.audio) return void i47(t40._facingMode);
            navigator.mediaDevices.getUserMedia(a37).then((r33 = t6(function(e46) {
              return e15(this, function(n26) {
                switch (n26.label) {
                  case 0:
                    return [4, t40.info()];
                  case 1:
                    return n26.sent(), t40.selectCamera(), t40.handleUserMedia(null, e46), i47(t40._facingMode), [2];
                }
              });
            }), function(e46) {
              return r33.apply(this, arguments);
            })).catch(function(e46) {
              t40.handleUserMedia(e46), n25(e46);
            });
          } catch (e46) {
            n25(e46);
          }
          var r33;
        })];
      });
    })();
  }, v8.handleUserMedia = function(e46, t40) {
    var i46 = this;
    if (!e46 && t40) {
      this._stream = t40;
      try {
        this._videoElement && (this._videoElement.srcObject = t40, (this._facingMode == e2.FRONT || this._mirror) && (this._videoElement.style.transform = "scale(-1,1)"), this._videoElement.onloadedmetadata = function() {
          i46._userRequestFrameCallback && i46.tick();
        }, this._videoElement.play().then(function() {
          i46._hasUserMedia = true;
        }).catch(function(e47) {
          i46._hasUserMedia = false;
        }));
      } catch (e47) {
        this._hasUserMedia = false;
      }
    } else this._hasUserMedia = false;
  }, v8.updateTrackEnable = function(t40, i46) {
    var n25 = this;
    return t6(function() {
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            if (t40 === o.VIDEO) {
              if (n25._videoEnabled === i46) return [2];
              n25._videoEnabled = i46;
            } else {
              if (n25._audioEnabled === i46) return [2];
              n25._audioEnabled = i46;
            }
            return [4, n25.stream()];
          case 1:
            return e46.sent(), [2];
        }
      });
    })();
  }, v8.pause = function(t40) {
    var i46 = this;
    return t6(function() {
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            return [4, i46.updateTrackEnable(t40, false)];
          case 1:
            return e46.sent(), [2];
        }
      });
    })();
  }, v8.resume = function(t40) {
    var i46 = this;
    return t6(function() {
      return e15(this, function(e46) {
        switch (e46.label) {
          case 0:
            return [4, i46.updateTrackEnable(t40, true)];
          case 1:
            return e46.sent(), [2];
        }
      });
    })();
  }, v8.isUsing = function() {
    return this._hasUserMedia;
  }, v8.stop = function() {
    this._stop(), h3.getInstance().emit(a.OnStopCallback, 0);
  }, v8._stop = function() {
    o17.stopMediaStream(this._stream), this._hasUserMedia = false;
  }, v8.setFacingMode = function(e46) {
    this._facingMode = e46;
  }, v8.setMirror = function(e46) {
    this._mirror = e46, this._videoElement && (this._videoElement.style.transform = e46 ? "scale(-1,1)" : "");
  }, v8.takePhoto = function(e46) {
    if (!this._hasUserMedia) return null;
    var t40 = e46 || {}, i46 = this.getCanvas(t40);
    if (this.drawFrame(t40), i46) {
      var n25 = t40.format || l23.format;
      return { data: i46.toDataURL(n25, this.getQualityNumber(t40.quality)), width: i46.width, height: i46.height };
    }
    return null;
  }, v8.haveVideoStream = function() {
    var e46 = this._videoElement;
    return e46 && e46.videoHeight > 0 && this._hasUserMedia;
  }, v8.getCanvas = function(e46) {
    var t40 = this._videoElement, i46 = e46 || {};
    if (!this.haveVideoStream()) return null;
    if (!this._ctx) {
      var n25 = t40.videoWidth, a37 = t40.videoHeight;
      if (!i46.useVideoSourceSize) {
        var r33 = n25 / a37;
        a37 = (n25 = i46.minScreenshotWidth || t40.clientWidth) / r33, i46.minScreenshotHeight && a37 < i46.minScreenshotHeight && (n25 = (a37 = i46.minScreenshotHeight) * r33);
      }
      this._canvasElement = document.createElement("canvas"), this._canvasElement.width = (null == i46 ? void 0 : i46.width) || n25, this._canvasElement.height = (null == i46 ? void 0 : i46.height) || a37, this._ctx = this._canvasElement.getContext("2d");
    }
    return this._canvasElement;
  }, v8.drawFrame = function(e46) {
    var t40 = this._videoElement, i46 = e46 || {};
    if (t40 && this._ctx && this._canvasElement) {
      var n25 = this._canvasElement, a37 = this._ctx;
      n25.width = (null == i46 ? void 0 : i46.width) || n25.width, n25.height = (null == i46 ? void 0 : i46.height) || n25.height, ((null == i46 ? void 0 : i46.mirrored) || this._mirror || this._facingMode === e2.FRONT) && (a37.translate(n25.width, 0), a37.scale(-1, 1)), a37.drawImage(t40, 0, 0, n25.width, n25.height), ((null == i46 ? void 0 : i46.mirrored) || this._mirror || this._facingMode === e2.FRONT) && (a37.scale(-1, 1), a37.translate(-n25.width, 0));
    }
  }, o17.stopMediaStream = function(e46) {
    e46 && (e46.getVideoTracks && e46.getAudioTracks ? (e46.getVideoTracks().map(function(t40) {
      e46.removeTrack(t40), t40.stop();
    }), e46.getAudioTracks().map(function(t40) {
      e46.removeTrack(t40), t40.stop();
    })) : e46.stop());
  }, o17;
}();

// node_modules/zmp-sdk/apis/apis/createCameraContext.js
var t39 = Me({ play: ot.function(), pause: ot.function() }).refine(function(o17) {
  return "play" in o17 && "pause" in o17;
}, { message: "Invalid HTMLVideoElement" });
var a30 = [Me({ videoElement: t39, mediaConstraints: ot.object({ width: ot.number().min(100).optional(), height: ot.number().min(100).optional(), facingMode: ot.string().optional(), audio: ot.boolean().optional(), video: ot.boolean().optional(), deviceId: ot.string().optional(), mirrored: ot.boolean().optional() }).nullish() }).optional()];
function r30(o17) {
  return a9("createCameraContext", a30, [o17], function(o18) {
    return new v6(o18.videoElement, o18.mediaConstraints);
  });
}

// node_modules/zmp-sdk/apis/common/apis/general/adtimaAd.js
var n22 = function() {
  function n25() {
    var o17, t41;
    a2(this, n25), this.sdkLoaded = false, this.queue = [];
    var s31 = window.AdtimaZMA = { config: { cateId: null === (o17 = window.zmpGlobal) || void 0 === o17 || null === (t41 = o17.appInfo) || void 0 === t41 ? void 0 : t41.cateType, appId: window.APP_ID }, queue: [], load: function(e46, o18) {
      s31.queue = a5(s31.queue).concat([[e46, o18]]);
    } };
  }
  var t40 = n25.prototype;
  return t40.loadSDK = function() {
    var e46 = this, i46 = document.createElement("script");
    i46.src = "https://adtima-static.zascdn.me/resource/js/zma/sdk.js?q=".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 864e5)), i46.onload = function() {
      e46.sdkLoaded = true, e46.processQueue();
    }, i46.onerror = function() {
      e46.sdkLoaded = true;
    }, document.body.appendChild(i46);
  }, t40.load = function(e46, i46) {
    var n26;
    u.isFunction(null === (n26 = window.AdtimaZMA) || void 0 === n26 ? void 0 : n26.load) && window.AdtimaZMA.load(e46, i46);
  }, t40.display = function(e46) {
    var i46;
    this.sdkLoaded ? u.isFunction(null === (i46 = window.AdtimaZMA) || void 0 === i46 ? void 0 : i46.display) && window.AdtimaZMA.display(e46) : this.queue.push(this.display.bind(this, e46));
  }, t40.refresh = function(e46) {
    var i46;
    this.sdkLoaded ? u.isFunction(null === (i46 = window.AdtimaZMA) || void 0 === i46 ? void 0 : i46.refresh) && window.AdtimaZMA.refresh(e46) : this.queue.push(this.refresh.bind(this, e46));
  }, t40.processQueue = function() {
    for (; this.queue.length > 0; ) {
      var e46 = this.queue.shift();
      e46 && e46();
    }
  }, n25.getInstance = function() {
    return n25.instance || (n25.instance = new n25()), n25.instance;
  }, n25;
}();

// node_modules/zmp-sdk/apis/apis/adtimaAd/setup.js
function e41(t40) {
  return s23.apply(this, arguments);
}
function s23() {
  return (s23 = t6(function(t40) {
    return e15(this, function(n25) {
      return [2, a9("setupAd", [], [t40], function() {
        return n22.getInstance().loadSDK();
      })];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/adtimaAd/load.js
var e42 = [Me({ ids: ot.union([ot.string(), ot.array(ot.string())]), config: Me({ display: ot.boolean().optional(), onClose: ot.function().optional() }).optional() })];
function a31(o17) {
  return l24.apply(this, arguments);
}
function l24() {
  return l24 = t6(function(n25) {
    return e15(this, function(t40) {
      return [2, a9("loadAd", e42, [n25], (a37 = t6(function(o17) {
        return e15(this, function(n26) {
          return n22.getInstance().load(o17.ids, o17.config), [2];
        });
      }), function(o17) {
        return a37.apply(this, arguments);
      }))];
      var a37;
    });
  }), l24.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/adtimaAd/display.js
var e43 = [Me({ id: ot.string() })];
function m47(t40) {
  return u43.apply(this, arguments);
}
function u43() {
  return u43 = t6(function(r33) {
    return e15(this, function(n25) {
      return [2, a9("displayAd", e43, [r33], (m51 = t6(function(t40) {
        return e15(this, function(r34) {
          return n22.getInstance().display(t40.id), [2];
        });
      }), function(t40) {
        return m51.apply(this, arguments);
      }))];
      var m51;
    });
  }), u43.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/adtimaAd/refresh.js
var s24 = [Me({ id: ot.string().optional() }).optional()];
function m48(r33) {
  return u44.apply(this, arguments);
}
function u44() {
  return u44 = t6(function(t40) {
    return e15(this, function(o17) {
      return [2, a9("refreshAd", s24, [t40], (m51 = t6(function(r33) {
        return e15(this, function(t41) {
          return n22.getInstance().refresh(r33.id), [2];
        });
      }), function(r33) {
        return m51.apply(this, arguments);
      }))];
      var m51;
    });
  }), u44.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/showOAWidget.js
var h10;
var f10 = [Me({ id: ke(), guidingText: ke().optional(), color: ke().optional(), onStatusChange: ot.function().optional(), onError: ot.function().optional() }).catchall(ot.any())];
function g7(o17) {
  return j7.apply(this, arguments);
}
function j7() {
  return j7 = t6(function(n25) {
    return e15(this, function(r33) {
      return [2, a9("showOAWidget", f10, [n25], (i46 = t6(function(n26) {
        var r34, i47, c40, f14, g9, j9, w7, y7;
        return e15(this, function(v8) {
          if (o10.isMp) {
            try {
              r34 = document.getElementById(n26.id), i47 = n26.onStatusChange, c40 = n26.guidingText, f14 = n26.color, g9 = t(n26, ["onStatusChange", "guidingText", "color"]), r34 && (j9 = document.createElement("iframe"), w7 = "ifOAW-".concat(n26.id, "-").concat(Date.now()), (y7 = new URL(G.OA)).searchParams.set("id", w7), y7.searchParams.set("appId", window.APP_ID), c40 && y7.searchParams.set("guidingText", c40), f14 && y7.searchParams.set("color", f14), Object.entries(g9).forEach(function(o17) {
                var e46 = e6(o17, 2), n27 = e46[0], r35 = e46[1];
                r35 && y7.searchParams.set("data-".concat(n27), String(r35));
              }), j9.id = w7, j9.src = y7.href, j9.style.width = "100%", j9.style.height = "100%", j9.style.border = "none", r34.innerHTML = j9.outerHTML, window.removeEventListener("message", h10, false), h10 = function() {
                var e46 = t6(function(o17) {
                  var e47, t40, n27, r35, s31, a37, c41, d18;
                  return e15(this, function(p46) {
                    switch (p46.label) {
                      case 0:
                        return e47 = o17.data, o17.origin.startsWith(g) ? (t40 = document.getElementById(w7), n27 = e47.type, (r35 = new URL(e47.href)).origin !== y7.origin || r35.pathname !== y7.pathname || e47.id !== w7 ? [3, 3] : "followOA" !== n27 && "getOAInfo" !== n27 ? [3, 2] : [4, w2.jumpAndGetToken()]) : [3, 3];
                      case 1:
                        return p46.sent(), c41 = null === (s31 = w2.miniProgramConfig) || void 0 === s31 ? void 0 : s31.jwt, null == t40 || null === (a37 = t40.contentWindow) || void 0 === a37 || a37.postMessage({ type: n27, payload: { jwt: c41 } }, g), [3, 3];
                      case 2:
                        "oaInfo" === n27 ? null == i47 || i47(null === (d18 = e47.payload) || void 0 === d18 ? void 0 : d18.followed) : "openOA" === n27 ? i13(e47.payload.id, "oa") : "heightChange" === n27 && (t40.style.height = "".concat(e47.payload, "px")), p46.label = 3;
                      case 3:
                        return [2];
                    }
                  });
                });
                return function(o17) {
                  return e46.apply(this, arguments);
                };
              }(), window.addEventListener("message", h10, false));
            } catch (o17) {
              console.log(o17);
            }
            return [2, Promise.resolve()];
          }
          return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("showOAWidget", {}))];
        });
      }), function(o17) {
        return i46.apply(this, arguments);
      }))];
      var i46;
    });
  }), j7.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/showFunctionButtonWidget.js
var p41;
var f11 = [ot.object({ id: ot.string(), type: ot.string(), text: ot.string(), color: ot.string().optional(), disabled: ot.boolean().optional(), onDataReceived: ot.function().optional(), onError: ot.function().optional() }).catchall(ot.any())];
function y6(t40) {
  return h11.apply(this, arguments);
}
function h11() {
  return h11 = t6(function(r33) {
    return e15(this, function(y7) {
      return [2, a9("showFunctionButtonWidget", f11, [r33], (h13 = t6(function(r34) {
        var a37, f14, y8, h14, v8, j9, g9;
        return e15(this, function(w7) {
          if (o10.isMp) {
            try {
              a37 = document.getElementById(r34.id), f14 = r34.onDataReceived, y8 = r34.onError, h14 = t(r34, ["onDataReceived", "onError"]), a37 && (v8 = document.createElement("iframe"), j9 = "ifFBW-".concat(r34.id, "-").concat(Date.now()), (g9 = new URL(G.FUNCTION_BUTTON)).searchParams.set("id", j9), g9.searchParams.set("appId", window.APP_ID), Object.entries(h14).forEach(function(t40) {
                var e46 = e6(t40, 2), n25 = e46[0], r35 = e46[1];
                r35 && g9.searchParams.set("data-".concat(n25), String(r35));
              }), v8.id = j9, v8.src = g9.href, v8.style.width = "100%", v8.style.height = "100%", v8.style.border = "none", Object.entries(h14).forEach(function(t40) {
                var e46 = e6(t40, 2), n25 = e46[0], r35 = e46[1];
                r35 && v8.setAttribute("data-".concat(n25), String(r35));
              }), a37.innerHTML = v8.outerHTML, window.removeEventListener("message", p41, false), p41 = function() {
                var e46 = t6(function(t40) {
                  var e47, o17, r35, i46, s31, a38, d18, p46, v9, w8, _10, b8, E7;
                  return e15(this, function(m51) {
                    switch (m51.label) {
                      case 0:
                        return e47 = t40.data, t40.origin.startsWith(g) ? (o17 = document.getElementById(j9), r35 = e47.type, (i46 = new URL(e47.href)).origin !== g9.origin || i46.pathname !== g9.pathname || e47.id !== j9 ? [3, 4] : "buttonClicked" !== r35 ? [3, 3] : [4, w2.jumpAndGetToken()]) : [3, 4];
                      case 1:
                        return m51.sent(), p46 = null === (s31 = w2.miniProgramConfig) || void 0 === s31 ? void 0 : s31.jwt, v9 = null === (a38 = w2.miniProgramConfig) || void 0 === a38 ? void 0 : a38.encryptKey, [4, c6()];
                      case 2:
                        return w8 = m51.sent(), null == o17 || null === (d18 = o17.contentWindow) || void 0 === d18 || d18.postMessage({ type: r35, payload: { jwt: p46, encryptKey: v9, accessToken: w8 } }, g), [3, 4];
                      case 3:
                        "onSuccess" === r35 ? (null == (_10 = e47.payload) ? void 0 : _10.type) === h14.type && (b8 = { callAction: function(t41, e48) {
                          var n25;
                          null == o17 || null === (n25 = o17.contentWindow) || void 0 === n25 || n25.postMessage({ type: "context.callAction", payload: { actionName: t41, actionData: e48 } }, g);
                        } }, null == f14 || f14.apply(void 0, a5(Object.values(_10)).concat([b8]))) : "onError" === r35 && (null == (E7 = e47.payload) ? void 0 : E7.type) === h14.type && (null == y8 || y8(null == E7 ? void 0 : E7.data)), m51.label = 4;
                      case 4:
                        return [2];
                    }
                  });
                });
                return function(t40) {
                  return e46.apply(this, arguments);
                };
              }(), window.addEventListener("message", p41, false));
            } catch (t40) {
              console.log(t40);
            }
            return [2, Promise.resolve()];
          }
          return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("showFunctionButtonWidget", {}))];
        });
      }), function(t40) {
        return h13.apply(this, arguments);
      }))];
      var h13;
    });
  }), h11.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/scanNFC.js
var i43;
var u45 = (i43 = t6(function(d18, i46) {
  var u48;
  return e15(this, function(o17) {
    return u48 = {}, "cccd" === d18 && (u48 = { mrz: null == i46 ? void 0 : i46.mrz }), [2, new Promise(function(o18, i47) {
      a8("SCAN_NFC", { type: l2[d18], data: u48 }, { success: function(l27) {
        if ("cccd" === d18) {
          var n25, i48, u49, g9, e46, t40, s31, r33, v8, c40, m51, a37, f14, p46, A5, C5, _10, h13, j9, y7, R3, b8 = { dg1: null !== (n25 = l27.dg1) && void 0 !== n25 ? n25 : "", dg2: null !== (i48 = l27.dg2) && void 0 !== i48 ? i48 : "", dg3: null !== (u49 = l27.dg3) && void 0 !== u49 ? u49 : "", dg4: null !== (g9 = l27.dg4) && void 0 !== g9 ? g9 : "", dg5: null !== (e46 = l27.dg5) && void 0 !== e46 ? e46 : "", dg6: null !== (t40 = l27.dg6) && void 0 !== t40 ? t40 : "", dg7: null !== (s31 = l27.dg7) && void 0 !== s31 ? s31 : "", dg8: null !== (r33 = l27.dg8) && void 0 !== r33 ? r33 : "", dg9: null !== (v8 = l27.dg9) && void 0 !== v8 ? v8 : "", dg10: null !== (c40 = l27.dg10) && void 0 !== c40 ? c40 : "", dg11: null !== (m51 = l27.dg11) && void 0 !== m51 ? m51 : "", dg12: null !== (a37 = l27.dg12) && void 0 !== a37 ? a37 : "", dg13: null !== (f14 = l27.dg13) && void 0 !== f14 ? f14 : "", dg14: null !== (p46 = l27.dg14) && void 0 !== p46 ? p46 : "", dg15: null !== (A5 = l27.dg15) && void 0 !== A5 ? A5 : "", dg16: null !== (C5 = l27.dg16) && void 0 !== C5 ? C5 : "", com: null !== (_10 = l27.com) && void 0 !== _10 ? _10 : "", sod: null !== (h13 = l27.sod) && void 0 !== h13 ? h13 : "", challenge: null !== (j9 = l27.challenge) && void 0 !== j9 ? j9 : "", aAResult: null !== (y7 = l27.aAResult) && void 0 !== y7 ? y7 : "", eACCAResult: null !== (R3 = l27.eACCAResult) && void 0 !== R3 ? R3 : "" };
          o18(b8);
        } else o18({});
      }, fail: function(d19) {
        i47(d19);
      } }, { timeout: false });
    })];
  });
}), function(d18, l27) {
  return i43.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/scanNFC.js
var u46 = [Me({ type: ot.enum(["cccd"]), data: Me({ mrz: ke().max(90) }) })];
function l25(r33) {
  return f12.apply(this, arguments);
}
function f12() {
  return f12 = t6(function(o17) {
    return e15(this, function(t40) {
      return [2, a9("scanNFC", u46, [o17], (e46 = t6(function(r33) {
        var o18, t41;
        return e15(this, function(e47) {
          switch (e47.label) {
            case 0:
              return o10.isMp ? v2(754, 620) ? (o18 = r33.type, t41 = r33.data, [4, u45(o18, t41)]) : [3, 2] : [3, 3];
            case 1:
              return [2, e47.sent()];
            case 2:
              return [2, Promise.reject(d5.error.clientNotSupport())];
            case 3:
              return o10.isMpWeb ? [2, Promise.resolve({})] : [2, Promise.reject(o11("scanNFC", {}))];
          }
        });
      }), function(r33) {
        return e46.apply(this, arguments);
      }))];
      var e46;
    });
  }), f12.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/common/apis/general/checkNFC.js
var e44 = t6(function() {
  return e15(this, function(o17) {
    return [2, new Promise(function(o18, t40) {
      a8("CHECK_NFC", {}, { success: function(s31) {
        o18(s31);
      }, fail: function(o19) {
        t40(o19);
      } }, { timeout: false });
    })];
  });
});

// node_modules/zmp-sdk/apis/apis/checkNFC.js
function i44(r33) {
  return c38.apply(this, arguments);
}
function c38() {
  return (c38 = t6(function(i46) {
    return e15(this, function(c40) {
      return [2, a9("checkNFC", [], [i46], t6(function() {
        return e15(this, function(r33) {
          switch (r33.label) {
            case 0:
              return o10.isMp ? [4, e44()] : [3, 2];
            case 1:
              return [2, r33.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve({})] : [2, Promise.reject(o11("checkNFC", {}))];
          }
        });
      }))];
    });
  })).apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/native-storage/getItem.js
var s25 = [ot.string().trim().min(1)];
function p42(i46) {
  return a9("getItem", s25, [i46], function() {
    for (var t40 = arguments.length, i47 = new Array(t40), s31 = 0; s31 < t40; s31++) i47[s31] = arguments[s31];
    if (o10.isMp || o10.isMpWeb) {
      if (v2(757, 625)) return F3.getItem(i47[0]);
      throw d5.error.clientNotSupport();
    }
    throw o11("getItem", {});
  });
}

// node_modules/zmp-sdk/apis/apis/native-storage/setItem.js
var s26 = [ot.string().trim().min(1), ot.string().trim()];
function p43(m51, p46) {
  return a9("setItem", s26, [m51, p46], function() {
    for (var t40 = arguments.length, m52 = new Array(t40), s31 = 0; s31 < t40; s31++) m52[s31] = arguments[s31];
    if (o10.isMp || o10.isMpWeb) {
      if (v2(757, 625)) return F3.setItem(m52[0], m52[1]);
      throw d5.error.clientNotSupport();
    }
    throw o11("setItem", {});
  });
}

// node_modules/zmp-sdk/apis/apis/native-storage/clear.js
function n23() {
  return a9("clear", [], [], function() {
    if (o10.isMp || o10.isMpWeb) {
      if (v2(757, 625)) return F3.clearStorageSync();
      throw d5.error.clientNotSupport();
    }
    throw o11("clear", {});
  });
}

// node_modules/zmp-sdk/apis/apis/native-storage/removeItem.js
var s27 = [ot.string().trim().min(1)];
function p44(t40) {
  return a9("removeItem", s27, [t40], function() {
    for (var m51 = arguments.length, t41 = new Array(m51), s31 = 0; s31 < m51; s31++) t41[s31] = arguments[s31];
    if (o10.isMp || o10.isMpWeb) {
      if (v2(757, 625)) return F3.removeItem(t41[0]);
      throw d5.error.clientNotSupport();
    }
    throw o11("removeItem", {});
  });
}

// node_modules/zmp-sdk/apis/apis/native-storage/getStorageInfoSync.js
function m49() {
  return a9("getStorageInfoSync", [], [], function() {
    if (o10.isMp || o10.isMpWeb) {
      if (v2(757, 625)) return F3.getStorageInfoSync();
      throw d5.error.clientNotSupport();
    }
    throw o11("getStorageInfoSync", {});
  });
}

// node_modules/zmp-sdk/apis/apis/native-storage/index.js
var I5 = { getItem: p42, setItem: p43, clear: n23, removeItem: p44, getStorageInfo: m49 };

// node_modules/zmp-sdk/apis/apis/payment/index.js
var a32 = { purchase: u35, createOrder: d11, checkTransaction: u36, createOrderIAP: u38, selectPaymentMethod: p32 };
var m50 = a32;

// node_modules/zmp-sdk/apis/common/apis/general/saveFile.js
var s28;
var e45 = (s28 = t6(function(n25, s31) {
  return e15(this, function(r33) {
    return [2, new Promise(function(r34, e46) {
      a8("SAVE_FILE", { fileUrl: n25, onProgress: s31 }, { success: function(n26) {
        r34();
      }, fail: function(n26) {
        e46(n26);
      } }, {});
    })];
  });
}), function(n25, o17) {
  return s28.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/downloadFile.js
var l26 = [Me({ url: ot.string().url() }).optional()];
function u47(r33) {
  return a33.apply(this, arguments);
}
function a33() {
  return a33 = t6(function(o17) {
    return e15(this, function(e46) {
      return [2, a9("downloadFile", l26, [o17], (u48 = t6(function(r33) {
        var o18;
        return e15(this, function(e47) {
          switch (e47.label) {
            case 0:
              return o10.isMp ? (o18 = r33.url, [4, e45(o18, r33.onProgress)]) : [3, 2];
            case 1:
              return [2, e47.sent()];
            case 2:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("downloadFile", {}))];
          }
        });
      }), function(r33) {
        return u48.apply(this, arguments);
      }))];
      var u48;
    });
  }), a33.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/trackingManager/logEvent.js
var p45 = ot.enum(["APP_INITIALIZING", "APP_READY"]);
var d16 = ot.any();
function a34(m51, a37) {
  return a9("logEvent", [p45, d16], [m51, a37], function(t40, m52) {
    if (o10.isMp || o10.isMpWeb) {
      var p46, d18, a38, c40 = e25(t9({}, "object" == typeof m52 && null !== m52 ? m52 : {}), { duration: Math.round(performance.now()), timestamp: Date.now() });
      return null === window || void 0 === window || null === (p46 = window.zmpGlobal) || void 0 === p46 || null === (d18 = p46.eventManager) || void 0 === d18 || null === (a38 = d18.logEventForClient) || void 0 === a38 || a38.call(d18, { type: S.DEV_TRACKING, eventCode: "APP_INITIALIZING" === t40 ? R.APP_INITIALIZING : R.APP_READY }), d4([{ action: "zmp.app.lifecycle.tracking", error: 0, message: "", data: t9({ eventType: t40 }, c40) }]);
    }
    throw o11("logEvent", {});
  });
}

// node_modules/zmp-sdk/apis/apis/trackingManager/index.js
var r31 = { logEvent: a34 };

// node_modules/zmp-sdk/apis/apis/showCustomOAWidget.js
var g8;
var b6 = [Me({ id: ke(), textColor: ot.string().optional(), fontSize: ot.string().optional(), buttonHeight: ot.string().optional(), buttonColor: ot.string().optional(), buttonTextColor: ot.string().optional(), buttonRadius: ot.string().optional(), buttonText: ot.string().optional(), checkboxBGColor: ot.string().optional(), checkboxCheckmarkColor: ot.string().optional(), onClick: ot.function().optional(), onStatusChange: ot.function().optional(), onError: ot.function().optional() }).catchall(ot.any())];
function C4(o17) {
  return x2.apply(this, arguments);
}
function x2() {
  return x2 = t6(function(e46) {
    return e15(this, function(r33) {
      return [2, a9("showCustomOAWidget", b6, [e46], (i46 = t6(function(e47) {
        var r34, i47, l27, b8, C5, x3, j9, y7, k5, w7, v8, _10, T4, E7, O4, S5, A5, P3, I6, R3, B3;
        return e15(this, function(H2) {
          if (o10.isMp) {
            try {
              r34 = document.getElementById(e47.id), i47 = e47.textColor, l27 = e47.fontSize, b8 = e47.buttonHeight, C5 = e47.buttonColor, x3 = e47.buttonTextColor, j9 = e47.buttonRadius, y7 = e47.buttonText, k5 = e47.checkboxBGColor, w7 = e47.checkboxCheckmarkColor, v8 = e47.onStatusChange, _10 = e47.onClick, T4 = e47.onError, E7 = t(e47, ["textColor", "fontSize", "buttonHeight", "buttonColor", "buttonTextColor", "buttonRadius", "buttonText", "checkboxBGColor", "checkboxCheckmarkColor", "onStatusChange", "onClick", "onError"]), r34 && (O4 = document.createElement("iframe"), S5 = "ifCOAW-".concat(e47.id, "-").concat(Date.now()), A5 = new URL(G.CUSTOM_OA), P3 = { id: S5, appId: window.APP_ID, textColor: i47, fontSize: l27, buttonHeight: b8, buttonColor: C5, buttonTextColor: x3, buttonRadius: j9, buttonText: y7, checkboxBGColor: k5, checkboxCheckmarkColor: w7 }, Object.entries(E7).forEach(function(o17) {
                var t40 = e6(o17, 2), e48 = t40[0], r35 = t40[1];
                r35 && (P3["data-".concat(e48)] = String(r35));
              }), I6 = JSON.stringify(P3), R3 = L2(I6), B3 = encodeURIComponent(R3), J(A5.searchParams, "data", B3), O4.id = S5, O4.src = A5.href, O4.style.width = "100%", O4.style.height = "100%", O4.style.border = "none", r34.innerHTML = O4.outerHTML, window.removeEventListener("message", g8, false), g8 = function() {
                var t40 = t6(function(o17) {
                  var t41, n25, e48, r35, i48, s31, a37, l28, m51;
                  return e15(this, function(d18) {
                    switch (d18.label) {
                      case 0:
                        return t41 = o17.data, o17.origin.startsWith(g) ? (n25 = document.getElementById(S5), e48 = t41.type, (r35 = new URL(t41.href)).origin !== A5.origin || r35.pathname !== A5.pathname || t41.id !== S5 ? [3, 3] : "followOA" !== e48 && "getOAInfo" !== e48 ? [3, 2] : [4, w2.jumpAndGetToken()]) : [3, 3];
                      case 1:
                        return d18.sent(), a37 = null === (i48 = w2.miniProgramConfig) || void 0 === i48 ? void 0 : i48.jwt, null == n25 || null === (s31 = n25.contentWindow) || void 0 === s31 || s31.postMessage({ type: e48, payload: { jwt: a37 } }, g), [3, 3];
                      case 2:
                        "oaInfo" === e48 ? null == v8 || v8(null === (l28 = t41.payload) || void 0 === l28 ? void 0 : l28.followed) : "openOA" === e48 ? i13(t41.payload.id, "oa") : "heightChange" === e48 ? n25.style.height = "".concat(t41.payload, "px") : "onClick" === e48 ? null == _10 || _10(null === (m51 = t41.payload) || void 0 === m51 ? void 0 : m51.status) : "onError" === e48 && (null == T4 || T4(t41.payload)), d18.label = 3;
                      case 3:
                        return [2];
                    }
                  });
                });
                return function(o17) {
                  return t40.apply(this, arguments);
                };
              }(), window.addEventListener("message", g8, false));
            } catch (o17) {
              console.log(o17);
            }
            return [2, Promise.resolve()];
          }
          return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("showCustomOAWidget", {}))];
        });
      }), function(o17) {
        return i46.apply(this, arguments);
      }))];
      var i46;
    });
  }), x2.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/checkoutKit/showWidget.js
var v7;
var _8 = [Me({ id: ke(), onMethodChange: ot.function().optional() }).catchall(ot.any())];
function b7(e46) {
  return E6.apply(this, arguments);
}
function E6() {
  return E6 = t6(function(r33) {
    return e15(this, function(s31) {
      return [2, a9("showWidget", _8, [r33], (a37 = t6(function(r34) {
        var s32, a38, m51, _10, b8, E7, C5, I6, P3, M5, L4;
        return e15(this, function(T4) {
          if (o10.isMp) {
            try {
              s32 = document.getElementById(r34.id), a38 = r34.onMethodChange, m51 = r34.fail, _10 = t(r34, ["onMethodChange", "fail"]), s32 && ((b8 = document.getElementById(k)) && (document.body.removeChild(b8), b8 = null), b8 = document.createElement("iframe"), E7 = k, C5 = new URL(G.CHECKOUT_KIT), I6 = { id: E7, appId: window.APP_ID }, Object.entries(_10).forEach(function(e46) {
                var t40 = e6(e46, 2), n25 = t40[0], r35 = t40[1];
                r35 && (I6["data-".concat(n25)] = r35);
              }), P3 = JSON.stringify(I6), M5 = btoa(P3), L4 = encodeURIComponent(M5), J(C5.searchParams, "data", L4), b8.id = E7, b8.src = C5.href, b8.style.width = "100%", b8.style.height = "100%", b8.style.border = "none", s32.innerHTML = b8.outerHTML, window.removeEventListener("message", v7, false), v7 = function() {
                var t40 = t6(function(e46) {
                  var t41, o17, r35, s33, i46, c40, d18, f14, h13, v8;
                  return e15(this, function(y7) {
                    switch (y7.label) {
                      case 0:
                        if (t41 = e46.data, !e46.origin.startsWith(g)) return [3, 9];
                        if (o17 = t41.type, r35 = document.getElementById(E7), (s33 = new URL(t41.href)).origin !== C5.origin || s33.pathname !== C5.pathname || t41.id !== E7) return [3, 9];
                        switch (o17) {
                          case "getInfo":
                            return [3, 1];
                          case "getToken":
                            return [3, 2];
                          case "heightChange":
                            return [3, 4];
                          case "callAction":
                            return [3, 5];
                          case "onMethodChange":
                            return [3, 6];
                          case "onError":
                            return [3, 7];
                        }
                        return [3, 8];
                      case 1:
                        return k2(r35, o17, { appId: window.APP_ID, zaloVersion: m3(), appPlatform: null === (i46 = s4()) || void 0 === i46 ? void 0 : i46.platformName }), [3, 9];
                      case 2:
                        return [4, w2.jumpAndGetToken()];
                      case 3:
                        return y7.sent(), d18 = null === (c40 = w2.miniProgramConfig) || void 0 === c40 ? void 0 : c40.jwt, k2(r35, o17, { jwt: d18 }), [3, 9];
                      case 4:
                        return r35.style.height = "".concat(t41.payload, "px"), [3, 9];
                      case 5:
                        return f14 = t41.payload, h13 = f14.actionName, v8 = f14.actionData, String(h13).length > 0 && a8(h13, v8, { success: function(e47) {
                          k2(r35, o17, { status: 0, actionName: h13, data: e47 });
                        }, fail: function(e47) {
                          k2(r35, o17, { status: -1, actionName: h13, data: e47 });
                        } }, {}), [3, 9];
                      case 6:
                        return null == a38 || a38.apply(void 0, a5(Object.values(t41.payload))), [3, 9];
                      case 7:
                        null == m51 || m51(t41.payload), y7.label = 8;
                      case 8:
                        return [3, 9];
                      case 9:
                        return [2];
                    }
                  });
                });
                return function(e46) {
                  return t40.apply(this, arguments);
                };
              }(), window.addEventListener("message", v7, false));
            } catch (e46) {
              console.log(e46);
            }
            return [2, Promise.resolve()];
          }
          return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("showWidget", {}))];
        });
      }), function(e46) {
        return a37.apply(this, arguments);
      }))];
      var a37;
    });
  }), E6.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/checkoutKit/purchase.js
var f13;
var h12 = [Me({ amount: ot.union([ot.string(), ot.number()]), desc: ot.string(), payload: ot.object({}).catchall(ot.any()).optional() }).catchall(ot.any())];
function j8(r33) {
  return _9.apply(this, arguments);
}
function _9() {
  return _9 = t6(function(n25) {
    return e15(this, function(s31) {
      return [2, a9("purchase", h12, [n25], (j9 = t6(function(n26) {
        return e15(this, function(s32) {
          return o10.isMp ? [2, new Promise(function(s33, i46) {
            var m51 = document.getElementById(k), h13 = new URL(G.CHECKOUT_KIT);
            if (!(m51 && n2(m51, HTMLIFrameElement) && m51.src.startsWith(h13.origin) && m51.src.includes(h13.pathname))) return i46(o11("purchase", { message: "Widget not found or not initialized." }));
            var j10 = t(n26, ["amount", "desc", "payload"]), _10 = "purchase";
            k2(m51, _10, t9({ amount: String(n26.amount), desc: n26.desc, payload: n26.payload || {} }, j10)), window.removeEventListener("message", f13, false), f13 = function() {
              var e46 = t6(function(r33) {
                var e47, o17, t40;
                return e15(this, function(n27) {
                  if (e47 = r33.data, r33.origin.startsWith(g) && (o17 = e47.type, (t40 = new URL(e47.href)).origin === h13.origin && t40.pathname === h13.pathname && e47.id === k)) {
                    if (o17 === _10) return [2, s33(e47.payload)];
                    if ("onError" === o17) return [2, i46(e47.payload)];
                  }
                  return [2];
                });
              });
              return function(r33) {
                return e46.apply(this, arguments);
              };
            }(), window.addEventListener("message", f13, false);
          })] : o10.isMpWeb ? [2, Promise.resolve({ orderId: "", messageToken: "", transId: "" })] : [2, Promise.reject(o11("purchase", {}))];
        });
      }), function(r33) {
        return j9.apply(this, arguments);
      }))];
      var j9;
    });
  }), _9.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/apis/checkoutKit/index.js
var s29 = { showWidget: b7, purchase: j8 };

// node_modules/zmp-sdk/apis/common/apis/general/openDocument.js
var n24;
var i45 = (n24 = t6(function(t40) {
  var n25, i46, r33, s31, l27 = arguments;
  return e15(this, function(e46) {
    return n25 = l27.length > 1 && void 0 !== l27[1] ? l27[1] : "", i46 = l27.length > 2 && void 0 !== l27[2] && l27[2], r33 = l27.length > 3 && void 0 !== l27[3] && l27[3], s31 = l27.length > 4 && void 0 !== l27[4] && l27[4], [2, new Promise(function(e47, l28) {
      a8("OPEN_DOCUMENT", { url: t40, title: n25, share: i46, download: r33, edit: s31 }, { success: function(t41) {
        e47();
      }, fail: function(t41) {
        l28(t41);
      } }, { timeout: false });
    })];
  });
}), function(t40) {
  return n24.apply(this, arguments);
});

// node_modules/zmp-sdk/apis/apis/openDocument.js
var a35 = [Me({ url: ke(), title: ke().optional(), download: ot.boolean().default(false).optional(), edit: ot.boolean().default(false).optional() })];
function c39(o17) {
  return d17.apply(this, arguments);
}
function d17() {
  return d17 = t6(function(t40) {
    return e15(this, function(e46) {
      return [2, a9("openDocument", a35, [t40], (r33 = t6(function(o17) {
        return e15(this, function(t41) {
          switch (t41.label) {
            case 0:
              return o10.isMp ? v2(842, 666) ? [4, i45(o17.url, o17.title, false, o17.download, o17.edit)] : [3, 2] : [3, 3];
            case 1:
              return [2, t41.sent()];
            case 2:
              return [2, Promise.reject(d5.error.clientNotSupport())];
            case 3:
              return o10.isMpWeb ? [2, Promise.resolve()] : [2, Promise.reject(o11("openDocument", {}))];
          }
        });
      }), function(o17) {
        return r33.apply(this, arguments);
      }))];
      var r33;
    });
  }), d17.apply(this, arguments);
}

// node_modules/zmp-sdk/apis/index.js
window.ZaloMiniAppSDK = { getVersion: t17 }, m6();

// node_modules/zmp-sdk/apis/index.es.js
var r32;
var s30;
var a36 = t(apis_exports, ["createOrder", "checkTransaction", "createOrderIAP", "selectPaymentMethod", "purchase"]);
(null == (s30 = null === (r32 = s4()) || void 0 === r32 ? void 0 : r32.appEnv) ? void 0 : s30.isMp) && (window.ZaloMiniAppSDK = {}, Object.assign(window.ZaloMiniAppSDK, apis_exports));
export {
  h2 as AndroidBottomNavigationBarType,
  n5 as AppError,
  a as CameraEvents,
  t8 as ChatType,
  s29 as CheckoutKit,
  m50 as CheckoutSDK,
  o5 as EventName,
  o5 as Events,
  e2 as FacingMode,
  m2 as IAPPayType,
  _2 as IOSSafeAreaBottomType,
  a6 as JumpStatus,
  p2 as MediaPickerType,
  e7 as NetworkType,
  E2 as OpenProfilePickerType,
  r7 as OrientationType,
  a32 as Payment,
  n as PhotoFormat,
  t2 as PhotoQuality,
  n9 as PlatformType,
  c2 as PostFeedType,
  i2 as ProfileType,
  s2 as ProrationMode,
  l2 as ScanNFCType,
  u3 as ShareSheetType,
  f as StatusBarType,
  o as StreamType,
  w as TextAlignType,
  d2 as VibrateType,
  v6 as ZMACameraImp,
  i38 as addRating,
  f9 as authorize,
  i44 as checkNFC,
  s13 as checkStateBioAuthentication,
  u36 as checkTransaction,
  t36 as checkZaloCameraPermission,
  c32 as chooseImage,
  c12 as clearStorage,
  i11 as closeApp,
  i26 as closeLoading,
  u42 as configAppView,
  a22 as connectWifi,
  r30 as createCameraContext,
  d11 as createOrder,
  u38 as createOrderIAP,
  g5 as createShortcut,
  a36 as default,
  m47 as displayAd,
  u47 as downloadFile,
  r29 as events,
  i36 as favoriteApp,
  p15 as followOA,
  c6 as getAccessToken,
  i21 as getAppInfo,
  m33 as getAuthCode,
  i10 as getBeacons,
  e34 as getContext,
  i29 as getContextAsync,
  e33 as getDeviceId,
  i28 as getDeviceIdAsync,
  i42 as getIDToken,
  i31 as getLocation,
  a12 as getNetworkType,
  i23 as getPhoneNumber,
  t30 as getRouteParams,
  i40 as getSetting,
  m28 as getShareableLink,
  u11 as getStorage,
  i6 as getStorageInfo,
  r16 as getSystemInfo,
  i41 as getUserID,
  u13 as getUserInfo,
  t17 as getVersion,
  u31 as getZPIToken,
  i17 as hideKeyboard,
  f8 as interactOA,
  f8 as interactOa,
  p40 as isAllowedInteractWithOA,
  c26 as keepScreen,
  a31 as loadAd,
  m6 as login,
  s20 as minimizeApp,
  I5 as nativeStorage,
  m30 as offConfirmToExit,
  i19 as offKeepScreen,
  i32 as onCallbackData,
  s18 as onConfirmToExit,
  i18 as onKeepScreen,
  s8 as onNetworkStatusChange,
  p18 as openBioAuthentication,
  u14 as openChat,
  c39 as openDocument,
  i37 as openGroupList,
  u30 as openMediaPicker,
  u26 as openMiniApp,
  m34 as openOutApp,
  i35 as openPermissionSetting,
  u21 as openPhone,
  u16 as openPostFeed,
  m16 as openProfile,
  b5 as openProfilePicker,
  u22 as openSMS,
  u19 as openShareSheet,
  a21 as openWebview,
  u35 as purchase,
  m48 as refreshAd,
  u12 as removeStorage,
  n16 as requestCameraPermission,
  s21 as requestSendNotification,
  i27 as requestUpdateZalo,
  l14 as saveImageToGallery,
  a18 as saveVideoToGallery,
  l25 as scanNFC,
  i12 as scanQRCode,
  p32 as selectPaymentMethod,
  m25 as sendDataToPreviousMiniApp,
  t32 as setAccessToken,
  p35 as setAndroidBottomNavigationBar,
  p36 as setIOSBottomSafeArea,
  m10 as setNavigationBarColor,
  u9 as setNavigationBarLeftButton,
  l7 as setNavigationBarTitle,
  p37 as setStatusBar,
  u10 as setStorage,
  e41 as setupAd,
  C4 as showCustomOAWidget,
  y6 as showFunctionButtonWidget,
  g7 as showOAWidget,
  p19 as showToast,
  p13 as startBeaconDiscovery,
  i8 as stopBeaconDiscovery,
  r31 as trackingManager,
  l11 as unfollowOA,
  p25 as vibrate,
  p22 as viewOAQr
};
//# sourceMappingURL=zmp-sdk.js.map
