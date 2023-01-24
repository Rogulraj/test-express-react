const { open } = require("sqlite");

const sqlite3 = require("sqlite3");

const path = require("path");

const dbPath = path.join(__dirname, "test.db");

let db = null;

const connectToDb = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  } finally {
    return db;
  }
};

module.exports = connectToDb;
