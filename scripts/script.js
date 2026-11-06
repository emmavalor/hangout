const no = document.querySelector(".no");
const yes = document.querySelector(".yes");
const btns = document.querySelector(".btn-group");
const h1 = document.querySelector("h1");

const activities = ["Saut en parachute", "Boire de la bière", "Dormir chez moi ce soir", "Cuisine pour moi femme", "Restau mais tu payes"];

no.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - no.offsetWidth;
  const maxY = window.innerHeight - no.offsetHeight;
  const x_pos = Math.floor(Math.random() * maxX);
  const y_pos = Math.floor(Math.random() * maxY);

  no.style.position = "fixed";
  no.style.left = x_pos + "px";
  no.style.top = y_pos + "px";
});

yes.addEventListener("click", () => {
  btns.style.opacity = 0;
  h1.innerText = "On sort ou ?";
  h1.classList.add("text-center", "mb-4", "fw-bold");
  const form = document.createElement("form");

  form.classList.add("card", "shadow", "border-0", "p-4", "mx-auto", "mt-4");

  form.style.maxWidth = "450px";

  const subtitle = document.createElement("p");
  subtitle.innerText = "Choisis les activités qui te tentent ❤️";
  subtitle.classList.add("text-muted", "text-center", "mb-4");

  form.appendChild(subtitle);

  activities.forEach((activity, index) => {
    const id = `activity-${index}`;

    const checkbox = `<div class="form-check border rounded-3 p-3 mb-2">
                        <input type="checkbox" id="${id}" name="activities" value="${activity[0]}" class="form-check-input">
                        <label for="${id}" class="form-check-label ms-2">${activity}</label>
                      </div>`;
      form.insertAdjacentHTML("beforeend", checkbox);
    });

    // Bouton de validation
    const button = document.createElement("button");
    button.innerText = "C'est parti ! ❤️";
    button.type = "button";
    button.classList.add("btn", "btn-success", "w-100", "mt-3");

    form.appendChild(button);

    h1.insertAdjacentElement("afterend", form);

    button.addEventListener("click", () => {
  form.style.display = "none";

  const img = document.createElement("img");
  img.src = "../image/chasseurs_allemand.png";
  img.alt = "Une belle surprise";
  img.classList.add("img-fluid", "rounded-4", "shadow");

  const container = document.createElement("div");
  container.classList.add("text-center", "mt-4", "mx-auto");

  container.style.maxWidth = "500px";

  container.appendChild(img);

  h1.insertAdjacentElement("afterend", container);
  h1.innerText = "Merci je t'aime dejà"
});
});
