//original code
function getUserDataOld(userId) {
  return new Promise((resolve, reject) => {
    let userInfo, userPosts, userComments;

    getUserInfo(userId)
      .then((info) => {
        userInfo = info;
        return getUserPosts(userId);
      })
      .then((posts) => {
        userPosts = posts;
        return getUserComments(userId);
      })
      .then((comments) => {
        userComments = comments;
        const userData = {
          info: userInfo,
          posts: userPosts,
          comments: userComments
        };
        resolve(userData);
      })
      .catch((error) => reject(error));
  });
}

async function getUserInfo(userId) {
  return new Promise((resolve, reject) => {
    if (userId == 123) {
      resolve(mockUserInfo);
    }
    else {
      reject("Unknown user id")
    }
  });
}

async function getUserPosts(userId) {
  return new Promise((resolve) => {
    resolve(mockUserPosts);
  });
}

async function getUserComments(userId) {
  return new Promise((resolve) => {
    resolve(mockUserComments);
  });
}

//TODO
// implementation with async/await (TO BE ADDED BY THE STUDENT)
async function getUserData(userId) {
  try {
    const userInfo = await getUserInfo(userId);
    const userPosts = await getUserPosts(userId);
    const userComments = await getUserComments(userId);
    return {
      info: userInfo,
      posts: userPosts,
      comments: userComments
    };
  } catch (error) {
    throw error;
  }
}



// Test case 1: Successful retrieval of user data
let mockUserId = 123;
// Define mock data
const mockUserInfo = { id: 123, name: "John Doe" };
const mockUserPosts = [{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }];
const mockUserComments = [
  { id: 1, postId: 1, body: "Comment 1" },
  { id: 2, postId: 1, body: "Comment 2" },
  { id: 3, postId: 2, body: "Comment 3" }
];
const expectedUserData = {
  info: mockUserInfo,
  posts: mockUserPosts,
  comments: mockUserComments
};

// Test case 1: Successful retrieval of user data
// Test case 1: Successful retrieval of user data
async function runTestCase() {
  try {
    const result = await getUserData(123);

    if (JSON.stringify(result) === JSON.stringify(expectedUserData)) {
      console.log("Test case 1 passed: Successful retrieval of user data");
    } else {
      console.error("Test case 1 failed: Unexpected result");
    }
  } catch (error) {
    console.error("Test case 1 failed with an error:", error);
  }
}

runTestCase();

// Test case 2: Error
async function runErrorTestCase() {
  try {
    await getUserData(122);
    console.error("Test case 2 failed: Expected an error but got success");
  } catch (error) {
    if (error === "Unknown user id") {
      console.log("Test case 2 passed: Error handled correctly");
    } else {
      console.error("Test case 2 failed with an unexpected error:", error);
    }
  }
}

runErrorTestCase();
