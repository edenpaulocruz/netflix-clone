(function() {
  'use strict';

  const nav = document.querySelectorAll(".nav__link");

  const collection = [
    {
      id: 'UsmnHdZT5nw',
      name: 'Troco em Dobro',
      sinopse: 'Spenser, um ex-policial e ex-presidiário, e o aspirante a lutador Hawk se unem para investigar uma conspiração ligada à morte de dois oficiais de Boston.',
      category: 'movie'
    },
    {
      id: 'GQR6r6FooQc',
      name: 'Ilha de Segredos',
      sinopse: 'Uma ilha aparentemente pacífica guarda segredos que colocam um órfão em perigo depois que ele se aproxima da nova e misteriosa professora de Alemão.',
      category: 'movie'
    },
    {
      id: 'HYtZR2ct3VY',
      name: 'Cara Gente Branca',
      sinopse: 'Alunos negros de uma conceituada universidade norte-americana enfrentam desrespeito e a política evasiva da escola, que está longe de ser "pós-racial".',
      category: 'serie'
    },
    {
      id: '5ELjX0ElcBg',
      name: 'O Atirador',
      sinopse: 'Um condecorado atirador de elite da Marinha americana volta à ativa para desmontar uma conspiração com objetivo de matar o presidente, mas acaba acusado de assassinato.',
      category: 'serie'
    },
    {
      id: '_IANQ2pNzaQ',
      name: 'Resgate',
      sinopse: 'Em Bangladesh, o mercenário Tyler Rake luta para sobreviver durante a missão para resgatar o filho de um chefão do crime.',
      category: 'movie'
    },
    {
      id: 'gvjXat2pySE',
      name: 'Crônicas de Natal',
      sinopse: 'Após causar um acidente com o trenó do Papai Noel, os irmãos Kate e Teddy embarcam em uma noite alucinante para tentar salvar o Natal.',
      category: 'movie'
    },
    {
      id: 'J63q8xOe2cQ',
      name: 'Cobra Kai',
      sinopse: 'Décadas depois da competição que mudou suas vidas, a rivalidade entre Johnny e Daniel está de volta nesta sequência da trilogia Karatê Kid.',
      category: 'serie'
    },
    {
      id: '0u6WunNGck0',
      name: 'Raio Negro',
      sinopse: 'Super-herói aposentado e diretor de uma escola, o lendário Raio Negro tem de voltar à ativa quando uma gangue começa a ameaçar sua família.',
      category: 'serie'
    },
    {
      id: 'r5V3fosA1YM',
      name: 'Aniquilação',
      sinopse: 'Depois que seu marido desaparece em uma missão secreta, a bióloga Lena embarca numa expedição a uma misteriosa região interditada pelo governo dos EUA.',
      category: 'movie'
    },
    {
      id: 'VY-TETyvlrY',
      name: 'La Casa de Papel',
      sinopse: 'Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano. Será o maior roubo da história, ou uma missão em vão?',
      category: 'serie'
    },
    {
      id: 'XnLq8uYqosg',
      name: 'O Chefinho, De Volta Aos Negócios',
      sinopse: 'Nesta série de animação baseada no grande sucesso do cinema, o Chefinho decide apresentar seu irmão mais velho à frenética vida no escritório.',
      category: 'serie'
    },
    {
      id: 'NauiAuAqsMc',
      name: 'O Pacote',
      sinopse: 'Após um inusitado acidente durante uma viagem, um grupo de amigos corre contra o tempo para que um deles consiga – literalmente – voltar para casa inteiro!',
      category: 'movie'
    },
    {
      id: '9-gSjK0Yg14',
      name: 'O Terceiro Olho',
      sinopse: 'Depois que sua irmã mais nova diz ver pessoas mortas, Alia consulta uma sensitiva e recebe um aviso: espíritos vingativos vagam pela casa de sua infância.',
      category: 'movie'
    },
    {
      id: 'N1_ysKyuGj8',
      name: 'House of Cards',
      sinopse: 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.',
      category: 'serie'
    },
    {
      id: 'ZbCGwXSiQB8',
      name: 'Zona de Combate',
      sinopse: 'Em um futuro próximo, um piloto de drone e um androide ultrassecreto trabalham lado a lado no campo de batalha para evitar um ataque nuclear.',
      category: 'movie'
    },
    {
      id: 'ioNnKc9ybQI',
      name: 'Frontier',
      sinopse: 'Na América do Norte do século XVIII, caçadores impiedosos e empresários brigam pelo controle local do comércio de pele.',
      category: 'serie'
    },
    {
      id: 'tWfDSRZlVt0',
      name: 'Um Homem de Sorte',
      sinopse: 'Um talentoso engenheiro abandona suas raízes austeras por riqueza e sucesso em meio à elite de Copenhague. Mas o mesmo orgulho que o motiva pode representar sua ruína.',
      category: 'movie'
    },
    {
      id: '8OGuwOeXAEc',
      name: 'O Mecanismo',
      sinopse: 'Uma investigação sobre suspeitas de corrupção envolvendo estatais e empreiteiras se torna um dos maiores escândalos políticos do Brasil. Inspirada em fatos reais.',
      category: 'serie'
    },
    {
      id: 'sS2SLaJFcfc',
      name: 'A Nuvem',
      sinopse: 'Virginie cria gafanhotos como fonte de proteína. Quando os insetos param de reproduzir, ela descobre que eles desenvolveram um apetite por sangue.',
      category: 'movie'
    }
  ]
  
  const itemTemplate = (item) => {
    return `
      <div class="item">
        <img class="hilights__image" src="https://img.youtube.com/vi/${item.id}/mqdefault.jpg" alt="${item.name}" title="${item.name}">
      </div>
    `
  }

  function closeNav() {
    document.querySelector("#nav__control").checked = false;
  }

  nav.forEach((item) => {
    item.addEventListener("click", closeNav);
  })

  function render() {
    const moviesCarousel = document.querySelector('#movies .owl-carousel');
    const seriesCarousel = document.querySelector('#series .owl-carousel');
    
    const movies = collection.filter((item) => {
      return item.category === 'movie';
    });
    
    const series = collection.filter((item) => {
      return item.category === 'serie';
    });

    moviesCarousel.innerHTML = movies.map((movie) => {
      return itemTemplate(movie);
    }).join('');

    seriesCarousel.innerHTML = series.map((serie) => {
      return itemTemplate(serie);
    }).join('');
  }
  
  render();
})();