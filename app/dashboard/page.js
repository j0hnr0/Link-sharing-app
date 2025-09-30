import Logo from "@/_components/Logo";

export default function Dashboard() {
  return (
    <main className="bg-custom-grey-50 p-6">
      <header className="bg-white p-4 flex justify-between items-center rounded-xl">
        <Logo className="w-[146px] h-8" />
      </header>
    </main>
  );
}
