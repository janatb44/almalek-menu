import { useMemo, useState } from "react";
import "./index.css";

export default function App() {
  const [search, setSearch] = useState("");

  const menu = {
    "ساندويش الملك": [
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
        desc: "صوص شدر - بطاطا - مايونيز - خس - بندورة",
      },
    ],

    "شاورما": [
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

    "مشاوي": [
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

    "مقبلات": [
      {
        name: "صحن بطاطا صغير",
        price: "150,000",
      },
      {
        name: "صحن بطاطا وسط",
        price: "200,000",
      },
      {
        name: "صحن حمص اكسترا",
        price: "250,000",
      },
    ],

    "المرطبات": [
      {
        name: "بيبسي",
        price: "70,000",
      },
      {
        name: "مياه صغيرة",
        price: "50,000",
      },
    ],
  };

  const filtered = useMemo(() => {
    if (!search) return menu;

    const result = {};

    Object.entries(menu).forEach(([category, items]) => {
      const filteredItems = items.filter(
        (item) =>
          item.name.includes(search) ||
          (item.desc && item.desc.includes(search))
      );

      if (filteredItems.length) {
        result[category] = filteredItems;
      }
    });

    return result;
  }, [search]);

  return (
    <div className="page">

      <div className="hero">
        <h1 className="title">الملك</h1>

        <p className="subtitle">
          ROYAL TASTE EXPERIENCE
        </p>

        <input
          className="search"
          placeholder="ابحث عن طبقك..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {Object.entries(filtered).map(([category, items]) => (
        <section className="section" key={category}>

          <h2 className="category">
            {category}
          </h2>

          <div className="items">

            {items.map((item, index) => (
              <div className="item" key={index}>

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

        </section>
      ))}

      <footer className="footer">
        Crafted for a premium royal dining experience ✨
      </footer>

    </div>
  );
}