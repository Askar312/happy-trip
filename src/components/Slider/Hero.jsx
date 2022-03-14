import React from "react";
import "../Slider/Hero.css";
const slides = [
  {
    title: "Кыргызстан",
    subtitle: "Иссык Куль",
    description: "Озеро",
    image: "https://radioiskatel.ru/wp-content/uploads/2018/12/issyk-kul.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Ала-Арча",
    description: "Заповедник",
    image:
      "http://vitalik.kz/wp-content/uploads/2017/06/%D0%92%D0%B8%D0%B4-%D0%BD%D0%B0-%D1%83%D1%89%D0%B5%D0%BB%D1%8C%D0%B5-%D0%90%D0%BB%D0%B0-%D0%90%D1%80%D1%87%D0%B0.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Жети-Огуз",
    description: "Горы",
    image:
      "https://triptokyrgyzstan.com/sites/default/files/media/image/c_genadii_vyenko_1_0.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Сары Челек",
    description: "Озеро",
    image:
      "https://strannik.kg/assets/cache_image/assets/lib/2020/03/20/sarychekek_01_1600x0_9ab.webp",
  },
  {
    title: "Кыргызстан",
    subtitle: "Токтогул",
    description: "Водохранилище",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/%D0%A2%D0%BE%D0%BA%D1%82%D0%BE%D0%B3%D1%83%D0%BB.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Алтын-Арашан",
    description: "Ущелье",
    image:
      "https://too.kg/wp-content/uploads/362273-svetik_2880x1800-1024x640.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Сон-Куль",
    description: "Озеро",
    image: "https://too.kg/wp-content/uploads/Ozero_Son-Kul_7-1024x576.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Кель-Суу",
    description: "Озеро",
    image: "https://too.kg/wp-content/uploads/dsc7006-2-1024x683.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Таш-Рабат",
    description: "Караван-сарай",
    image: "https://too.kg/wp-content/uploads/IMG_8588-1024x683.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Бурана",
    description: "Башня",
    image: "https://too.kg/wp-content/uploads/g4-1024x698.jpg",
  },
  {
    title: "Кыргызстан",
    subtitle: "Ала-Куль",
    description: "Озеро",
    image: "https://too.kg/wp-content/uploads/Ala_Kol-1024x683.jpg",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div className="hero">
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          <div className="slideContentInner"></div>
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  return (
    <div className="slides">
      <button className="prev" onClick={() => dispatch({ type: "PREV" })}>
        ‹
      </button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
};

export default Hero;
