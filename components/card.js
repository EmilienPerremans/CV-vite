export function renderCard(user) {
  return `
    <div class="card">
      <img src="${user.image}" alt="${user.name}" class="card-img">
      <h3 class="card-title">${user.name + " " +user.firstname }</h3>
      <p class="card-info">${user.formation + "<br> <a href=/about/>Voir le CV</a>" }</p>
    </div>
  `;
}