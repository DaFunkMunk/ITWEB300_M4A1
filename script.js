
/* 1 .  Greeting the user after a successful login
Purpose/Action
When the login credentials are accepted, reveal a hidden element and greet the user by name.

<!-- HTML -->
<h2 id="greeting" class="d-none">Hello, <span id="userNameSpan"></span>!</h2>
<!-- Bootstrap’s “d-none” keeps the element invisible until we remove the class --> */

    // jQuery
    function showGreeting(userName) {
    $("#userNameSpan").text(userName); // insert the user’s name
    $("#greeting").removeClass("d-none"); // reveal the greeting
    }
    
/* 2 .  Handling an incorrect login without reloading
Purpose/Action
Show an inline error message and clear the ID / password fields in one seamless step.

<!-- HTML -->
<div id="loginError" class="error-msg d-none">Invalid user ID or password.</div>

<input type="text"  id="loginId"       placeholder="User ID">
<input type="password" id="loginPw"    placeholder="Password">
<button id="loginBtn">Sign In</button>

<style>
.error-msg { color: crimson; }
</style> */

    // jQuery
    function processBadLogin() {
    $("#loginError").removeClass("d-none");   // show error text
    $("#loginId, #loginPw").val("");          // clear the two boxes
    }


/* 3 .  Dynamically changing ticket fields based on ticket type
Purpose/Action
Show only the form section that matches the chosen ticket type (computer, software, network).

<!-- HTML -->
<select id="ticketType">
  <option value="" disabled selected>Select ticket type</option>
  <option value="computer">Computer</option>
  <option value="software">Software</option>
  <option value="network">Network</option>
</select>

<!-- Wrapper sections for extra fields -->
<div class="ticket-section d-none" id="computerSection">
  <label>Serial #</label><input name="serialNumber">
</div>

<div class="ticket-section d-none" id="softwareSection">
  <label>Software Name</label><input name="softwareName">
</div>

<div class="ticket-section d-none" id="networkSection">
  <label>Building/Floor</label><input name="buildingFloor">
</div>
*/

// jQuery
$("#ticketType").on("change", function () {
  let val = $(this).val();                // get the selected value       

  // hide all, then show only the matching section
  $(".ticket-section").addClass("d-none");
  $("#" + val + "Section").removeClass("d-none");
});


/*4 .  Additional useful feature: Live ticket‑title character counter
Purpose/Action
Limit the “Ticket Title” field to 60 characters and show the remaining count in real time.

<!-- HTML -->
<label for="ticketTitle">Ticket Title (max 60)</label>
<input type="text" id="ticketTitle" maxlength="60">
<small id="titleCounter">60 characters left</small>
 */

    // jQuery
    $("#ticketTitle").on("input", function () {
    const max   = 60;
    const used  = $(this).val().length;
    const left  = max - used;
    $("#titleCounter").text(left + " characters left");
    });