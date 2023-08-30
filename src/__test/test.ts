import Cart from "../cart";
import Movie from "../domain/movies";

test ('empty cart', () => {
    const cart = new Cart;
    expect(cart.items.length).toBe(0);
});

test ('create movie', () => {
    const movie = new Movie (
        999,
        'TestName',
        100,    
        1995,
        'United States',
        'TestPhrase',
        'Action',
        '120 мин. / 2:00');
    expect(movie).toEqual({
        id: 999,
        name: 'TestName',
        price: 100,    
        year: 1995,
        country: 'United States',
        phrase: 'TestPhrase',
        genre: 'Action',
        time: '120 мин. / 2:00'
    })
});

test ('add movie', () => {
    const movie = new Movie (
        999,
        'TestName',
        100,    
        1995,
        'United States',
        'TestPhrase',
        'Action',
        '120 мин. / 2:00');
    const cart = new Cart;
    cart.add(movie);
    expect(cart.items).toContain(movie);
});

test ('normal sum', () => {
    const movie1 = new Movie (
        999,
        'TestName-1',
        250,    
        1995,
        'United States',
        'TestPhrase-1',
        'Action',
        '120 мин. / 2:00');
    const movie2 = new Movie (
        253,
        'TestName-2',
        250,    
        2004,
        'France',
        'TestPhrase-2',
        'Comedy',
        '108 мин. / 1:48');
    const cart = new Cart;
    cart.add(movie1);
    cart.add(movie2);
    const result = cart.countSum();
    expect(result).toBe(500);
});

test ('discount sum', () => {
    const movie1 = new Movie (
        999,
        'TestName-1',
        250,    
        1995,
        'United States',
        'TestPhrase-1',
        'Action',
        '120 мин. / 2:00');
    const movie2 = new Movie (
        253,
        'TestName-2',
        250,    
        2004,
        'France',
        'TestPhrase-2',
        'Comedy',
        '108 мин. / 1:48');
    const cart = new Cart;
    cart.add(movie1);
    cart.add(movie2);
    const result = cart.countDiscSum(10);
    expect(result).toBe(450);
});

test ('del movie', () => {
    const movie = new Movie (
        999,
        'TestName',
        100,    
        1995,
        'United States',
        'TestPhrase',
        'Action',
        '120 мин. / 2:00');
    const cart = new Cart;
    cart.add(movie);
    cart.del(999);
    expect(cart.items.length).toBe(0);
});