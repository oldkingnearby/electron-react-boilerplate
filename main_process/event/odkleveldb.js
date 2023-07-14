'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartLeveldb = StartLeveldb;

var _odkshell = require('./odkshell');

var path = require('path'); // pandoc 操作脚本

var LEVELDB_FOLDER = 'leveldb';
var THIRD_PARTY_FOLDER = process.env.NODE_ENV === 'production' ? 'resources/ThirdParty' : 'ThirdParty';

// 启动Leveldb 
function StartLeveldb() {
  console.log("StartLeveldb:");
  var leveldbPath = path.resolve(path.join(THIRD_PARTY_FOLDER, LEVELDB_FOLDER));
  console.log("leveldbPath:", leveldbPath);
  var cmdParam = ['cd', leveldbPath, "&", leveldbPath.slice(0, 2), '&', 'leveldb.exe'];
  console.log("cmd:", cmdParam);
  (0, _odkshell.WindowsCmd)(cmdParam);
}