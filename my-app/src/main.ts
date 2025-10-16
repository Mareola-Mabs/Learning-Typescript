import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// import './type-annotations.ts'
// import './union-type.ts'
// import './objects.ts'
// import './functions.ts'
// import './type-aliases.ts'
// import './intersection-type.ts'
// import './interface-types.ts'
// import './interface-merging.ts'
// import '../challenges/02.ts'
// import './tuples.ts'
// import './enums.ts'
// import './type-assertions.ts'
// import './type-unknown.ts'
// import './type-never.ts'
import './import.ts'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
