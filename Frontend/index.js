const loginsec = document.querySelector(".login-section");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");

registerlink.addEventListener("click", () => {
  loginsec.classList.add("active");
});
loginlink.addEventListener("click", () => {
  loginsec.classList.remove("active");
});

// === Login Handler ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    try {
      const res = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        // alert("Login successful!");
        window.location.href = "index.html"; // redirect to homepage
      } else {
        alert(data.message);
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

    const name = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    const role = "Admin"; // or change dynamically later

    try {
      const res = await fetch("http://localhost:4000/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (data.success) {
        // alert("Signup successful! You can now login.");
        loginsec.classList.remove("active"); // switch to login view
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Signup failed.");
    }
  });
}
