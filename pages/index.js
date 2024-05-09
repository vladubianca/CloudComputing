export const dynamic = 'force-dynamic'
import MainPage from "@/components/MainPage";
import Head from 'next/head';


export default function Home() {
  return (
      <div className="bg-white min-h-screen flex flex-col justify-center items-center">
        <Head>
          <title>Formula 1 Grand Prix Results</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-black text-4xl font-bold mb-8">
          Formula 1 Grand Prix Results
        </h1>
        <MainPage />
        
        
      </div>
    );
}
