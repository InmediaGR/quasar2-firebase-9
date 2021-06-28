console.log(
`moduleName is String if non nested module.
 moduleName as an array of Strings if nested module
 module is the object when you import module`)

export default (store, moduleName, module) => {
  return {
    function (){
      if(store) {
        if (!store.hasModule(moduleName)) {
          store.registerModule(moduleName, module);
          console.log(`module ${moduleName} registered successfully`);
        } else {
          console.log(`module ${moduleName} has been created before`);
        }
      } else {
        console.log(`store does not exist`);
      }
    }
  }
}