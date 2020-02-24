class Laptop {
    // Write your code here
    constructor(brand, capacity, dimension){
        this.brand = brand;
        this.capacity = capacity;
        this.dimension = dimension;
    }
    transfer()
    {
        return `this ${this.brand} in running transfer data !`
    }
    receiver()
    {
        return `this ${this.brand} in running receiver data !`
    }
    read()
    {
        return `this ${this.brand} in running read data !`
    }
    write()
    {
        return `this ${this.brand} in running write data !`
    }
}
    
class Hardisk extends Laptop {
// Write your code here
    constructor(brand, capacity, dimension)
    {
        super(brand, capacity, dimension);
    }
    iddle()
    {
        return `this ${this.brand} is iddle !`;
    }
    running()
    {
        return `${super.read()} and ${super.write()}`;
    }
    checkConnection()
    {
        return `${super.transfer()} and ${super.receiver()}`;
    }

}
    
    