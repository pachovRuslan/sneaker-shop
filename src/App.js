import styles from './app.module.scss';

function App() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <img width={120} height={160} src="/logo.png" alt="logo" />
        </div>
        <div className={styles.header_title}>
          <div>
            <h1 className={styles.header_name}>REACT SNEAKERS</h1>
            <p className={styles.header_discribe}>best sneaker store</p>
          </div>
        </div>

        <div className={styles.cart}>
          <div className={styles.cart_button}>
            <img width={80} height={80} src="image/cart1.png" alt="cart"></img>
            <span>totalPrice $</span>
          </div>
          
        </div>
      </div>
      <div className={styles.category}>
        <ul className={styles.categories}>
          <li className={styles.category_active}>Все</li>
          <li className={styles.category_name}> New balance</li>
          <li className={styles.category_name}> Nike</li>
          <li className={styles.category_name}> Adidas</li>
          <li className={styles.category_name}> Puma</li>
          <li className={styles.category_name}> Reebok</li>
        </ul>
        <div className={styles.sort}>
        <b>Сортировка по:</b>
        <span>популярности</span>
          {/* <ul>
            <li className={styles.sort_popup}>популярности</li>
            <li className={styles.sort_popup}>цене</li>
            <li className={styles.sort_popup}>алфавиту</li>
          </ul> */}
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.item}>
            <img src="/image/new balance (1).png" alt="item" />
          </div>
          <div className={styles.item_name}>
            <span> New balance 574</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price_property}>
              <span>Price:</span>
              <b>99 $</b>
              <div className={styles.price_add}>
                <img width={20} height={20} src='/image/plus.png' alt='plus'></img>
              </div>
              </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.item}>
            <img src="/image/new balance (2).png" alt="item" />
          </div>{' '}
          <div className={styles.item_name}>
            <span> New balance 574</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price_property}>
              <span>Price:</span>
              <b>99 $</b>
              <div className={styles.price_add}>
                <img width={20} height={20} src='/image/plus.png' alt='plus'></img>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.item}>
            <img src="/image/new balance (3).png" alt="item" />
          </div>{' '}
          <div className={styles.item_name}>
            <span> New balance 574</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price_property}>
              <span>Price:</span>
              <b>99 $</b>
              <div className={styles.price_add}>
                <img width={20} height={20} src='/image/plus.png' alt='plus'></img>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.item}>
            <img src="/image/nike (5).png" alt="item" />
          </div>{' '}
          <div className={styles.item_name}>
            <span> Nike Air</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price_property}>
              <span>Price:</span>
              <b>99 $</b>
              <div className={styles.price_add}>
                <img width={20} height={20} src='/image/plus.png' alt='plus'></img>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.item}>
            <img src="/image/nike (1).png" alt="item" />
          </div>{' '}
          <div className={styles.item_name}>
            <span> Nike Air</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price_property}>
              <span>Price:</span>
              <b>99 $</b>
              <div className={styles.price_add}>
                <img width={20} height={20} src='/image/plus.png' alt='plus'></img>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.item}>
            <img src="/image/nike (2).png" alt="item" />
          </div>{' '}
          <div className={styles.item_name}>
            <span> Nike Air</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price_property}>
              <span>Price:</span>
              <b>99 $</b>
              <div className={styles.price_add}>
                <img width={20} height={20} src='/image/plus.png' alt='plus'></img>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.item}>
            <img src="/image/nike (3).png" alt="item" />
          </div>{' '}
          <div className={styles.item_name}>
            <span>Nike Air</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price_property}>
              <span>Price:</span>
              <b>99 $</b>
              <div className={styles.price_add}>
                <img width={20} height={20} src='/image/plus.png' alt='plus'></img>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.item}>
            <img src="/image/nike (4).png" alt="item" />
          </div>{' '}
          <div className={styles.item_name}>
            <span> Nike Air</span>
          </div>
          <div className={styles.price}>
            <div className={styles.price_property}>
              <span>Price:</span>
              <b>99 $</b>
              <div className={styles.price_add}>
                <img width={20} height={20} src='/image/plus.png' alt='plus'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
