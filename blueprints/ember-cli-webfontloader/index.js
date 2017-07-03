/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName() {},
  afterInstall() {
    return this.addPackageToProject('webfontloader');
  }
};
