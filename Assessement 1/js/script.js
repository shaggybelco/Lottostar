function handleSubmitForm(event) {
  event.preventDefault();
  const topCard = document.querySelector(".top-card");

  topCard.innerHTML = `
        <div class="flex flex-col align-center justify-center col-gap">
            <p class="label primary sub-fs">
                your answer has been submitted
            </p>
            <p class="description fs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in euismod arcu. Vivamus sit amet lacinia purus. Nulla a turpis ipsum.
            </p>
        </div>
        <div class="flex justify-center row-gap w-100 btn-r num-holder">
            <button class="sub-btn bg-btn-sec s-btn-font s-btn-fz s-btn-fw">register & bet now</button>
            <button class="sub-btn bg-primary s-btn-font s-btn-fz s-btn-fw">login & bet now</button>
        </div>
    `;
}

const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmitForm);


const numbers = "100732";

const container = document.getElementById('money-container');

const maxSpaces = 7;

const numSpaces = maxSpaces - numbers.length;

const formattedString = 'R' + ' '.repeat(numSpaces > 0 ? numSpaces : 0) + numbers;

formattedString.split('').forEach((char) => {
    const outer = document.createElement('div');
    outer.classList.add('outer');

    const innerTop = document.createElement('div');
    innerTop.classList.add('inner-top');

    const innerBottom = document.createElement('div');
    innerBottom.classList.add('inner-bottom');

    const numbersElement = document.createElement('div');
    numbersElement.classList.add('numbers');
    numbersElement.textContent = char;

    outer.appendChild(innerTop);
    outer.appendChild(innerBottom);
    outer.appendChild(numbersElement);

    container.appendChild(outer);
});