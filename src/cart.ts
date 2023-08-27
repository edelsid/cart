import Movie from "./domain/movies";

export default class Cart {
    private _items: Movie[] = []; 

    add(item: Movie): void {
        this._items.push(item);
    }

    get items(): Movie[] {
        return [...this._items]
    }

    countSum(): number {
        let sum = 0;
        for (var item of this._items) {
            sum = sum + item.price;
        }
        return sum;
    }

    countDiscSum(): number {
        let sum = 0;
        for (var item of this._items) {
            sum = sum + (item.price - (item.price * (item.discount / 100)));
        }
        return sum;
    }

    del(id: number): void {
        for (var item of this._items) {
            if (item.id === id) {
                const objIndex = this._items.indexOf(item);
                this._items.splice(objIndex, 1);
            }
        }
    }
}