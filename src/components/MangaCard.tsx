type MangaCard = {
  id: string;
};

export default function MangaCard({ id }: MangaCard) {
  return <div>{id}</div>;
}
