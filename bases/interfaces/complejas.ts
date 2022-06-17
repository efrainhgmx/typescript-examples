(() => {
    interface Client {
        name: string;
        age: number;
        address: Address;
        getFullAdress(id: number):string;
    }

    interface Address {    
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: 'XYC90',
            city: 'London'
        },
        getFullAdress(id: number) {
            return this.address.city
        }
    };

    //console.log(client);
})();