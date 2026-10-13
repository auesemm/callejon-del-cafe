/* ============================================================
   A partir de aquí no necesitas editar nada
   ============================================================ */
const $ = s => document.querySelector(s);
const ICON = {
 pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
 chat:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.4-9h.5a8.5 8.5 0 0 1 8 8z"/>',
 mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
 fb:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
 tt:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
 cup:'<path d="M17 8h1a4 4 0 0 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v3M10 2v3M14 2v3"/>',
 check:'<path d="m5 12 5 5L20 7"/>'
};
const ic = n => '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+ICON[n]+'</svg>';
const wa = t => "https://wa.me/" + N.whatsapp + "?text=" + encodeURIComponent(t || N.mensajeWA);
const mapa = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(N.direccion);
let actual = 0;

document.title = N.nombre + " | " + N.lema;
$("#nombre").textContent = N.nombre;
$("#logo").onerror = function(){ this.remove(); };
["waTop","waFlot"].forEach(i => $("#"+i).href = wa());
["llegar","llegar2"].forEach(i => $("#"+i).href = mapa);
$("#dir").textContent = N.direccion;
$("#pie").textContent = "© " + new Date().getFullYear() + " " + N.nombre;
$("#insignias").innerHTML = [["cup","Cafetería","tradicional"],["chat","Pedidos por","WhatsApp"],["clock","Horario",N.horario]]
  .map(([i,a,b]) => '<div class="ins"><span class="ci">'+ic(i)+'</span><span>'+a+'<br>'+b+'</span></div>').join("");
$("#lista").innerHTML = ["Cafés calientes y fríos","Crepas dulces y saladas","Baguettes, chapatas y mega-molletes","Pedidos por WhatsApp"]
  .map(t => '<li>'+ic("check")+t+'</li>').join("");

const fila = (i, et, txt, url) => '<div class="fila"><span class="ci">'+ic(i)+'</span><span><small>'+et+'</small>' +
  (url ? '<a href="'+url+'" target="_blank" rel="noopener">'+txt+'</a>' : txt) + '</span></div>';
$("#datos").innerHTML =
  fila("pin","Dirección",N.direccion,mapa) +
  fila("clock","Horario",N.horario) +
  fila("phone","Teléfono",N.telefono,"tel:+52"+N.telefono.replace(/\D/g,"")) +
  fila("chat","WhatsApp",N.telefono,wa()) +
  fila("mail","Correo",N.email,"mailto:"+N.email) +
  fila("fb","Facebook",N.nombre,N.facebook) +
  (N.tiktok ? fila("tt","TikTok","@"+N.tiktok,"https://www.tiktok.com/@"+N.tiktok) : "");

const precio = v => "$" + v;
const producto = ([n,a,b,d]) => '<div class="it"><div class="n">'+n+(d?'<small>'+d+'</small>':'')+'</div>' +
  [a,b].filter(x => x != null).map(x => '<b>'+precio(x)+'</b>').join("") + '</div>';
const grupo = g => '<div class="g"><h3>'+g.t+'</h3>' +
  (g.nota ? '<p class="nota">'+g.nota+'</p>' : '') +
  (g.sizes ? '<div class="sz"><span>Chico</span><span>Grande</span></div>' : '') +
  g.items.map(producto).join("") + '</div>';

MENU.forEach((s,i) => {
  $("#tabs").insertAdjacentHTML("beforeend",'<button data-i="'+i+'" aria-pressed="false">'+s.t+'</button>');
  $("#menu").insertAdjacentHTML("beforeend",'<section id="'+s.id+'" hidden>'+s.groups.map(grupo).join("")+'</section>');
});
function fotoMenu(fade){
  const im = $("#fotoMenu"), src = "img/" + MENU[actual].foto + ".jpg";
  if(!fade){ im.src = src; return; }
  im.classList.add("cambia"); setTimeout(() => { im.src = src; im.classList.remove("cambia"); }, 220);
}
function mostrar(i, fade){
  actual = i;
  document.querySelectorAll("#tabs button").forEach((b,k) => b.setAttribute("aria-pressed", k===i));
  document.querySelectorAll("#menu section").forEach((p,k) => p.hidden = k!==i);
  fotoMenu(fade);
}
const abrir = i => {
  mostrar(i, true);
  try { history.replaceState(null, "", "#" + MENU[i].id); } catch(e) {}
  if ($("#menu").getBoundingClientRect().top < 0) $("#menu").scrollIntoView({behavior:"smooth", block:"start"});
};
$("#tabs").addEventListener("click", e => { const b = e.target.closest("button"); if(b) abrir(+b.dataset.i); });
const io = "IntersectionObserver" in window ? new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12}) : null;
document.querySelectorAll(".rev").forEach(el => io ? io.observe(el) : el.classList.add("in"));
// Enlace directo a una sección: index.html#dulces
mostrar(Math.max(0, MENU.findIndex(s => "#" + s.id === location.hash)), false);
