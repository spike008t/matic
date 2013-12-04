'use strict';

/*

  getFileNames.js

  Accepts:  config  - object, config values
            folder  - string, the folder to look in, required
            suffix  - string, file suffix to filter against, optional

  Returns:  fileNames - an array of found file names

*/

var fs      = require('fs'),
    _       = require('underscore');

module.exports = function (config, folder, suffix) {

  var fileNames = fs.readdirSync(folder);

  if (suffix) {

    var pattern = new RegExp(suffix.replace('.', '\\.') + '$', "i");

    // Filter each filename
    fileNames = _.filter(fileNames, function (file) {

      // Return only files that match the desired suffix
      return file.match(pattern);

    });

  }

  return fileNames;

};
