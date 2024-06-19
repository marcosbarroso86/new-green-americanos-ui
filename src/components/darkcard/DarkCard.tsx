import React from 'react'
import './styles.css';
import canasto from '../../assets/img/canasto.png'

const DarkCard = () => {
  return (
        <section className="dark">
          <div className="container py-4">
              <h1 className="h1 text-center text-white" id="pageHeaderTitle">NOSOTROS</h1>

              <article className="postcard dark blue" data-aos="fade-up">
                  <a className="postcard__img_link" href="#">
                      <img className="postcard__img" src={canasto} alt="Image Title" />
                  </a>
                  <div className="postcard__text">
                      <h1 className="postcard__title blue"><a href="#">Clases de padel</a></h1>
                      <div className="postcard__bar"></div>
                      <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                  </div>
              </article>
              <article className="postcard dark red" data-aos="fade-up">
                  <a className="postcard__img_link" href="#">
                      <img className="postcard__img" src="https://i.ytimg.com/vi/jpGSfubFyg8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGE0gWChlMA8=&rs=AOn4CLA98LJgyAE0DnADZlJU-BeswXD1GA)" alt="Image Title" />
                  </a>
                  <div className="postcard__text">
                      <h1 className="postcard__title red"><a href="#">Cancha abierta</a></h1>
                      <div className="postcard__bar"></div>
                      <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                  </div>
              </article>
              <article className="postcard dark green" data-aos="fade-up">
                  <a className="postcard__img_link" href="#">
                      <img className="postcard__img" src="https://yt3.googleusercontent.com/ytc/AIdro_kfdbLTR_JeR76tZSHS7A3U0tAgGESIMYhu33mEEus41A=s900-c-k-c0x00ffffff-no-rj" alt="Image Title" />
                  </a>
                  <div className="postcard__text">
                      <h1 className="postcard__title green"><a href="#">Torneos americanos</a></h1>
                      <div className="postcard__subtitle small">
                          <time dateTime="2020-05-25 12:00:00">
                              <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                          </time>
                      </div>
                      <div className="postcard__bar"></div>
                      <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                  </div>
              </article>
              <article className="postcard dark yellow" data-aos="fade-up">
                  <a className="postcard__img_link" href="#">
                      <img className="postcard__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmXaU8zNkIBOKNSiNaWW1Kjpx-jfOJDs9LU112B0tTlv7mIsbWj3VxBht8YiWQrprfYg&usqp=CAU" alt="Image Title" />
                  </a>
                  <div className="postcard__text">
                      <h1 className="postcard__title yellow"><a href="#">Torneos de Liga</a></h1>
                      <div className="postcard__subtitle small">
                          <time dateTime="2020-05-25 12:00:00">
                              <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                          </time>
                      </div>
                      <div className="postcard__bar"></div>
                      <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                  </div>
              </article>
          </div>
      </section>
  )
}

export default DarkCard


