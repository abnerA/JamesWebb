import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container} >
      <h4 className={styles}>Derechos reservados</h4>
      <a className={styles} href="https://jwstapi.com/" target="_blank" rel="noopener noreferrer">
        James Webb Space Telescope API
      </a>
    </div>
  );
}
