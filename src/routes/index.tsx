import { Title } from "solid-start";
import styles from "~/styles/home.module.css";
import { Board } from "~/components/Board";

export default function Home() {
  return (
    <main>
      <Title>Chess 2</Title>
      <div class={styles.layout}>
        <Board Columns={8} Rows={8} Highlighted={["2-2"]} />
      </div>
    </main>
  );
}
