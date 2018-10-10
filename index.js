var recipes = {};
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  delete object.key;
}
function updateObjectWithKeyAndValue(object, key, value){
  
}