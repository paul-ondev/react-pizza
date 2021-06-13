import React from 'react';

import { Categories, SortPopup } from './../index';

import image_2 from './../../assets/img/image 2.png';

const Home = () => {
  return (
    <main className="content">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'по цене', 'по алфавиту']} />
      </div>

      <div className="products">
        <div className="products__title">
          <h2>Все пиццы</h2>
        </div>
        <div className="products__block">
          <div className="pizza-block">
            <img src={image_2} alt="Pizza" />
            <h4 className="pizza-block__title">Чизбургер-пицца</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active-select">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active-select">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-block__bottom">
              <div className="pizza-block__price">от 395 ₽</div>
              <div className="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
          <div className="pizza-block">
            <img src={image_2} alt="Pizza" />
            <h4 className="pizza-block__title">Чизбургер-пицца</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active-select">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active-select">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div class="pizza-block__bottom">
              <div class="pizza-block__price">от 395 ₽</div>
              <div class="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
          <div className="pizza-block">
            <img src={image_2} alt="Pizza" />
            <h4 className="pizza-block__title">Чизбургер-пицца</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active-select">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active-select">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div class="pizza-block__bottom">
              <div class="pizza-block__price">от 395 ₽</div>
              <div class="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
          <div className="pizza-block">
            <img src={image_2} alt="Pizza" />
            <h4 className="pizza-block__title">Чизбургер-пицца</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active-select">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active-select">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div class="pizza-block__bottom">
              <div class="pizza-block__price">от 395 ₽</div>
              <div class="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
          <div className="pizza-block">
            <img src={image_2} alt="Pizza" />
            <h4 className="pizza-block__title">Чизбургер-пицца</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active-select">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active-select">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div class="pizza-block__bottom">
              <div class="pizza-block__price">от 395 ₽</div>
              <div class="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
          <div className="pizza-block">
            <img src={image_2} alt="Pizza" />
            <h4 className="pizza-block__title">Чизбургер-пицца</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active-select">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active-select">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div class="pizza-block__bottom">
              <div class="pizza-block__price">от 395 ₽</div>
              <div class="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
          <div className="pizza-block">
            <img src={image_2} alt="Pizza" />
            <h4 className="pizza-block__title">Чизбургер-пицца</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active-select">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active-select">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div class="pizza-block__bottom">
              <div class="pizza-block__price">от 395 ₽</div>
              <div class="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
          <div className="pizza-block">
            <img src={image_2} alt="Pizza" />
            <h4 className="pizza-block__title">Чизбургер-пицца</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active-select">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active-select">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div class="pizza-block__bottom">
              <div class="pizza-block__price">от 395 ₽</div>
              <div class="button button--outline button--add">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                <i>2</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
