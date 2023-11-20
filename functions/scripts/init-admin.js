const admin = require('firebase-admin');

const serviceAccountPath = process.argv[2], userUid = process.argv[3]

console.log(`Using serive account ${serviceAccountPath}`);
console.log(`Setting user ${userUid} as the admin`);


admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath)
})

async function initAdmin(admin) {
    // admin.auth().setCustomUserClaims()
    await admin.auth()
    
    console.log("User is now an admin")
}

initAdmin(userUid)
.then(() => {
    console.log("EXIT.............");
    process.exit();
})
