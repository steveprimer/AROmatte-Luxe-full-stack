const loginsec = document.querySelector(".login-section");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");

registerlink.addEventListener("click", () => {
  loginsec.classList.add("active");
});
loginlink.addEventListener("click", () => {
  loginsec.classList.remove("active");
});

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    try {
      const res = await fetch(
        "https://aromatte-luxe.onrender.com/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      console.log("Login Response:", data); // Log the response to check

      // In the login code (index.js)
      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user)); // <-- simple and correct!

        if (data.user.role === "Admin") {
          window.location.href = "index.html";
          alert("Logged in as admin.");
        } else {
          window.location.href = "index.html";
        }
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  });
}

// === Signup Handler ===
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = signupForm.querySelector('input[name="name"]').value;
    const email = signupForm.querySelector('input[name="email"]').value;
    const password = signupForm.querySelector('input[name="password"]').value;
    const role = signupForm.querySelector("#role").value; // Get role dynamically

    try {
      const res = await fetch(
        "https://aromatte-luxe.onrender.com/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, role }),
        }
      );

      const data = await res.json();

      if (data.success) {
        loginsec.classList.remove("active"); // switch to login view
        alert("Signup successful! You can now login.");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Signup failed.");
    }
  });
}
