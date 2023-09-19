import { For, Show } from "solid-js";
import styles from "./Board.module.css";

type BoardCoordinate = {
  x: number;
  y: number;
};

type BoardProps = {
  Columns: number;
  Rows: number;
  Highlighted: string[];
};

export const Board = (props: BoardProps) => {
  const boardTiles = () => {
    const results: BoardCoordinate[] = [];

    for (let x = 0; x < props.Columns; x++) {
      for (let y = 0; y < props.Rows; y++) {
        results.push({
          x,
          y,
        });
      }
    }

    return results;
  };
  return (
    <div
      class={styles.board}
      style={{ "--board-columns": props.Columns, "--board-rows": props.Rows }}
    >
      <For each={boardTiles()}>
        {(c) => (
          <div
            id={`${c.x}-${c.y}`}
            classList={{
              [styles.square]: true,
              [styles.highlight]: props.Highlighted?.includes(`${c.x}-${c.y}`),
            }}
          >
            {c.x},{c.y}
            <Show when={props.Highlighted?.includes(`${c.x}-${c.y}`)}>
              <img src="pawn.png" />
            </Show>
          </div>
        )}
      </For>
    </div>
  );
};
