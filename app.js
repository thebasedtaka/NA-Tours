var $knI9B$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*eslint=disable*/ //import '@babel/polyfill';

//type = success/error
const $3adf927435cf4518$export$de026b00723010c1 = (type, msg)=>{
    $3adf927435cf4518$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
};
const $3adf927435cf4518$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
    window.setTimeout($3adf927435cf4518$export$516836c6a9dfc573, 5000);
};


const $70af9284e599e604$export$596d806903d1f59e = async (email, password)=>{
    try {
        // Make a POST request to the login API endpoint
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "post",
            url: "/api/v1/users/login",
            data: {
                email: email,
                password: password
            }
        });
        // If login is successful, show a success alert and redirect to home page
        if (res.data.status === "success") {
            (0, $3adf927435cf4518$export$de026b00723010c1)("success", "Logged in successfully");
            window.setTimeout(()=>{
                location.assign("/");
            }, 100);
        }
    } catch (error) {
        // If an error occurs, show an error alert with the error message
        (0, $3adf927435cf4518$export$de026b00723010c1)("success", error.response.data.message);
    }
};
const $70af9284e599e604$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "GET",
            url: "/api/v1/users/logout"
        });
        res.data.status = "success";
        // Redirect to homepage if the current URL ends with '/me'
        location.assign(window.location.href.endsWith("/me") ? "/" : window.location.href);
    } catch (err) {
        // Display an error message if there is an error logging out
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", "Error logging out!");
    }
};


/* eslint-disable */ const $f60945d37f8e594c$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = "pk.eyJ1IjoidGhlYmFzZWR0YWthIiwiYSI6ImNscTFsem8weDA3Z24ya3IybzBmYmNsMGEifQ.OL3LE5eLigkP4MjRgcTKAA";
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/thebasedtaka/clq4kgz3f01at01qm44ycgvsq",
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement("div");
        el.className = "marker";
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: "bottom"
        }).setLngLat(loc.coordinates).addTo(map);
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};




var $9e7a345a81ca5826$exports = {};
$9e7a345a81ca5826$exports = (fn)=>{
    return (req, res, next)=>{
        fn(req, res, next).catch((err)=>next(err));
    };
};


const $936fcc27ffb6bbb1$export$f558026a994b6051 = async (data, type)=>{
    try {
        // Define the API endpoint based on the type of data to update
        const url = type === "password" ? "/api/v1/users/updateMyPassword" : "/api/v1/users/updateMe";
        // Send a patch request to the API endpoint with the updated data
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "patch",
            url: url,
            data: data
        });
        // If the update is successful, show a success message and redirect to the user's profile page
        if (res.data.status === "success") {
            (0, $3adf927435cf4518$export$de026b00723010c1)("success", `${type.toUpperCase()} data updated successfully!`);
            window.location.href = "/me";
        }
    } catch (error) {
        // If there is an error, show an error message
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", error.response.data.message);
    }
};





const $6710bca62beba915$var$stripe = Stripe("pk_test_51OOZMBBhpjB6GUEeu7qGaNrGdPp4bTmznCwCTjemnYXUD9x93IIFsG4zFrkFIN5xwFVpaeS00lDGmpeKFufp1PT500zMumsTpU");
const $6710bca62beba915$export$8d5bdbf26681c0c2 = async (tourId)=>{
    try {
        // Retrieve the checkout session for the given tour ID
        const session = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "GET",
            url: `/api/v1/booking/checkout-session/${tourId}`
        });
        // Redirect to the checkout page using the session ID
        await $6710bca62beba915$var$stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (error) {
        // Handle any errors that occur during the booking process
        console.error("error", error);
    }
};





const $2db3670f13ba185b$export$7200a869094fec36 = async (name, email, password, passwordConfirm)=>{
    try {
        // Make a POST request to the signup endpoint
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "post",
            url: "/api/v1/users/signup",
            data: {
                name: name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm
            }
        });
        // If the response status is success, show a success alert and redirect to /me
        if (res.data.status === "success") {
            (0, $3adf927435cf4518$export$de026b00723010c1)("success", "Logged in successfully");
            window.setTimeout(()=>{
                location.assign("/me");
            }, 100);
        }
    } catch (error) {
        // Log any errors that occur during the signup process
        console.error(error);
    }
};




const $934ddcdbb12f8ff7$export$5880d3dcefee9176 = async (id, body, rating)=>{
    // Create an empty object to store the params
    const params = {};
    // If  parameter is provided, add it to the params object
    if (body) params.review = body;
    if (rating) params.rating = +rating;
    // If no parameters were provided, return early
    if (Object.keys(params).length === 0) return;
    try {
        // Construct the URL for the API endpoint
        const url = `/api/v1/reviews/${id}`;
        // Send a PATCH request to the API endpoint with the params object
        const res = await (0, ($parcel$interopDefault($knI9B$axios))).patch(url, params);
        // If the request is successful, display a success message and reload the page
        if (res.data.status === "success") {
            (0, $3adf927435cf4518$export$de026b00723010c1)("success", "Review updated successfully!");
            window.setTimeout(()=>{
                location.reload();
            }, 100);
        }
    } catch (error) {
        // If an error occurs, display an error message
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", error.response.data.message);
    }
};


function $6458257cb7472807$export$e4415881b1c182ee(editButton, ratingStars, reviewText, textBox) {
    let reviewId, reviewBody;
    let rating;
    let hoveredStar;
    let edit = false;
    /**
   * Updates the star classes based on the hovered star.
   */ function updateStarClasses() {
        ratingStars.forEach((star, index)=>{
            star.classList.toggle("hovered", index < hoveredStar);
        });
    }
    /**
   * Handles the mouse enter event on the rating stars.
   */ function handleMouseEnter(e) {
        // Get the index of the hovered star
        if (!edit) return;
        const index = Array.from(ratingStars).indexOf(e.target);
        hoveredStar = index + 1;
        updateStarClasses();
    }
    /**
   * Handles the mouse exit event on the rating stars.
   */ function handleMouseExit() {
        hoveredStar = null;
        updateStarClasses();
    }
    /**
   * Handles the click event on the rating stars.
   */ function handleClick(e) {
        // selects the clicked star and if there is an image, it reroutes to the parent
        const clickedStar = e.target.nodeName === "use" ? e.target.parentNode : e.target;
        rating = +clickedStar.dataset.starIndex + 1;
        // removes the hover effect
        hoveredStar = rating;
        updateStarClasses();
        e.target.removeEventListener("mouseover", handleMouseEnter);
        e.target.removeEventListener("mouseout", handleMouseExit);
        e.target.removeEventListener("click", handleClick);
    }
    // Add event listeners to the rating stars
    ratingStars.forEach((star)=>{
        star.addEventListener("mouseover", handleMouseEnter);
        star.addEventListener("mouseout", handleMouseExit);
        star.addEventListener("click", handleClick);
    });
    // Add event listeners to the edit buttons
    editButton.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            if (edit) {
                // Code for the second button press functionality
                reviewId = btn.dataset.reviewId;
                reviewBody = e.target.parentNode.parentNode.querySelector(".form__input");
                edit = false;
                (0, $934ddcdbb12f8ff7$export$5880d3dcefee9176)(reviewId, reviewBody.value, rating);
                textBox.replaceWith(reviewText);
            } else {
                // Code for the first button press functionality
                edit = true;
                e.target.textContent = "Update Review";
                textBox.classList.add("form__input");
                textBox.value = reviewText.textContent;
                // Replace the text node with the input node
                reviewText.replaceWith(textBox);
            }
        });
    });
}




const $4c5f77f6675f95a9$export$27c92fa0da122bd9 = (modalContainer, id, e)=>{
    const submitButton = document.querySelector("#submit");
    const dropdown = document.querySelector("#role");
    let selectedOptionValue;
    dropdown.addEventListener("change", (event)=>{
        selectedOptionValue = event.target.value;
    });
    submitButton.addEventListener("click", async (e)=>{
        e.preventDefault();
        const form = new FormData();
        form.append("name", document.getElementById("name").value);
        form.append("email", document.getElementById("email").value);
        form.append("password", document.getElementById("password").value);
        form.append("photo", document.getElementById("photo").files[0]);
        form.append("role", selectedOptionValue);
        //await UserUpdate(id, form, modalContainer);
        await $4c5f77f6675f95a9$export$d1ae575bafc1f95e(id, "patch", "users", form);
    });
    modalContainer.style.display = "flex";
    if (e.target === modalContainer) modalContainer.style.display = "none";
};
const $4c5f77f6675f95a9$export$ba25456186b6b674 = (modalContainer, id, e)=>{
    const submitButton = document.querySelector("#submit");
    const dropdown = document.querySelector("#difficultyDropdown");
    const date = document.getElementById("date");
    let difficultyValue;
    let dateValue;
    dropdown.addEventListener("change", (event)=>{
        difficultyValue = event.target.value;
    });
    date.addEventListener("change", (event)=>{
        dateValue = event.target.value;
    });
    submitButton.addEventListener("click", async (e)=>{
        e.preventDefault();
        const form = new FormData();
        form.append("name", document.querySelector("#tourName").value);
        form.append("difficulty", difficultyValue);
        form.append("duration", document.querySelector("#durationInput").value);
        form.append("maxGroupSize", document.querySelector("#maxGroupSizeInput").value);
        form.append("startDates", dateValue);
        form.append("price", document.querySelector("#price").value);
        form.append("description", document.querySelector("#tourDescription").value);
        $4c5f77f6675f95a9$export$d1ae575bafc1f95e(id, "patch", "tours", form);
    });
    modalContainer.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scrolling on the body
    const closeModal = ()=>{
        document.body.style.overflow = "auto"; // Enable scrolling on the body
        modalContainer.style.display = "none";
        modalContainer.removeEventListener("click", closeModal);
    };
    if (e.target === modalContainer) closeModal();
};
const $4c5f77f6675f95a9$export$d1ae575bafc1f95e = async (id, method, route, data)=>{
    try {
        const url = `/api/v1/${route}/${id}`;
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: method,
            url: url,
            data: data
        });
        if (res.status === 204 || res.status === 200) {
            (0, $3adf927435cf4518$export$de026b00723010c1)("success", `Tour ${method} successful`);
            window.location.reload();
        } else // Handle other status codes or errors
        console.error(`Unexpected status code: ${res.status}`);
    } catch (error) {
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", error);
    }
};


// DOM ELEMENTS
const $d0f7ce18c37ad6f6$var$mapBox = document.getElementById("map");
const $d0f7ce18c37ad6f6$var$loginForm = document.querySelector(".form--login");
const $d0f7ce18c37ad6f6$var$signupForm = document.querySelector(".form--signup");
const $d0f7ce18c37ad6f6$var$userDataForm = document.querySelector(".form-user-data");
const $d0f7ce18c37ad6f6$var$logOutBtn = document.querySelector(".nav__el--logout");
const $d0f7ce18c37ad6f6$var$userPasswordForm = document.querySelector(".form-user-password");
const $d0f7ce18c37ad6f6$var$bookBtn = document.getElementById("book-tour");
const $d0f7ce18c37ad6f6$var$reviewPage = document.querySelector(".card.cardReview");
const $d0f7ce18c37ad6f6$var$userCardPage = document.querySelectorAll(".card.cardAdmin");
const $d0f7ce18c37ad6f6$var$editTours = document.querySelector(".edit__tours");
const $d0f7ce18c37ad6f6$var$formPhoto = document.querySelector(".form__user-photo");
const $d0f7ce18c37ad6f6$var$modalContainer = document.getElementById("modal-container");
// DELEGATION
if ($d0f7ce18c37ad6f6$var$mapBox) {
    const locations = JSON.parse($d0f7ce18c37ad6f6$var$mapBox.dataset.locations);
    (0, $f60945d37f8e594c$export$4c5dd147b21b9176)(locations);
}
if ($d0f7ce18c37ad6f6$var$loginForm) $d0f7ce18c37ad6f6$var$loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, $70af9284e599e604$export$596d806903d1f59e)(email, password);
});
if ($d0f7ce18c37ad6f6$var$logOutBtn) $d0f7ce18c37ad6f6$var$logOutBtn.addEventListener("click", (0, $70af9284e599e604$export$a0973bcfe11b05c9));
if ($d0f7ce18c37ad6f6$var$userDataForm) $d0f7ce18c37ad6f6$var$userDataForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);
    await (0, $936fcc27ffb6bbb1$export$f558026a994b6051)(form, "data");
});
if ($d0f7ce18c37ad6f6$var$userPasswordForm) $d0f7ce18c37ad6f6$var$userPasswordForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    document.querySelector(".btn--save-password").textContent = "Updating...";
    const passwordCurrent = document.getElementById("password-current").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    const password = document.getElementById("password").value;
    await (0, $936fcc27ffb6bbb1$export$f558026a994b6051)({
        passwordCurrent: passwordCurrent,
        passwordConfirm: passwordConfirm,
        password: password
    }, "password");
    document.querySelector(".btn--save-password").textContent = "Save Password";
    document.getElementById("password-current").value = "";
    document.getElementById("password-confirm").value = "";
    document.getElementById("password").value = "";
});
if ($d0f7ce18c37ad6f6$var$signupForm) $d0f7ce18c37ad6f6$var$signupForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("confirm").value;
    await (0, $2db3670f13ba185b$export$7200a869094fec36)(name, email, password, passwordConfirm);
});
if ($d0f7ce18c37ad6f6$var$bookBtn) $d0f7ce18c37ad6f6$var$bookBtn.addEventListener("click", (e)=>{
    e.target.textContent = "Processing...";
    const { tourId: tourId } = e.target.dataset;
    (0, $6710bca62beba915$export$8d5bdbf26681c0c2)(tourId);
});
if ($d0f7ce18c37ad6f6$var$reviewPage) {
    const reviewsCard = document.querySelectorAll(".card");
    reviewsCard.forEach((review)=>{
        const editButton = review.querySelectorAll(".edit");
        const ratingStars = review.querySelectorAll(".reviews__star");
        const reviewText = review.querySelector(".card__text");
        const textBox = document.createElement("input");
        (0, $6458257cb7472807$export$e4415881b1c182ee)(editButton, ratingStars, reviewText, textBox);
    });
}
// refactor later probably
if ($d0f7ce18c37ad6f6$var$userCardPage) {
    const adminCard = document.querySelectorAll(".card.cardAdmin");
    adminCard.forEach((card)=>{
        const updateButton = card.querySelector(".btn--update");
        const deletebutton = card.querySelector(".btn--delete");
        const userJson = JSON.parse(updateButton.dataset.user);
        deletebutton.addEventListener("click", (e)=>{
            e.preventDefault();
            (0, $4c5f77f6675f95a9$export$d1ae575bafc1f95e)(userJson._id, "delete", "users");
        });
        updateButton.addEventListener("click", (e)=>{
            e.preventDefault();
            $d0f7ce18c37ad6f6$var$formPhoto.src = `/img/users/${userJson.photo}`;
            (0, $4c5f77f6675f95a9$export$27c92fa0da122bd9)($d0f7ce18c37ad6f6$var$modalContainer, userJson._id, e.target);
        });
    });
    window.addEventListener("click", (e)=>{
        if (e.target === $d0f7ce18c37ad6f6$var$modalContainer) {
            $d0f7ce18c37ad6f6$var$modalContainer.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}
if ($d0f7ce18c37ad6f6$var$editTours) {
    const tourCard = document.querySelectorAll(".card");
    tourCard.forEach((card)=>{
        const editButton = card.querySelector(".btn--edit");
        const tourJson = JSON.parse(editButton.dataset.tour);
        editButton.addEventListener("click", (e)=>{
            e.preventDefault();
            $d0f7ce18c37ad6f6$var$formPhoto.src = `/img/tours/${tourJson.imageCover}`;
            (0, $4c5f77f6675f95a9$export$ba25456186b6b674)($d0f7ce18c37ad6f6$var$modalContainer, tourJson.id, e.target);
        });
    });
}
if (document.querySelector(".admin__reviews")) {
    const reviewsCard = document.querySelectorAll(".admin__reviews__card");
    reviewsCard.forEach((review)=>{
        const deleteButton = review.querySelector(".delete");
        deleteButton.addEventListener("click", (e)=>{
            e.preventDefault();
            (0, $4c5f77f6675f95a9$export$d1ae575bafc1f95e)(deleteButton.dataset.id, "delete", "reviews");
        });
    });
}


//# sourceMappingURL=app.js.map
