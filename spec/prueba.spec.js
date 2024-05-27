// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });
// describe("prueba", () => {
//   it("voy a hacer una prueba", () => {
//     expect(2).toEqual(2); // esta espera que el valor sea igual al valor asignado pero no es para valores de valariables
//     expect(2).toBeDefined(); //esto espara que este ese valor definido
//   });
// });

// prueba con una funcion

// const sumar = (a, b) => a + b;

// describe("la funcion sumar", () => {
//   it("vamos a probar la funcion sumar", () => {
//     expect(sumar).toBeDefined();
//   });
// });

// describe("probar los argumentos de la funcion que si cumpla la funcion", () => {
//   it("probando funcionalidad", () => {
//     expect(sumar(2, 2)).toBe(4);
//     expect(sumar(4, 3)).toBe(7);
//     expect(sumar(8, 8)).toBe(16);
//   });
// });

// ejemplo con objetos y funcional igual con los array

// const person = { nombre: "sanbega" };
// const person1 = { nombre: "sanbega" };

// describe("probando si dos objetos son iguales", () => {
//   it("probando dos obejtos", () => {
//     // expect({ nombre: "sanbega" }).toEqual({ nombre: "sanbega" });
//     expect(person).toEqual(person1);
//   });
// });
