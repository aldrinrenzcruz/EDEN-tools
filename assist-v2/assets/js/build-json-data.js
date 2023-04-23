// Sort by Rank (Descending Order)
linksList.sort((a, b) => Number(b.rank) - Number(a.rank));

document.addEventListener('DOMContentLoaded', function () {

  function buildSearchLinks() {
    let template = '<div>';
    const clickCounts = JSON.parse(localStorage.getItem('clickCounts')) || {};
    linksList.sort((a, b) => {
      const clickCountA = clickCounts[a.title] || 0;
      const clickCountB = clickCounts[b.title] || 0;
      return clickCountB - clickCountA;
    });
    for (let data of linksList) {
      if (data.access === 'ivma' && localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] !== "pHdRb7XWAmbpgfqmtWLyqrSGFLgDKN7V") {
        continue;
      }
      if (data.access === 'eury' && localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] !== "LcfB8tE5uqJwAvhXrNv76G22MRAny8aD") {
        continue;
      }
      if (data.access === 'admin' && localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] !== "LcfB8tE5uqJwAvhXrNv76G22MRAny8aD" && localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] !== "pHdRb7XWAmbpgfqmtWLyqrSGFLgDKN7V") {
        continue;
      }
      template += `<div class="search-bar-link link-filterable ${data.access}"><div><a class="stretched-link ${data.eclass}" href="${data.url}" ${data.attributes} onclick="saveClickCount(\`${data.title}\`); ${data.onclick}"><img class="link-img-list" src="${data.favicon}"><span class="link-title">${data.title}</span> <span class="links-tags">${data.tags}, ${data.title}, ${data.url}</span></a></div></div>
      `;
    }
    template += '</div>';
    document.querySelector('#search-links-data').innerHTML = template;
    permit();
  }
  buildSearchLinks();

});

function permit() {
  if (localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] !== "pHdRb7XWAmbpgfqmtWLyqrSGFLgDKN7V") { for (let el of document.querySelectorAll('.ivma')) el.style.display = "none"; }
  if (localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] !== "LcfB8tE5uqJwAvhXrNv76G22MRAny8aD") { for (let el of document.querySelectorAll('.eury')) el.style.display = "none"; }
  if (localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] !== "LcfB8tE5uqJwAvhXrNv76G22MRAny8aD" && localStorage["JwtrM9NdmFQdyFZbKNJYpVgGtgxfDH3Q"] !== "pHdRb7XWAmbpgfqmtWLyqrSGFLgDKN7V") { for (let el of document.querySelectorAll('.admin')) el.style.display = "none"; }
}