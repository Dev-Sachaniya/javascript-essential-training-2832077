class Dev {
  constructor(sub, marriedStatus, friends, age, holyPerson, game) {
    this.sub = sub;
    this.marriedStatus = marriedStatus;
    this.friends = friends;
    this.age = age;
    this.holyPerson = holyPerson;
    this.game = game;
  }
  changeMarriedStatus(status) {
    this.marriedStatus = status;
  }
  toggleAge(newAge) {
    this.age = newAge;
  }
}
export default Dev;
