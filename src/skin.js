goog.provide('Skin');

Skin = function() {};

Skin.prototype.version = function() {
  return '0.0.1';
}

window['Skin'] = new Skin();
Skin.prototype['version'] = Skin.prototype.version;