const SportModel = require("../model/sportModel");
const EventModel = require("../model/eventModel");
const PostModel = require("../model/postModel");
const faker = require("faker");
const UserModel = require("../model/userModel");

let sportController = {};

/**
 * Function to generate sports
 */
sportController.generateSports = async (req, res) => {
  const sportsArray = [
    "Football",
    "Basketball",
    "Tennis",
    "Baseball",
    "Soccer",
    "Golf",
    "Rugby",
    "Cricket",
    "Hockey",
  ];
  const sportData = sportsArray.map((sport) => ({ name: sport }));
  await SportModel.insertMany(sportData);
  console.log("Sports inserted successfully.");
};

/**
 * Function to generate events
 */
sportController.generateEvents = async (req, res) => {
  let events = [];
  let count = 100;
  for (let i = 0; i < count; i++) {
    const event = new EventModel({
      name: faker.company.catchPhrase(),
    });
    events.push(event.save());
  }
  await Promise.all(events);
  console.log(`${count} events inserted successfully.`);
};

/**
 * Function to generate some random post 
 */

sportController.generatePosts = async(req, res) =>{
    let posts = [];
    let count = 1000;
    const users = await UserModel.find().select('_id');
    const sports = await SportModel.find().select('_id');
    const events = await EventModel.find().select('_id');
    for (let i = 0; i < count; i++) {
      const post = new PostModel({
        text: faker.lorem.paragraph(),
        user_id: faker.random.arrayElement(users),
        sport_id: faker.random.arrayElement(sports),
        event_id: faker.random.arrayElement(events),
        comments: faker.datatype.number({ min: 0, max: 100 }),
        likes: faker.datatype.number({ min: 0, max: 1000 }),
      });
      posts.push(post.save());
    }
    await Promise.all(posts);
    console.log(`${count} Posts inserted successfully.`);
   
}

module.exports = sportController;
