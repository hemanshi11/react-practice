import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Uzair Rizvi, AFP India",
      "title": "Job advert for cannabis users in Germany falsely linked to Indian state government",
      "description": "A regional opposition party in India has falsely linked a news report about a lucrative job offer for cannabis users to the ruling government in the northern...",
      "url": "https://news.yahoo.com/job-advert-cannabis-users-germany-080338613.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/X4I.HATwsFXpjsGaQRnacQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/afp_factcheck_us_713/c85e3964f4bae649186b49b1e16d0d4b",
      "publishedAt": "2023-03-03T08:03:38Z",
      "content": "A regional opposition party in India has falsely linked a news report about a lucrative job offer for cannabis users to the ruling government in the northern state of Uttar Pradesh. But the job -- wh… [+2681 chars]"
    },
    {
      "source": {
        "id": "la-nacion",
        "name": "La Nacion"
      },
      "author": null,
      "title": "Menzies Aviation selecciona a Wipro para transformar sus servicios de carga aérea",
      "description": "Menzies Aviation selecciona a Wipro para transformar sus servicios de carga aérea",
      "url": "https://www.lanacion.com.ar/agencias/menzies-aviation-selecciona-a-wipro-para-transformar-sus-servicios-de-carga-aerea-nid09032023/",
      "urlToImage": "https://resizer.glanacion.com/resizer/JXD-8OyTC4IjW2Fb1pMcguwRbb0=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/LFVQKQRLMJEMRECVI6UP3ZUIJQ",
      "publishedAt": "2023-03-09T21:20:59Z",
      "content": "Londres y bangalore, india--(business wire)--mar. 9, 2023--\r\nWipro Limited (NYSE: WIT, BSE: 507685, NSE: WIPRO), empresa líder en consultoría y servicios de tecnología, anunció que ha sido selecciona… [+9877 chars]"
    },
    {
      "source": {
        "id": "la-nacion",
        "name": "La Nacion"
      },
      "author": null,
      "title": "En el marco de la inauguración de la conferencia del sector financiero, líderes de la comunidad financiera internacional comparten un panorama positivo para el sector",
      "description": "En el marco de la inauguración de la conferencia del sector financiero, líderes de la comunidad financiera internacional comparten un panorama positivo para el sector",
      "url": "https://www.lanacion.com.ar/agencias/en-el-marco-de-la-inauguracion-de-la-conferencia-del-sector-financiero-lideres-de-la-comunidad-nid15032023/",
      "urlToImage": "https://resizer.glanacion.com/resizer/mg4sUMmFIOl_ek1TZX4kGnuKJNw=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/337KL3X4V5D65CT7FBCF2LODDQ",
      "publishedAt": "2023-03-15T22:21:06Z",
      "content": "RIYADH, Arabia Saudita--(BUSINESS WIRE)--mar. 15, 2023--\r\nEn el día de la fecha, en la ciudad de Riyadh, se inauguró la segunda edición de la Conferencia del Sector Financiero (FSC 2023), que ha conv… [+4259 chars]"
    },

    {
      "source": {
        "id": null,
        "name": "Wattsupwiththat.com"
      },
      "author": "Charles Rotter",
      "title": "Weekly Climate and Energy News Roundup #545",
      "description": "No government has the right to decide on the truth of scientific principles.",
      "url": "https://wattsupwiththat.com/2023/03/27/weekly-climate-and-energy-news-roundup-545/",
      "urlToImage": "https://i0.wp.com/wattsupwiththat.com/wp-content/uploads/2022/06/IMG_6662-1.webp?fit=1024%2C512&ssl=1",
      "publishedAt": "2023-03-27T09:00:00Z",
      "content": "The Week That Was: 2023-03-25 (March 25, 2023)Brought to You by SEPP (www.SEPP.org)The Science and Environmental Policy Project\r\nQuote of the Week: No government has the right to decide on the truth … [+50255 chars]"
    },
    {
      "source": {
        "id": "la-nacion",
        "name": "La Nacion"
      },
      "author": null,
      "title": "Cirium lanza la primera herramienta de rutas aéreas con seguimiento satelital de los vuelos",
      "description": "Cirium lanza la primera herramienta de rutas aéreas con seguimiento satelital de los vuelos",
      "url": "https://www.lanacion.com.ar/agencias/cirium-lanza-la-primera-herramienta-de-rutas-aereas-con-seguimiento-satelital-de-los-vuelos-nid21032023/",
      "urlToImage": "https://resizer.glanacion.com/resizer/k440yBr5opRrXHAOAYUBw5ZAy5s=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/FTZHIBAYGFGEPC6AASHN4RGTTY",
      "publishedAt": "2023-03-21T03:10:39Z",
      "content": "Londres--(business wire)--mar. 20, 2023--\r\nCirium, líder en análisis de aviación, presentó la primera herramienta Airline Routes del sector de la aviación para contabilizar los vuelos reales realizad… [+5673 chars]"
    },
    {
      "source": {
        "id": "la-nacion",
        "name": "La Nacion"
      },
      "author": null,
      "title": "Nuevo estudio evalúa el uso de Masimo PVi® como indicador de la capacidad de respuesta ante fluidos para guiar la fluidoterapia orientada por metas en pacientes neuroquirúrgicos adultos",
      "description": "Nuevo estudio evalúa el uso de Masimo PVi® como indicador de la capacidad de respuesta ante fluidos para guiar la fluidoterapia orientada por metas en pacientes neuroquirúrgicos adultos",
      "url": "https://www.lanacion.com.ar/agencias/nuevo-estudio-evalua-el-uso-de-masimo-pvi-como-indicador-de-la-capacidad-de-respuesta-ante-fluidos-nid07032023/",
      "urlToImage": "https://resizer.glanacion.com/resizer/4TC9vU1HXsW0zoINhhlb1fyk6us=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/R3SXURX6NBGR7MAL2UEI3BD62A",
      "publishedAt": "2023-03-07T14:11:03Z",
      "content": "NEUCHATEL, Suiza--(BUSINESS WIRE)--mar. 7, 2023--\r\nMasimo (nasdaq: masi) anunció hoy los hallazgos de un estudio prospectivo publicado en el british journal of neurosurgery, en el que el dr. ankita d… [+13894 chars]"
    },
    {
      "source": {
        "id": "la-nacion",
        "name": "La Nacion"
      },
      "author": null,
      "title": "Rimini Street recibe el premio al mejor lugar de trabajo de 2023 en Estados Unidos",
      "description": "Rimini Street recibe el premio al mejor lugar de trabajo de 2023 en Estados Unidos",
      "url": "https://www.lanacion.com.ar/agencias/rimini-street-recibe-el-premio-al-mejor-lugar-de-trabajo-de-2023-en-estados-unidos-nid15032023/",
      "urlToImage": "https://resizer.glanacion.com/resizer/NPTz2TcWwLJgYDZqqWuJwo2V9lI=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/5AZEPMHMQRAN3OGU5GEFGHWAF4",
      "publishedAt": "2023-03-15T20:50:56Z",
      "content": "Las vegas--(business wire)--mar. 15, 2023--\r\nRimini Street, Inc. (Nasdaq: RMNI), proveedor mundial de productos y servicios de software empresarial y proveedor de servicio técnico externo para produc… [+12836 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Search Engine Land"
      },
      "author": "Danny Goodwin",
      "title": "This day in search marketing history: February 28",
      "description": "R.I.P., DMOZ, plus: Multifaceted featured snippets, Google's non-answer on CTR, voice search ranking factors and more.\nThe post This day in search marketing history: February 28 appeared first on Search Engine Land.",
      "url": "https://searchengineland.com/search-marketing-history-february-28-393622",
      "urlToImage": "https://searchengineland.com/wp-content/seloads/2023/02/this-day-in-search-marketing-history-february-28-search-engine-land.jpg",
      "publishedAt": "2023-02-28T05:01:53Z",
      "content": "R.I.P., DMOZ \r\nIn 2017, DMOZ – The Open Directory Project that used human editors to organize websites — announced it was closing as of March 14.\r\nBy this time, DMOZ had been mostly forgotten as a re… [+6283 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Brookings Institution"
      },
      "author": "Brian Fishman",
      "title": "Dual-use regulation: Managing hate and terrorism online before and after Section 230 reform",
      "description": "The old military aphorism that “the enemy gets a vote” is oft forgotten in both Silicon Valley and Washington, D.C. This cliche is worth keeping in mind as Congress debates adjustments to Section 230 (§230) of the Communications Decency Act. For starters, Sil…",
      "url": "http://www.brookings.edu/research/dual-use-regulation-managing-hate-and-terrorism-online-before-and-after-section-230-reform/",
      "urlToImage": "https://www.brookings.edu/wp-content/uploads/2016/12/metro_20161220_tech-e1482261152869.jpg?w=1200&h=630&crop=1",
      "publishedAt": "2023-03-14T10:58:09Z",
      "content": "The old military aphorism that the enemy gets a vote is oft forgotten in both Silicon Valley and Washington, D.C. This cliche is worth keeping in mind as Congress debates adjustments to Section 230 (… [+98919 chars]"
    }
  ]

  constructor() {
    super();
    console.log('hello this is react class')
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    }
  }
  async componentDidMount() {

    console.log('cdm');
    let url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e106aeb9fa73450695b62886d8e64b6f';
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);

  }

  handlenextbutton = async () => {
    // console.log('next');

    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e106aeb9fa73450695b62886d8e64b6f${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  handleprevbutton = async () => {
    // console.log('previous');
    let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e106aeb9fa73450695b62886d8e64b6f ${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }
  render() {
    console.log('render')
    return (
      <div className='container my-3'>
        <h2>Daily News - top headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 66)} imgurl={element.urlToImage} newsurl={element.newsurl} />
            </div>
          })
          }
        </div>
        <div className='container my-5 d-flex justify-content-between '>
          <button disabled={this.state.page <= 1} className='btn  btn-dark' onClick={this.handleprevbutton}>&larr;Previous</button>
          <button className='btn  btn-dark' onClick={this.handlenextbutton}>Next &rarr;</button>
        </div>
      </div>
    )
  }

}

export default News
