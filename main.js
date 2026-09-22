import { negocio } from './dados.js';

const linkWhatsapp = `${negocio.whatsapp}?text=${encodeURIComponent('Olá, Dra. Israela! Encontrei seu site e gostaria de saber mais sobre o atendimento em fisioterapia pélvica.')}`;
for (const id of ['nav-whatsapp', 'hero-whatsapp', 'sobre-whatsapp', 'place-whatsapp', 'footer-whatsapp']) {
  document.getElementById(id).href = linkWhatsapp;
}
for (const id of ['place-maps', 'reviews-maps', 'location-maps', 'footer-maps']) {
  document.getElementById(id).href = negocio.maps;
}
document.getElementById('rating').textContent = Number(negocio.nota).toFixed(1).replace('.', ',');
document.getElementById('reviews').textContent = `${negocio.avaliacoes} avaliações`;
document.getElementById('address').textContent = negocio.endereco;
