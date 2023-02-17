import BackCard from "./components/BackCard";
import FrontCard from "./components/FrontCard";
import SendPage from "./components/SendPage";
import "./App.css";

import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    name: "",
    cardNumber: "",
    month: "",
    years: "",
    cvc: "",
  });
  const [status, setStatus] = useState("typing");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("send");
  };

  return (
    <div className="App">
      <div className="top">
        <FrontCard value={values} />
        <BackCard value={values} />
      </div>
      <div className="bottom">
        {status === "send" && <SendPage setStatus={setStatus} />}
        {status === "typing" && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="input-vertical">
                <label>CARDHOLDER NAME</label> <br />
                <input
                  type="text"
                  placeholder="e.g Jane Appleseed"
                  value={values.name.toUpperCase()}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      name: e.target.value,
                    })
                  }
                  required
                />
                <br />
                <label>CARD NUMBER</label> <br />
                <input
                  type="text"
                  placeholder="e.g. 1234 5678 9123 0000"
                  value={values.cardNumber
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      cardNumber: e.target.value,
                    })
                  }
                  required
                  pattern="^(?=.*\d)[\d ]+$"
                />
                <span>Wrong format, numbers only</span>
              </div>
              <div className="input-horizontal">
                <label className="label-exp">EXP. DATE (MM/YY)</label>
                <input
                  type="text"
                  placeholder="MM"
                  value={values.month}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      month: e.target.value,
                    })
                  }
                  className="input-mm"
                  required
                  pattern="^(?!\s*$).+"
                />
                <input
                  type="text"
                  placeholder="YY"
                  value={values.years}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      years: e.target.value,
                    })
                  }
                  className="input-yy"
                  required
                  pattern="^(?!\s*$).+"
                />
                <span className="span-date">Can't be blank</span>
                <label className="label-cvc">CVC</label>
                <input
                  type="text"
                  placeholder="e.g.123"
                  value={values.cvc}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      cvc: e.target.value,
                    })
                  }
                  className="input-cvc"
                  required
                  pattern="^(?!\s*$).+"
                />
                <span className="span-cvc">Can't be blank</span>
              </div>
              <button>Confirm</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
