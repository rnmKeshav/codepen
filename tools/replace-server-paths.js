module.exports = function replaceImport(originalPath, callingFileName, options) {
  if(originalPath.search(/\/server\//) !== -1) {
    return originalPath.replace('server', '_server');
  }

  if(originalPath.search(/\/src\//) !== -1) {
    return originalPath.replace('src', '_src');
  }
}
