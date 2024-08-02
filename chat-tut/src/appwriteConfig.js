import { Client, Databases, Account } from "appwrite";

export const PROJECT_ID = "66aceadb002f1d599c66";
export const DATABASE_ID = "66aceba2001d91c7113d";
export const COLLECTION_ID_MESSAGES = "66acebab0038d4b11bfe";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66aceadb002f1d599c66");

export const databases = new Databases(client);
export const account = new Account(client);

export default client;
