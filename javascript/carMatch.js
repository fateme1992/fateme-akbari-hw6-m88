function matchRoad() {
  let numberOfCar = +prompt("add number of car");

  let carsArray = [];
  for (let i = 0; i < numberOfCar; i++) {
    let cars = new Object();
    cars.name = prompt(`add name for car number ${i + 1}`);
    cars.position = 0;
    //   Math.floor(Math.random() * (numberOfCar - 1 + 1) + min);

    carsArray.push(cars);
  }
  console.log(carsArray);

  let n = 10; // row or column count
  // defining an empty string
  let string = "";
  for (let i = 0; i < n; i++) {
    // external loop
    for (let j = 0; j < 30; j++) {
      // internal loop
      console.log(
        carsArray.filter((item) => item.startPOint == j).length !== 0 && i == 0
      );

      if (
        carsArray.filter((item) => item.startPOint == j).length !== 0 &&
        i == 0
      )
        string += "M";
      else string += "*";
    }
    // newline after each row
    string += "\n";
  }
  // printing the string
  console.log(string);
}
matchRoad();
var arr = [];
while (arr.length <= 3) {
  var r = Math.floor(Math.random() * 10) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
