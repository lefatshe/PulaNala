
## firebase emulators

start
<code>firebase emulators:start --only firestore</code>

import db
<code>firbase emulators:start --only firestore --import test-data
</code>

## Development build
<code>
npm run local-dev
</code>

## Deploy storage only
<code>
firebase deploy --only storage
</code>

## Deploy 
<code>
firebase deploy
</code>

## Build Prod
<code>
ng build --configuration production
</code>

## Amin user generate
<code>
node init-admin.js D:/Development/PulaNala/functions/scripts/keys.json AzDVpoY0cZQ3U5wVVzFmXEoRj8m1
</code>

## firebase deploy --only "functions,hosting"
<code>
firebase deploy --only "functions,hosting"
</code>