/** @format */

//Question 1
// Using the constructor method, create an InstagramPost() constructor function
// that takes the properties below as arguments.
// ● Handle of author
// ● content,
// ● An image link posted by the author of the post
// ● Number of views,
// ● Number of likes,

function InstagramPost(
	handleOfAuthor,
	content,
	imageLink,
	numberOfViews,
	numberOfLikes
) {
	this.handleOfAuthor = handleOfAuthor;
	this.content = content;
	this.imageLink = imageLink;
	this.numberOfViews = numberOfViews;
	this.numberOfLikes = numberOfLikes;
}

//Question 2
//Create 2 Instagram post objects from the constructor function you created
//above

//post object 1
let boluPost = new InstagramPost(
	"@BoluDayo",
	"hello there, I'm Bolu Dayo",
	"This is my image Link",
	5,
	10
);
console.log(boluPost);

//post object 2
let johnPost = new InstagramPost(
	"@JohnLulu",
	"Hi, My name is John Lulu",
	"Here is my image Link",
	30,
	50
);
console.log(johnPost);

// Question 3
// Musa Dawodu is a 19 years old Nigerian male who lives with his parents in
// Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following
// scores in his combination:
// ○ ENG - 70
// ○ GOVT - 85
// ○ LIT - 82
// ○ CRK - 94

// a) Using the factory method, implement a createPerson() factory function that
// takes name, age and location as arguments. Afterwards, create an object
// representing Musa from the factory function.

function createPerson(name, age, location) {
	return {
		name: name,
		age: age,
		location: location,
	};
}
const studentId = createPerson("Musa Dawodu", 19, "Lagos");
console.log(studentId);

// b) Also, implement a factory function createJambScores() that takes eng, govt, lit,
// crk as arguments. Then create an object representing Muse’s JAMB scores.
// Add the object as a property to Musa object you created above in (a) above

function createJambScores(eng, govt, lit, crk) {
	return {
		eng: eng,
		govt: govt,
		lit: lit,
		crk: crk,
	};
}
const studentJambScores = createJambScores(70, 85, 82, 94);
console.log(studentJambScores);

//Question 4
//What are the different ways in which you can clone an object? Give examples for each of them

// 1. Using the spread syntax.
// 2. Using the Object assign() method
// 3. Using JSON parsing.
// 4. Using the structuredClone() function.

// Question 5
// As Nigeria goes to the polls, here is an object representing some of the
// Presidential Candidates:

// const presidentialCandidates = {
// 	 AAC: 'Omoyele Sowore',8. ACCORD: 'Christopher Imumolen',
// 	 APC: 'Bola Ahmed Tinubu',
// 	 LP: 'Peter Obi',
// 	 NNPP: 'Rabiu Kwankwaso',
// 	 PDP: 'Atiku Abubakar',
//  }
// Using any of the enumeration methods taught in class (for…in or for..of), log
// out each of the presidential candidates in this format:
// ’Omoyele Sowore is the presidential candidate of AAC’

const presidentialCandidates = {
	AAC: "Omoyele Sowore",
	ACCORD: "Christopher Imumolen",
	APC: "Bola Ahmed Tinubu",
	LP: "Peter Obi",
	NNPP: "Rabiu Kwankwaso",
	PDP: "Atiku Abubakar",
};

//using enumeration method - for..in
for (const party in presidentialCandidates) {
	console.log(
		`${presidentialCandidates[party]} is the presidential canditate of ${party}`
	);
}
