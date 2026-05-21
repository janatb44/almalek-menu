import { useState } from "react";
import "./index.css";

/* IMAGES */

import ananiAsirImg from "./assets/ananiAsir.png";
import mokabelatImg from "./assets/mokabelat.png";
import cocktailsImg from "./assets/cocks.png";
import faroujImg from "./assets/farouj.png";
import freshJuiceImg from "./assets/freshJuice.png";
import hotDrinksImg from "./assets/hotDrinks.png";
import mashawiImg from "./assets/mashawi.png";
import mashroubatKhasaImg from "./assets/mashroubatKhasa.png";
import mixJuiceImg from "./assets/mixJuice.png";
import moratabatImg from "./assets/moratebat.png";
import sandwichImg from "./assets/sandwich.png";
import shawarmaImg from "./assets/shawarma.png";
import sohounImg from "./assets/sohoun.png";
import wajabatImg from "./assets/wajabat.png";

export default function App() {

  const [search, setSearch] = useState("");

  const menu = [

    {
      title: "ساندويشات",
      image: sandwichImg,

      items: [
        {
          name: "كريسبي",
          price: "450,000",
          desc: "صوص كوكتيل - صوص شدر - سلطة - خس - بطاطا",
        },

        {
          name: "تشيز برغر",
          price: "450,000",
          desc: "صوص شدر - بطاطا - مايونيز - خس",
        },

        {
          name: "فاهيتا",
          price: "450,000",
          desc: "صوص أفوكا - خس - ذرة",
        },
      ],
    },

    {
      title: "شاورما",
      image: shawarmaImg,

      items: [
        {
          name: "شاورما دجاج دبل",
          price: "300,000",
        },

        {
          name: "شاورما لحمة كبيرة",
          price: "350,000",
        },

        {
          name: "كيلو شاورما دجاج",
          price: "1,500,000",
        },
      ],
    },

    {
      title: "مشاوي",
      image: mashawiImg,

      items: [
        {
          name: "سندوش كفتة",
          price: "400,000",
        },

        {
          name: "سندوش شقف",
          price: "400,000",
        },

        {
          name: "وجبة مشاوي مشكل",
          price: "600,000",
        },
      ],
    },

    {
      title: "وجبات",
      image: wajabatImg,

      items: [
        {
          name: "وجبة زنجر",
          price: "600,000",
        },

        {
          name: "وجبة شاورما 2x",
          price: "650,000",
        },

        {
          name: "كريسبي دجاج 5 قطع",
          price: "600,000",
        },
      ],
    },

    {
      title: "فروج",
      image: faroujImg,

      items: [
        {
          name: "فروج فحم",
          price: "1,250,000",
        },

        {
          name: "فروج غاز",
          price: "1,150,000",
        },

        {
          name: "نصف فروج غاز",
          price: "700,000",
        },
      ],
    },

    {
      title: "مقبلات",
      image: mokabelatImg,

      items: [
        {
          name: "صحن بطاطا صغير",
          price: "150,000",
        },

        {
          name: "صحن حمص اكسترا",
          price: "250,000",
        },

        {
          name: "صحن ثوم",
          price: "100,000",
        },
      ],
    },

    {
      title: "مرطبات",
      image: moratabatImg,

      items: [
        {
          name: "بيبسي",
          price: "70,000",
        },

        {
          name: "مياه صغيرة",
          price: "50,000",
        },

        {
          name: "لبن عيران",
          price: "70,000",
        },
      ],
    },

    {
      title: "مشروبات ساخنة",
      image: hotDrinksImg,

      items: [
        {
          name: "قهوة",
          price: "100,000",
        },

        {
          name: "كابتشينو",
          price: "150,000",
        },

        {
          name: "نسكافيه",
          price: "150,000",
        },
      ],
    },

    {
      title: "عصائر فرش",
      image: freshJuiceImg,

      items: [
        {
          name: "برتقال",
          price: "200,000",
        },

        {
          name: "مانجو",
          price: "300,000",
        },

        {
          name: "فريز",
          price: "300,000",
        },
      ],
    },

    {
      title: "Mix Juice",
      image: mixJuiceImg,

      items: [
        {
          name: "فريز وتوت",
          price: "300,000",
        },

        {
          name: "موز وحليب",
          price: "200,000",
        },

        {
          name: "كيوي ونعنع",
          price: "300,000",
        },
      ],
    },

    {
      title: "كوكتيلات",
      image: cocktailsImg,

      items: [
        {
          name: "امبراطور",
          price: "450,000",
        },

        {
          name: "افوكا",
          price: "500,000",
        },

        {
          name: "قشطة الملك",
          price: "450,000",
        },
      ],
    },

    {
      title: "مشروبات خاصة",
      image: mashroubatKhasaImg,

      items: [
        {
          name: "اسر كوفي",
          price: "200,000",
        },

        {
          name: "اسر نسكويك",
          price: "200,000",
        },

        {
          name: "اسر شوكليت",
          price: "200,000",
        },
      ],
    },

    {
      title: "صحون",
      image: sohounImg,

      items: [
        {
          name: "قشطة + مكسرات + عسل",
          price: "1,200,000",
        },

        {
          name: "افوكا + قشطة",
          price: "1,100,000",
        },
      ],
    },

    {
      title: "عصير",
      image: ananiAsirImg,

      items: [
        {
          name: "تفاح",
          price: "500,000",
        },

        {
          name: "برتقال",
          price: "450,000",
        },

        {
          name: "كوكتيل",
          price: "700,000",
        },
      ],
    },

  ];

  const filteredMenu = menu.map((section) => ({
    ...section,

    items: section.items.filter(
      (item) =>
        item.name.includes(search) ||
        (item.desc && item.desc.includes(search))
    ),
  }));

  return (

    <div className="page">

      <div className="hero">

        <div className="royal-crown">
          ♛
        </div>

        <h1 className="title">
          الملك
        </h1>

        <p className="subtitle">
          ROYAL TASTE EXPERIENCE
        </p>

        <input
          type="text"
          placeholder="ابحث في القائمة..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {filteredMenu.map((section, index) => (

        section.items.length > 0 && (

          <div key={index} className="menu-section">

            <div className="section-banner">

              <img
                src={section.image}
                alt={section.title}
              />

              <div className="section-overlay"></div>

              <h2 className="section-title">
                {section.title}
              </h2>

            </div>

            <div className="items-container">

              {section.items.map((item, i) => (

                <div key={i} className="item">

                  <div className="text">

                    <div className="name">
                      {item.name}
                    </div>

                    {item.desc && (
                      <div className="desc">
                        {item.desc}
                      </div>
                    )}

                  </div>

                  <div className="price">
                    {item.price}
                  </div>

                </div>

              ))}

            </div>

          </div>

        )

      ))}

      <footer className="footer">
        Crafted for a premium royal dining experience ✨
      </footer>

    </div>

  );

}