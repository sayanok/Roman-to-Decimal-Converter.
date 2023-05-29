import React, { useState } from "react";

const App: React.FC = () => {
  const [roman, setRoman] = useState("");
  const [decimal, setDecimal] = useState<number>();
  const [errorMessage, setErrorMessage] = useState("");

  function onClickHandler() {
    if (inputValidation()) {
      convertAndSetDecimal();
      setErrorMessage("");
    } else {
      setErrorMessage("正しいローマ数字を入力してください");
      setDecimal(0);
    }
  }

  function inputValidation(): boolean {
    if (roman.match(/[^IVXLCDM]/)) {
      // まず、ローマ数字ではあり得ない文字が入力されている場合はじく
      return false;
    } else {
      // ローマ数字になりえる文字列だが、ローマ数字としてありえないものをはじく
      if (roman.match(/(IL)/) || roman.match(/(IC)/) || roman.match(/(ID)/) || roman.match(/(IM)/)) {
        return false;
      } else if (
        roman.match(/(VV)/) ||
        roman.match(/(VX)/) ||
        roman.match(/(VL)/) ||
        roman.match(/(VC)/) ||
        roman.match(/(VD)/) ||
        roman.match(/(VM)/)
      ) {
        return false;
      } else if (roman.match(/(XD)/) || roman.match(/(XM)/)) {
        return false;
      } else if (roman.match(/(LL)/) || roman.match(/(LC)/) || roman.match(/(LD)/) || roman.match(/(LM)/)) {
        return false;
      } else if (roman.match(/(DD)/) || roman.match(/(DM)/)) {
        return false;
      } else {
        // ローマ数字だと思うのでtrueを返す
        return true;
      }
    }
  }

  function convertAndSetDecimal() {
    if (roman === "IV") {
      setDecimal(4);
    } else if (roman === "IX") {
      setDecimal(9);
    } else if (roman === "XL") {
      setDecimal(40);
    } else if (roman === "XC") {
      setDecimal(90);
    } else if (roman === "CD") {
      setDecimal(400);
    } else if (roman === "CM") {
      setDecimal(900);
    } else {
      let dec = 0;
      for (let n = 0; roman.length > n; n++) {
        if (roman.charAt(n) === "I") {
          dec = dec + 1;
        } else if (roman.charAt(n) === "V") {
          dec = dec + 5;
        } else if (roman.charAt(n) === "X") {
          dec = dec + 10;
        } else if (roman.charAt(n) === "L") {
          dec = dec + 50;
        } else if (roman.charAt(n) === "C") {
          dec = dec + 100;
        } else if (roman.charAt(n) === "D") {
          dec = dec + 500;
        } else if (roman.charAt(n) === "M") {
          dec = dec + 1000;
        }
        setDecimal(dec);
      }
    }
  }
  return (
    <>
      <p>
        ローマ数字を大文字で入力してください
        <input onChange={(e) => setRoman(e.target.value)} />
      </p>
      <button onClick={() => onClickHandler()}>10進数に変換する</button>
      <p>{errorMessage}</p>
      <p>{decimal}</p>
    </>
  );
};

export default App;
