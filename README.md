# SocializeAPI

SocializeAPI is a social network API developed using Node.js, Express, and MongoDB. It allows users to share their thoughts, react to friends' thoughts, and create a friends list.

## Features

- CRUD operations for users and thoughts.
- Add and remove friends.
- Add and remove reactions to thoughts.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

## Usage

To use this API, you can make requests to the following endpoints:

Users

GET /api/users: Retrieves all users.
POST /api/users: Creates a new user.
GET /api/users/:userId: Retrieves a user by ID.
PUT /api/users/:userId: Updates a user by ID.
DELETE /api/users/:userId: Deletes a user by ID.

Thoughts

GET /api/thoughts: Retrieves all thoughts.
POST /api/thoughts: Creates a new thought.
GET /api/thoughts/:thoughtId: Retrieves a thought by ID.
PUT /api/thoughts/:thoughtId: Updates a thought by ID.
DELETE /api/thoughts/:thoughtId: Deletes a thought by ID.

Friends

POST /api/users/:userId/friends/:friendId: Adds a friend.
DELETE /api/users/:userId/friends/:friendId: Removes a friend.

Reactions
POST /api/thoughts/:thoughtId/reactions: Adds a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Removes a reaction from a thought.

Contributions

Contributions are welcome. Please open an issue to discuss proposed changes or submit a Pull Request.

License

This project is licensed under the MIT License - see the LICENSE file for details.

javascript
Copy code

This `README.md` provides a comprehensive overview of your project, including setup and usage instructions, which is essential for anyone who wants to contribute, test, or simply use your API. Make sure to keep this document updated as your project evolves.

![Captura de pantalla 2024-05-07 a la(s) 5 16 37 p m](https://github.com/MartinVF12/SocializeAPI/assets/152545821/7e127dd1-ebcc-4449-8b6c-fb45289b80be)
 