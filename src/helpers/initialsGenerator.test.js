import { cadenaAleatoria } from './initialsGenerator';

it('cadenaAleatoria generates random letters of given length', () => {
    const randomString = cadenaAleatoria(5);
    expect(randomString).toHaveLength(5);
    expect(randomString).toMatch(/^[A-Z]+$/);
});