import { Game } from "@/api";

export { default } from "./game";

export async function getServerSideProps(context) {
  const {
    params: { game },
  } = context;

  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(game);

  return {
    props: {
      game: response,
    },
  };
}
