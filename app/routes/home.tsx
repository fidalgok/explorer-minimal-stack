import type { Route } from "./+types/home";
import backgroundImage from "./home/explorer-light-mode-bg.png"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Explorer Minimal Stack" },
    { name: "description", content: "Welcome to Explorer Minimal Stack!" },
  ];
}

export default function Home() {
  return <div className="flex flex-col gap-4 items-center h-screen">
    <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${backgroundImage})`
    }}>
    <main className="container mt-12 flex flex-col gap-4 mx-auto max-w-screen-md p-12 bg-background/80 backdrop-blur-sm rounded-lg">
      <div className="relative text-center">
        <h1 className="text-4xl font-bold mb-2">Explorer Minimal Stack</h1>
        <p className="text-lg">Welcome to Explorer Minimal Stack!</p>
      </div>
      <p>This stack is a quick way to get started with a minimal React stack. It includes React Router v7 as a framework, Tailwind CSS, lucide icons, shadcn/ui,and TypeScript.</p>

    </main>
    </div>
  </div>;
}
