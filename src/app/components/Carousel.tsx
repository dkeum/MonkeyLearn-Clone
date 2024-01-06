"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import Autoplay from "embla-carousel-autoplay"

import img1 from "@/assets/1.png"
import img2 from "@/assets/2.png"
import img3 from "@/assets/3.png"
import img4 from "@/assets/4.png"
import img5 from "@/assets/5.png"

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import * as React from "react";
import Image from "next/image";

interface CarouselProps {
  className?: string;
}

const Carousels: React.FC<CarouselProps> = (CarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const imgset = [img1,img2,img3,img4,img5]

  const plugin = React.useRef(
    Autoplay({ play: true, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        className={cn(`w-full max-w-xs`, CarouselProps.className)}
        setApi={setApi}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="text-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 bg-white">
                <Card>
                    <CardHeader>
                            <span className="text-4xl font-semibold text-black mt-4">{index + 1}</span>
                    </CardHeader>
                  <CardContent className="flex aspect-square items-center justify-center px-4">
                    <Image src={imgset[index]} width={300} height={300} alt="Interface/Service example" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default Carousels;
