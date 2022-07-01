Blockly.Python['distance_read'] = function (block) {
  Blockly.Python.definitions_['import_VL53L0X'] = 'from VL53L0X import VL53L0X\ntof = VL53L0X()\ntof.start()';

  var code = 'tof.read()';
  return [code, Blockly.Python.ORDER_NONE];
};
