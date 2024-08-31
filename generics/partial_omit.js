"use strict";
let nexUserId = 1;
const users = [
    { id: nexUserId++, username: "john_doe", role: "member" },
    { id: nexUserId++, username: "jane_smith", role: "contributor" },
    { id: nexUserId++, username: "alice_jones", role: "admin" },
    { id: nexUserId++, username: "charlie_brown", role: "member" }
];
function updateUser(id, updates) {
    const target = users.find((item) => item.id === id);
    if (!target) {
        console.error(`User not found at ID: ${id}`);
        return;
    }
    const source = updates;
    const updatedUser = Object.assign(target, source);
    return updatedUser;
}
function addNewUser(newUser) {
    let user = { id: nexUserId++, ...newUser };
    users.push(user);
    return user;
}
console.log("Original Users:", users);
/*
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
console.log("Updated Users", users);
*/
addNewUser({ username: "joe_schmoe", role: "member" });
console.log("New Users:", users);
