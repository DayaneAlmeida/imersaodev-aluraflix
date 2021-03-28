var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BNGQzMTdmOTItMzUzOC00NTM1LTk3YzAtMDI0ZWNiYjlhYTEzXkEyXkFqcGdeQXVyMzM2MzI5MzU@._V1_UY268_CR2,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYmM4NmExZDEtNWJhNS00MThjLWI3ZTMtNTZiN2UwZDBhNjk3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTEwMTkwOTI@._V1_UY268_CR1,0,182,268_AL_.jpg"]

for (var i=0; i < listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">")
}
