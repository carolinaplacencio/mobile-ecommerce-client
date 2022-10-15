export class Product{
    endpoint = "http://localhost:8080/api/products";

    async obtain(){
        const response = await fetch(this.endpoint);
        const result = await response.json();
        return result;
    }
}