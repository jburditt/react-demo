import styles from "./page.module.css";
import Textbox from "./components/textbox";
import Header from "./components/header";
import { Button, Form } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>

        </main>
      </div>
    </>
  );
}
