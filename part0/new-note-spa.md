# Sequence diagram when a user creates a new note in the Single Page App version of notes app.

- Browser and Server communication flow, when a user creates a new note in [this page](https://studies.cs.helsinki.fi/exampleapp/spa).

```mermaid
sequenceDiagram
    participant B as Browser
    participant S as Server
    note over B: User submits a note in the form
    note over B: Execute JS that Shows the notes to the user <br/> on the html page, and then send request
    B ->>+ S : POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    note over S: Read the payload and send response
    S -->>- B : HTTP Status code 201 Created
```
