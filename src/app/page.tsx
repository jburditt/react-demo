import styles from "./page.module.css";
import Textbox from "./components/textbox";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <form>
            <Textbox label="First Name" />
            <button type="submit">Submit</button>
          </form>
        </main>
      </div>
    </>
  );
}
