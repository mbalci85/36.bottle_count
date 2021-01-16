// There are 100 bottles on the Wall and you hit bottles one by one. How many bottles left at the end?
// Write a function that takes a number of bottles (try with 100 first).
// Your function should counting the bottles fall on the ground. After every bottle fall, print a message (as a string) that says:
// “’numberOfBottles’ bottle of milk on the Wall. Take one down, pass it around.”

// Finish, till every bottles fall down.

const bottleCount = () => {
	let num = prompt('Enter total number of bottles on the wall: ');
	let decr = prompt('Enter the number of bottles to take down each time: ');
	while (num >= 0) {
		if (num == 0) {
			return console.log(
				'All bottles are down. No bottles left on the wall.',
			);
		}
		console.log(
			`${num} bottles of milk on the wall. Take one down, pass it around.`,
		);
		num = num - decr;
	}
};

bottleCount(100);
