$(document).ready(() => {
    const currentUser = SDK.currentUser();

    $(".navbar-right").html(`
        <li><a href="#" id="logOut">Log out</a></li>
    `);

    $("#logOut").on("click", () => {

        const userId = currentUser.userId;
        SDK.logOut(userId, (err, data) => {
            if(err && err.xhr.status === 401) {
                $(".form-group").addClass("has-error");
            } else {
                window.location.href = "index.html";
                SDK.Storage.remove("myUser")
                SDK.Storage.remove("myToken")
            }
        });
    });

    $(".myUser").html(`
    <h5>${currentUser.username}</h5>
  `);

});
