const {MongoClient} = require('mongodb');

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
   //const uri = "mongodb+srv://newuser:newpass01@notesharedatabase.erayi.mongodb.net/NoteShareData?retryWrites=true&w=majority";
   const uri = "mongodb+srv://ninaganti:ninaganti@notesharedatabase.erayi.mongodb.net/NoteShareData?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB database.");
 
        // Make the appropriate DB calls
        /*await createNote(client, {
            notesId: 1,
            userId: 1,
            notesTitle: "Binary Tree Notes",
            notesDescription: "These Notes are about how to traverse Binary Trees.",
            course: "CS 300",
            courseCode: "300",
            subject: "Computer Sciences",
            semester: "fall 2024",
            content: "The three basic ways to traverse Binary Trees are Pre-, Post-, and In-Order traversals.",
            ratings: "5/5",
            created: "11/15/24 1:25PM",
            updated: "11/15/14 1:25PM"
        });*/

        await createMultipleNotes(client, [{
            notesId: 3,
            userId: 3,
            notesTitle: "Objectivism",
            notesDescription: "These notes explain what objectivism actually is.",
            course: "PHILOS 104",
            courseCode: "104",
            subject: "Philosophy",
            semester: "fall 2024",
            content: "Objectivism is where people believe that there are objective moral facts of the universe.",
            ratings: "3/5",
            created: "11/15/24 3:26PM",
            updated: "11/15/24 3:26PM"
        }])

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    var databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function createNote(client, newNote){
   const result = await client.db("NoteShareData").collection("Notes").insertOne(newNote);

   console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function createMultipleNotes(client, newNotes){
    const result = await client.db("NoteShareData").collection("Notes").insertMany(newNotes);

    console.log(`${result.insertedCount} new listings created with the following id(s):`);
    console.log(result.insertedIds);
}

async function displayNote(client, titleName){
    const result = await client.db("NoteShareData").collection("Notes").findOne()
}