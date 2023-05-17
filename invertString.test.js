import { invertString } from './invertString.js';

describe("Тестирование функции которая принимает строку и возвращает перевёрнутую строку", () => {
	it("should reverse string", () => expect(invertString("Yuriy")).toBe("yiruY"));
});
