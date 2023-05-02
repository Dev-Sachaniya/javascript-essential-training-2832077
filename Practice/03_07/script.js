/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const phone = {
  batteryStatus: 63,
  name: "Realme 6",
  specs: {
    processor: "G90T",
    ram: "4Gb",
    storage: 64,
  },
  toggleBstatus: function (newBs) {
    this.batteryStatus = newBs;
  },
};
// console.log(phone.specs);
// var specss = "specs";

// console.log(phone[specss]);
