(() => {
    interface Client {
        name: string;
        age: number;
        address: Address;
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
        }
    };

    //console.log(client);
})();