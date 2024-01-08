import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
      <a
        href="https://www.instagram.com/ananyajadaun/"
        target="_blank"
        className=" text-[#212B36]"
      >
        Instagram
      </a>
      <a href="https://www.linkedin.com/in/ananyasinghin/" target="_blank">
        LinkedIn
      </a>
      <a>Buy me a Coffee</a>
    </div>
  );
}
