// Кнопки
const btnAll = document.querySelector('.btnAll'); //кнопка посчитать все
const btn10 = document.querySelector('.btn10');
const btn100 = document.querySelector('.btn100');
const btn1000 = document.querySelector('.btn1000');
const btn10000 = document.querySelector('.btn10000');
const btnOpt = document.querySelector('.btnOpt'); //оптимальный
const btnChet = document.querySelector('.btnChet'); // чет-нечет
const btnComb = document.querySelector('.btnComb'); // расческой
const btnMix = document.querySelector('.btnMix'); // перемешиванием
const btnClear = document.querySelector('.btnClear');

// Массивы
const array10 = Array(10).fill(null).map(() => Math.floor(Math.random() * 200) -100);
const array100 =  Array(100).fill(null).map(() => Math.floor(Math.random() * 200) -100);
const array1000 = Array(1000).fill(null).map(() => Math.floor(Math.random() * 2000) -1000);
const array10000 = Array(10000).fill(null).map(() => Math.floor(Math.random() * 20000) -10000);

//ячейки
//оптимальный
const opt10 = document.querySelector('.opt10');
const opt100 = document.querySelector('.opt100');
const opt1000 = document.querySelector('.opt1000');
const opt10000 = document.querySelector('.opt10000');
// чет-нечет
const chet10 = document.querySelector('.chet10');
const chet100 = document.querySelector('.chet100');
const chet1000 = document.querySelector('.chet1000');
const chet10000 = document.querySelector('.chet10000');
//расчестка
const comb10 = document.querySelector('.comb10');
const comb100 = document.querySelector('.comb100');
const comb1000 = document.querySelector('.comb1000');
const comb10000 = document.querySelector('.comb10000');
//перемешивание
const mix10 = document.querySelector('.mix10');
const mix100 = document.querySelector('.mix100');
const mix1000 = document.querySelector('.mix1000');
const mix10000 = document.querySelector('.mix10000');



btnAll.addEventListener('click', () => {
  bubble(array10, opt10);
  bubble(array100, opt100);
  bubble(array1000, opt1000);
  bubble(array10000, opt10000);
  oddEven (array10, chet10);
  oddEven (array100, chet100);
  oddEven (array1000, chet1000);
  oddEven (array10000, chet10000);
  comb(array10, comb10);
  comb(array100, comb100);
  comb(array1000, comb1000);
  comb(array10000, comb10000);
  shaker(array10, mix10);
  shaker(array100, mix100);
  shaker(array1000, mix1000);
  shaker(array10000, mix10000);
}); 
btn10.addEventListener('click', () => {
  bubble(array10, opt10);
  oddEven (array10, chet10);
  comb(array10, comb10);
  shaker(array10, mix10);
});
btn100.addEventListener('click', () => {
  bubble(array100, opt100);
  oddEven (array100, chet100);
  comb(array100, comb100);
  shaker(array100, mix100);
});
btn1000.addEventListener('click', () => {
  bubble(array1000, opt1000);
  oddEven (array1000, chet1000);
  comb(array1000, comb1000);
  shaker(array1000, mix1000);
});
btn10000.addEventListener('click', () => {
  bubble(array10000, opt10000);
  oddEven (array10000, chet10000);
  comb(array10000, comb10000);
  shaker(array10000, mix10000);
});

// кнопка оптимизированного
btnOpt.addEventListener('click', () => {
  bubble(array10, opt10);
  bubble(array100, opt100);
  bubble(array1000, opt1000);
  bubble(array10000, opt10000);
});

// кнопка чет-нечет
btnChet.addEventListener('click', () => {
  oddEven (array10, chet10);
  oddEven (array100, chet100);
  oddEven (array1000, chet1000);
  oddEven (array10000, chet10000);
});

// кнопка расчески
btnComb.addEventListener('click', () => {
  comb(array10, comb10);
  comb(array100, comb100);
  comb(array1000, comb1000);
  comb(array10000, comb10000);
});

// кнопка перемешивания
btnMix.addEventListener('click', () => {
  shaker(array10, mix10);
  shaker(array100, mix100);
  shaker(array1000, mix1000);
  shaker(array10000, mix10000);
});

btnClear.addEventListener('click', () => {
  opt10.textContent ='0';
  opt100.textContent ='0';
  opt1000.textContent ='0';
  opt10000.textContent ='0';
  chet10.textContent ='0';
  chet100.textContent ='0';
  chet1000.textContent ='0';
  chet10000.textContent ='0';
  comb10.textContent ='0';
  comb100.textContent ='0'; 
  comb1000.textContent ='0'; 
  comb10000.textContent ='0'; 
  mix10.textContent ='0';
  mix100.textContent ='0';
  mix1000.textContent ='0';
  mix10000.textContent ='0';
});

// оптимизированный пузырьковый
function bubbleSort (arr) {
  for(let n = 0; n < arr.length; n++) {
    for(let i = 0; i < arr.length - 1 - n; i++) {
      if(arr[i] > arr[i + 1]) {
        const change = arr[i];  
        arr[i] = arr[i + 1];
        arr[i + 1] = change;
      };   
    };
  };  
  return arr;
};
//чет-нечет
function oddEvenSort(array) {
  const arrayLength = array.length; //длина массива
	  for (let i = 0; i < arrayLength; i++) {
		  for (let j = (i % 2) ? 0 : 1; j < arrayLength - 1; j += 2) {
		  	if (array[j] > array[j + 1])
				  [array[j], array[j + 1]] = [array[j + 1], array[j]]; //swap
		   };
    };
   return array;
};
// расческа
function combSort(array) {
  	let interval = Math.floor(array.length / 1.3);
  	  while (interval > 0) {
    	  for(let i = 0; i + interval < array.length; i++) {
	      	if (array[i] > array[i + interval]) {
		        let small = array[i + interval];
		        array[i + interval] = array[i];
				array[i] = small;
			};
		};
		interval = Math.floor(interval / 1.3);
	};
  return array;
};

// перемешивание
function shakerSort(array) {
    let left = 0; // начало массива
    let right = array.length - 1; // конец массива
    while (left < right) {
        for (let i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array [i + 1]] = [array[i + 1], array [i]]
              };
          };
           right--;
            for (let i = right; left < i; i--) {
            if (array[i] < array[i - 1]) {
                [array[i], array [i - 1]] = [array[i - 1], array [i]]
             };
          };
        left++;
      };
   return array;
};
// arr - что сортируем, btn - куда выводим
function bubble (arr, btn) {
  let  time = performance.now();
  bubbleSort(arr);
  time = performance.now() - time;
  time = time.toFixed(3);
  btn.textContent = (`${time}ms`);
};
function oddEven (arr, btn) {
  let  time = performance.now();
  oddEvenSort(arr);
  time = performance.now() - time;
  time = time.toFixed(3);
  btn.textContent = (`${time}ms`);
};
function comb(arr, btn){
  let  time = performance.now();
  combSort(arr);
  time = performance.now() - time;
  time = time.toFixed(3);
  btn.textContent = (`${time}ms`);
};
function shaker(arr, btn) {
  let  time = performance.now();
  shakerSort(arr);
  time = performance.now() - time;
  time = time.toFixed(3);
  btn.textContent = (`${time}ms`);
};


