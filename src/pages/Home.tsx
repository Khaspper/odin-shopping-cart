import cover from "../assets/img/website-cover.jpg";

export default function Home() {
  return (
    <div
      className="h-screen bg-[url('../assets/img/website-cover.jpg')] bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${cover})` }}
    >
      Hello
    </div>
  );
}
