import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <p>
          not doing anything here for now... will setup auth later... 😀😀😀
        </p>
      </div>
    </main>
  );
}
