export default function App() {
  const menu = {
    Burgers: [
      { name: "Classic Burger", price: "$6" },
      { name: "Cheese Burger", price: "$7" },
      { name: "Double King Burger", price: "$9" },
    ],
    Sandwiches: [
      { name: "Chicken Sandwich", price: "$5" },
      { name: "Tawook Sandwich", price: "$5" },
      { name: "Crispy Sandwich", price: "$6" },
    ],
    Meals: [
      { name: "Family Meal", price: "$15" },
      { name: "King Meal", price: "$12" },
    ],
    Drinks: [
      { name: "Cola", price: "$2" },
      { name: "Water", price: "$1" },
      { name: "Orange Juice", price: "$3" },
    ],
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #ffffff, #fff8dc)",
      fontFamily: "Arial",
      padding: "20px"
    }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{
          color: "#d4af37",
          fontSize: "64px",
          letterSpacing: "6px",
          margin: 0
        }}>
          الملك
        </h1>

        <p style={{
          color: "#666",
          marginTop: "10px",
          fontSize: "16px"
        }}>
          Luxury Taste • Premium Experience
        </p>
      </div>

      {/* Menu */}
      {Object.entries(menu).map(([category, items]) => (
        <div key={category} style={{
          maxWidth: "650px",
          margin: "0 auto 25px",
          background: "white",
          border: "1px solid #f1e6b8",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.05)"
        }}>
          
          <h2 style={{
            color: "#d4af37",
            borderBottom: "1px solid #f1e6b8",
            paddingBottom: "10px",
            marginBottom: "15px"
          }}>
            {category}
          </h2>

          {items.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom: "1px dashed #eee"
            }}>
              <span>{item.name}</span>
              <b style={{ color: "#d4af37" }}>{item.price}</b>
            </div>
          ))}
        </div>
      ))}

      {/* Footer */}
      <div style={{
        textAlign: "center",
        marginTop: "40px",
        color: "#888",
        fontSize: "14px"
      }}>
        Thank you for visiting الملك
      </div>

    </div>
  );
}