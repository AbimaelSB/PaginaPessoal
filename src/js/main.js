function mudarAba(aba1, aba2, conteudo1, conteudo2){
  let a = document.querySelector(aba1);
  let b = document.querySelector(aba2);
  let c = document.querySelector(conteudo1);
  let d = document.querySelector(conteudo2);
  a.style.background = "#262626";
  b.style.background = "#070d12";
  c.style.display = "flex";
  d.style.display = "none";
}