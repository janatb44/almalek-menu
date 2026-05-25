//import { useState } from "react";
import "./index.css";

/* =========================
   IMAGES
========================= */

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

    /* =========================
       ساندويش الملك
    ========================= */

    {
      title: "ساندويش الملك",
      image: sandwichImg,

      items: [

        {
          name: "كريسبي",
          price: "450,000",
          desc: "صوص كوكتيل - صوص شدر - سلطة - كتشب - بطاطا",
        },

        {
          name: "تشيز طاووق",
          price: "450,000",
          desc: "ثوم -سلطة- بطاطا - جبنة موزاريلا",
        },

        {
          name: "برغر",
          price: "450,000",
          desc: "مايونيز - كتشب - سلطة - بطاطا",
        },

        {
          name: "تشيز برغر",
          price: "450,000",
          desc: "صوص شيدر - بطاطا - مايونيز - خس - بندورة - ذرة- جبنة موزاريلا",
        },

        {
          name: "فرانسيسكو",
          price: "450,000",
          desc: "مايونيز - خس - ذرة",
        },

        {
          name: "فاهيتا",
          price: "450,000",
          desc: "صوص أفوكا - خس - ذرة",
        },

        {
          name: "مكسيكان",
          price: "450,000",
          desc: "صوص شيدر - مايونيز - خس - ذرة",
        },

        {
          name: "سبايسي تشكن",
          price: "450,000",
          desc: "صوص شيدر - مايونيز - خس - ذرة",
        },

        {
          name: "تشكن ساب",
          price: "450,000",
          desc: "ثوم - مايونيز - كبيس - ذرة - خس",
        },

        {
          name: "تشيلي حرة",
          price: "450,000",
          desc: "صوص شيدر - مايونيز - خس - ذرة",
        },

        {
          name: "مقانق",
          price: "450,000",
          desc: "ثوم - كبيس - خس - دبس رمان - بندورة",
        },

        {
          name: "سجق مشوية",
          price: "450,000",
          desc: "ثوم - كبيس - بندورة مشوية",
        },

        {
          name: "لسانات",
          price: "450,000",
          desc: "خبز صاج - ثوم - كبيس - خس - حامض",
        },

        {
          name: "تشكن أفوكا",
          price: "450,000",
          desc: "صوص أفوكا - ذرة - خس",
        },

        {
          name: "تشكن باربكيو",
          price: "450,000",
          desc: "صوص باربكيو - مايونيز - خس - ذرة",
        },

        {
          name: "تشيز سجق",
          price: "450,000",
          desc: "ثوم - مايونيز-بندورة مشوية - موزاريلا",
        },

        {
          name: "تشاينيز",
          price: "450,000",
          desc: "صوص شدر - مايونيز - خس - ذرة",
        },

        

        {
          name: "زنجر موزاريلا",
          price: "450,000",
          desc: "صوص شدر -كاتشب-بندورة- موزاريلا - ذرة - خس - جبنة موزاريلا",
        },

        {
          name: "فيلادلفيا",
          price: "450,000",
          desc: "صوص أفوكا - خس - ذرة",
        },

        {
          name: "ساندويش فروج",
          price: "450,000",
          desc: "ثوم - كبيس - بطاطا - صوص فروج",
        },

        {
          name: "طاووق تركي",
          price: "450,000",
          desc: "صوص باربكيو - صوص شدر - ذرة - خس",
        },

        {
          name: "سودة",
          price: "400,000",
          desc: "ثوم - كبيس - بطاطا - بندورة مشوية - دبس رمان",
        },

        {
          name: "ساندويش بطاطا",
          price: "200,000",
          desc: "ثوم - سلطة - كاتشب",
        },

        {
          name: "كريسبي سمك",
          price: "450,000",
          desc: "مايونيز - كبيس -خس- ذرة - حامض",
        },

        {
          name: "بافلو تشكن",
          price: "450,000",
          desc: "صوص باربكيو - صوص شيدر - خس - ذرة",
        },

        {
          name: "مدخن",
          price: "450,000",
          desc: "صوص باربكيو - صوص شيدر - خس - ذرة",
        },

        {
          name: "اسكالوب",
          price: "450,000",
          desc: "صوص كوكتيل - صوص شيدر - سلطة - كاتشب - بطاطا",
        },

      ],
    },

    /* =========================
       مقبلات
    ========================= */

    {
      title: "مقبلات",
      image: mokabelatImg,

      items: [

        { name: "صحن بطاطا صغير", price: "150,000" },
        { name: "صحن بطاطا وسط", price: "200,000" },
        { name: "صحن بطاطا كبير", price: "300,000" },
        { name: "صحن حمص اكسترا", price: "250,000" },
        { name: "صحن سلطة مايونيز صغير", price: "100,000" },
        { name: "صحن سلطة مايونيز وسط", price: "150,000" },
        { name: "صحن سلطة مايونيز كبير", price: "200,000" },
        { name: "صحن تبولة وسط", price: "250,000" },
        { name: "صحن تبولة كبير", price: "350,000" },
        { name: "صحن سلطة خضار وسط", price: "250,000" },
        { name: "صحن سلطة خضار كبير", price: "350,000" },
        { name: "سيرفيس", price: "200,000" },
        { name: "صحن ثوم", price: "100,000" },

      ],
    },

    /* =========================
       المرطبات
    ========================= */

    {
      title: "المرطبات",
      image: moratabatImg,

      items: [

        { name: "لبن عيران", price: "70,000" },
        { name: "بيبسي بلاستيك", price: "70,000" },
        { name: "بيبسي تنك", price: "80,000" },
        { name: "بيبسي لتر وربع", price: "150,000" },
        { name: "بيبسي ابو جامبو", price: "200,000" },
        { name: "مياه صغيرة", price: "50,000" },
        { name: "مياه كبيرة", price: "100,000" },

      ],
    },

    /* =========================
       مشروبات ساخنة
    ========================= */

    {
      title: "مشروبات ساخنة",
      image: hotDrinksImg,

      items: [

        { name: "قهوة", price: "100,000" },
        { name: "شاي اسود", price: "100,000" },
        { name: "شاي اخضر", price: "100,000" },
        { name: "كاكاو", price: "150,000" },
        { name: "نسكويك", price: "150,000" },
        { name: "كابتشينو", price: "150,000" },
        { name: "نسكافيه", price: "150,000" },
        { name: "كمون وليمون", price: "100,000" },
        { name: "زهورات", price: "100,000" },

      ],
    },

    /* =========================
       مشاوي
    ========================= */

    {
      title: "مشاوي",
      image: mashawiImg,

      items: [

        { name: "سندوش كفتة", price: "400,000" },
        { name: "سندوش شقف", price: "400,000" },
        { name: "سندوش كباب", price: "400,000" },
        { name: "وجبة جوانح", price: "600,000" },
        { name: "طاووق ابيض / احمر", price: "400,000" },
        { name: "وجبة مشاوي 3 سيخ مشكل", price: "600,000" },
        { name: "نصف كيلو مشكل", price: "1,000,000" },
        { name: "كيلو مشكل", price: "1,800,000" },
        { name: "كيلو كباب او شقف صافي", price: "2,000,000" },

      ],
    },

    /* =========================
       فروج
    ========================= */

    {
      title: "فروج",
      image: faroujImg,

      items: [

        { name: "فروج فحم", price: "1,250,000" },
        { name: "فروج غاز", price: "1,150,000" },
        { name: "نصف فروج غاز", price: "700,000" },

      ],
    },

    /* =========================
       الوجبات
    ========================= */

    {
      title: "الوجبات",
      image: wajabatImg,

      items: [

        { name: "كريسبي دجاج 5 قطع", price: "600,000" },
        { name: "كريسبي سمك", price: "600,000" },
        { name: "اسكالوب 2 قطع كبار", price: "600,000" },
        { name: "وجبة زنجر", price: "600,000" },
        { name: "وجبة مشاوي 3 سيخ مشكل", price: "600,000" },
        { name: "وجبة شاورما 2x", price: "600,000" },
        { name: "وجبة شاورما 3x", price: "650,000" },
        { name: "وجبة شاورما لحمه 2x", price: "650,000" },
        { name: "وجبة شاورما MIX", price: "600,000" },

      ],
    },

    /* =========================
       شاورما
    ========================= */

    {
      title: "شاورما",
      image: shawarmaImg,

      items: [

        { name: "شاورما دجاج دبل", price: "300,000" },
        { name: "شاورما لحمه كبيرة", price: "350,000" },
        { name: "نص كيلو شاورما دجاج", price: "900,000" },
        { name: "كيلو شاورما دجاج", price: "1,500,000" },
        { name: "نص كيلو شاورما لحمة", price: "1,000,000" },
        { name: "كيلو شاورما لحمة", price: "1,800,000" },

      ],
    },

    /* =========================
       Mix عصائر
    ========================= */

    {
      title: "Mix عصائر",
      image: mixJuiceImg,

      items: [

        { name: "جزر وتفاح", price: "وسط: 200,000 | كبير: 250,000" },
        { name: "فريز وتوت", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "فريز وحليب", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "فريز وكيوي", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "كيوي ونعنع", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "ليموناضه ونعنع", price: "وسط: 200,000 | كبير: 250,000" },
        { name: "موز وحليب", price: "وسط: 150,000 | كبير: 200,000" },
        { name: "شمام وحليب", price: "وسط: 150,000 | كبير: 200,000" },
        { name: "موز وحليب وافوكا", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "موز وحليب وشوكولا", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "موز وحليب وفريز", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "افوكا وفريز", price: "وسط: 250,000 | كبير: 300,000" },

      ],
    },

    /* =========================
       عصائر فرش
    ========================= */

    {
      title: "عصائر فرش",
      image: freshJuiceImg,

      items: [

        { name: "برتقال", price: "وسط: 150,000 | كبير: 200,000" },
        { name: "جزر", price: "وسط: 150,000 | كبير: 200,000" },
        { name: "تفاح", price: "وسط: 200,000 | كبير: 250,000" },
        { name: "اناناس", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "مانجو", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "توت", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "فريز", price: "وسط: 250,000 | كبير: 300,000" },
        { name: "شمام", price: "وسط: 200,000 | كبير: 250,000" },
        { name: "كيوي", price: "وسط: 250,000 | كبير: 300,000" },

      ],
    },

    /* =========================
       صحون
    ========================= */

    {
      title: "صحون",
      image: sohounImg,

      items: [

        {
          name: "قشطه + مكسرات + عسل",
          price: "وسط: 1,000,000 | كبير: 1,200,000",
        },

        {
          name: "افوكا + قشطه + مكسرات + عسل",
          price: "وسط: 900,000 | كبير: 1,100,000",
        },

        {
          name: "شقف + قشطه + مكسرات + عسل",
          price: "وسط: 900,000 | كبير: 1,100,000",
        },

      ],
    },

    /* =========================
       قناني عصير
    ========================= */

    {
      title: "قناني عصير",
      image: ananiAsirImg,

      items: [

        { name: "تفاح", price: "500,000" },
        { name: "برتقال", price: "450,000" },
        { name: "جزر", price: "500,000" },
        { name: "موز وحليب", price: "600,000" },
        { name: "موز وحليب وافوكا", price: "800,000" },
        { name: "فريز", price: "700,000" },
        { name: "مانجو", price: "800,000" },
        { name: "كوكتيل", price: "700,000" },
        { name: "توت", price: "900,000" },
        { name: "توت وفريز", price: "900,000" },
        { name: "كيوي", price: "800,000" },

      ],
    },

    /* =========================
       كوكتيلات
    ========================= */

    {
      title: "كوكتيلات",
      image: cocktailsImg,

      items: [

        { name: "امبراطور", price: "وسط: 350,000 | كبير: 450,000" },
        { name: "افوكا", price: "وسط: 400,000 | كبير: 500,000" },
        { name: "شقف فواكه", price: "وسط: 350,000 | كبير: 450,000" },
        { name: "خلطة الملك", price: "وسط: 350,000 | كبير: 450,000" },
        { name: "مانجو وقشطة", price: "وسط: 350,000 | كبير: 450,000" },
        { name: "موز+ حليب وقشطة", price: "وسط: 300,000 | كبير: 400,000" },

      ],
    },

    /* =========================
       مشروبات خاصة
    ========================= */

    {
      title: "مشروبات خاصة",
      image: mashroubatKhasaImg,

      items: [

        { name: "ايس لاتيه", price: "200,000" },
        { name: "ايس كابتشينو", price: "200,000" },
        { name: "ايس نسكويك", price: "200,000" },
        { name: "ايس كوفي", price: "200,000" },
        { name: "ايس شوكليت", price: "200,000" },

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

        <div className="royal-crown">♛</div>

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
        دورس -الطريق العام ✨
      </footer>

    </div>
  );
}