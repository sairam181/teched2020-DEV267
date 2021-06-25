const { expect } = require("chai");

module.exports = createPageObjects({
  Product: {
    actions: {
      // add action functions here
      
    },
    assertions: {
      // add assertion functions here
      theProductTitleIsShown: function () {
        element(by.control({
            controlType: "sap.m.ObjectHeader",
            viewId: "container-cart---product",
            bindingPath: {
                path: "/Products('HT-6130')",
                propertyPath: "Name"
            }
        }));
        expect(header.asControl().getProperty('title').toBe('Flat Watch HD32'));
    },
    
    }
  }
});
