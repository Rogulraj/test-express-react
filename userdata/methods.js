const connectToDb = require("../dbconnection/dbconnection");

const bcrypt = require("bcrypt");

const createTableMethod = async (request, response, next) => {
  const db = await connectToDb();
  const createTableQuery = `
        CREATE TABLE user (id INT NOT NULL PRIMARY KEY, name VARCHAR(200), password VARCHAR(300));
      `;
  const createTable = await db.run(createTableQuery);
  console.log(createTable);
  console.log(db);
  next();
  return;
};

const addUserDetailsMethod = async (request, response, next) => {
  try{
  const db = await connectToDb();

  const { id, name, password } = request.body;
  console.log(name, password);
  const checkUsernameQuery = `
    SELECT * FROM user WHERE name LIKE '${name}';
  `;
  const checkUsername = await db.get(checkUsernameQuery);
  if (checkUsername === undefined) {
    const bcryptedPassword = await bcrypt.hash(password, 10);
    const addUserDetailsQuery = `
        INSERT INTO user (id, name, password)
        VALUES (${id}, '${name}', '${bcryptedPassword}')
    `;
    const addUserDetails = await db.run(addUserDetailsQuery);
    request.addUserDetailsResponse = {
      success: `User ${name} added successfully`,
    };
    return next();
  } else {
    request.addUserDetailsResponse = { failed: "User name already exist" };
    return next();
  }
  }catch(e){
    request.addUserDetailsResponse = { failed: e };
    return next();
  }
};

exports.createTableMethod = createTableMethod;
exports.addUserDetailsMethod = addUserDetailsMethod;
