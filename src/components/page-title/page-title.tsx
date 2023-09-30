import styles from "./page-title.module.css";

interface Props {
  children: React.ReactNode;
}

export default function PageTitle(props: Props) {
  return <h1 className={styles.root}>{props.children}</h1>;
}
