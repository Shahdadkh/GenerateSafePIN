const blkList = [
  "4578",
  "2356",
  "5689",
  "2558",
  "3669",
  "4589",
  "2345",
  "3456",
  "4567",
  "5678",
  "6789",
  "2222",
  "3333",
  "4444",
  "5555",
  "6666",
  "7777",
  "8888",
  "9999",
  "2536",
  "5869",
  "4758",
];
const OneDigitBlkList = ["0", "1"];
const TwoDigitBlkList = ["69", "96", "52", "25"];
const whiteList = [];

let numberOfCrate = 5;
for (i = 1; i <= numberOfCrate; i++) {
  while (true) {
    let int = Math.floor(2000 + Math.random() * 8000).toString();
    if (
      !blkList.includes(int) &&
      !OneDigitBlkList.includes(int.substring(1, 2)) &&
      !OneDigitBlkList.includes(int.substring(2, 3)) &&
      !OneDigitBlkList.includes(int.substring(3, 4)) &&
      !TwoDigitBlkList.includes(int.substring(1, 3)) &&
      !TwoDigitBlkList.includes(int.substring(0, 2)) &&
      !TwoDigitBlkList.includes(int.substring(2, 4)) &&
      int.substring(0, 2) + int.substring(0, 2) != int &&
      int.substring(0, 2) + (parseInt(int.substring(0, 2)) + 1).toString() !=
        int &&
      int.substring(0, 2) + (parseInt(int.substring(0, 2)) - 1).toString() !=
        int &&
      int.substring(0, 2) + (parseInt(int.substring(0, 2)) + 5).toString() !=
        int &&
      int.substring(0, 2) + (parseInt(int.substring(0, 2)) - 5).toString() !=
        int &&
      int.substring(0, 2) + (parseInt(int.substring(0, 2)) + 10).toString() !=
        int &&
      int.substring(0, 2) + (parseInt(int.substring(0, 2)) - 10).toString() !=
        int &&
      int.substring(0, 2) +
        int.substring(0, 2).toString().split("").reverse().join("") !=
        int &&
      int.substring(2, 3) + int.substring(2, 3) != int.substring(2, 4) &&
      int.substring(2, 3) + (parseInt(int.substring(2, 3)) + 1).toString() !=
        int.substring(2, 4) &&
      int.substring(2, 3) + (parseInt(int.substring(2, 3)) - 1).toString() !=
        int.substring(2, 4) &&
      int.substring(0, 1) + int.substring(0, 1) != int.substring(0, 2) &&
      int.substring(0, 1) + (parseInt(int.substring(0, 1)) + 1).toString() !=
        int.substring(0, 2) &&
      int.substring(0, 1) + (parseInt(int.substring(0, 1)) - 1).toString() !=
        int.substring(0, 2) &&
      int.substring(1, 2) + int.substring(1, 2) != int.substring(1, 3) &&
      int.substring(1, 2) + (parseInt(int.substring(1, 2)) + 1).toString() !=
        int.substring(1, 3) &&
      int.substring(1, 2) + (parseInt(int.substring(1, 2)) - 1).toString() !=
        int.substring(1, 3) &&
      int.substring(0, 1) != int.substring(2, 3) &&
      int.substring(1, 2) != int.substring(3, 4) &&
      int.substring(0, 1) != int.substring(3, 4)
    ) {
      whiteList.push(int);
      break;
    }
  }
}
console.log(whiteList);
