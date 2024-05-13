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
/*Expected output
Test case 1 passed: Successful retrieval of user data
*/

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
/*Expected output
Test case 2 passed: Error handled correctly
*/
