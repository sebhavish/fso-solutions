# Sequence diagram when a user goes to Single Page App version of notes app

- Browser and Server communication flow, when a user goes to [this page](https://studies.cs.helsinki.fi/exampleapp/spa).

```mermaid
sequenceDiagram
    participant B as Browser
    participant S as Server
    B ->>+ S : GET https://studies.cs.helsinki.fi/exampleapp/spa
    S -->>- B : HTML File
    note over B : Read contents of head tag and request resources
    B ->>+ S : GET  https://studies.cs.helsinki.fi/exampleapp/main.css
    S -->>- B : CSS stylesheet
    B ->>+ S : GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    S -->>- B : JS file
    note over B: Run the JS file, that contains code to fetch data from server
    B ->>+ S : GET https://studies.cs.helsinki.fi/exampleapp/data.json
    S -->>- B : JSON data of notes
    note over B: Executes the function that renders JSON data, and shows it to the user
```
