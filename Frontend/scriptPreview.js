const createPerfumeAPI =
  "https://aromatte-luxe.onrender.com/api/v1/createPerfume";
const showPerfumeAPI = "https://aromatte-luxe.onrender.com/api/v1/showPerfume";
const deletePerfumeAPI =
  "https://aromatte-luxe.onrender.com/api/v1/deletePerfume";
const updatePerfumeAPI =
  "https://aromatte-luxe.onrender.com/api/v1/updatePerfume";

const wrapper = document.querySelector("#wrapper");

//create perfume.................
const createPerfumeHandler = async (event) => {
  try {
    event.preventDefault();

    const formdata = new FormData(event.target);
    const token = localStorage.getItem("token");

    const response = await fetch(createPerfumeAPI, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`, // <- KEY LINE
      },
      body: formdata,
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      alert("Perfume created successfully!");
      window.location.href = "collections.html";
    } else {
      alert(data.message || "Perfume creation failed.");
    }
  } catch (err) {
    console.log(err);
    alert("An error occurred while creating the perfume.");
  }
};

const showPerfume = async (limit = 0) => {
  // Default to 0 if no limit is provided

  const emptyState = document.getElementById("emptyState");

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay

    const token = localStorage.getItem("token");
    const response = await fetch(showPerfumeAPI, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (data.response.length === 0) {
      emptyState.style.display = "block";
    } else {
      emptyState.style.display = "none";

      // If a limit is specified, slice the data array
      const limitedData =
        limit > 0 ? data.response.slice(0, limit) : data.response;
      createPerfumeCard(limitedData);
    }
  } catch (err) {
    console.log(err);
    emptyState.textContent = "Login to view perfumes.";
    emptyState.style.display = "block";
  }
};

// Now call showPerfume with the limit of 5
showPerfume(5);

function createPerfumeCard(data) {
  const emptyState = document.getElementById("emptyState");

  if (!data || data.length === 0) {
    emptyState.style.display = "block";
    return;
  } else {
    emptyState.style.display = "none";
  }

  try {
    data.forEach((element) => {
      const perfume = document.createElement("div");
      const img = document.createElement("img");
      const name = document.createElement("h2");
      const price = document.createElement("h4");
      const cartBtn = document.createElement("button");

      // const description = document.createElement("h4");
      // const stock = document.createElement("h4");
      //   const EditButton = document.createElement("button");
      //   const deleteButton = document.createElement("button");
      const parentBtn = document.createElement("div");

      perfume.classList.add("perfume");
      name.classList.add("name");
      price.classList.add("price");
      // description.classList.add("description");
      // stock.classList.add("stock");
      parentBtn.classList.add("btn");

      // ✅ Add missing styles
      img.classList.add("perfumeImage");
      //   EditButton.classList.add("editButton");
      //   deleteButton.classList.add("deleteButton");
      cartBtn.className = "addToCartButton";

      img.src = element.image;
      name.textContent = element.name;
      price.textContent = "₹" + element.price;
      // stock.textContent = "items left: " + element.stock;
      // description.textContent = " " + element.description;
      //   EditButton.textContent = "Edit";
      //   deleteButton.textContent = "Delete";
      cartBtn.textContent = "ADD TO CART";

      // remove inline width (let CSS handle it)
      //   img.setAttribute("width", "300px");

      // ⬇️ Add Click Handlers
      //   EditButton.addEventListener("click", () => {
      //     localStorage.setItem("editPerfumeId", element._id);
      //     window.location.href = "editPerfume.html";
      //   });

      //   deleteButton.addEventListener("click", async () => {
      //     const token = localStorage.getItem("token");
      //     const confirmed = confirm(
      //       "Are you sure you want to delete this perfume?"
      //     );
      //     if (!confirmed) return;

      //     const res = await fetch(
      //       `http://localhost:4000/api/v1/deletePerfume/${element._id}`,
      //       {
      //         method: "DELETE",
      //         headers: {
      //           Authorization: `Bearer ${token}`,
      //         },
      //       }
      //     );

      //     const result = await res.json();
      //     if (result.success) {
      //       alert("Perfume deleted successfully!");
      //       window.location.reload(); // refresh list
      //     } else {
      //       alert(result.message || "Failed to delete perfume.");
      //     }
      //   });

      cartBtn.addEventListener("click", () => {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("You need to be logged in to add items to the cart.");
          window.location.href = "login.html"; // or your actual login page
          return;
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const perfumeItem = {
          id: element._id,
          name: element.name,
          price: element.price,
          image: element.image,
          quantity: 1,
        };

        const existing = cart.find((item) => item.id === perfumeItem.id);
        if (existing) {
          existing.quantity += 1;
        } else {
          cart.push(perfumeItem);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${element.name} added to cart!`);
      });

      perfume.appendChild(img);
      perfume.appendChild(name);
      perfume.appendChild(price);
      // perfume.appendChild(description);
      // perfume.appendChild(stock);

      //   if (element.showAdminControls) {
      //     parentBtn.appendChild(EditButton);
      //     parentBtn.appendChild(deleteButton);
      //   }

      perfume.appendChild(parentBtn);
      perfume.appendChild(cartBtn); // moved below edit/delete

      wrapper.appendChild(perfume);
      setTimeout(() => {
        perfume.classList.add("visible");
      }, 100); // delays animation for smoother effect
    });
  } catch (err) {
    console.log(err);
  }
}

document.getElementById("searchInput").addEventListener("input", function (e) {
  const query = e.target.value.toLowerCase();
  const perfumes = document.querySelectorAll(".perfume");

  perfumes.forEach((perfume) => {
    const name = perfume.querySelector(".name").textContent.toLowerCase();
    const price = perfume.querySelector(".price").textContent.toLowerCase();
    const match = name.includes(query) || price.includes(query);

    // perfume.style.display = match ? "block" : "none";
    perfume.classList.toggle("hidden", !match);
  });
});
