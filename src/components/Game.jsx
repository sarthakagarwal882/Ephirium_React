import "./GameStyles.css"
import GameCard from "./GameCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper";



const Game = () => {

    function moduleSelect() {
        if (window.innerWidth <= 769)
            return [Keyboard, Navigation, Pagination];
        else
            return [Keyboard, Navigation];
    }

    return (
        <section id="game">

            <div className="game-main">
                <h2>Games</h2>

                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        769: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                    }}
                    scrollbar={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={moduleSelect()}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameCard />
                    </SwiperSlide>
                </Swiper>
            </div>
            <hr />
        </section>
    );
};
export default Game;