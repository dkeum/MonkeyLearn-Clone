import NavBar from "./components/NavBar";
import Carousels from "./components/Carousel";
import img6 from "@/assets/6.png";
import img7 from "@/assets/7.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-screen min-h-[400px] h-1/3  bg-gradient-to-b from-orange-400 to-orange-300 [clip-path:polygon(50%_100%,100%_85%,100%_0,0_0,0_85%)] ">
        {/* we need to put in the underscores and square brackets for the clip to work! */}

        <NavBar className="w-full" />
        <div className="w-full mt-5 md:absolute md:mt-0 md:top-[20%]">
          <div className="w-full md:h-full flex flex-col items-center">
            <h1 className="text-white text-sm sm:text-lg md:text-4xl font-bold text-center my-3 ">
              Test Models with Analytics
            </h1>
            <p className="text-slate-200 text-lg font-medium text-center invisible sm:visible">
              This website makes it easy to visualize data- all in one place{" "}
              <br /> Powered by latest AI Technologies
            </p>
          </div>
        </div>
      </div>


      <div className="-mt-36 w-full h-full flex flex-col gap-y-7 justify-center items-center z-50">
        <Carousels />
        <p className="font-medium text-md text-slate-400">{`Powering the world's most data-driven companies`}</p>
        <div className="flex flex-row gap-2 text-slate-400 text-xl">
          <p>Freshly</p>
          <p>Garmentory</p>
          <div className="underline">
            Golden Proptions <br />
            <div className="text-center ml-4 underline">Market</div>{" "}
          </div>
          <p>
            <b>Moxi</b>Works
          </p>
        </div>
      </div>
      
      <div className=" my-10 w-screen flex flex-col md:flex-row justify-center gap-x-5">
          <Image src={img6} alt="Service example" />
          <div className="flex flex-col gap-y-6 min-w-[200px] w-full md:w-1/3 justify-center md:justify-start">
            <header className="text-3xl font-bold">
              Instant Data Visualizations & Detailed Insights
            </header>
            <p className="static my-5">
              All-in-one text analysis and data visualization studio. Gain instant insights when you run an analysis on your data.
            </p>
            <p>✅Dig deeper into your data with greater granularity.</p>
            <p>✅Create custom charts and visualizations in a blazing fast experience..</p>
            <p>✅Combine and filter by multiple data inputs, including dates and custom fields.</p>
          </div>
      </div>

      <div className="my-10 bg-slate-200 w-screen h-[140%] md:h-3/4 flex flex-col md:flex-row justify-center items-center gap-x-5">
          
          <div className="flex flex-col gap-y-6 w-full md:w-1/3  min-w-[200px] justify-center md:justify-start">
            <header className="text-3xl font-bold">
            Pre-built & Custom Machine Learning Models
            </header>
            <p className="static my-5">
               Use ready-made machine learning models, or build and train your own – code free.
            </p>
            <p>✅Choose from a range of pre-trained classifiers and extractors for a quick start.</p>
            <p>✅Easily build topic classifiers, sentiment analysis, entity extractors, and more.</p>
            <p>✅Import your dataset, define custom tags, and train your models in a simple UI.</p>
          </div>
          <Image src={img6} alt="Service example" />
      </div>

      <div className=" my-10 w-screen flex flex-col md:flex-row justify-center gap-x-5">
          <Image src={img7} alt="Service example" />
          <div className="flex flex-col gap-y-6 min-w-[200px] w-full md:w-1/3 justify-center md:justify-start">
            <header className="text-3xl font-bold">
            Simplify Text Analytics with Business Templates
            </header>
            <p className="static my-5">
            Discover our templates, tailored for different business scenarios and equipped with pre-made text analysis models and dashboards.
            </p>
            <p>✅Simply, upload data. Run the analysis. Get actionable insights instantly visualized.</p>
            <p>✅Choose a template that best matches your data type and the problem you’d like to solve.</p>
            <p>✅Easily connect to your apps and BI tools using native integrations, SQL connection or API.</p>
          </div>
      </div>

    </div>
  );
}
