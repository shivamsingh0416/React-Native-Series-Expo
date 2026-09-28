function twoArgMsg(Arg1, Arg2) {
  console.log(Arg1 + " " + this.name + " " + Arg2);
}

const person = {
  name: "Ritika Singh",
};

const agruments = ["Hello", "Bye"];
twoArgMsg.apply(person,agruments);
