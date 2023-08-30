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
        let prices = [];
        for (var item of this._items) {
            prices.push(item.price);
        }
        const sum = prices.reduce((total, item) => total + item);
        return sum;
    }

    countDiscSum(discount: number): number {
        const discSum = this.countSum() - (this.countSum() * (discount / 100));
        return discSum;
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