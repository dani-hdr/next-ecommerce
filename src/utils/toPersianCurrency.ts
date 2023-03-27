export function toPersianCurrency(num: number): string {
  const numStr = num.toString();
  let result = '';
  let count = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    result = numStr[i] + result;
    count++;
    if (count === 3 && i !== 0) {
      result = ',' + result;
      count = 0;
    }
  }

  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  let persianResult = '';

  for (let i = 0; i < result.length; i++) {
    if (result[i] === ',') {
      persianResult += '،';
    } else {
      persianResult += persianDigits[parseInt(result[i])];
    }
  }

  return persianResult +" " + "تومان";
}