import { useState } from "react";
import "./index.css";

/* IMAGES */

import ananiAsirImg from "./assets/ananiAsir.png";
import cocktailsImg from "./assets/cocks.png";
import faroujImg from "./assets/farouj.png";
import freshJuiceImg from "./assets/freshJuice.png";
import hotDrinksImg from "./assets/hotDrinks.png";
import mashawiImg from "./assets/mashawi.png";
import mashroubatKhasaImg from "./assets/mashroubatKhasa.png";
import mixJuiceImg from "./assets/mixJuice.png";
import mokabelatImg from "./assets/mokabelat.png";
import moratabatImg from "./assets/moratebat.png";
import sandwichImg from "./assets/sandwich.png";
import shawarmaImg from "./assets/shawarma.png";
import sohounImg from "./assets/sohoun.png";
import wajabatImg from "./assets/wajabat.png";

export default function App() {

  const [search, setSearch] = useState("");

  const menu = [

    {
      title: "ساندويش الملك",
      image: sandwichImg,

      items: [

        {
          name: "كريسبي",
          price: "450,000",
          desc: "صوص كوكتيل - صوص شدر - سلطة - خس - بطاطا",
        },

        {
          name: "تشيز طاووق",
          price: "450,000",
          desc: "ثوم - بطاطا - جبنة موزاريلا",
        },

        {
          name: "برغر",
          price: "450,000",
          desc: "مايونيز - كتشب - سلطة - بطاطا",
        },

        {
          name: "تشيز برغر",
          price: "450,000",
          desc: "صوص شدر - بطاطا - مايونيز - خس - بندورة - جبنة موزاريلا",
        },

      ],
    },

    {
      title: "مقبلات",
      image: mokabelatImg,

      items: [

        { name: "صحن بطاطا صغير", price: "150,000" },
        { name: "صحن بطاطا وسط", price: "200,000" },
        { name: "صحن بطاطا كبير", price: "300,000" },
        { name: "صحن حمص اكسترا", price: "250,000" },
        { name: "صحن ثوم", price: "100,000" },

      ],
    },

    {
      title: "المرطبات",
      image: moratabatImg,

      items: [

        { name: "لبن عيران", price: "70,000" },
        { name: "بيبسي بلاستيك", price: "70,000" },
        { name: "مياه صغيرة", price: "50,000" },

      ],
    },

    {
      title: "مشروبات ساخنة",
      image: hotDrinksImg,

      items: [

        { name: "قهوة", price: "100,000" },
        { name: "كابتشينو", price: "150,000" },
        { name: "نسكافيه", price: "150,000" },

      ],
    },

    {
      title: "مشاوي",
      image: mashawiImg,

      items: [

        { name: "سندوش كفتة", price: "400,000" },
        { name: "سندوش شقف", price: "400,000" },
        { name: "وجبة مشاوي 3 سيخ مشكل", price: "600,000" },

      ],
    },

    {
      title: "فروج",
      image: faroujImg,

      items: [

        { name: "فروج فحم", price: "1,250,000" },
        { name: "فروج غاز", price: "1,150,000" },
        { name: "نصف فروج غاز", price: "700,000" },

      ],
    },

    {
      title: "الوجبات",
      image: wajabatImg,

      items: [

        { name: "كريسبي دجاج 5 قطع", price: "600,000" },
        { name: "وجبة زنجر", price: "600,000" },
        { name: "وجبة شاورما 2x", price: "650,000" },

      ],
    },

    {
      title: "شاورما",
      image: shawarmaImg,

      items: [

        { name: "شاورما دجاج دبل", price: "300,000" },
        { name: "شاورما لحمه كبيرة", price: "350,000" },
        { name: "كيلو شاورما دجاج", price: "1,500,000" },

      ],
    },

    {
      title: "Mix عصائر",
      image: mixJuiceImg,

      items: [

        {
          name: "جزر وتفاح",
          price: "وسط: 200,000 | كبير: 250,000",
        },

        {
          name: "فريز وتوت",
          price: "وسط: 250,000 | كبير: 300,000",
        },

        {
          name: "موز وحليب",
          price: "وسط: 150,000 | كبير: 200,000",
        },

      ],
    },

    {
      title: "عصائر فرش",
      image: freshJuiceImg,

      items: [

        {
          name: "برتقال",
          price: "وسط: 150,000 | كبير: 200,000",
        },

        {
          name: "مانجو",
          price: "وسط: 250,000 | كبير: 300,000",
        },

        {
          name: "فريز",
          price: "وسط: 250,000 | كبير: 300,000",
        },

      ],
    },

    {
      title: "كوكتيلات",
      image: cocktailsImg,

      items: [

        {
          name: "امبراطور",
          price: "وسط: 350 | كبير: 450",
        },

        {
          name: "افوكا",
          price: "وسط: 400 | كبير: 500",
        },

      ],
    },

    {
      title: "صحون",
      image: sohounImg,

      items: [

        {
          name: "قشطة + مكسرات + عسل",
          price: "وسط: 1,000,000 | كبير: 1,200,000",
        },

      ],
    },

    {
      title: "قناني عصير",
      image: ananiAsirImg,

      items: [

        { name: "تفاح", price: "500,000" },
        { name: "برتقال", price: "450,000" },
        { name: "مانجو", price: "800,000" },

      ],
    },

    {
      title: "مشروبات خاصة",
      image: mashroubatKhasaImg,

      items: [

        { name: "اسر كوفي", price: "200,000" },
        { name: "اسر نسكويك", price: "200,000" },
        { name: "اسر شوكليت", price: "200,000" },

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
          مطعم الملك
        </h1>

        <p className="subtitle">
          الأول دون منازع 
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