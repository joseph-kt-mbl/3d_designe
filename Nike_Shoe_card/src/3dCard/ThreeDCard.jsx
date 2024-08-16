import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';
import styles from './ThreeDCard.module.css';

const CardContainer = styled(motion.section)`
  padding: 0.75rem;
  border-radius: 0.8em;
  margin: 0.5rem;
  background-color: black;
  width: 280px;
  position: relative;
  overflow: hidden;
  cursor: grab;
`;

const Product = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  & img {
    width: 260px;
    z-index: 1;
    transform: rotate(-28deg) translate(0, -1.5rem);
  }
`;

const MakeSpan = styled.span`
  position: absolute;
  top: -1.5rem;
  left: -5px;
  font-size: small;
`


function ThreeDCard( data = { images: { product: '', logo: '' } , color:'gold'}) {
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouseEnter(e) {
    e.target.style.backgroundColor = 'black';
    e.target.style.borderColor = data.about.color;
    e.target.style.color = '#fff';
  }

  function handleMouseLeave(e) {
    e.target.style.backgroundColor = data.about.color;
    e.target.style.borderColor = 'transparent';
    e.target.style.color = '#1c1c1c';
  }

  return (
    <CardContainer
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: 'grabbing' }}
    >
      <div className={styles.circle} style={{ backgroundColor: data.about.color }}></div>
      <div className={styles.productDisplayer}>
        <Product
          style={{ x, y, rotateX, rotateY, z: 99000 }}
          drag
          dragElastic={0.12}
          whileTap={{ cursor: 'grabbing' }}
        >
          <img src={data.images.product} alt="Yellow Nike Air-Jordan" />
        </Product>
        <h1>{data.about.model}</h1>
      </div>
      <div className={styles.price_section}>
        <p className={styles.product_name}>
          <MakeSpan>{data.about.make}</MakeSpan>
          {data.about.productName}
          </p>
        <p>{data.about.price}</p>
      </div>
      <div className={styles.buy_section}>
        <p>{data.about.slogan}</p>
        <button
          style={{ backgroundColor: data.about.color }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          BUY
        </button>
      </div>
      <footer className={styles.footer}>
        <img src={data.images.logo} alt="Make Logo" />
      </footer>
    </CardContainer>
  );
}

export default ThreeDCard;
