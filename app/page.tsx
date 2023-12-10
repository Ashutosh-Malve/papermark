import Navbar from "@/components/web/navbar";
import Head from "next/head";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Heartfulness ."
        />
        <meta
          property="og:title"
          content="Heartfulness  "
        />
        <meta
          property="og:description"
          content="Heartfulness  "
        />
        <meta
          property="og:image"
          content="https://www.Heartfulness.io/_static/meta-image.png"
        />
        <meta property="og:url" content="https://www.Heartfulness.io" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <nav className=" fixed top-0 w-full z-50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
            </div>
            <div className="flex flex-1 items-stretch justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <span className="text-xl font-bold tracking-tighter text-black">
                  Heartfulness
                  </span>
                </Link>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              <Link
                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                href="/login"
              >
            Login 
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div className="relative isolate overflow-hidden bg-white ">
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>

      
        </div>
      </div>
     </>
  );
}
