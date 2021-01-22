

const inputs =document.querySelectorAll('.controls input');
 console.log(inputs);

inputs.forEach(input=>input.addEventListener('change',handleUpdate));
inputs.forEach(input=>input.addEventListener('input',handleUpdate));
// inputs.forEach(input=>input.addEventListener('mousemove',handleUpdate));

function handleUpdate(){
    // console.log('update',this.value);
    const suffix= this.dataset.sizing || '';
    console.log(this.name);
    console.log(this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}