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
	this.displayInstagramPost = function () {
		return this.InstagramPost;
	};
}

let forBolu = new InstagramPost(
	"Bolu",
	"hello there",
	"I am an image link",
	5,
	10
);
console.log(forBolu);

//Question 4
//What are the different ways in which you can clone an object? Give examples for each of them

// 1. Using the spread operator.
// 2. Using the Object assign() method
// 3. Using JSON parsing.
// 4. Using the structuredClone() function.

//. Using the spread operator
//Examples 1
