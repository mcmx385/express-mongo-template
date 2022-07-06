import pkg from "mongodb";
const { MongoClient, ObjectId } = pkg;
import { MongoURL, MongoDBName } from "../config.js";

export async function getUser(obj) {
  try {
    const client = await MongoClient.connect(MongoURL);
    const collection = client.db(MongoDBName).collection("users");
    const result = await collection.find(obj).toArray();
    client.close();
    return result;
  } catch (e) {
    throw e;
  }
}

export async function createUser(obj) {
  try {
    const client = await MongoClient.connect(MongoURL);
    const collection = client.db(MongoDBName).collection("users");
    const result = await collection.insertOne(obj);
    client.close();
    return result;
  } catch (e) {
    throw e;
  }
}
