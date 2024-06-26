import Image from "next/image";
import { FC } from "react";
import { useSlides } from "@/hooks/useSlides";
import Carousel from "../utils/Carousel";
import { useAppSelector } from "@/hooks/rtk";

const Reviews: FC = () => {
  const slides = useAppSelector((s) => s.slide.slides);
  const curr = useAppSelector((s) => s.slide.curr);

  const { tapNext, tapPrev } = useSlides(slides, curr);

  return (
    <div className="flex flex-col gap-[35px]">
      <h2 id="reviews" className={`font-sans default-h2`}>отзывы</h2>
      <div className="flex flex-col gap-[45px]">
        <div>
          <Carousel curr={curr}>
            {slides.map((s, i) => (
              <div className="min-w-full h-full flex justify-between" key={i}>
                <div className="w-full flex flex-col gap-5 max-w-[327px] pad:max-w-[442px] mac:max-w-[741px] full:max-w-[870px]">
                  <div className="flex flex-col gap-[5px]">
                    <div
                      className={`text-[16px] pad:text-[18px] full:text-[20px]`}
                    >
                      {s.name}
                    </div>
                    <div
                      className={`text-[14px] pad:text-[16px] full:text-[18px] text-my-grey`}
                    >
                      {s.date}
                    </div>
                  </div>
                  <div
                    className={`text-[18px] pad:text-[20px] mac:text-[22px] full:text-[28px]`}
                  >
                    {s.text}
                  </div>
                </div>

                <div className="w-[324px] pad:w-[435px] pad:h-[300px] mac:w-[580px] mac:h-[400px] full:w-[652px] full:h-[450px]">
                  <Image
                    width={324}
                    height={223}
                    src={s.img}
                    alt={s.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={tapPrev}
            className={`${
              curr !== 0 ? "cursor-pointer" : "cursor-auto"
            } outline-none`}
          >
            <svg
              width="15"
              height="23"
              viewBox="0 0 15 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_381_1500)">
                <path
                  d="M1.18934 10.4393C0.603553 11.0251 0.603553 11.9749 1.18934 12.5607L10.7353 22.1066C11.3211 22.6924 12.2708 22.6924 12.8566 22.1066C13.4424 21.5208 13.4424 20.5711 12.8566 19.9853L4.37132 11.5L12.8566 3.01472C13.4424 2.42893 13.4424 1.47919 12.8566 0.893398C12.2708 0.307611 11.3211 0.307611 10.7353 0.893398L1.18934 10.4393ZM3.25 10H2.25V13H3.25V10Z"
                  fill={curr === 0 ? "#909090" : "#261C15"}
                />
              </g>
              <defs>
                <clipPath id="clip0_381_1500">
                  <rect
                    width="14"
                    height="23"
                    fill="white"
                    transform="translate(0.25)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className="flex items-center justify-between gap-[20px]">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
                transition-all w-[83px] mac:w-[165px] h-1 ${
                  curr === i ? "bg-my-green" : "bg-my-slider"
                }
              `}
              />
            ))}
          </div>
          <button
            onClick={tapNext}
            className={`${
              curr !== slides.length - 1 ? "cursor-pointer" : "cursor-auto"
            }`}
          >
            <svg
              width="15"
              height="23"
              viewBox="0 0 15 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_381_1509)">
                <path
                  d="M13.8107 10.4393C14.3964 11.0251 14.3964 11.9749 13.8107 12.5607L4.26472 22.1066C3.67893 22.6924 2.72919 22.6924 2.1434 22.1066C1.55761 21.5208 1.55761 20.5711 2.1434 19.9853L10.6287 11.5L2.1434 3.01472C1.55761 2.42893 1.55761 1.47919 2.1434 0.893398C2.72919 0.307611 3.67893 0.307611 4.26472 0.893398L13.8107 10.4393ZM11.75 10H12.75V13H11.75V10Z"
                  fill={curr === slides.length - 1 ? "#909090" : "#261C15"}
                />
              </g>
              <defs>
                <clipPath id="clip0_381_1509">
                  <rect
                    width="14"
                    height="23"
                    fill="white"
                    transform="translate(0.75)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
