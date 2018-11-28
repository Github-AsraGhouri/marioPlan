const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("hello, ninja!")
})
const createNotification = (notification => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc));
});


exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);

});
//its will triggered when new user signing up grabing that the new user for real time notifications
exports.userJoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {
        const newUser = doc.data(); //to get data from the doc
        const notification ={
            content : 'joined the party',
            user : `${newUser.firstName} ${newUser.lastName}`,//property that stor in the firebase user
            time : admin.firestore.FieldValue.serverTimestamp()
        }
        //passing notification 
        return createNotification(notification);

    })
}

)
